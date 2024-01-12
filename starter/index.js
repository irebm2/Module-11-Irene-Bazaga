const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); // Assuming this function is defined in a separate file

// Define questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Enter the project title:",
  },
  // ... other questions for description, installation, usage, etc.
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: [
      "MIT",
      "Apache-2.0",
      "GPL-3.0",
      // ... other license options
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