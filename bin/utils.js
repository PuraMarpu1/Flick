const https = require("https");
const fs = require("fs");

async function download(url, path) {
  https.get(url, (resp) => {
    const writeStream = fs.createWriteStream(path);

    resp.pipe(writeStream);

    writeStream.on("finish", () => {
      writeStream.close();

      console.log("Done!!");
    });
  });
}

module.exports = download;
