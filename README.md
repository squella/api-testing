### Table of contents

- [Description](#description)
    - [File organization](#fileOrganization)
    - [Prerequisites](#prerequisites)
- [How to use](#how-to-use)
    - [Instalation](#instalation)
    - [Run test cases](#runTest)
    - [Create a new test case](#createNewTest)
- [References](#references)
---
## Description

API testing in Swagger Petstore with Mocha and Chai

### File organization

 | Path | Description |
| :--- | :---: |
|test/ | We create all the necessary folders and files to organize and create our test case scenarios |
|support/ | We create the functions to support the test cases |
|endpoints.js | We have the endpoints we are using |
|package.json | We have all the information of the project dependencies |

### Prerequisites

You’ll need Node.js installed. Install at least v12.16.1 or higher as this is the oldest active LTS version.

--- 

## How to use 

### Installation
To install the framework, you must follow the following steps:   

1. ``` 
    git clone https://steps.everis.com/git/NEDBNG/nedb_api_test
2. ```
    npm install
### Run test cases 

Now, time to run your tests!
To do so, just run:
```
    npm test
```

### Create a new test case

To create a new test case, you must follow the following steps:

1. ```
   Go to the tests folder and create a new test file where you will put the description of the test with its respective expect (or assert) 
2. ```
   Create a new function file in the support area to create the functions that you will implement in the test cases
3. ```
   Run the test cases
---
## References

[Pet store](https://petstore.swagger.io/)

[Mocha](https://mochajs.org/)

[Chai](https://www.chaijs.com/)
