// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }

 if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      }
  if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        }
  if (license === "BSD 3") {
     return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
          }
  return "";
}


//a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## table of contents:
* [description](#description)
* [license ](#license)
* [installation](#installation)
* [usage](#usage)
* [contributing](#contributing)\
* [test](#testing)
* [questions](#questions)

## description:
${data.description}
## license:
${data.license}
## installation: 
${data.installation}
## usage: 
${data.usage}
## contributing: 
${data.contributing}
## test: 
${data.test}
## testing: 
${data.testing}
## questions: 
${data.questions}

https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
