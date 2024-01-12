function generateMarkdown(answers) {
  const readmeContent = `# ${answers.projectTitle}

**Description**

${answers.description}

**Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

// ... other sections based on user input

**License**

This project is licensed under the ${answers.license} License.

**Questions**

For any questions, please contact ${answers.githubUsername} on GitHub or email ${answers.email}.`;

  return readmeContent;
}

module.exports = generateMarkdown;