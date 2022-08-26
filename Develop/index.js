// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];


//inquirer to generate questions.
inquire
.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
      //this is used to check that the user input something
      validate: (value) => {if(value){return true} else {return 'Please input a value to continue'}}
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communcation?',
      name: 'communication',
    },
  ])
.then((response) => {
    // var responses = JSON.stringify(response);
    fs.writeFile('README.md', JSON.stringify(response), (err) =>
  err ? console.error(err) : console.log('Success!')
    )
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
