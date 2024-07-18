import "./index.css";
import { FaPlus, FaSearch, FaFolderPlus, FaPen, FaCheck } from "react-icons/fa";
import LessonControlButtons from "./LessonControlButton(Ass)";
import NotebookIcon from "./Notebookicon";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
import GreenCheckmark from "./GreenCheckmark(Ass)";
import { FaTrashCan, FaX } from "react-icons/fa6";
import { deleteAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { Assignment } from "./AssignmentType";
import React from "react";
import { Assignment } from "./AssignmentType";

export default function AssignmentComponent() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const filteredAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === cid
  );

  return (
    <ul id="wd-assignments" className="list-group rounded-0">
      {/* <li className="wd-assignments list-group-item p-0 mb-5 fs-5"> */}
      <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center bg-third">
        <div>
          <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS
        </div>
        <div style={{ display: "flex" }}>
          <div className="elliptical-button me-2">40% of total</div>
          <div>
            <button
              id="wd-add-assignment"
              className="btn btn-danger"
              onClick={() => {
                window.location.href = window.location.href + "/new";
              }}
            >
              Create Assignment <FaPlus />
            </button>
          </div>
        </div>
      </div>
      {/* </li> */}
      {filteredAssignments.map((assignment: Assignment) => (
        <li
          key={assignment._id}
          className="wd-assignment-list-item list-group-item p-3 ps-1"
        >
          <BsGripVertical className="me-2 fs-3" />
          <NotebookIcon />
          <a
            className="wd-assignment-link"
            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
          >
            {assignment.title}
          </a>
          <div className="float-end ">
            <FaPen
              className="me-2 text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href =
                  window.location.href + "/" + assignment._id;
              }}
            />
            <FaTrashCan
              className="me-2 text-danger"
              style={{ cursor: "pointer" }}
              onClick={() =>
                {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this assignment?"
                    )
                  ) {
                    dispatch(deleteAssignment(assignment._id));
                  }
                }
              }
            />
          </div>
          <div className="row-1">
            <div className="ms-5 text-red">
              Multiple Modules{" "}
              <span className="text-black">
                {" "}
                | Not available until {assignment.Availability} |
              </span>
            </div>
          </div>
          <div className="row-2">
            <div className="ms-5">{assignment.Due} | 100 pts</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

// export default function AssignmentComponent() {
//   db.assignments,
//   deleteAssignment,
// }: {
//   assignments: Assignment[];
//   deleteAssignment: Function;
// }) {

//   const { cid } = useParams();
//   const {assignments} = useSelector((state: any) => state.assignmentreducer);
//   const dispatch = useDispatch();
//   const filteredassignments: Assignment[] = assignments.filter((assignment:any) => assignment.course === cid);
//   return (
//     <ul id="wd-assignments" className="list-group rounded-0">

//       {/* <li className="wd-assignments list-group-item p-0 mb-5 fs-5"> */}
//       <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center bg-third">
//         <div>
//           <BsGripVertical className="me-2 fs-3" />
//           ASSIGNMENTS
//         </div>
//         <div>
//           <div className="elliptical-button me-2">
//             40% of total
//           </div>
//           <button id="wd-add-assignment" className="btn btn-danger" onClick={
//             () => {
//               window.location.href = window.location.href + "/new";
//             }
//           }>
//             Create Assignment <FaPlus />
//           </button>
//         </div>
//       </div>

//       {/* </li> */}
//       {filteredassignments.map((assignment) => (
//         <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" />
//           <NotebookIcon />
//           <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignment/${assignment._id}`}>
//             {assignment.title}
//             <div className="float-end">
//             <FaPen
//               className="text-primary me-4"
//               style={{ cursor: "pointer" }}
//               onClick={()=>
//                 window.location.href = window.location.href + "/"+ assignment._id
//               }
//             />
//             <FaTrashCan
//               className="text-danger me-4"
//               style={{ cursor: "pointer" }}
//               onClick={() => {
//                 dispatch(deleteAssignment(assignment._id));
//               }}
//             />
//               <GreenCheckmark />
//             </div>
//           </a>
//           <div className="row-1">
//             <div className="ms-5 text-red">
//               Multiple Modules <span className="text-black"> | Not available until {assignment.Availability} |</span>
//             </div>
//           </div>
//           <div className="row-2">
//             <div className="ms-5">
//               {assignment.Due} | 100 pts
//             </div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// import "./index.css";
// import { FaPlus, FaSearch, FaFolderPlus } from "react-icons/fa";
// import LessonControlButtons from "./LessonControlButton(Ass)";
// import NotebookIcon from "./Notebookicon";
// import { BsGripVertical } from "react-icons/bs";
// import { useParams } from "react-router";
// import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import * as db from "../../Database";
// import { addAssignment, updateAssignment, deleteAssignment }
//   from "./reducer";

// export default function Assignment() {
//   const paramcid = useParams();
//   const cid = paramcid.id;
//   const [assignmentName, setAssignmentName] = useState("");
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);
//   const assignments = db.assignments.filter((assignment) => assignment.course === cid);
//   const dispatch = useDispatch();

//   return (

//     <ul id="wd-assignments" className="list-group rounded-0">
//       {/* <li className="wd-assignments list-group-item p-0 mb-5 fs-5"> */}
//         <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center bg-third">
//           <div>
//             <BsGripVertical className="me-2 fs-3" />
//             ASSIGNMENTS
//           </div>
//           <div className="elliptical-button">
//             40% of total
//           </div>
//         </div>
//       {/* </li> */}
//       {assignments.map((assignment) => (
//         <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" />
//           <NotebookIcon />
//           <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
//             {assignment.title}
//             <LessonControlButtons />
//           </a>
//           <div className="row-1">
//             <div className="ms-5 text-red">
//               Multiple Modules <span className="text-black"> | Not available until {assignment.Availability} |</span>
//             </div>
//           </div>
//           <div className="row-2">
//             <div className="ms-5">
//               {assignment.Due} | 100 pts
//             </div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }
