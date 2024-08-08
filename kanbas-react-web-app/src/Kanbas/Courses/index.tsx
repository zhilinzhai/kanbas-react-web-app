import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Grade from "./Grade";
import AssignmentComponent from "./Assignment";
import AssignmentEditor from "./Assignment/Editor";
import { FaAlignJustify } from "react-icons/fa";
import Assignments from "./Assignment";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment } from "./Assignment/reducer";
import { courses } from "../Database";
import PeopleTable from "./People/Table";

// export default function Courses({ courses }: { courses: any[]; }) {
//     const { assignments } = useSelector((state: any) => state.assignmentreducer);
//     const { cid } = useParams();
//     const course = courses.find((course) => course._id === cid);
//     const { pathname } = useLocation();
//     const dispatch = useDispatch();

//     return (
//         <div id="wd-courses">
//             <h2 className="text-danger">
//                 <FaAlignJustify className="me-4 fs-4 mb-1" />
//                 {course && course.name} &gt; {pathname.split("/")[4]}
//             </h2>
//             <hr />
//             <div className="d-flex">
//                 <div className="d-none d-md-block">
//                     <CoursesNavigation cid={cid ?? ""} />
//                 </div>
//                 <div className="flex-fill">
//                     <Routes>
//                         <Route path="/"
//                             element={<Navigate to="Home" />} />
//                         <Route path="Home" element={<Home />} />
//                         <Route path="Modules" element={<Modules />} />
//                         <Route path="Assignments"
//                             element={<Assignments />} />
//                         <Route path="Assignments/:id"
//                             element={<AssignmentEditor />} />
//                         {/* <Route
//                             path="Assignments"
//                             element={
//                                 <Assignments
//                                     assignments={assignments}
//                                     deleteAssignment={(assignmentId: string) =>
//                                         dispatch(deleteAssignment(assignmentId))
//                                     }
//                                 />
//                             }
//                         />
//                         <Route
//                             path="Assignments/:id"
//                             element={
//                                 <AssignmentEditor
//                                     addAssignment={(assignment: any) =>
//                                         dispatch(addAssignment(assignment))
//                                     }
//                                     updateAssignment={(updatedAssignment: any) =>
//                                         dispatch(updateAssignment(updatedAssignment))
//                                     }
//                                     assignments={assignments}
//                                 />
//                             }
//                         /> */}
//                         <Route path="Grades" element={<Grade />} />
//                     </Routes>
//                 </div>
//             </div>
//         </div>
//     );
// }


export default function Courses({ courses }: { courses: any[]; }) {
    const {cid} = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" /> 
            {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                <CoursesNavigation cid={cid ?? ""} />
                </div>
                <div className="flex-fill">
                <Routes>
                        <Route path="/"
                            element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments"
                            element={<Assignments />} />
                        <Route path="Assignments/:id"
                            element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grade />} />
                        <Route path="People/:uid" element={<PeopleTable />} /> 
                        <Route path = "People" element ={<PeopleTable/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}



