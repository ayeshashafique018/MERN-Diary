import path from 'path';

// Example paths
const directory = '/home/user/docs';
const fileName = 'file.txt';

// Join directory and file name safely
const fullPath = path.join(directory, fileName);
console.log(fullPath); // On Linux/macOS: /home/user/docs/file.txt
                       // On Windows: \home\user\docs\file.txt

// Get file extension
console.log(path.extname(fullPath)); // .txt

// Get file name from path
console.log(path.basename(fullPath)); // file.txt

// Get directory name from path
console.log(path.dirname(fullPath)); // /home/user/docs

// Resolve to absolute path
const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log(absolutePath); // absolute path from current working directory
