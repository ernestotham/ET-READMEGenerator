const inquirer = require('inquirer');
const fs = require('fs');

console.log("\n\n\n!!!Welcome to the ReadMe Generator!!!\n\n\n")


inquirer
  .prompt([
    {
      type: 'list',
      message: 'Menu options',
      name:'Menu',
      choices:[
        new inquirer.Separator(' ============================== '),
        {
          name: 'Create ReadMe file',
        },
        {
            name: 'Quit',
        },

      ],
    },
    
  ])
  .then((response) => {
   console.log(response['Menu'])
    if (response['Menu'] === 'Quit'){

    }

    else {

        inquirer
  .prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'Enter project title',
      },
    {
      type: 'input',
      name: 'Description',
      message: 'Enter ReadMe file Description',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation steps',
      },

      {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage description',
      },

      {
        type: 'input',
        name: 'Contributing',
        message: 'Enter how other can contribute',
      },

      {
        type: 'input',
        name: 'Tests',
        message: 'Enter Tests',
      },

      {
        type: 'list',
        message: 'choose a license for the application',
        name: 'license',
        choices: ['MIT', 'GPL', 'ISC', 'APACHE License 2.0', 'BSD','IBM','Unlicense'],
      },

      {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your Github username',
      },

      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address',
      },

     

  ])
  .then((data) => {
    console.log(data)
    const filename ='README.md';
    setTimeout(() => {
        fs.writeFile(`./Output/${filename}`, `## **${data["Title"]}**\n\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)
        setTimeout(() => {
        fs.appendFile(`./Output/${filename}`, `\n\n##Description: \n${data["Description"]}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)
        setTimeout(() => {
        fs.appendFile(`./Output/${filename}`, `\n\n##Installation:\n${data["Installation"]}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)
        setTimeout(() => {
        fs.appendFile(`./Output/${filename}`, `\n\n##Usage: \n${data["Usage"]}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)
        setTimeout(() => {
        fs.appendFile(`./Output/${filename}`, `\n\n##Contributing \n${data["Contributing"]}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)
        setTimeout(() => {
        fs.appendFile(`./Output/${filename}`, `\n\n##Questions: \nGithub profile: ${data["GitHub"]}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)
        setTimeout(() => {
        fs.appendFile(`./Output/${filename}`, `\nFor any questions reach out to me at ${data["email"]}\n\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)
        setTimeout(() => {
        fs.appendFile(`./Output/${filename}`, `\n\n## Table of Contents\n\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)
        setTimeout(() => {
        fs.appendFile(`./Output/${filename}`, `\n[Title](#Title)\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)
        setTimeout(() => {
        fs.appendFile(`./Output/${filename}`, `\n[Description](#Description)\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)
        if(data["Installation"] !== ""){
            setTimeout(() => {
                fs.appendFile(`./Output/${filename}`, `\n[Installation](#Installation)\n`, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });},2000)
            }
        if(data["Usage"] !== ""){
            setTimeout(() => {
            fs.appendFile(`./Output/${filename}`, `\n[Usage](#Usage)\n`, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });},2000)
        }

        if(data["Contributing"] !== ""){
            setTimeout(() => {
            fs.appendFile(`./Output/${filename}`, `\n[Contributing](#Contributing)\n`, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });},2000)
        }
        setTimeout(() => {
        fs.appendFile(`./Output/${filename}`, `\n[Questions](#Questions)\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });},2000)

          
  });

    }

}
  );
