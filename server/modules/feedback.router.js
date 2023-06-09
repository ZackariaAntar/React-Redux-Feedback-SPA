const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
	console.log("GET /feedback");
	pool.query('SELECT * from "feedback";')
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log("Error GET /feedback", error);
			res.sendStatus(500);
		});
});

router.post('/', async (req, res)=>{
    console.log('POST /feedback');
    const postValues = req.body
    const postQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(postQuery, [postValues.feeling, postValues.understanding, postValues.support, postValues.comments])
    .then((result)=>{
        res.sendStatus(201)

    }).catch((error)=>{
        console.log("Error POST /feedback", error);
        res.sendStatus(500)
    })
});

module.exports = router;
