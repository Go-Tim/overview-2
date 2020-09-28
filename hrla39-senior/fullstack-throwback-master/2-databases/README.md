# Module 2 - Databases

In this module, we'll examine handling database interactions using MySQL. At the end of this module, you should feel comfortable demonstrating the following the following skills:
- Writing a `select` query
- Writing an `insert` query
- Writing a query that uses a `join`
- Designing a complex database interaction that can be solved either with a single query, or with assembling results from multiple queries

## Bookclub
> Let's talk about bookclub.

*Bookclub* is an app that allows users to view a library of books and store books that they've read in "collections." Users can compare their collection to a friends and discover which books that friend has collected that are not already in the user's own collection.

You've been provided a Node/Express app, `server/index.js`, that implements an API to support all of the interactions required for the app. You've also been provided a `schema.sql` file that will set up your `bookclub` database and populate it with some starter data. Inside `db-mysql/index.js`, you'll find scaffolding for some functions that will handle interacting with the database. Your task is to fill in these functions.

Notice that there is not a client included in this module - we will only be interacting with the server and database portions of this application.

### Before you begin
- [ ] Make sure you have a working installation of MySQL.
  - *NOTE* - you'll notice a `mysql` package included in this module's `package.json` - this is a package that allows Node to iteract with MySQL, and is not an installation of MySQL itself.
- [ ] Install [Postman](https://www.getpostman.com/)
  - We will not be using a client in this module, so we need Postman to verify that our API routes are behaving as expected.
---
### Step 0: Getting Started

- [ ] Run `npm install` inside this directory to install dependencies
- [ ] Start your mysql server by running `mysql.server start` in the terminal
- [ ] Run `mysql -u root < schema.sql` to populate your database for this exercise with the given schema file.
  - *NOTE* - if you experience trouble at this step, you may need to substitute your MySQL username and password. If that's the case, you'll need to update `db-mysql/config.js` with your correct MySQL username and password.
- [ ] Start the provided node server by opening a separate terminal tab in this directory and running `npm start`

---
### Step 1: Understand the Schema

**Complete these tasks:**
- [ ] Look over `schema.sql`, thinking carefully about the relationships between our three tables.
- [ ] Create an ER diagram of the schema based on your conclusions in the previous step.
  - Draw your diagram on a whiteboard and take a photo of your drawing, or use a diagramming tool like [WWW SQL Designer](http://ondras.zarovi.cz/sql/demo/) and take a screenshot of your result.
- [ ] Add your diagram to the `/artifacts` directory inside this module.
- [ ] Inside `/artifacts/er-diagram.md`, write a paragraph that would explain your ER diagram to another software engineer.

**WHEN COMPLETE**: Make a commit with the message `Complete module 2, step 1`.

---
### Step 2: Understand the API

The API routes and handlers have been implemented for you inside `server/index.js`, though they won't work until you implement the database functions. Here is a table summarizing the API that our application will use:

| URL | HTTP METHOD | REQUEST BODY | RESULT |
|:----|:-----------:|:------------:|:-------|
| `/api/books` | GET | JSON | Respond with JSON of all the books |
| `/api/books/:id` | GET | JSON | Respond with JSON of one book |
| `/api/users/:id/collection` | GET | JSON | Respond with JSON of one user's collection |
| `/api/users/:id/collection?b=[bookId]` | POST | JSON | Add a book (included as a query parameter) to a user's collection (identified by the `:id` request parameter) and respond with JSON of that user's collection |
| `/api/users/:userIdA/collection/:userIdB` | GET | JSON | Respond with JSON of the books that are in **User B**'s collection that are *not found* in **User A**'s collection.

**Complete this task:**
- [ ] Study the way the database functions are being used in such a way that you understand the expected inputs, outputs, and side effects for each of the database functions. You will record these observations as you work through the remaining steps.

---
### Step 3: Implement `getBookById`
Let's code! We've already implemented `getAllBooks`, so dive right into `getBookById`.

**Complete these tasks:**
- [ ] Work through the problem solving process inside `artifacts/journal.getBookById.md`.
- [ ] As you work through the process, fill in the `getBookById` function.

**WHEN COMPLETE**: Make a commit with the message `Complete module 2, step 3`

---
### Step 4: Implement `getCollectionByUserId`

**Complete these tasks:**
- [ ] Work through the problem solving process inside `artifacts/journal.getCollectionByUserId.md`
- [ ] As you work through the process, fill in the `getCollectionByUserId` function.

**WHEN COMPLETE**: Make a commit with the message `Complete module 2, step 4`


---
### Step 5: Implement `addBookToCollection`

**Complete these tasks:**
- [ ] Work through the problem solving process inside `artifacts/journal.addBookToCollection.md`
- [ ] As you work through the process, fill in the `addBookToCollection` function.

**WHEN COMPLETE**: Make a commit with the message `Complete module 2, step 5`

---
### Step 6: Implement `findAndCompareCollections`
This step can be tricky! You may find success solving this with a single query, or by running several queries and accumulating the results in a variable.

**Complete these tasks:**
- [ ] Work through the problem solving process inside `artifacts/journal.findAndCompareCollections.md`
- [ ] As you work through the process, fill in the `findAndCompareCollections` function.

**WHEN COMPLETE**: Make a commit with the message `Complete module 2, step 6`
