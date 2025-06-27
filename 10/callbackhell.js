import fs from "fs";

fs.writeFile("file1.txt", "Content of file 1", (err) => {
    if (err) {
        console.error("Error writing file1:", err);
        return;
    }
    console.log("file1 written");

    fs.readFile("file1.txt", "utf-8", (err, data1) => {
        if (err) {
            console.error("Error reading file1:", err);
            return;
        }
        console.log("file1 content:", data1);

        fs.writeFile("file2.txt", "Content of file 2", (err) => {
            if (err) {
                console.error("Error writing file2:", err);
                return;
            }
            console.log("file2 written");

            fs.readFile("file2.txt", "utf-8", (err, data2) => {
                if (err) {
                    console.error("Error reading file2:", err);
                    return;
                }
                console.log("file2 content:", data2);

                fs.writeFile("file3.txt", "Content of file 3", (err) => {
                    if (err) {
                        console.error("Error writing file3:", err);
                        return;
                    }
                    console.log("file3 written");

                    fs.readFile("file3.txt", "utf-8", (err, data3) => {
                        if (err) {
                            console.error("Error reading file3:", err);
                            return;
                        }
                        console.log("file3 content:", data3);
                        console.log("Callback hell complete! 🔥");
                    });
                });
            });
        });
    });
});

console.log("ending");
