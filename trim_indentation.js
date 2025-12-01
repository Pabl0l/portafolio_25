
import fs from 'fs';

const filePath = 'c:\\Users\\jpom1\\OneDrive\\Escritorio\\Programación\\Portafolio_25\\src\\components\\AsciiEarth\\AsciiEarth.astro';
const content = fs.readFileSync(filePath, 'utf8');

// We want to replace the content inside the backticks.
const newContent = content.replace(/`([^`]*)`/g, (match, frameContent) => {
    const lines = frameContent.split('\n');

    // Calculate min indentation (ignoring empty lines)
    let minIndent = Infinity;
    lines.forEach(line => {
        if (line.trim().length > 0) {
            const indent = line.match(/^ */)[0].length;
            if (indent < minIndent) minIndent = indent;
        }
    });

    if (minIndent === Infinity) minIndent = 0;

    // Remove minIndent from each line
    const newLines = lines.map(line => {
        if (line.length >= minIndent) {
            return line.substring(minIndent);
        }
        return line;
    });

    return `\`${newLines.join('\n')}\``;
});

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully trimmed leading whitespace from all frames.');
