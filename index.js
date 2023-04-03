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
      type: 'list',
      name: 'license',
      message: 'Please select which license applies to this project:',
      choices: [
        'MIT',
        'GNU GPL',
        'Apache',
        'CC-BY-SA',
        'ISC',
        'None'
      ]
    },
    {
      type: 'input',
      name: 'contirbuting',
      message: 'Please list any contributors who added to this project.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'TBD'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please provide your GitHub useranme and a link to the repository.'
    },
    {
      type: 'input',
      name: 'questions2',
      message: 'Please provide your email address for contact.'
      },
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
  
// // TODO: Create a function to generate license text based on user selection.
// function getLicenseText(license) {
//     switch (license) {
//       case 'MIT':
//         return 'This project is licensed under the terms of the MIT license.';
//       case 'GNU GPL':
//         return 'This project is licensed under the terms of the GNU GPL v3 license.';
//       case 'Apache':
//         return 'This project is licensed under the terms of the Apache 2.0 license.';
//       case 'CC-BY-SA':
//         return 'This project is licensed under the terms of the Creative Commons Attribution Share Alike 4.0 International license.';
//       case 'ISC':
//         return 'This project is licensed under the terms of the ISC license.';
//       default:
//         return 'No license selected.';
//     }
//   }
  
//   // TODO: Create a function to generate badge URL based on user selection.
//   function getBadgeUrl(license) {
//     switch (license) {
//       case 'MIT':
//         return 'MIT';
//       case 'GNU GPL v3':
//         return 'GPL-3.0';
//       case 'Apache 2.0':
//         return 'Apache-2.0';
//       case 'CC-BY-SA':
//         return 'CC-BY-SA-4.0';
//       case 'ISC':
//         return 'ISC';
//       default:
//         return '';
//     }
//   }
  
//   // TODO: Create a function to write README file.
//   function generateReadme(data) {
//     // generate the README content using the provided data
//     const readmeContent = `# ${data.title}\n\n${data.description}\n\n## Table of Contents\n\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n\n## Installation\n\n${data.installation}\
