# Module 3 - Front end Questions

## `App` Component

### Q1. Why do we need the `renderView` method?

The renderView allows for the conditioning rendering of the components "posts," "create," and "post" based on the state "view" inside of the class App. Based on the state we are allowed to render one of the three components onto the screen.

### Q2. What value do we expect `this.state.view` to be in order to render the Post component?

We expect it to be anything other than the string 'posts' and 'create'. Based on the property that is passed on to the "Post" component we will be changing the this.state.view to the _id of the post that is clicked.

### Q3. Why do we need to bind `this.changeView` to the keyword this (on line 16)?

The keyword this can get lost in the scope of wherever it is applied. Basically, the event handler method can lose its implicitly bound context whenever it is passed as a callback or property. In the context that it is invoked,the this value will fall back to the default binding as class declarations and prototype methods run in strict mode. When we bind the "this" of the event handler to the component instance we don't have to worry about it losing its context.

## `Posts` Component

### Q4. What interactions with the server will be required in order to fully implement this component?

We have to make a call to the .getAll method in the controllers to successfully access all of the post in the database.

### Q5. What information should be kept inside `this.state` in this component?

this.state inside the class Posts should contain a posts key that stores all the objects grabbed from the .getAll method,

### Q6. What props does this component receive from its parent component?

This component receives a property called viewPost that includes the changeView method in the App class. This will allow for us to change the state within the Posts component to whatever Post is clicked.

### Q7. What additional components might we create to help implement this component?

I didn't create any additional components for the Posts componenet but it would be possible create another component that solely focuses on the mapping function implemented inside the render method of this component.

## `Post` Component

### Q8. What interactions with the server will be required in order to fully implement this component?

The 'Post' Component will have to interact with the server's getOne, upvote, and addComment methods.

### Q9. What information should be kept inside `this.state` in this component?

Inside the this.state in this component, I decided to include a post, upvotes, comments, and a newComment property to be able to render the correct information given from the getPost, handleAddComment, and handleUpvote method.

### Q10. What props does this component receive from its parent component?

The component receives a postId property that consists of the state in the App component. This prop will hold the id of the post that we will solely render on the screen.

### Q11. What additional components might we create to help implement this component?

I didn't create any additional components for the Create componenet but it would be possible create another component that solely focuses on the mapping function implemented inside the render method of this component.

## `Create` Component

### Q12. What interactions with the server will be required in order to fully implement this component?

The Create component would have to utilize a Axios post method to insert a new post into the database.

### Q13. What information should be kept inside `this.state` in this component?

The Create component should have a title and body state to store the values inserted by the user.

### Q14. What props does this component receive from its parent component?

This component receives a property called viewPost that includes the changeView method in the App class. This will allow for us to change the state within the Create component to whatever a post is submitted.

### Q15. What additional components might we create to help implement this component?

This component should not need any additional components to be imported into it.
