import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
      const [assignmentTitle, setAssignmentTitle] = useState("")
      const [assignmentRetriveID,setAssignmentRetriveID] = useState("")
      const [assignmentUpdateID,setAssignmentUpdateID] = useState("")
      const [assignmentDeleteID,setAssignmentDeleteID] = useState("")
      
  return (
    <div >
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignmentTitle}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={assignmentTitle} onChange={(e) =>
            setAssignmentTitle(e.target.value)}/>
      <hr />


    </div>
);}
