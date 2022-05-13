const inquirer = require("inquirer");
const fs = require("fs");
let path = "./README.md";
let $template = "";

try {
  // Checks if README.md exists
  if (fs.existsSync(path)) {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Overwrite existing README.md?",
          name: "overwrite",
          choices: ["yes", "no", "cancel"],
        },
      ])
      .then(function (response) {
        if (response.overwrite === "no") {
          path = "./README-1.md";
          getInfo();
        } else if (response.overwrite === "yes") {
          getInfo();
        }
      });
  } else {
    getInfo();
  }
} catch (err) {
  console.error(err);
}
