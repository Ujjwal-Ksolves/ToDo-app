const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
	host: 'mysql_db',
	user: 'ujjwal',
	password: 'ujjwal@204',
	database: 'Tasks'
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({encoded: true}));

app.get("/api/get", (req,res) => {
	const sqlGet = "SELECT * FROM tasks";
	db.query(sqlGet,(error,result) => {
		res.send(result);
	});
});

app.post("/api/post",(req,res) => {
	const {task,ls_date} = req.body;
	const sqlInsert = "INSERT INTO tasks (task,ls_date) VALUES(?,?)";
	db.query(sqlInsert,[task,ls_date],(error,result) => {
	if(error) {
		console.log(error);
		}
	});
});

app.delete("/api/remove/:task",(req,res) => {
        const { task } = req.params;
        const sqlRemove = "DELETE FROM tasks WHERE task = ?";
        db.query(sqlRemove,task,(error,result) => {
        if(error) {
                console.log(error);
                }
        });
});


app.listen(5000, () => {
	console.log("Server is running on  5000");
});
