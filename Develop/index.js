
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "Enter your projects title:",
    },
    {
        name: "description",
        message: "Discribe your project:",
    },
    {
        name: "installation",
        message: "Describe your installation instructions:"
    },
    {
        name: "usage",
        message: "Enter usage directions:"
    },
    {
        type: "list",
        name: "license",
        message: "Select license type:",
        choices: ["Apache license 2.0","GNU General Public License v2.0","MIT License","The Unlicense"]
    },
    {
        name: "contributors",
        message: "List contibutors:"
    },
    {
        name: "test",
        message: "Describe how to test your project:"
    },
    {
        name: "github",
        message: "Enter your github username:"
    },
    {
        name: "email",
        message: "Enter your email:"
    },
    {
        name: "fileName",
        message: "What is the name of this file"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) => err ? console.log(err) : console.log(`File Created`))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        writeToFile((answers.fileName),(generateMarkdown(answers)));
    });
}

// Function call to initialize app
init();
