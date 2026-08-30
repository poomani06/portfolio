import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

async function prerender() {
  const publicDir = path.resolve(".output/public");
  const serverPath = path.resolve(".output/server/index.mjs");

  if (!fs.existsSync(serverPath)) {
    console.warn("Server build not found at", serverPath);
    return;
  }

  try {
    const serverModule = await import(pathToFileURL(serverPath).href);
    const server = serverModule.default;

    if (!server || typeof server.fetch !== "function") {
      console.warn("Server export does not have fetch handler");
      return;
    }

    const request = new Request("http://localhost/");
    const env = {
      VITE_SUPABASE_URL: process.env.VITE_SUPABASE_URL || "https://kcqpkuzmejhdbjflxhct.supabase.co",
      VITE_SUPABASE_PUBLISHABLE_KEY: process.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_Aa1As_5NSzXZGTjktLUhFg_uJC7z2vP",
    };
    const ctx = {
      waitUntil: () => {},
      passThroughOnException: () => {},
    };
    const response = await server.fetch(request, env, ctx);
    let html = await response.text();

    if (response.status === 200 && html && html.includes("<html")) {
      // Find compiled CSS to inline for guaranteed instant styling
      const assetsDir = path.join(publicDir, "assets");
      let inlineCss = "";
      if (fs.existsSync(assetsDir)) {
        const cssFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".css"));
        for (const cssFile of cssFiles) {
          inlineCss += fs.readFileSync(path.join(assetsDir, cssFile), "utf-8") + "\n";
        }
      }

      // Normalize all root-relative paths to /portfolio/ base for GitHub Pages
      html = html
        .replace(/<head>/i, `<head><base href="/portfolio/" />${inlineCss ? `<style id="inlined-styles">${inlineCss}</style>` : ""}`)
        .replaceAll('"/assets/', '"/portfolio/assets/')
        .replaceAll("'/assets/", "'/portfolio/assets/")
        .replaceAll('"/logos/', '"/portfolio/logos/')
        .replaceAll("'/logos/", "'/portfolio/logos/")
        .replaceAll('"/projects/', '"/portfolio/projects/')
        .replaceAll("'/projects/", "'/portfolio/projects/")
        .replaceAll('"/certificates/', '"/portfolio/certificates/')
        .replaceAll("'/certificates/", "'/portfolio/certificates/")
        .replaceAll('"/favicon.ico"', '"/portfolio/favicon.ico"')
        .replaceAll("'/favicon.ico'", "'/portfolio/favicon.ico'")
        .replaceAll('"/projects-bg.png"', '"/portfolio/projects-bg.png"')
        .replaceAll("'/projects-bg.png'", "'/portfolio/projects-bg.png'")
        .replace(/data-visible="false"/g, 'data-visible="true"')
        .replace(/<script class="\$tsr"[\s\S]*?<\/script>/gi, "")
        .replace(/<script type="module"[\s\S]*?<\/script>/gi, "");

      // Append interactive runtime script for modals, lightbox, mobile nav, and contact form
      const runtimeScript = `
<script>
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  const menuBtn = document.querySelector('button[aria-label="Open navigation menu"]');
  const sidebar = document.querySelector('aside');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
      sidebar.classList.toggle('flex');
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth < 1024 && sidebar) {
          sidebar.classList.add('hidden');
          sidebar.classList.remove('flex');
        }
      }
    });
  });

  // Contact Form Ajax
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const origText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
      }
      const name = form.querySelector('#cf-name')?.value || '';
      const email = form.querySelector('#cf-email')?.value || '';
      const subject = form.querySelector('#cf-subject')?.value || '';
      const message = form.querySelector('#cf-message')?.value || '';

      try {
        const res = await fetch('https://formsubmit.co/ajax/poomanin66005@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name, email, _subject: subject, message })
        });
        if (res.ok) {
          form.innerHTML = '<div class="rounded-lg border border-primary/40 bg-card-alt p-6 text-center text-primary font-medium">✓ Message sent successfully! Thank you for reaching out.</div>';
        } else {
          throw new Error('Failed');
        }
      } catch (err) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
        }
        alert('Could not send message. Please email directly to poomanin66005@gmail.com');
      }
    });
  }
});
</script>
`;

      html = html.replace('</body>', runtimeScript + '</body>');

      fs.writeFileSync(path.join(publicDir, "index.html"), html, "utf-8");
      fs.writeFileSync(path.join(publicDir, "404.html"), html, "utf-8");
      console.log("Successfully prerendered index.html and 404.html with inlined CSS, interactive runtime, and /portfolio/ base for GitHub Pages");
    } else {
      console.warn("SSR returned non-200 response:", response.status, html.slice(0, 200));
    }
  } catch (err) {
    console.error("Prerender script failed:", err);
  }
}

prerender();
