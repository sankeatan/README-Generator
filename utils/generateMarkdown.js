const fs = require('fs');

var markdownText = '';


function renderInstallation({installation}){
  var installationText = `## Installation \n${installation}\n`
  return installationText;
}

function renderCredits({credits}){
  var creditsText = `## Credits\n${credits}\n`;
  return creditsText;
}

function renderUsage({usage}){
  var usageText = `## Usage\n${usage}\n`;
  return usageText;
}

function renderLicense({license}){
  var license = `## License\n${license}\n`;
  return license;
}
function renderContact({linkedin, github}){
  var contactText = `## Contact Me\n`;
  var linkdeinLink = `[Linkedin](${linkedin})\n`;
  var githubLink = `[Github](${github})\n`;

  contactText += linkdeinLink;
  contactText += githubLink;
  
  return contactText;
}
function renderDescription({description, motivation, whyBuild, problem, learned}){
  var descriptionText = `## Description\n${description}\n`;
  if (motivation != false){
  var mot = `Motivation for the project: ${motivation}\n`;
  descriptionText = descriptionText + mot;
  }
  if (whyBuild != false){
  var build = `Why build the project: ${whyBuild}\n`;
  descriptionText = descriptionText + build
  }
  if (problem != false){
  var prob = `What problem this solves: ${problem}\n`;
  descriptionText = descriptionText + prob;
  }
  if (learn != false){
  var learn = `What did you learn: ${learned}\n`;
  descriptionText = descriptionText + learn;
  }
  return descriptionText;
}
function renderTitle({title}){
  var title = `### ${title}\n`;
  return title;
}




function generateMarkdown(data) {
  markdownText += renderTitle(data);
  markdownText += renderDescription(data);
  markdownText += renderInstallation(data);
  markdownText += renderCredits(data);
  markdownText += renderUsage(data);
  markdownText += renderLicense(data);
  markdownText += renderContact(data);
  writeToFile(markdownText);
}


function writeToFile(content) {
  fs.writeFile('README.md', content, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe!'))
}

module.exports = generateMarkdown;
