import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignment from "./Assignment";
import AssignmentEditor from "./Assignment/Editor";
export default function Courses() {

    return (
        <div id="wd-courses">
            <h2>Course 1234</h2>
            <hr />
            <table>
                <tr>
                    <td valign="top">
                        <CoursesNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/"
                                element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments"
                                element={<Assignment/>} />
                            <Route path="Assignments/:id"
                                element={<AssignmentEditor/>} />
                            <Route path="Assignments/:id" element={<AssignmentEditor />} />
                        </Routes>

                    </td>
                </tr>
            </table>
        </div>
    );
}
