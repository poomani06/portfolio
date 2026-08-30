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
      // Normalize root-relative paths to relative paths for GitHub Pages (/portfolio/ subpath)
      html = html
        .replace(/<head>/i, '<head><base href="./" />')
        .replace(/href="\/assets\//g, 'href="./assets/')
        .replace(/href="\/logos\//g, 'href="./logos/')
        .replace(/href="\/projects\//g, 'href="./projects/')
        .replace(/href="\/certificates\//g, 'href="./certificates/')
        .replace(/href="\/profile-photo\./g, 'href="./profile-photo.')
        .replace(/href="\/favicon\.ico"/g, 'href="./favicon.ico"')
        .replace(/src="\/assets\//g, 'src="./assets/')
        .replace(/src="\/logos\//g, 'src="./logos/')
        .replace(/src="\/projects\//g, 'src="./projects/')
        .replace(/src="\/certificates\//g, 'src="./certificates/')
        .replace(/src="\/profile-photo\./g, 'src="./profile-photo.')
        .replace(/data-visible="false"/g, 'data-visible="true"')
        .replace(/url\('\/projects-bg\.png'\)/g, "url('./projects-bg.png')")
        .replace(/url\('\/projects\//g, "url('./projects/")
        .replace(/url\("\/projects\//g, 'url("./projects/');

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
