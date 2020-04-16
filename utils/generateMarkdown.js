function generateMarkdown(data, repoData) {
docText = 
`# ${data.title}

Created by ${repoData[1]}

Gitub Repo Link: ${data.url}

## Description 

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [contributing](#contributing)

## Installation

${data.install}

## Usage 

${data.usage}

## Credits

${data.credit}

## License

![badmath](https://img.shields.io/badge/License-${data.license}-blue)

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions
  *User GitHub email

  Email: ${repoData[0]}
  
  * User GitHub profile picture

  ![weather dashboard demo](${repoData[2]})

`;
return docText;
}

module.exports = generateMarkdown;
