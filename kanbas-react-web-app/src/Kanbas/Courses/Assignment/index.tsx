import "./index.css";
import { FaPlus, FaSearch, FaFolderPlus } from "react-icons/fa";
import LessonControlButtons from "./LessonControlButton(Ass)";
import NotebookIcon from "./Notebookicon";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";

// export default function Assignment() {
//   return (
//     <div id="wd-assignments">
//       <div className="d-flex justify-content-between mb-2">
//         <div className="input-group" style={{ width: "250px" }}>
//           <input type="text" className="form-control" id="wd-search-assignment" placeholder="Search for Assignments" />
//           <button className="btn btn-outline-secondary" type="button" id="button-addon2">
//             <FaSearch />
//           </button>
//         </div>
//         <div className="d-flex">
//           <button className="btn btn-outline-primary me-2" id="wd-add-assignment-group">
//             <FaFolderPlus className="me-2" />
//             Group
//           </button>
//           <button className="btn btn-outline-danger" id="wd-add-assignment">
//             <FaPlus className="me-2" />
//             Assignment
//           </button>
//         </div>
//       </div>


//       <ul id="wd-assignments" className="list-group rounded-0">
//         <li className="wd-assignments list-group-item p-0 mb-5 fs-5"></li>
//         <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center bg-third">
//           <div>
//             <BsGripVertical className="me-2 fs-3" />
//             ASSIGNMENTS
//           </div>
//           <div className="elliptical-button">
//             40% of total
//           </div>
//         </div>

//         <li className="wd-assignment-list-item list-group-item p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" />
//           <NotebookIcon />
//           <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
//             A1 - ENV + HTML
//             <LessonControlButtons />
//           </a>
//           <div className="row-1">
//             <div className="ms-5 text-red">
//               Multiple Modules <span className="text-black"> | Not available until May 6 at 12:00am |</span>
//             </div>
//           </div>
//           <div className="row-2">
//             <div className="ms-5">
//               Due May 13 at 11:59pm | 100 pts
//             </div>
//           </div>
//         </li>

//         <li className="wd-assignment-list-item list-group-item p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" />
//           <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
//             <NotebookIcon />
//             A2 - CSS + BOOTSTRAP
//             <LessonControlButtons />
//           </a>
//           <div className="row-1">
//             <div className="ms-5 text-red">
//               Multiple Modules <span className="text-black"> | Not available until May 13 at 12:00am |</span>
//             </div>
//           </div>
//           <div className="row-2">
//             <div className="ms-5">
//               Due May 30 at 11:59pm | 100 pts
//             </div>
//           </div>
//         </li>

//         <li className="wd-assignment-list-item list-group-item p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" />
//           <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
//             <NotebookIcon />
//             A3 - JAVASCRIPT + REACT
//             <LessonControlButtons />
//           </a>
//           <div className="row-1">
//             <div className="ms-5 text-red">
//               Multiple Modules <span className="text-black"> | Not available until May 20 at 12:00am |</span>
//             </div>
//           </div>
//           <div className="row-2">
//             <div className="ms-5">
//               Due May 27 at 11:59pm | 100 pts
//             </div>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }


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
