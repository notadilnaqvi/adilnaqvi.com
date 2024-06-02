import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

async function _updateIndexHtml() {
  const indexHtmlText = await Deno.readTextFile("index.html");

  const updatedIndexHtmlText = indexHtmlText
    .replace(
      "{{ LICHESS_ACTIVITY }}",
      'Played a <a href="#">bullet game</a> (3 hrs ago)',
    )

  await Deno.writeTextFile("index.html", updatedIndexHtmlText);
}

Deno.serve(async (req) => {
  return await serveDir(req, {
    fsRoot: "./static/",
  });
});
