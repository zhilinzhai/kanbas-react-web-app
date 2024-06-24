import "./index.css";
import {useLocation } from "react-router";
export default function CoursesNavigation({cid}:{cid:string}) {
   const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
   const {pathname} = useLocation();
   const currentLocation = pathname.split("/")[4];
 
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {
         links.map((item) => (
            <a id={`wd-courses-${item}-link`} href={`#/Kanbas/Courses/${cid}/${item}`}
            className={`list-group-item border border-0 ${currentLocation === item ? "active" : "text-danger"}`}>
               {item}
            </a>
         ))
      }
    </div>
  );
}
 
 
 
 
 












// import { Navigate, Route, Routes,useParams,useLocation } from "react-router";
// import { Link } from "react-router-dom";
// import"./index.css";


// export default function CoursesNavigation() {
//    const { pathname } = useLocation();
//    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];


//     return (
        
//       <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
//           <a id="wd-course-home-link" href="#/Kanbas/Courses/1234/Home"
//              className="list-group-item active border border-0"> Home </a>
//           <a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules"
//              className="list-group-item text-danger border border-0"> Modules </a>
//           <a id="wd-course-piazza-link" href="#/Kanbas/Courses/1234/Piazza"
//              className="list-group-item text-danger border border-0"> Piazza </a>
//           <a id="wd-course-zoom-link" href="#/Kanbas/Courses/1234/Zoom"
//              className="list-group-item text-danger border border-0"> Zoom </a>
//           <a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"
//              className="list-group-item text-danger border border-0"> Assignments </a>
//           <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes"
//              className="list-group-item text-danger border border-0"> Quizzes </a>
//           <a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades"
//              className="list-group-item text-danger border border-0"> Grades </a>
//         </div>
           
//     );
// }


 {/* <li><a id="wd-course-zoom-link" href="#/Kanbas/Courses/1234/Zoom">Zoom</a></li> */}
 {/* <li><a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"> Assignments</a></li> */}
 {/* <li><a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes">Quizzes</a></li> */}
 {/* <li><a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades">Grades</a></li> */}

