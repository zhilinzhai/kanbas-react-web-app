import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const ASSIGNMENTS_API =`${REMOTE_SERVER}/api/assignments`;

export const updateAssignment = async (assignment: any) => {
    const response = await axios.
      put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
  };


