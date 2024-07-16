import "./index.css";
import { FaPlus, FaSearch, FaFolderPlus } from "react-icons/fa";
import LessonControlButtons from "./LessonControlButton(Ass)";
import NotebookIcon from "./Notebookicon";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";


export default function Assignment() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);

  return (
    <ul id="wd-assignments" className="list-group rounded-0">
      {/* <li className="wd-assignments list-group-item p-0 mb-5 fs-5"> */}
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center bg-third">
          <div>
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
          </div>
          <div className="elliptical-button">
            40% of total
          </div>
        </div>
      {/* </li> */}
      {assignments.map((assignment) => (
        <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <NotebookIcon />
          <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
            {assignment.title}
            <LessonControlButtons />
          </a>
          <div className="row-1">
            <div className="ms-5 text-red">
              Multiple Modules <span className="text-black"> | Not available until {assignment.Availability} |</span>
            </div>
          </div>
          <div className="row-2">
            <div className="ms-5">
              {assignment.Due} | 100 pts
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}



// export default function Assignment() {
//   const { cid } = useParams();
//   const assignments = db.assignments.filter((assignment) => assignment.course === cid);

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


// import "./index.css";
// import { FaPlus, FaSearch, FaFolderPlus } from "react-icons/fa";
// import LessonControlButtons from "./LessonControlButton(Ass)";
// import NotebookIcon from "./Notebookicon";
// import { BsGripVertical } from "react-icons/bs";
// import { useParams } from "react-router";
// import * as db from "../../Database";

// export default function Assignment() {
//   const { cid } = useParams();
//   const assignments = db.assignments.filter((assignment) => assignment.course === cid);

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

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { deleteAssignment } from "./reducer";
// import { FaTrash } from "react-icons/fa";

// export default function Assignments() {
//   const { assignments } = useSelector((state: any) => state.assignments);
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const handleDelete = (assignmentId: string) => {
//     if (window.confirm("Are you sure you want to remove the assignment?")) {
//       dispatch(deleteAssignment(assignmentId));
//     }
//   };

//   return (
//     <div className="assignments">
//       <button onClick={() => history.push("/Kanbas/Courses/Assignments/Editor")} className="btn btn-primary">
//         + Assignment
//       </button>
//       <ul className="list-group rounded-0">
//         {assignments.map((assignment: any) => (
//           <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
//             <span onClick={() => history.push(`/Kanbas/Courses/Assignments/Editor/${assignment._id}`)}>
//               {assignment.name}
//             </span>
//             <FaTrash onClick={() => handleDelete(assignment._id)} className="text-danger" />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




