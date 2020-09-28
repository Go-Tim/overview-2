# Module 1 - Servers

In this module, we'll examine creating servers using express. At the end of this module, you should feel comfortable demonstrating the following skills:

### In bare node (also known as the node `http` module):
- Creating a basic server
- Writing route handlers based on HTTP method and URL
- Accessing data on the body of a request
- Sending back data on the body of a response
- Handling dynamic URLs (like `api/dogs/:id`)

### In express:
- Creating a basic server
- Writing route handlers based on HTTP method and URL
- Accessing data on the body of a request
- Sending back data on the body of a response
- Handling dynamic URLs (like `api/dogs/:id`)

## Dog API
> This time, **you're** the one doing the fetching.

*Dog API* is an API that allows users to get information about dogs and add information about their own dogs.

The API implements the following routes:


| Method    | URL | Body of Request | Response body |
| -------------|-------------|-----|---|
| GET| `/api/dogs` | none | an array of all dogs, structured like `[{ name: 'Lucky', breed: 'Beagle', id: 'HJiJmXH4Z' }, ...]`|
| GET| `/api/dogs/:id` | none | an object representing the dog matching the id, structured like `{ name: 'Lucky', breed: 'Beagle', id: 'HJiJmXH4Z' }`|
| POST| `/api/dogs`    |  JSON structured like `{ name: 'Chewbacca', breed: 'Yorkshire Terrier'}` | none |


You've been provided a folder, `helpers`, that contains a file called `dogs.js` with three functions. You'll use these helper functions to maintain persistent data for your API. You've also been provided with two files, `bare-node-server.js` and `express-server.js`, where you'll write your server code.

Notice that there is not a client included in this module - we will only be interacting with the server portions of this application.

---
### Before you begin
- [ ] Install [Postman](https://www.getpostman.com/)
  - We will not be using a client in this module, so we need Postman to verify that our API routes are behaving as expected.

---
### Step 0: Getting Started

- [ ] Run `npm install` inside this directory to install dependencies
- [ ] Start the provided node server by opening a separate terminal tab in this directory and running `npm start`
- [ ] Run the tests in another tab using `npm test`. None of the tests should pass right now - that's okay!

---
### Step 1: Understand the existing files

**Complete these tasks:**
- [ ] Examine the `data/dogs.txt` file, paying attention to how the data is structured. You'll have to use this data as well as add to it.
- [ ] Examine the `helpers/dogs.js` file and ensure you understand what each function should do. Notice that each function takes a callback.
- [ ] Answer Q1 in `artifacts/questions.md`.

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 1`.

---
### Step 2: Implement the helper functions in `helpers/dogs.js`

**Complete these tasks in order:**
- [ ] Complete the `getAll` function in `helpers/dogs.js`, without using any of the `Sync` versions of the `fs` methods.
- [ ] There are no tests for this function, so how could *you* make sure it works? Once you are convinced your function works, answer Q2 in `artifacts/questions.md`. *Note: if you are unable to test your function, please put in a help desk request to figure out how to do this.*
- [ ] Complete the `getOneById` function in `helpers/dogs.js`, without using any of the `Sync` versions of the `fs` methods.
- [ ] Test your `getOneById` function and make sure it works.
- [ ] Complete the `addOne` function in `helpers/dogs.js`, without using any of the `Sync` versions of the `fs` methods.
- [ ] Test your function to make sure it works. Once you are convinced it works, answer Q3 in `artifacts/questions.md`. *Note: if you are unable to test your function, please put in a help desk request to figure out how to do this.*

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 2`.

---
### Step 3: Implement a basic server using bare node

Let's write a server! First, let's set up the basic routes.

**Complete these tasks in order:**
- [ ] If you run `npm test`, you'll notice that there are only four tests currently running, and the rest are pending. Examine the tests, and answer Q4 in `artifacts/questions.md`.
- [ ] Write the code that will pass those four tests (and **only those four tests**) in `bare-node-server.js`.
- [ ] Run `npm test` again to confirm the four tests are passing.

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 3`

---
### Step 4: Implement the GET `/api/dogs` route using the node `http` module

**Complete these tasks in order:**
- [ ] Examine the tests in the `GET requests to /api/dogs` describe block. Make sure you understand what teach test is testing. *Note: if you are unable to understand what a test is doing, please put in a help desk request to to figure out how to read tests.*
- [ ] Make all of the pending tests in the `GET requests to /api/dogs` describe block run by changing the `xit` to `it` inside of `spec/serverSpec.js`.
- [ ] Answer Q5 in `artifacts/questions.md`.
- [ ] Write the code that will make the failing tests pass.
- [ ] Re-read your answer to Q5 and confirm you still agree with it. If not, or you learned more, refactor your answer.

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 4`

---
### Step 5: Implement the GET `/api/dogs/:id` route using the node `http` module

**Complete these tasks in order:**
- [ ] Examine the tests in the `GET requests to /api/dogs/:id` describe block. Make sure you understand what teach test is testing. *Note: if you are unable to understand what a test is doing, please put in a help desk request to to figure out how to read tests.*
- [ ] Make all of the pending tests in the `GET requests to /api/dogs/:id` describe block run by changing the `xit` to `it` inside of `spec/serverSpec.js`.
- [ ] Answer Q6 and Q7 in `artifacts/questions.md`.
- [ ] Write the code that will make the failing tests pass.
- [ ] Re-read your answers to Q6 and Q7 and confirm you still agree with them. If not, or you learned more, refactor your answers.

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 5`

---
### Step 6: Implement the POST `/api/dogs/` route using the node `http` module

**Complete these tasks in order:**
- [ ] Examine the tests in the `POST requests to /api/dogs/` describe block. Make sure you understand what teach test is testing. *Note: if you are unable to understand what a test is doing, please put in a help desk request to to figure out how to read tests.*
- [ ] Make all of the pending tests in the `POST requests to /api/dogs/` describe block run by changing the `xit` to `it` inside of `spec/serverSpec.js`.
- [ ] Answer Q8 in `artifacts/questions.md`.
- [ ] Write the code that will make the failing tests pass.
- [ ] Re-read your answer to Q8 and confirm you still agree with it. If not, or you learned more, refactor your answer.

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 6`

---
### Step 7: Implement a basic express server

**Complete these tasks in order:**
- [ ] Shut down your bare node server.
- [ ] Refactor the `npm start` script in `package.json` to start the express server rather than the bare node server.
- [ ] Start your express server with `npm start`.
- [ ] Write the code in `express-server.js` that would make the one test (**and only that one test**) in the `basic server` describe block pass  

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 7`

---
### Step 8: Implement the GET `/api/dogs` route using express

**Complete these tasks in order:**
- [ ] Answer Q9 in `artifacts/questions.md`.
- [ ] Write the code that will make the failing tests in the `GET requests to /api/dogs` describe block pass, using only express methods (don't use methods that couldn't be found in the express documentation).
- [ ] Re-read your answer to Q9 and confirm you still agree with it. If not, or you learned more, refactor your answer.

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 8`

---
### Step 9: Implement the GET `/api/dogs/:id` route using express

**Complete these tasks in order:**
- [ ] Answer Q10 in `artifacts/questions.md`.
- [ ] Write the code that will make the failing tests in the `GET requests to /api/dogs/:id` describe block pass, using only express methods (don't use methods that couldn't be found in the express documentation).
- [ ] Re-read your answer to Q10 and confirm you still agree with it. If not, or you learned more, refactor your answer.

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 9`

---
### Step 10: Implement the POST `/api/dogs` route using express

**Complete these tasks in order:**
- [ ] Answer Q11 in `artifacts/questions.md`.
- [ ] Write the code that will make the failing tests in the `POST requests to /api/dogs` describe block pass, using only express methods, including the body-parser module (don't use methods that couldn't be found in the express documentation or body-parser documentation).
- [ ] Re-read your answer to Q11 and confirm you still agree with it. If not, or you learned more, refactor your answer.
- [ ] Answer Q12 in `artifacts/questions.md`.

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 10`

---
### Step 11: Wrapping up

- [ ] Answer Q13 in `artifacts/questions.md`.
- [ ] Answer Q14 in `artifacts/questions.md`. If you're unsure of the answer, do the necessary investigation with your node http server and/or your express server to find out.
- [ ] Answer Q15 in `artifacts/questions.md`. If you're unsure of the answer, do the necessary investigation with your node http server and/or your express server to find out.
- [ ] Answer Q16 in `artifacts/questions.md`. If you're unsure of the answer, do the necessary investigation with your node http server and/or your express server to find out. Or, read the docs
- [ ] Answer Q17 in `artifacts/questions.md`. If you're unsure of the answer, do the necessary investigation (perhaps the internet).

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, step 11`

---
### [Optional] Advanced Content

- [ ] Remove the x from the xdescribe block to access the `advanced server` tests.
- [ ] Add routes to your bare node server so that GET requests to `/` and `/style.css` are responded to with the index html file and the css file, respectively, and the tests pass.
- [ ] Confirm, using a browser, that your bare node server is correcly serving static files.
- [ ] Handle static file serving in your express server so that GET requests to `/` and `/style.css` are responded to with the index html file and the css file, respectively, and the tests pass (hint: check out the express.static method in the documentation).

**WHEN COMPLETE**: Make a commit with the message `Complete module 1, advanced content`
