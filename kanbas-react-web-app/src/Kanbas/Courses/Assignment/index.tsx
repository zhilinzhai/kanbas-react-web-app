import "./index.css";
import { FaPlus, FaCheckCircle, FaSearch, FaFolderPlus } from "react-icons/fa";
import LessonControlButtons from "./LessonControlButton(Ass)";
import NotebookIcon from "./Notebookicon";
import { BsGripVertical } from "react-icons/bs";
export default function Assignment() {
  return (
    <div id="wd-assignments">
       <div className="d-flex justify-content-between mb-2">
        <div className="input-group" style={{ width: "250px" }}>
          <input type="text" className="form-control" id="wd-search-assignment" placeholder="Search for Assignments" />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">
            <FaSearch />
          </button>
        </div>
        <div className="d-flex">
          <button className="btn btn-outline-primary me-2" id="wd-add-assignment-group">
            <FaFolderPlus className="me-2" />
            Group
          </button>
          <button className="btn btn-outline-danger" id="wd-add-assignment">
            <FaPlus className="me-2" />
            Assignment
          </button>
        </div>
      </div>

      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray"></li>
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS 40% of Total
        </div>

        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
          <BsGripVertical className="me-2 fs-3" />
            <NotebookIcon />         
            A1 - ENV + HTML
            <LessonControlButtons />
          </a>
          <div>
          <div className="ms-4">
            Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
          </div>
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
          <BsGripVertical className="me-2 fs-3" />
            <NotebookIcon />
            A2 - CSS + BOOTSTRAP
            <LessonControlButtons />
          </a>
          <div className="ms-4">
            Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
          <BsGripVertical className="me-2 fs-3" />
            <NotebookIcon />
            A3 - JAVASCRIPT + REACT
            <LessonControlButtons />
          </a>
          <div>
          <div className="ms-4">
            Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
          </div>
          </div>
        </li>
      </ul>
    </div>
  );
}