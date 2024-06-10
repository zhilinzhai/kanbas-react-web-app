import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div id="wd-home" className="d-flex">
            <div className="flex-fill me-5">
                {/* <button>Collapse All</button>
                <button>View Progress</button> */}
                {/* <select>
                    <option value="publish">Publish</option>
                    <option value="publishAll">Publish All</option>
                    <option value="unpublishAll">Unpublish All</option>
                </select> */}
                {/* <button>+ Module</button> */}
                <Modules />
            </div>
            <div className="d-none d-xl-block">
                <CourseStatus />
            </div>
        </div>
    );
}
