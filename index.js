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
    console.log(data["Description"])

    fs.writeFile(`./Output/${filename}`, `# **${data["Title"]}**`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

      fs.appendFile(`./Output/${filename}`, `\n\n## ${data["Description"]}\n\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

      fs.appendFile(`./Output/${filename}`, `\n\n## ${data["Installation"]}\n\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

      fs.appendFile(`./Output/${filename}`, `\n\n## ${data["Usage"]}\n\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

      fs.appendFile(`./Output/${filename}`, `\n\n## ${data["Contributing"]}\n\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

      fs.appendFile(`./Output/${filename}`, `\n\n## ${data["Questions"]}\n\n ${data["Github"]}`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

      fs.appendFile(`./Output/${filename}`, `\n\n## Table of Contents\n\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    
    
  });

    }

}
  );
