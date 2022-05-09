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

const itags = {
  "360p": 134,
  "480p": 135,
  "720p": 136,
  "1080p": 137,
};

async function downloadYtube(url, path, quality) {
  const writeStream = fs.createWriteStream(path);

  let itag = itags[quality];

  ytdl(url, {
    filter: (format) => format.container === "mp4",
    quality: itag,
  }).pipe(writeStream);

  writeStream.on("finish", () => {
    writeStream.close();

    console.log("Done!!!");
  });
}

module.exports = { download: download, downloadYtube: downloadYtube };
