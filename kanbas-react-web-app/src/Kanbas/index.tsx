import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { Routes, Route, Navigate } from "react-router";
import "./styles.css";
import AssignmentEditor from "./Courses/Assignment/Editor";
export default function Kanbas() {
    return (
        <div id="wd-kanbas" className="h-100">
            <div className="d-flex h-100">
                <div className="d-none d-md-block bg-black">
                    <KanbasNavigation />
                </div>

                <div className="flex-fill p-4">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="Courses/:cid/*" element={<Courses />} />
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                        <Route path="Inbox" element={<h1>Inbox</h1>} />
                        <Route path="Courses/:cid/Assignments/:aid" element={<AssignmentEditor />} />

                    </Routes>
                </div>
            </div>
        </div >
    );
}     