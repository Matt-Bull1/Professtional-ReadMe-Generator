// TODO: Create a function that returns a license badge based on which license is passed in
const licenseArr = ["Apache license 2.0","GNU General Public License v2.0","MIT License","The Unlicense"]
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===licenseArr[0]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else if (license === licenseArr[1]){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (license === licenseArr[2]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === licenseArr[3]){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licenseArr[1]){
    return `[${licenseArr[1]}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (license === licenseArr[2]){
    return `[${licenseArr[2]}](https://opensource.org/licenses/MIT)`
  } else if (license === licenseArr[3]){
    return `[${licenseArr[3]}](http://unlicense.org/)`
  } else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArr[0]){
    return `Read more about ${licenseArr[0]} here:`
  } else if (license === licenseArr[1]){
    return `Read more about ${licenseArr[1]} here:`
  } else if (license === licenseArr[2]){
    return `Read more about ${licenseArr[2]} here:`
  } else if (license === licenseArr[3]){
    return `Read more about ${licenseArr[3]} here:`
  } else{
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.contributing}
  ## Tests
  ${data.testing}
  ## Questions?
  ### Reach me here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}
`;
}

module.exports = generateMarkdown;
