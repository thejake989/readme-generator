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

// Creates inquirer questions
function getInfo() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of your project?",
          name: "name",
        },
        {
          type: "input",
          message: "Enter a description for your project.",
          name: "description",
        },
        {
          type: "editor",
          message: "Enter installation instructions.",
          name: "install",
        },
        {
          type: "input",
          message: "Enter usage information.",
          name: "usage",
        },
        {
          type: "input",
          message: "How can others contribute?",
          name: "contribute",
        },
        {
          type: "input",
          message: "How can this code be tested?",
          name: "test",
        },
        {
          type: "list",
          message: "What licence is relevant to this project?",
          name: "licence",
          choices: ["MIT", "Apache", "GPLv3"],
        },
        {
          type: "input",
          message: "what is your Github username?",
          name: "username",
        },
        {
          type: "input",
          message: "what is your email address?",
          name: "email",
        },
        {
          type: "input",
          message:
            "Enter your image url (https://github.com/your-repository/...)",
          name: "image",
        },
      ])