const inquirer = require('inquirer');
const fs = require('fs');


function printMarkdownInit(filename, data){
  return new Promise((resolve, reject) => {

    fs.writeFile(`./Output/${filename}`, data, function (err) {
      if (err) reject(err);
      else resolve(`data was written `+data)

    })

  })
}

function printMarkdownAppend(filename, data){
  return new Promise((resolve, reject) => {

    fs.appendFile(`./Output/${filename}`, data, function (err) {
      if (err) reject(err);
      else resolve(`data was written `+data)

    })

  })
}







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
    console.log(data["Description"])
    const filename ='README.md';
    
    
    const markdown = async () => {
      
      if(data["license"] === 'MIT'){
        license = '\n\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n'
      }
      else if(data["license"] === 'GPL'){
        license = '\n\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n'

      }
      else if(data["license"] === 'ISC'){
        license = '\n\n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n\n'

      }
      else if(data["license"] === 'APACHE License 2.0'){
        license = '\n\n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n'

      }
      else if(data["license"] === 'BSD'){
        license = '\n\n[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n\n'

      }
      else if(data["license"] === 'IBM'){
        license = '\n\n[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)\n\n'

      }
      else if(data["license"] === 'Unlicense'){
        license = '\n\n[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n\n'

      }

      const task0 = await printMarkdownInit(filename, license)
      console.log("task0 completed: "+task0)
      const task1 = await printMarkdownAppend(filename, `## **${data["Title"]}**\n\n`)
      console.log("task1 completed: "+task1)
      const task2 = await printMarkdownAppend(filename,`<br>\n\n\n`)
      console.log("task2 completed: "+task2)
      const task3 = await printMarkdownAppend(filename,`\n\n## Table of Contents\n\n`)
      console.log("task3 completed: "+task3)
      const task4 = await printMarkdownAppend(filename,`\n[Description](#Description)\n`)
      console.log("task4 completed: "+task4)
      const task5 = await printMarkdownAppend(filename,`\n[Installation](#Installation)\n`)
      console.log("task5 completed: "+task5)
      const task6 = await printMarkdownAppend(filename,`\n[Usage](#Usage)\n`)
      console.log("task6 completed: "+task6)
      const task7 = await printMarkdownAppend(filename,`\n[Contributing](#Contributing)\n`)
      console.log("task7 completed: "+task7)
      const task8 = await printMarkdownAppend(filename,`\n[Tests](#Tests)\n`)
      console.log("task8 completed: "+task8)
      const task9 = await printMarkdownAppend(filename,`\n[Questions](#Questions)\n`)
      console.log("task9 completed: "+task9)
      const task10 = await printMarkdownAppend(filename,`\n\n## <a id="Description"> Description </a> \n\n${data["Description"]}\n`)
      console.log("task10 completed: "+task10)
      const task11 = await printMarkdownAppend(filename,`\n\n## <a id="Installation"> Installation </a> \n\n${data["Installation"]}\n`)
      console.log("task11 completed: "+task11)
      const task12 = await printMarkdownAppend(filename,`\n\n## <a id="Usage"> Usage </a> \n\n${data["Usage"]}\n`)
      console.log("task12 completed: "+task12)
      const task13 = await printMarkdownAppend(filename,`\n\n## <a id="Contributing"> Contributing </a> \n\n${data["Contributing"]}\n`)
      console.log("task13 completed: "+task13)
      const task14 = await printMarkdownAppend(filename,`\n\n## <a id=Tests> Tests </a> \n\n${data["Tests"]} \n\n\n\n`)
      console.log("task14 completed: "+task14)
      const task15 = await printMarkdownAppend(filename,`\n\n## <a id=Questions> Questions </a> \n\nGithub profile: @${data["GitHub"]} \n\n\n\n`)
      console.log("task15 completed: "+task15)
      const task16 = await printMarkdownAppend(filename,`\nFor any questions reach out to me at ${data["email"]}\n\n\n\n`)
      console.log("task16 completed: "+task16)
      
    };

       
        markdown();
          
  }
  
  );

    }

}
  );
