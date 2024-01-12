const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); 
// Define questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter your name:",
      },
  {
    type: "input",
    name: "projectTitle",
    message: "Enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a brief description of the project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide detailed installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Explain how to use the project:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide guidelines for contributing to the project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Describe the testing process:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: [
        "MIT",
        "Apache-2.0",
        "GPL-3.0",
        "LGPL-3.0",
        "Mozilla Public License 2.0",
        "BSD-3-Clause",
        "Unlicense",
    ],
  },
  // ... questions for GitHub username and email
];

function
 
init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    fs.writeFile("README.md", readmeContent, (err) => {
      if (err) {
        console.error("Error writing README file:", err);
      } else {
        console.log("README file generated successfully!");
      }
    });
  });
}

init();