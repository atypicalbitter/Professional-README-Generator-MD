const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
type: 'input',
name: 'title',
message: 'Please enter the title of your project...',
    }, 

    {
    type: 'input',
    name: 'installation',
    message: 'Please enter instructions on how to install...',
    }, 

    {
        type: 'input',
        name: 'usage',
        message: 'Please enter details on how to correctly use your application...',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter details on how to correctly use your application...',
            }, 

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
