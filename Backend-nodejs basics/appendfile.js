import fs from 'fs';

fs.appendFile("ayesha.txt", "\nThis line is appended!", (err) => {
    if (err) {
        console.error("Error appending file:", err);
        return;
    }
    console.log("Append: done");
});
