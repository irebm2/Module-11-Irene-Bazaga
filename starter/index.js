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
    name: "email",
    message: "Enter your email address:",
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
  
];

async function init() {
    try {
      const answers = await inquirer.prompt(questions);
  
      // Preview feature
      const preview = await inquirer.prompt({
        type: "confirm",
        name: "preview",
        message: "Preview README before saving?",
      });
      if (preview) {
        console.log(generateMarkdown(answers));
      }
  
      // Generate and save README
      const readmeContent = generateMarkdown(answers);
      await fs.promises.writeFile("README.md", readmeContent);
      console.log("README file generated successfully!");
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  init();