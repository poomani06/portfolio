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
      // Normalize all root-relative paths to relative paths for GitHub Pages (/portfolio/ subpath)
      html = html
        .replace(/<head>/i, '<head><base href="./" />')
        .replaceAll('"/assets/', '"./assets/')
        .replaceAll("'/assets/", "'./assets/")
        .replaceAll('"/logos/', '"./logos/')
        .replaceAll("'/logos/", "'./logos/")
        .replaceAll('"/projects/', '"./projects/')
        .replaceAll("'/projects/", "'./projects/")
        .replaceAll('"/certificates/', '"./certificates/')
        .replaceAll("'/certificates/", "'./certificates/")
        .replaceAll('"/profile-photo.', '"./profile-photo.')
        .replaceAll("'/profile-photo.", "'./profile-photo.")
        .replaceAll('"/favicon.ico"', '"./favicon.ico"')
        .replaceAll("'/favicon.ico'", "'./favicon.ico'")
        .replaceAll('"/projects-bg.png"', '"./projects-bg.png"')
        .replaceAll("'/projects-bg.png'", "'./projects-bg.png'")
        .replace(/data-visible="false"/g, 'data-visible="true"');

      fs.writeFileSync(path.join(publicDir, "index.html"), html, "utf-8");
      fs.writeFileSync(path.join(publicDir, "404.html"), html, "utf-8");
      console.log("Successfully prerendered index.html and 404.html with relative asset paths for GitHub Pages");
    } else {
      console.warn("SSR returned non-200 response:", response.status, html.slice(0, 200));
    }
  } catch (err) {
    console.error("Prerender script failed:", err);
  }
}

prerender();
