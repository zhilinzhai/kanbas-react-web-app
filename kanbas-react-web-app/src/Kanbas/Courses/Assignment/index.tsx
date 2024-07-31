import "./index.css";
import { FaPlus, FaSearch, FaFolderPlus, FaPen, FaCheck } from "react-icons/fa";
import LessonControlButtons from "./LessonControlButton(Ass)";
import NotebookIcon from "./Notebookicon";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
import GreenCheckmark from "./GreenCheckmark(Ass)";
import { FaTrashCan, FaX } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
//import { Assignment } from "./AssignmentType";
import React from "react";
import { Assignment } from "./AssignmentType";
import * as client from "./client";
import { setAssignment, addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useState, useEffect } from "react";

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
              onClick={async () =>
                {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this assignment?"
                    )
                  ) {
                    //await client.deleteAssignment(assignmentId)
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
//   const { cid, aid } = useParams();
//   const dispatch = useDispatch();
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);
//   const filteredAssignments = assignments.filter(
//     (assignment: Assignment) => assignment.course === cid
//   );

//   const createAssignment = async (assignment: any) => {
//     try {
//       const newAssignment
//        = await client.createAssignment (aid as string,cid as string, assignment);
//        dispatch(createAssignment(newAssignment));
//     } catch (error) {
//       console.error("Error creating assignment:", error);
//     }
//   };

//   const fetchModules = async () => {
//     try {
//       const modules = await client.findAssignmentForCourse(aid as string,cid as string);
//       dispatch(setAssignment(modules));
//     } catch (error) {
//       console.error("Error fetching assignments:", error);
//     }
//   };

//   useEffect(() => {
//     fetchModules();
//   }, [cid]);

//   const removeAssignment = async (assignmentId: string) => {
//     try {
//       await client.deleteAssignment(assignmentId);
//       dispatch(deleteAssignment(assignmentId));
//     } catch (error) {
//       console.error("Error deleting assignment:", error);
//     }
//   };

//   const saveAssignment = async (assignment: any) => {
//     try {
//       await client.updateAssignment(assignment);
//       dispatch(updateAssignment(assignment));
//     } catch (error) {
//       console.error("Error updating assignment:", error);
//     }
//   };


//   return (
//     <ul id="wd-assignments" className="list-group rounded-0">
//       {/* <li className="wd-assignments list-group-item p-0 mb-5 fs-5"> */}
//       <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center bg-third">
//         <div>
//           <BsGripVertical className="me-2 fs-3" />
//           ASSIGNMENTS
//         </div>
//         <div style={{ display: "flex" }}>
//           <div className="elliptical-button me-2">40% of total</div>
//           <div>
//             <button
//               id="wd-add-assignment"
//               className="btn btn-danger"
//               onClick={() => {
//                 window.location.href = window.location.href + "/new";
//               }}
//             >
//               Create Assignment <FaPlus />
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* </li> */}
//       {filteredAssignments.map((assignment: Assignment) => (
//         <li
//           key={assignment._id}
//           className="wd-assignment-list-item list-group-item p-3 ps-1"
//         >
//           <BsGripVertical className="me-2 fs-3" />
//           <NotebookIcon />
//           <a
//             className="wd-assignment-link"
//             href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
//           >
//             {assignment.title}
//           </a>
//           <div className="float-end ">
//             <FaPen
//               className="me-2 text-primary"
//               style={{ cursor: "pointer" }}
//               onClick={() => {
//                 window.location.href =
//                   window.location.href + "/" + assignment._id;
//               }}
//             />
//             <FaTrashCan
//               className="me-2 text-danger"
//               style={{ cursor: "pointer" }}
//               onClick={async () =>
//                 {
//                   if (
//                     window.confirm(
//                       "Are you sure you want to delete this assignment?"
//                     )
//                   ) {
//                     //await client.deleteAssignment(assignmentId)
//                     dispatch(deleteAssignment(assignment._id));
//                   }
//                 }
//               }
//             />
//           </div>
//           <div className="row-1">
//             <div className="ms-5 text-red">
//               Multiple Modules{" "}
//               <span className="text-black">
//                 {" "}
//                 | Not available until {assignment.Availability} |
//               </span>
//             </div>
//           </div>
//           <div className="row-2">
//             <div className="ms-5">{assignment.Due} | 100 pts</div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }
