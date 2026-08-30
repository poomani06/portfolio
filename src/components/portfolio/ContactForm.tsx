import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { profile } from "./data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputClass =
    "w-full rounded-lg border border-border bg-card-alt px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _subject: subject || `Portfolio message from ${name}`,
          message,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Failed to send message.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err.message || "Failed to send message. Please try again or contact me directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "success" && (
        <div className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 p-3 text-sm text-primary">
          <CheckCircle2 className="size-5 shrink-0 text-primary" />
          <span>Message sent successfully!</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0 text-destructive" />
          <span>{errorMsg || "Failed to send message. Please try again."}</span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1 block text-xs font-medium text-secondary">
            Name
          </label>
          <input
            id="cf-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1 block text-xs font-medium text-secondary">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@example.com"
            disabled={status === "loading"}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-subject" className="mb-1 block text-xs font-medium text-secondary">
          Subject
        </label>
        <input
          id="cf-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
          placeholder="Internship / Job opportunity"
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1 block text-xs font-medium text-secondary">
          Message
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          placeholder="Write your message..."
          disabled={status === "loading"}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-neon)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending...
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
