import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

async function updateIndexHtml() {
  const indexHtmlText = await Deno.readTextFile("index.html");

  const currentTime = new Date().toLocaleString();
  
  const updatedIndexHtmlText = indexHtmlText.replace(
    "{{ LAST_UPDATED }}",
    currentTime,
  );

  await Deno.writeTextFile("index.html", updatedIndexHtmlText);
}

Deno.serve(async (req) => {
  return await serveDir(req, {
    fsRoot: "./static/",
  });
});

Deno.cron("Update last updated", "*/10 * * * *", async () => {
  await updateIndexHtml();
});
