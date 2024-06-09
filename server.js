import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

// Create the initial index.html
await generateIndexHtml();

// Serve all static files
Deno.serve(async (req) => {
  return await serveDir(req, {
    fsRoot: Deno.cwd() + "/static/",
  });
});

// Regenerate index.html every minute
Deno.cron("Update last updated", "*/1 * * * *", async () => {
  await generateIndexHtml();
});

async function generateIndexHtml() {
  const currentTime = new Date().toLocaleString();
  console.log("[debug] Reading", Deno.cwd() + "/static/.template.html", "now...");
  const htmlTemplate = await Deno.readTextFile(
    Deno.cwd() + "/static/.template.html",
  );
  console.log("[debug] Successfully read from", Deno.cwd() + "/static/.template.html");

  const indexHtml = htmlTemplate.replace("{{ LAST_UPDATED }}", currentTime);

  console.log("[debug] Writing to", Deno.cwd() + "/static/index.html", "now...");
  await Deno.writeTextFile(Deno.cwd() + "/static/index.html", indexHtml);
  console.log("[debug] Successfully read from", Deno.cwd() + "/static/index.html");
}
