import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

// Create the initial index.html
// await generateIndexHtml();

// Serve the static files
Deno.serve(async (req) => {
  return await serveDir(req, {
    fsRoot: Deno.cwd() + "/static/",
  });
});

// Generate index.html every minute with latest data
// Deno.cron("Update last updated", "* */1 * * *", async () => {
//   await generateIndexHtml();
// });

async function _generateIndexHtml() {
  const currentTime = new Date().toLocaleString();
  console.log("Reading .template.html now...");
  const htmlTemplate = await Deno.readTextFile(
    Deno.cwd() + "/static/.template.html",
  );
  console.log("Successfully read from .template.html...");

  const indexHtml = htmlTemplate.replace("{{ LAST_UPDATED }}", currentTime);

  console.log("Writing to index.html now...");
  await Deno.writeTextFile(Deno.cwd() + "/static/index.html", indexHtml);
}
