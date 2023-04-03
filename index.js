const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
    name: 'contributing',
    message: 'Please list any contributors who added to this project.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide any testing instructions.'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.'
  }
];

inquirer.prompt(questions)
  .then(answers => {
    const markdown = generateMarkdown(answers);

    fs.writeFile('README.md', markdown, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('README file generated successfully!');
    });
  })
  .catch(err => console.error(err));
