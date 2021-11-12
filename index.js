// TODO: Include packages needed for this application
const inquirer= require("inquirer");
const fs= require("fs");
const path= require("path")
const markdown= require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"what is the title of application",
    },
    {
        type:"input",
        name:"description",
        message: "Describe the application and what it does?",
    },
    {   type:"input",
        name:"installation",
        message: "Can you enter the information needed to install?",
    },
    {   type:"list",
        name:"license",
        message: "Please select licence?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3',]
    },
    {    type:"input",
        name:"usage",
        message:"How do you operate this application?",
    },
    {   type:"input",
        name:"contributing",
        message:"Who contributed to this app?",
    },
    {   type:"input",
        name:"username",
        message: "What is your github username?",
    },
    {   type:"input",
        name: "questions",
        message: "Do you have any questions?",
    },
    {   type:"input",
        name: "testing",
        message: "What testing has been done on this app?",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        writeToFile("./dist/README.md",markdown(responses))
    })
}

// Function call to initialize app
init();
