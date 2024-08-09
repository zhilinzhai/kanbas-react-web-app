import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { Routes, Route, Navigate } from "react-router";
import "./styles.css";
import AssignmentEditor from "./Courses/Assignment/Editor";
// import * as db from "./Database";
import * as client from "./Courses/client";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import Assignments from "./Courses/Assignment";
import AssignmentComponent from "./Courses/Assignment";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";


export default function Kanbas() {
    // const [courses, setCourses] = useState<any[]>(db.courses);
    const [courses, setCourses] = useState<any[]>([]);
    const fetchCourses = async () => {
      const courses = await client.fetchAllCourses();
      setCourses(courses);
    };
    useEffect(() => {
      fetchCourses();
    }, []);
  
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });
    const addNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        setCourses([...courses, { ...course, newCourse }]);
    };
    // const deleteCourse = (courseId: any) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };

    const deleteCourse = async (courseId: string) => {
        await client.deleteCourse(courseId);
        setCourses(courses.filter(
          (c) => c._id !== courseId));
      };
    
    const updateCourse = async() => {
        await client.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
    return (
        <Provider store={store}>
            <div id="wd-kanbas" className="h-100">
                <div className="d-flex h-100">
                    <div className="d-none d-md-block bg-black">
                        <KanbasNavigation />
                    </div>
                    <div className="flex-fill p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Dashboard" element={
                                <ProtectedRoute>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse} 
                                    />
                                    </ProtectedRoute>          
                            } />
                            <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                            <Route path="/" element={<Navigate to="Dashboard" />} />       
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="Calendar" element={<h1>Calendar</h1>} />
                            <Route path="Inbox" element={<h1>Inbox</h1>} />

                            {/* <Route path="Courses/:cid/Assignment/:aid" element={<AssignmentEditor />} /> 
                            <Route path="Assignments" element={<AssignmentComponent/>}/> */}

                        </Routes>
                    </div>
                </div>
            </div >
        </Provider>
    );
}     