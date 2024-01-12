const handlebars = require("handlebars");

const template = handlebars.compile(`
# {{projectTitle}}

{{description}}

{{#if toc}}
**Table of Contents**
{{#each toc}}
- [{{this}}](#{{this}})
{{/each}}
{{/if}}

{{#if installation}}
**Installation**

{{installation}}
{{/if}}

{{#if usage}}
**Usage**

{{usage}}
{{/if}}

{{#if contributing}}
**Contributing**
{{contributing}}
{{/if}}

{{#if tests}}
**Tests**
{{tests}}
{{/if}}

**License**

This project is licensed under the {{license}} License.
{{#if licenseBadgeUrl}}
[![License Badge]({{licenseBadgeUrl}})]{{/if}}

**Questions**

{{#if githubUsername}}For any questions, please contact [{{githubUsername}}](https://github.com/{{githubUsername}}) on GitHub.{{/if}}
{{#if email}}For any questions, email {{email}}.{{/if}}

Made with ❤️ and JS by {{name}}
`);

function generateMarkdown(answers) {
  const tocOptions = ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"];
  const toc = answers.toc || tocOptions; // Use user-selected TOC or default

  const licenseBadgeUrl = getLicenseBadgeUrl(answers.license); // Fetch badge URL

  return template({
    projectTitle: answers.projectTitle,
    description: answers.description,
    toc,
    installation: answers.installation,
    usage: answers.usage,
    // ... other sections
    license: answers.license,
    licenseBadgeUrl,
    githubUsername: answers.githubUsername,
    email: answers.email,
    name: answers.name,
  });
}

function getLicenseBadgeUrl(license) {
  // Map license to appropriate badge URL (e.g., from a lookup table)
}

module.exports = generateMarkdown;