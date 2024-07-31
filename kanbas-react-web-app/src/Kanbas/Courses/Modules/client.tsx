import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId: string, module: any) => {
    const response = await axios.post( `${COURSES_API}/${courseId}/modules`, module );
    return response.data;
  };
  
export async function deleteModule(moduleId: string) {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`)
  if(response.status !== 204){
    throw Error("Deleting Module failed");
  }
}

export async function updateModule(module: any) {
  const response = await axios.put (`${MODULES_API}/${module._id}`,module);
  console.log(response);
  if (response.status != 204){
  throw new Error("Function not implemented.");
  }
}

