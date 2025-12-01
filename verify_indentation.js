
import fs from 'fs';

const filePath = 'c:\\Users\\jpom1\\OneDrive\\Escritorio\\Programación\\Portafolio_25\\src\\components\\AsciiEarth\\AsciiEarth.astro';
const content = fs.readFileSync(filePath, 'utf8');

const frameRegex = /`([^`]*)`/g;
let match;
let frameIndex = 0;
let allGood = true;

console.log('Verifying indentation...');

while ((match = frameRegex.exec(content)) !== null) {
    const frameContent = match[1];
    const lines = frameContent.split('\n');

    let minIndent = Infinity;
    lines.forEach(line => {
        if (line.trim().length > 0) {
            const indent = line.match(/^ */)[0].length;
            if (indent < minIndent) minIndent = indent;
        }
    });

    if (minIndent === Infinity) minIndent = 0;

    if (minIndent > 0) {
        console.log(`Frame ${frameIndex} still has indentation: ${minIndent}`);
        allGood = false;
    }
    frameIndex++;
}

if (allGood) {
    console.log('All frames have 0 indentation!');
} else {
    console.log('Some frames still have indentation.');
}
