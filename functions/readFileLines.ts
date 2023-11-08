const fs = require('fs');

export const readFileLines = (filename: string): string[] =>
  fs.readFileSync(filename).toString('UTF8').split('\n');
