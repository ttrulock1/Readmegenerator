// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
description:${data.description}
version:${data.version}
installation: ${data.installation}
license: ${data.license}
https://github.com/${data.questions}
`;
}

module.exports = generateMarkdown;
