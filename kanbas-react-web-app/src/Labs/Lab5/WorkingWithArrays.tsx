
import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithArrays() {
    const API = `${REMOTE_SERVER}/lab5/todos`;
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [assignmentRetriveID, setAssignmentRetriveID] = useState("");
    const [assignmentUpdateID, setAssignmentUpdateID] = useState("");
    const [assignmentDeleteID, setAssignmentDeleteID] = useState("");
    const [assignmentUpdateTitle, setAssignmentUpdateTitle] = useState("");
    const [assignmentUpdateDescription, setAssignmentUpdateDescription] = useState("")
    const [assignmentCompletion, setAssignmentCompletion] = useState("false")


    const handleLink = (link: string) => {
        window.location.assign(link);
    }
    

    return (
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </a><hr />

            {/* Get Todo */}
            <h4>Retrieving an Item from an Array by ID</h4>
            <button id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" disabled={assignmentRetriveID.trim() === ""} onClick={() => handleLink(`${API}/${todo.id}`)} >
                Get Todo by ID
            </button>
            <input id="wd-todo-id" value={assignmentRetriveID} className="form-control w-50"
                onChange={(e) => setAssignmentRetriveID(e.target.value)} />
            <hr />

            {/* Create Todo */}
            <h3>Creating new Items in an Array</h3>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
                href={`${API}/create`}>
                Create Todo
            </a><hr />

            {/* Delete Todo */}
            <h3>Deleting from an Array</h3>
            <button id="wd-retrieve-completed-todos" className="btn btn-primary float-end" disabled={assignmentDeleteID.trim() === ""} onClick={() => handleLink(`${API}/${todo.id}/delete`)}>
                Delete Todo with ID = {assignmentDeleteID} </button>
            <input value={assignmentDeleteID} className="form-control w-50" onChange={(e) => setAssignmentDeleteID(e.target.value)} /><hr />

            {/* Update Todo */}

            <h3>Updating TODOS</h3>
            <input value={assignmentUpdateID} className="form-control w-50" placeholder="Please Enter the ID for todo that you want to update"
                onChange={(e) => setAssignmentUpdateID(e.target.value)} />

            <h3>Updating Title</h3>
            <button onClick={() => handleLink(`${API}/${assignmentUpdateID}/title/${assignmentUpdateTitle}`)} className="btn btn-primary float-end" disabled={assignmentUpdateID.trim() === "" && assignmentUpdateTitle.trim() === ""}>
                Update ID</button>
            <input value={assignmentUpdateTitle} className="form-control w-50 float-start"
                onChange={(e) => setAssignmentUpdateTitle(e.target.value)} />
            <br /><br /><hr />


            <h3>Updating Description</h3>
            <button onClick={() => handleLink(`${API}/${assignmentUpdateID}/description/${assignmentUpdateDescription}`)} className="btn btn-primary float-end" disabled={assignmentUpdateID.trim() === "" && assignmentUpdateDescription.trim() === ""}>
                Update Description</button>
            <input value={assignmentUpdateDescription} className="form-control w-50 float-start"
                onChange={(e) => setAssignmentUpdateDescription(e.target.value)} />
            <br /><br /><hr />

            <h3>Updating Complete status</h3>
            <button onClick={() => handleLink(`${API}/${assignmentUpdateID}/completed/${assignmentCompletion}`)} className="btn btn-primary float-end" disabled={assignmentUpdateID.trim()==="" && assignmentCompletion.trim() === ""}>
                Update Description</button>

            <select name="completion-status" id="completion-status" defaultValue={assignmentCompletion} onChange={(e)=>console.log(e.target.value)}>
                <option value="true">Completed</option>
                <option value="false">Not Completed</option>
            </select>
            <br /><br /><hr />

            {/* <input value={assignmentUpdateDescription} className="form-control w-50 float-start"
                onChange={(e) => setAssignmentUpdateDescription(e.target.value)} />
            <br /><br /><hr /> */}




        </div>
    );
}
