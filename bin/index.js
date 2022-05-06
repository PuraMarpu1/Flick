#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils");

const usage = "\nUsage: flick <url> <path_to_download_dst>\n";

yargs
  .usage(usage)
  .options("y", {
    alias: "ytube",
    describe: "Attempts to download a video from the given url.",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

const url = yargs.argv._[0];
const path = yargs.argv._[1];

if (url != undefined && path != undefined && yargs.argv.y == undefined) {
  utils.download(url, path);
}
if (url == undefined || path == undefined) {
  console.log(usage);
  console.log(
    `\nEither <url> is undefined or <path_to_download_dst> is undefined.`
  );
}

if (yargs.argv.y == true || yargs.argv.ytube == true) {
  utils.downloadYtube(url, path);
}
