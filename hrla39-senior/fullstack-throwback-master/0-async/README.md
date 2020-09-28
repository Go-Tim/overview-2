# Module 0 - Sync and Async Fundamentals

This section is divided into two separate parts: Part 1 will cover higher-order functions and callbacks. Part 2 will cover asynchronous code and the use of Promises.

## Requirements

### Part 1

- Complete this part according to the instructions in `fp.js`
  - Complete the refactor from for loops to higher-order array functions
  - Isolate and abstract the callbacks into their own functions
  - Complete the `clanStats` function (This will require really understanding the given data. Be methodical in your approach.)
- You may check your work using console.log statements in your browser's console after loading `fp-runner.html`

### Part 2

- You are given a `DataAPI.Callback` module that has some methods:
  - "Easy" methods for use in Exercise 1: `getAllGames` and `getAllPlayers`
- You are given a `DataAPI.Promise` module that has some methods:
  - "Realistic" methods for use in Exercise 2: `getPlayerById` and `getPlayerGames`
  - The realistic methods must be used in a Promise style (see the example in data.js)
- Use these API's to retrieve information from `data.js` and format it according to the provided examples.

## Tips

- In both exercises, data.js contains the data and resources that you need. Inspect both files carefully and understand the code that you are given.
- One of the key objectives of this sprint is cultivating the ability to parse code that you didn't originally write.
- In Part 2, make use of console.logs and other debugging tools to inspect the results of DataAPI calls (in callback and Promise styles).
