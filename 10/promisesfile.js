import { appendFile } from 'fs/promises';

async function appendData() {
  try {
    await appendFile('ayesha.txt', '\nThis line is appended using promises!');
    console.log('Append: done');
  } catch (err) {
    console.error('Error appending file:', err);
  }
}

appendData();

