import fs from 'fs';
import { dataRappeurs } from '../src/data.js';

const outputPath = './public/rappers.json';

const jsonContent = JSON.stringify(dataRappeurs, null, 2);

fs.writeFileSync(outputPath, jsonContent);

console.log(`Successfully converted data.js to ${outputPath}`);
console.log(`Total rappers: ${dataRappeurs.length}`);
