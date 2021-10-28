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
        message: "what does your application do?",
    },
    {   type:"input",
        name:"version",
        message: "When was the application created?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        writeToFile("demoread.md",markdown({...responses}))
    })
}

// Function call to initialize app
init();
