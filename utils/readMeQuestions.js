const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

var markdownContent = new Object();

function generateTitle(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      }])
      .then((answers) => {
        markdownContent.title = answers.title
        generateDescription();
      });
}
function generateDescription(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project',
      },
      {
        type: 'input',
        name: 'motivation',
        message: 'What motivated you to create this project?',
      },
      {
        type: 'input',
        name: 'problem',
        message: 'What problems does this solve?',
      },
      {
        type: 'input',
        name: 'learned',
        message: 'Did you learn anything that you want to share?',
      },
      {
        type: 'input',
        name: 'whyBuild',
        message: 'What moved you from motivation to actually building this project?',
      }])
    .then((answers) => {
        markdownContent.description = answers.description;
        markdownContent.motivation = answers.motivation;
        markdownContent.problem = answers.problem;
        markdownContent.learned = answers.learned;
        markdownContent.whyBuild = answers.whyBuild;
        generateInstallation();
    });
}
function generateInstallation(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps are required to install your project? Please provide a step-by-step description.',
      }])
      .then((answers) => {
        markdownContent.installation = answers.installation
        generateUsage();
      });
}
function generateUsage(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'usage',
        message: 'Describe instructions for and examples of uses for this project',
      },
    ])
    .then((answers) => {
      markdownContent.usage = answers.usage
      generateCredits();
    });
}
function generateCredits(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'credits',
        message: 'List collaborators and third-party assets used to make this project',
      }])
      .then((answers) => {
        markdownContent.credits = answers.credits
        generateLicense();
       
      });
}
function generateLicense(){
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'license',
        message: 'Pick a license for your project',
        choices: [ "Public Domain", new inquirer.Separator(), 
                   "GNU/LGPL", new inquirer.Separator(), 
                   "Permissive", new inquirer.Separator(),
                   "Copyleft", new inquirer.Separator(),
                   "Proprietary"]
      }])
    .then((answers) => {
      markdownContent.license = answers.license
      generateContact();
    });
      
}
function generateContact(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your linkedin profile url',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github repo url'
      }
    
    ])
    .then((answers) => {
      markdownContent.license = answers.license
      markdownContent.linkedin = answers.linkedin;
      markdownContent.github = answers.github;
      generateMarkdown(markdownContent);
    });
}
function readMeQuestions(){
    generateTitle();
}

  module.exports = readMeQuestions;