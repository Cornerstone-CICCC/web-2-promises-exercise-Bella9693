const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE

let data1;
let data2;
let data3;
let data4;

fs.readFile("./firstname.txt", "utf-8")
  .then((firstFile) => {
    data1 = firstFile;
    return fs.readFile("./lastname.txt", "utf-8");
  })
  .then((secondFile) => {
    data2 = secondFile;
    return fs.readFile("./age.txt", "utf-8");
  })
  .then((thirdFile) => {
    data3 = thirdFile;
    return fs.readFile("./hobbies.txt", "utf-8");
  })
  .then((fourthFile) => {
    data4 = fourthFile;
    const hobbies = JSON.parse(data4);
    console.log(
      `${data1} ${data2} is ${data3} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
    );
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readFiles() {
  try {
    const data1 = await fs.readFile("./firstname.txt", "utf8");
    const data2 = await fs.readFile("./lastname.txt", "utf8");
    const data3 = await fs.readFile("./age.txt", "utf8");
    const data4 = await fs.readFile("./hobbies.txt", "utf8");
    const hobbies = JSON.parse(data4);

    console.log(
      `${data1} ${data2} is ${data3} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
    );
  } catch (err) {
    console.error(err);
  }
}

readFiles();
