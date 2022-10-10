const util = require('util');
const AWS = require('aws-sdk')
const child = require('child_process');
const exec = util.promisify(child.exec);
const fs = require('fs');
const path = require("path");
const replace = require('replace-in-file');
const {match} = require("assert");
const escapeStringRegexp = require("escape-string-regexp-node");
const fileSystem = require('fs').promises;

main();

async function main() {
    await downloadDocumentationFiles();
    await iterateFiles(__dirname + '/pages/en', '.md');

}

async function downloadDocumentationFiles() {
    console.log('Starting the download..');

    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    })


    await exec('aws s3 sync s3://whitecloud-s3-terraform-docs/ ./src/pages/en/');
    console.log('Download finished!');

}

async function iterateFiles(startPath, filter) {

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    const files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        const filename = path.join(startPath, files[i]);
        const stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            await iterateFiles(filename, filter); //recurse
        } else if (filename.endsWith(filter)) {
            console.log('-- found: ', filename);
            await modifyFile(filename);
        }
    }

}

async function modifyFile(filename) {
    await replaceInFile(filename, [/.+BEGIN_TF_DOCS.+/g, /.+END_TF_DOCS.+/g], '');
    await replaceInFile(filename, /^(?:[\t ]*(?:\r?\n|\r))+/, '');
    await updatePathsInFile(filename);
}

async function replaceInFile(filename, from, to) {
    const options = {
        files: filename,
        from: from,
        to: to,
    };

    await replace.replaceInFile(options);
}

async function updatePathsInFile(filename) {
    let file = await fileSystem.readFile(filename, 'utf8');
    const matches = file.matchAll(/\[.+](\(#module.+)\s*.*Source:\s*(.*)/g);

    for (let match of matches) {
        let escapedRegexString = escapeStringRegexp(match[1].slice(1, -1))
        let escapedRegex = new RegExp(escapedRegexString)
        await replaceInFile(filename, escapedRegex, match[2] + "/README")
    }
}
