const inquirer = require('inquirer');

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
      name: 'Description',
      message: 'Enter ReadMe file Description',
    },
    {
        type: 'input',
        name: 'Intallation',
        message: 'Enter installation steps',
      },

      {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage description',
      },

      {
        type: 'input',
        name: 'Contribuiting',
        message: 'Enter contribuitors',
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
        choices: ['MIT', 'GPL', 'APACHE License 2.0', 'BSD'],
      },

      {
        type: 'input',
        name: 'GitHub Username',
        message: 'Enter your Github username',
      },

      {
        type: 'input',
        name: 'email address',
        message: 'Enter your Email address',
      },

     

  ])
  .then((data) => {
    console.log(data)
  });

    }

}
  );
