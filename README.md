# HelloCypress
This repository will document learning content about cypress

## Requirements

- [Node.js](https://nodejs.org/en/)

## Install

1. In a command window: cd project_folder
2. In a command window: npm install cypress --save-dev
3. Check installation by running: npx cypress open

## To be demonstrated:

Demo file is `[BackToTech.spec.js]`(/cypress/integration/1-getting-started/BackToTech.spec.js)

- [x] Folder structure
- [x] Trigger test execution / How to open a page in a browser
    1. Open cypress with `npx cypress open`
    2. Click on the desired test spec. A window that executes the test will open.
- [x] `describe` is a way to group our tests. It takes two arguments: 
    - the name of the test group, 
    - the second is a callback function.
- [x] `beforeEach` Runs once before all tests in the block.    
- [x] `it` individual test case. It takes two arguments:
    - a string explaining what the test should do, 
    - a callback function which contains our actual test.
- [x] `context` It's an alias for `describe`. You can nest multiple `context` in `describe`.
- [x] To open the test page use [`cy.visit('https://www.backto.tech/')`](https://docs.cypress.io/api/commands/visit)
- [x] To read the page title: [`cy.title()`](https://docs.cypress.io/api/commands/title#Syntax)
- [x] You can add assertions by chaining [`should`](https://docs.cypress.io/api/commands/should#Syntax) to a getter.
- [x] You can get an element by id with [`get`](https://docs.cypress.io/api/commands/get#Arguments)
- [x] You can look for nested elements with [`within`](https://docs.cypress.io/api/commands/within#Syntax)
- [ ] How to push a button
- [ ] How to get the value of an input
- [ ] How to put data in an input
- [ ] How to switch to a modal window
- [ ] How to insert data in to an input from a modal window
- [ ] How to click on the accept button of a modal window
- [ ] How to open an iframe

## Cypress folder structure

### Test files
- Test files are located in `cypress/integration` by default. This can be configured later
- Test cases are written in any of the following language:
    - javascript [.js](https://www.javascript.com/)
    - react jsx [.jsx](https://reactjs.org/docs/introducing-jsx.html)
    - coffe script react .cjsx
- Individual test cases are contained in spec files.

### Fixture files    
- Fixture files (test data) are located in `cypress/fixtures`
- Fixture files are in [json]() formal

### Assert files    
- `cypress/downloads` will contain files downloaded during test execution
- `cypress/screenshots` will contain screenshots taken during test execution (picture format seems to be *.png)
- `cypress/videos` will contain videos recorded during test execution (picture format seems to be *.mp4)

### Plugin file
- gives you the ability to access operating system resources during test execution

### Support file
- `cypress/support/index.js` is executed before each spec(test) file. It's used for test environment preparation.