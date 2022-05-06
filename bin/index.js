#! /usr/bin/env node
const yargs = require("yargs");
const download = require("./utils");

const usage =
  "\nUsage: flick <url> <path_to_download_dst>\nThe path for download is relative.";

yargs.usage(usage).help(true).argv;

const url = yargs.argv._[0];
const path = yargs.argv._[1];

if (path != undefined && path != undefined) {
  download(url, path);
}
