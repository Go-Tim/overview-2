# Module 3 - Front end

In this module, we'll flex our front-end muscles by building a React app on top of an already-working server and database. At the end of this module, you should feel comfortable demonstrating the following skills:
- Rendering static components
- Rendering a series of components dynamically
- Rendering components conditionally
- Handling DOM events in React
- Handling client-side AJAX requests
- Using `props` and `state`

## Llamantations
> Give your drama to the llamas

![llamentations][demo]

*Llamantations* is an app that allows users to vent about the things that frustrate them in life by sharing short rants. Users can see a list of posts, up-llama and down-llama posts, comment on posts, and add posts of their own.

Your deliverable in this module is a React front-end that connects to an Express server that has been provided for you. The server is written in Node/Express and connects to a MongoDB database via the Mongoose ORM. **You will not modify the code inside the `/server` and `/db-mongodb` directories in this assignment.**

The Express server handles serving up static assets from inside the `/client/dist` directory, and also implements an API for your client to consume. That API provides the following routes:

| HTTP METHOD | URL | REQUEST BODY | RESULT |
|:----:|:-----------|:------------:|:-------|
| GET | `/api/posts/` | none | a JSON array of posts |
| POST | `/api/posts/` | JSON, formatted like this: ` {  title: "post title", body: "post body"} `| JSON of the post that just got created |
| GET | `/api/posts/:id` | none | JSON of post with id matching `:id` |
| POST | `/api/posts/:id/votes` | none | increments votes count of post with id matching `:id` |
| POST | `/api/posts/:id/comments` | JSON, formatted like this: `{comment: "the comment"}`| adds comment to post with id matching `:id` |

### Before you begin
- [ ] Make sure you have a working installation of MongoDB
- [ ] Install the [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) Chrome extension. You will find it incredibly useful as you work through this module.

---
### Step 0: Getting Started
**Complete these steps:**
- [ ] Run `npm install` inside this directory to install dependencies.
- [ ] In a separate terminal tab, run `mongod` to start your MongoDB process.
- [ ] TODO - Run `npm run db-setup` to populate your MongoDB database with some sample posts.
- [ ] Run `npm run dev` to run Webpack. This task is set to run in "watch" mode.
- [ ] In a separate terminal tab, run `npm start` to start your server.

---

### Step 1: Explore the Provided Code
This app has three main views:
- `posts` - a list of all posts
- `post` - a detailed look at a single post
- `create` - a form that will create a new post

We've provided the code necessary to navigate among the three different views inside the `App` component, found inside `/client/src/index.jsx`, as well as starter code for the three views inside `/client/src/components`. **You do not need to modify `index.jsx` in order to complete this assignment.**

**Complete these tasks:**
- [ ] Study the `App` component in `index.jsx` to the point where you feel you could explain how it works to another software engineer.
- [ ] Answer Q1-Q3 in `artifacts/questions.md`
- [ ] Use Postman to make a GET request to `/api/posts`. Copy and paste the response into `/client/src/data/dummy_data.json`. You may find having this sample data useful as you implement the rest of the client.
- [ ] Draw a diagram illustrating the way the `App`, `Posts`, `Create`, and `Post` components relate to each other. Take a photo or screenshot of this diagram and add it to this repo inside this module's `artifacts` directory.

**WHEN COMPLETE:** Make a commit with the message `Complete module 3, step 1`.

---

### Step 2: Implement `Posts`
The `Posts` component should do the following:
- On load, retrieve all of the posts from the server.
- Display a "Loading..." message while it is waiting for the posts to be returned from the server.
- Dynamically render a list of all the posts from the database. Each entry in this list should show:
  - the post's title
  - the number of upvotes for that post
  - the number of comments for that post
- When the user clicks on an entry in the post list, change the view for the entire app to look at that post's detailed view. (You will create this view inside the `Post` in the next step.)

**Complete these tasks**:
- [ ] Answer Q4-Q7 in `artifacts/questions.md`
- [ ] Refactor the `Posts` component to be a stateful class component.
- [ ] Implement the list of behaviors for `Posts` described above.
- [ ] Create additional components as needed.

**WHEN COMPLETE:** Make a commit with the message `Complete module 3, step 2`.

---
### Step 3: Implement `Post`
The `Post` component should do the following:
- On load, retrieve the post from the server that matches the `postId` that was passed in via props.
- Display a "Loading..." message while it is waiting for the post to be returned from the server.
- Render the post's title and body.
- Render the number of upvotes for that post.
  - When the user clicks on the element showing the number of upvotes, make an AJAX request to the server that will increase the number of votes for that post in the database, then display the updated post that is returned by the server.
- Render the number of comments for that post.
- Render a text input and submit button that will allow the user to post a new comment.
  - When the user submits the form, make an AJAX request to the server that will add the user's comment to the array of comments for that post in the database, then display the updated post that is returned by the server.
- Dynamically render a list of the post's comments.

**Complete these tasks**:
- [ ] Answer Q8-Q11 in `artifacts/questions.md`.
- [ ] Refactor the `Post` component to be a stateful class component.
- [ ] Implement the list of behaviors for `Post` described above.
- [ ] Create additional components as needed.

**Helpful Hint:** If you'd like to navigate directly to the Post view as you're implementing this component and you have React DevTools installed, you can enter `$r.setState({view: 3})` into the JavaScript Console in Google Chrome. As you implement the AJAX functionality, you can substitute `3` with an actual post's `_id` value.

**WHEN COMPLETE**: Make a commit with the message `Complete module 3, step 3`.

---

### Step 4: Implement `Create`
The `Create` component should do the following:
- Render a form with an input to caputure the post title, a textarea to capture the post body, and a submit button.
- On form submit, make an AJAX request to the server that will create a new post and store it in the database. Once the post is successfully created, change the view for the entire app to look at the newly-created post's detailed `Post` view.

**Complete these tasks**:
- [ ] Answer Q12-Q15 in `artifacts/questions.md`.
- [ ] Refactor the `Create` component to be a stateful class component.
- [ ] Implement the list of behaviors for `Create` described above.
- [ ] Create additional components as needed.

**WHEN COMPLETE:** Make a commit with the message `Complete module 3, step 4`.


[demo]: llamentations.gif
