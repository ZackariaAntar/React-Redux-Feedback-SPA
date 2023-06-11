const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
	console.log("GET /feedback");
	pool.query('SELECT * from "feedback" ORDER BY id DESC;')
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log("Error GET /feedback", error);
			res.sendStatus(500);
		});
});

router.post('/', (req, res)=>{
    console.log('POST /feedback');
    const postValues = req.body.inputStore
    console.log(postValues.inputStore);
    const postQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(postQuery, [postValues.feeling, postValues.understanding, postValues.support, postValues.comment])
    .then((result)=>{
        res.sendStatus(201)

    }).catch((error)=>{
        console.log("Error POST /feedback", error);
        res.sendStatus(500)
    })
});

router.delete('/delete/:id', (req, res) =>{
    console.log(`DELETE /feedback/${req.params.id}`);
    const deleteValue = req.params.id;
    console.log(req.params.id);
    const deleteQuery = 'DELETE FROM feedback WHERE id=$1;'
    pool.query(deleteQuery,[deleteValue])
    .then((result)=>{
        console.log(result);
        res.sendStatus(200)

    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500)

    })
})

module.exports = router;
