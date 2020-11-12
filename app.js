const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employees = [];

function newEmployee() {

    inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is the employee's name?"
        },
        // {
        //     name: "id",
        //     type: "input",
        //     message: "What is the employee's ID?"
        // },
        // {
        //     name: "email",
        //     type: "input",
        //     message: "What is the employee's E-mail?"
        // },
        // {
        //     name: "role",
        //     type: "rawlist",
        //     message: "What is the employee's role?",
        //     choices: [ 'Engineer', 'Intern', 'Manager' ]
        // },
        // {
        //     name: "school",
        //     type: "input",
        //     message: "What is the employee's school?",
        //     when: (answers) => answers.role === "Intern"
        // },
        // {
        //     name: "officeNumber",
        //     type: "input",
        //     message: "What is the manager's office number?",
        //     when: (answers) => answers.role === "Manager"
        // },
        // {
        //     name: "github",
        //     type: "input",
        //     message: "What is the employee's github account?",
        //     when: (answers) => answers.role === "Engineer"
        // },
    ]).then((answers) => {
        employees.push(answers);
        console.log(employees);
        anotherEmployee();
    })    
}

function fileCheck() {
    if (!fs.existsSync(OUTPUT_DIR)) {fs.mkdirSync(OUTPUT_DIR)}
        fs.writeFileSync(outputPath, render(employees), "utf-8");
}

function anotherEmployee() {

    inquirer
    .prompt ({
        name: "continue",
        type: "confirm",
        message: "Do you wish to add another employee?"
    }).then((data) => {data.continue ? newEmployee() : fileCheck()})
}

newEmployee();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
