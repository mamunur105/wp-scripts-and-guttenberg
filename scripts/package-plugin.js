import fs from 'fs-extra';
import archiver from 'archiver';
import path from 'path';

const pluginSlug = 'guten-add-to-cart';
const buildDir = `./dist/${pluginSlug}`;
const zipPath = `./dist/${pluginSlug}.zip`;

const includes = [
    'blocks',
    'dist',
    'guten-add-to-cart.php'
];

(async () => {
    await fs.ensureDir(buildDir);

    for (const item of includes) {
        await fs.copy(item, `${buildDir}/${item}`);
    }

    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => console.log(`✅ ZIP created: ${zipPath}`));
    archive.on('error', err => { throw err; });

    archive.pipe(output);
    archive.directory(buildDir, pluginSlug);
    archive.finalize();
})();