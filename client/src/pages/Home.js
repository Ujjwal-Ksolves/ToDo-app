import React,{useEffect ,useState} from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";
import {toast} from 'react-toastify';
import axios from 'axios';

const Home = () => {

const [data,setData] = useState([]);

const loadData = async () => {
	const response = await axios.get("http://localhost:5000/api/get");
	setData(response.data);
};

useEffect(() => {
loadData();},[]);

const deleteTask = (task) => {
	if(window.confirm("Are you sure you wanted to delete that task ? ")){
		axios.delete(`http://localhost:5000/api/remove/${task}`);
		toast.success("Contact Deleted Successfully");
		setTimeout(() => loadData(),500);
	}
}

return(
<div style={{marginTop: "150px"}}>
<Link to="/addTask">
<button className="btn btn-add">Add Tasks</button>
</Link>
<table className="styled-table">
<thead>
	<tr>
        <th style ={{textAlign: "center"}}>No.</th>
	<th style ={{textAlign: "center"}}>Tasks</th>
        <th style ={{textAlign: "center"}}>Last Date</th>
        <th style ={{textAlign: "center"}}>Action</th>
	</tr>
</thead>
<tbody>
{data.map((tasks,index) => {
	return(
	<tr key={tasks.task}>
		<th scope = "row">{index+1}></th>
		<td>{tasks.task}</td>
		<td>{tasks.ls_date}</td>
		<td>
	<button className="btn btn-delete" onClick={() => deleteTask(tasks.task)}>Delete</button>
		</td>
	</tr>
	)
})}
</tbody>
</table>

</div>
)
}

export default Home
