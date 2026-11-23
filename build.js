const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of ["index.html", "styles.css", "guests.js"]) {
    fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

fs.cpSync(path.join(root, "public", "images"), path.join(dist, "images"), { recursive: true });
