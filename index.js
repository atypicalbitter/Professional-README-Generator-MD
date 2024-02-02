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
{
            type: 'list',
            name: 'license',
            message: 'Please choose the License you used for this project...',
            choices: ['MIT','GPLv2','Apache','Other']
            }, 
            {
            type: 'input',
            name: 'contributing',
            message: 'Please enter details of anyone who contributed to this application...',
            }, 
            {
                type: 'input',
                name: 'tests',
                message: 'Please state here any tests that took place...'
                }, 
            

];

// function to write README file
function writeToFile(fileName, data) {
} fs.writeFileSync(fileName, data);

// function to initialize program
function init() {

}

// function call to initialize program
init();
