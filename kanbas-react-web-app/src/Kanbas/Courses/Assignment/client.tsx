import axios from "axios";
import { assignments } from "../../Database";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;


export const findAssignmentForCourse = async (assignmentId: string, courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async (assignmentId: string, courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};

export async function deleteAssignment(assignmentId: string) {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`)
    if(response.status !== 204){
      throw Error("Deleting Module failed");
    }
  }

  export async function updateAssignment
  (assignment: any) {
    const response = await axios.put (`${ASSIGNMENTS_API}/${assignment._id}`,assignment);
    console.log(response);
    if (response.status != 204){
    throw new Error("Function not implemented.");
    }
  }