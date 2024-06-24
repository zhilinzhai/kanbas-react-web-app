import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation  } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignment from "./Assignment";
import Grade from "./Grade";
import AssignmentEditor from "./Assignment/Editor";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../Database";


export default function Courses() {
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
                            element={<Assignment />} />
                        <Route path="Assignments/:id"
                            element={<AssignmentEditor />} />
                        <Route path="Assignments/:id" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grade />} /> 
                    </Routes>
                </div>
            </div>
        </div>
    );
}

