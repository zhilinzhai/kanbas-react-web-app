import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <table id="wd-home">
            <tr>
                <td>
                    <button>Collapse All</button>
                    <button>View Progress</button>
                    <select>
                            <option value="publish">Publish</option>
                            <option value="publishAll">Publish All</option>
                            <option value="unpublishAll">Unpublish All</option>
                        </select>
                    <button>+ Module</button>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <Modules />
                </td>
                <td valign="top">
                    <CourseStatus />
                </td>
            </tr>
        </table>
    );
}
