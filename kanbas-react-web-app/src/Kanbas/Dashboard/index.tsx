import "./index.css";
import { Link } from "react-router-dom";
import * as db from "../Database";

// export default function Dashboard() {
//   const courses = db.courses;
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />

//       <div id="wd-dashboard-courses" className="container">
//         <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/reactjs.jpg"  />
//               <div className="card-body">
//                 <a className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1234/Home"
//                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                   CS1234 React JS
//                 </a>
//                 <p className="wd-dashboard-course-title">
//                   Full Stack software developer
//                 </p>
//                 <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/Mysql.jpg" />
//               <div className="card-body">
//                 <a className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1235/Home"
//                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                   CS5200 Database Management
//                 </a>
//                 <p className="wd-dashboard-course-title card-text">
//                   SQL Database Development
//                 </p>
//                 <a href="#/Kanbas/Courses/1235/Home" className="btn btn-primary"> Go </a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/R language.jpg"  />
//               <div className="card-body">
//                 <a className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1235/Home"
//                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                   DS5010 Data Mining Technique
//                 </a>
//                 <p className="wd-dashboard-course-title">
//                   Data Mining Technique with R language
//                 </p>
//                 <a href="#/Kanbas/Courses/1235/Home" className="btn btn-primary">Go</a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/Python.jpg" />
//               <div className="card-body">
//                 <a className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1235/Home"
//                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                   CS5010 Fundamental of CS
//                 </a>
//                 <p className="wd-dashboard-course-title">
//                   Fundamental of CS with Python language
//                 </p>
//                 <a href="#/Kanbas/Courses/1235/Home" className="btn btn-primary">Go</a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/Java.jpg" />
//               <div className="card-body">
//                 <a className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1235/Home"
//                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                   CS5004 Object-Oriented Design
//                 </a>
//                 <p className="wd-dashboard-course-title">
//                   Object-Oriented Design with Java language
//                 </p>
//                 <a href="#/Kanbas/Courses/1235/Home" className="btn btn-primary" >Go</a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/C language.jpg"  />
//               <div className="card-body">
//                 <a className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1235/Home"
//                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                   CS5001 Data Structure
//                 </a>
//                 <p className="wd-dashboard-course-title">
//                   Data Structure in C language
//                 </p>
//                 <a href="#/Kanbas/Courses/1235/Home" className="btn btn-primary">Go</a>
//               </div>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <img src="/images/Figma.jpg" />
//               <div className="card-body">
//                 <a className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/1235/Home"
//                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                   CS5340 Human-Computer Interaction Design
//                 </a>
//                 <p className="wd-dashboard-course-title">
//                   Interface Design with Figma
//                 </p>
//                 <a href="#/Kanbas/Courses/1235/Home" className="btn btn-primary">Go</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.jpg" height="{160}" />
                  <div className="card-body">
                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                                             {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




