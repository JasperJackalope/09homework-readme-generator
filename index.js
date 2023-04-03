// TODO: Include packages needed for this application. Installed and consts below.

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project.'
    },
    {
      type: 'input',
      name: 'tableofcontents',
      message: 'TBD'
    },
    {
     type: 'input',
     name: 'installation',
     message: 'Please provide any necessary installation information.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions for the project.'
    },
    {
      type: 'input',
      name: 'license',
      message: 'Please enter which license applies to this project.'
    },
    {
      type: 'input',
      name: 'contirbuting',
      message: 'Please provide any necessary installation information.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide usage instructions for the project.'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please enter which license applies to this project.'
    },
    // ... add more questions as needed
  ];
  

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('README file generated successfully!');
    });
  }
  

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
      .then(data => {
        const fileName = `${data.title.toLowerCase().split(' ').join('-')}.md`;
        const readmeContent = generateReadme(data);
        writeToFile(fileName, readmeContent);
      })
      .catch(err => {
        console.error(err);
      });
  }
  

// Function call to initialize app
init();

// function generateReadme(data) {
//     return `
//   # ${data.title}
  
//   ## Description
//   ${data.description}
  
//   ## Table of Contents
//   - [Installation](#installation)
//   - [Usage](#usage)
//   - [License](#license)
//   - [Contributing](#contributing)
//   - [Tests](#tests)
//   - [Questions](#questions)
  
//   ## Installation
//   ${data.installDependencies ? 'To install the required dependencies, run the following command:' : 'No dependencies required for this project.'}
  
//   \`\`\`
//   ${data.installDependencies ? 'npm install' : ''}
//   \`\`\`
  
//   ## Usage
//   ${data.usage}
  
//   ## License
//   This project is licensed under the ${data.license} license.
  
//   ## Contributing
//   ${data.contributing}
  
//   ## Tests
//   ${data.tests}
  
//   ## Questions
//   ${data.questions}
//   `;
//   }
  
