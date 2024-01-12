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

**Installation**

${answers.installation}

**Usage**

${answers.usage}

**Contributing**

${answers.contributing}

**Tests**

${answers.tests}

**License**

This project is licensed under the ${answers.license} License.

**Questions**

For any questions, please contact ${answers.githubUsername} on GitHub or email ${answers.email}.

Made with ❤️ and JS by ${answers.name}`;


  return readmeContent;
}

module.exports = generateMarkdown;