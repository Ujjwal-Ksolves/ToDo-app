import React,{useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import "./AddEdit.css";
import axios from 'axios';
import {toast} from 'react-toastify';


const initialState = {
	task: "",
	ls_date: "",
};

const AddEdit = () => {

const navigate = useNavigate();

const [setState] = useState(initialState);

const [task,setTask]=useState('');     
const [ls_date,setLs_date]=useState('');

const handleSubmit = (e) => {
	e.preventDefault();
	if(!task || !ls_date){
	toast.error("Please provide value into each input field");
	}else{
	axios.post(`http://172.31.45.113:32500/api/post`,{
	task,
	ls_date
	}).then(() => {
	setState({task: "", ls_date: ""});
	}).catch((err) => toast.error(err.response.data));
	toast.success("Tasks added successfully");
	}
	setTimeout(() => navigate("/"),500);
	}



return (	
<div style={{marginTop:"100px"}}>
<form style={{
margin: "auto",
padding: "15px",
maxWidth: "300px",
alignContent: "left"
}}
onSubmit={handleSubmit}
>
<label htmlFor="task">Task  : </label>
<input type="text" id="task" placeholder="Task..." value={task} onChange={e => setTask(e.target.value)} />
<label htmlFor="ls_date">Last Date : </label>
<input type="date" id="ls_date" value={ls_date} onChange={e => setLs_date(e.target.value)} />

<input type="submit" value="Save" />
<Link to ="/">
<input type="button" value="Go Back" />
</Link>
</form>
</div>
);
};

export default AddEdit; 
