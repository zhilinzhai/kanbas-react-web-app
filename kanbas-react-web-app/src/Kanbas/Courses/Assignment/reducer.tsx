// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

// const initialState = {
//   assignments: assignments,
// };

// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment = {
//         _id: new Date().getTime().toString(),
//         ...assignment,
//       };
//       state.assignments = [...state.assignments, newAssignment];
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
//     },
//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((a: any) => 
//         a._id === assignment._id ? assignment : a
//       );
//     },
//   },
// });

// export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment :any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        name: assignment.name,
        course: assignment.course
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignment._id ? assignment : a
        ) as any;
      },
  
    editAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) => 
        a._id === assignment._id ? { ...a, editing: true } : a
        ) as any;

    
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

