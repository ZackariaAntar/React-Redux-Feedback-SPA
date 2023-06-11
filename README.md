# ReactJS Feedback Form SPA with MUI


## Description

A full stack Single Page [CRUD app](https://www.freecodecamp.org/news/crud-operations-explained/) that navigates a user through a feedback submission form, and allows the user to edit their responses before submitting. This app includes an admin page on the feature-stretch-mode branch that allows for submissions to be deleted from the database.

### Prerequisites
* [NODE.js](https://nodejs.org/en)
* [Postgres](https://www.postgresql.org/)
    * a [Postgres Client](https://wiki.postgresql.org/wiki/PostgreSQL_Clients) like [Postico](https://eggerapps.at/postico/v1.php) _(optional but helpful for continuity)_.
* [Nodemon](https://www.npmjs.com/package/nodemon)

## Installation
1. Create a database named `prime_feedback`
    * Use the `CREATE TABLE` query _(lines 3-10)_ of data.sql and `INSERT INTO` query _(lines 14-15)_ of data.sql to start with an entry on the admin page. The project is built on [Postgres](https://www.postgresql.org/download/), so make sure to have that installed. I used [Postico](https://eggerapps.at/postico/v1.php) to create the inital query.
2. From your terminal run `npm install` in this project's root directory.
    - **2a.** Ensure you have at least **two** terminal tabs open.
        - In one tab, run `npm run server` to start your server.
        - In the other, run `npm run client` to start the client for this project.
        - If a browser window is not automatically opened after `npm run client`, you can access this project from your browser at **http://localhost:3000**
### Usage
1. Open a web browser and enter **http://localhost:3000** in the address bar.
2. Leave your feedback in the provided input fields.
3. Edit your feedback before submitting it if desired.
4. Access the admin page at `http://localhost:3000/?#/admin` to delete feedback from the datatbase.


## Acknowledgement
* Huge thanks to [Liz Kerber](https://github.com/emkerber), [Emma Stout](https://github.com/emmastout01), and [Dane Smith](https://github.com/DoctorHowser) for sharing their knowledge and preparing me to make this application a reality, and to the community of staff, partners, alumni, and mentors from [Prime Digital Academy](www.primeacademy.io) who have made my learning experience possible.

* To my fellow [Diamond Cohort](https://github.com/orgs/PrimeAcademy/teams/diamond) members for their support and daily commitment to growth.
