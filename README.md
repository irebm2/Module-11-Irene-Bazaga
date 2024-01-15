# Module-11-Irene-Bazaga
##  Professional README Generator with Inquirer & Handlebars

**Effortlessly craft stunning README.md files for your GitHub projects with this CLI tool!**

## 🪄 Overview

This project offers a powerful command-line application that utilizes the **Inquirer** package to interactively gather information about your project and subsequently builds a well-formatted README.md file using **Handlebars** templates. Say goodbye to manual README writing and hello to a streamlined, professional approach!

## ⚡️ Usage

1. **Install dependencies:**

```bash
npm install inquirer handlebars
```

2. **Run the generator:**

``` bash
node index.js
```

3. **Answer the prompts:**

Step through the interactive prompts and provide details about your project, including its title, description, installation instructions, usage, license, contribution guidelines, and more.

4. **Preview and save:**

Take a look at the generated README before committing. If satisfied, accept the prompt to save it as `README.md` in your project's root directory.

##  Key Features

* **Dynamic README creation:** Tailored content based on your specific project
* **Seamless user experience:** Interactive prompts guide you through the process
* **Professional formatting:** Clean and polished README.md output
* **Customize with Handlebars:** Modify the template for unique layouts
* **Inquirer interaction:** Smooth and intuitive data collection

##  Files

* **index.js:** The heart of the application, handling user input and generating the README
* **generateMarkdown.js:** Houses the Markdown generation logic using Handlebars templates

## ️ Customization

Want to further personalize your README? No problem! You can:

* **Modify the prompts:** Update the questions asked in `index.js` to gather additional information relevant to your project.
* **Tweak the template:** Adjust the Markdown structure and content in `generateMarkdown.js` to fit your desired style.

##  Contributing

We welcome contributions from the community! Feel free to:

* Report issues you encounter.
* Suggest improvements to the functionality or user experience.
* Submit pull requests with your enhancements.

Together, let's build the most intuitive and versatile README generator for developers!

## Video demonstration:

https://www.loom.com/share/4e8cbf75e26b4676b7ada2fb3c63e5e4?sid=133f91ff-9dd5-4efc-8fd6-27faf14778b5

##  Credits

This project wouldn't exist without the amazing creators of:

* **Inquirer:** [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)
* **Handlebars:** [https://www.npmjs.com/package/handlebars](https://www.npmjs.com/package/handlebars)

**Happy README-ing!**