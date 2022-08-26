// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
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
      validate: (value) => {if(value){return true} else {return 'Please input a value to continue'}},
    },
    {
      type: 'input',
      message: 'How is your application installed?',
      name: 'installation',
      validate: (value) => {if(value){return true} else {return 'Please input a value to continue'}},
    },
    {
        //list of license choices
        type: 'list',
        message: 'What license did you use?',
        name: 'license',
        choices: ['Apache', 'Boost', 'Eclipse', 'MIT', 'zLib', 'N/A'],
        validate: (value) => {if(value){return true} else {return 'Please input a value to continue'}},
      },
    {
      type: 'input',
      message: 'Please provide an application description.',
      name: 'description',
      validate: (value) => {if(value){return true} else {return 'Please input a value to continue'}},
    },
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'usage',
      validate: (value) => {if(value){return true} else {return 'Please input a value to continue'}},
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contribution',
      validate: (value) => {if(value){return true} else {return 'Please input a value to continue'}},
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'instructions',
        validate: (value) => {if(value){return true} else {return 'Please input a value to continue'}},
    },
    {
        type: 'input',
        message: 'Github username: ',
        name: 'git',
        validate: (value) => {if(value){return true} else {return 'Please input a value to continue'}},
    },
  ])
.then(({
    title,
    installation,
    license,
    description,
    usage,
    contribution,
    instructions,
    git
}) => {
    const template = `### ${title} ###
    
    *** Installation ***
    ${installation}
    
    *** License ***
    ${license}
    
    *** Description ***
    ${description}
    
    *** Usage ***
    ${usage}
    
    *** Contribution ***
    ${contribution}
    
    *** Instructions ***
    ${instructions}
    
    *** More from me ***
    ${git}`;

    writeToFile(title,template)
});






    // var responses = JSON.stringify(response);
    fs.writeFile('README.md', JSON.stringify(response), (err) =>
    err ? console.error(err) : console.log('Success!')
    )


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
    


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
