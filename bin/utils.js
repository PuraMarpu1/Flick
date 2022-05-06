const https = require("https");
const fs = require("fs");
const ytdl = require("ytdl-core");

async function download(url, path) {
  https.get(url, (resp) => {
    const writeStream = fs.createWriteStream(path);

    resp.pipe(writeStream);

    writeStream.on("finish", () => {
      writeStream.close();

      console.log("Done!!!");
    });
  });
}

async function downloadYtube(url, path) {
  const writeStream = fs.createWriteStream(path);

  ytdl(url).pipe(writeStream);

  writeStream.on("finish", () => {
    writeStream.close();

    console.log("Done!!!");
  });
}

module.exports = { download: download, downloadYtube: downloadYtube };
