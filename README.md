# TimCamp Overview-2

This repository consists of what will be rendered as the second portion of the overview section on TimCamp.

## Related Projects

  - https://github.com/Go-Tim/nick-nav
  - https://github.com/Go-Tim/tracy-detail-desc-calendarsticky
  - https://github.com/Go-Tim/nick-reviews
  - https://github.com/Go-Tim/tim-suggestions


## Table of Contents

1. [Setup](#Setup)


## Setup

Open up the terminal and from within the root directory, install the dependencies by running the command:

```sh
npm install
```

Then navigate to the database directory. Make sure that your MySQL server is running and seed the schema file with the command:

```sh
mysql -u root -p < schema.sql
```

Rename the configExample.js file to config.js and input the password for you MySQL server if you have one.

Go back to the root directory and run the seeding function scripts to import data into your schema:

```sh
npm run seed
npm run seed2
npm run seed3
npm run seed4
npm run seed5
npm run seed6
```

Run these scripts to start the server and serve the static files:

```sh
npm start
npm run build
```

Open up your browser and navigate to http://localhost:3003/

Every refresh/reload will render a random campsite!