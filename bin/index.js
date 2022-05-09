#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils");
const inquirer = require("inquirer");

//https://www.youtube.com/watch?v=CNVcY7os7Io

const usage = "\nUsage: flick <url> <path_to_download_dst>\n";

yargs
  .usage(usage)
  .options("y", {
    alias: "ytube",
    describe: "Attempts to download a youtube video from the given url.",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

const url = yargs.argv._[0];
const path = yargs.argv._[1];
let quality = "";

if (url == undefined) {
  console.log(usage);
  console.log(
    `\nEither <url> is undefined or <path_to_download_dst> is undefined.`
  );
} else {
  if (yargs.argv.y == true || yargs.argv.ytube == true) {
    inquirer
      .prompt([
        {
          type: "list",
          name: "quality",
          message: "Choose the video quality: ",
          choices: ["360p", "480p", "720p", "1080p"],
        },
      ])
      .then((ans) => {
        quality = ans.quality;
        utils.downloadYtube(url, path, quality);
      });
  } else {
    utils.download(url, path);
  }
}
