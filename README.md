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
- [ ] You can override the default load page timetout see more [here](https://docs.cypress.io/guides/references/configuration#Timeouts)
- [x] To delay execution of the next steps you can add [`wait`](https://docs.cypress.io/api/commands/wait#Syntax)
- [x] To insert report messages use [`log`](https://docs.cypress.io/api/commands/log)
- [x] To read the page title: [`cy.title()`](https://docs.cypress.io/api/commands/title#Syntax)
- [x] You can add assertions by chaining [`should`](https://docs.cypress.io/api/commands/should#Syntax) to a getter.
- [x] You can get an element by id with [`get`](https://docs.cypress.io/api/commands/get#Arguments)
- [x] You can look for nested elements with [`within`](https://docs.cypress.io/api/commands/within#Syntax)
- [x] You can do a click with [`click`](https://docs.cypress.io/api/commands/click)
- [x] You can isert delays with [`wait`](https://docs.cypress.io/api/commands/wait)
- [x] You can check for element properties eg: .should('be.visible')
- [x] Use [`children`](https://docs.cypress.io/api/commands/children) to get child elements
- [x] Use [`first`](https://docs.cypress.io/api/commands/first) to get the first element in a set
- [x] You can focus on an input with [`focus`](https://docs.cypress.io/api/commands/focus#Yields)
- [x] You can put data in an input with [`type`](https://docs.cypress.io/api/commands/type)
- [x] You can check the value of an input with `.should('have.value', 'valueGoesHere')`
- [ ] You can check for the value of customer HTML attributes with `have.attr` e.g. `.should('have.attr', 'data-id', "5fa5c843dc39d90017573c71")`
- [x] Special keys have labels e.g. `{enter}`
- [x] You can get a modal window like any other html element with `get`
- [x] You can press a button in a modal window like any other button with `click`
- [x] You can insert text in an input from a modal just like in any other input by using `type`
- [x] You can clear an input with [`clear`](https://docs.cypress.io/api/commands/clear)
- [ ] How to work with [`iframes`](https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/)

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

### Configuration file
- the `cypress.json` is a configuration file that can be used to change global configurations