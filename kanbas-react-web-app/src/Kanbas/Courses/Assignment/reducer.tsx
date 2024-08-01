
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { Assignment } from "./AssignmentType";

const initialState = {
  assignments: assignments as Assignment[],
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (
      state,
      { payload: assignment }: PayloadAction<Omit<Assignment, "_id">>
    ) => {
      const newAssignment: Assignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };

      state.assignments = [...state.assignments, newAssignment];
    },

    // set module
    setAssignment: (state, action) => {
      console.log(action.payload,"HELLO world");
      state.assignments = action.payload;
    },

    deleteAssignment: (
      state,
      { payload: assignmentId }: PayloadAction<string>
    ) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },

    updateAssignment: (
      state,
      { payload: updatedAssignment }: PayloadAction<Assignment>
    ) => {
      state.assignments = state.assignments.map((a) =>
        a._id === updatedAssignment._id ? updatedAssignment : a
      );
    }
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment
} = assignmentSlice.actions;
export default assignmentSlice.reducer;

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
//       const newAssignment: any = {
//         _id: assignment._id,
//         title: assignment.title,
//         description: assignment.description,
//         due_date: assignment.Due,
//         available_date: assignment.Availability,
//         course: assignment.course
//       };
//       state.assignments = [...state.assignments, newAssignment] as any;
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (m: any) => m._id !== assignmentId);
//     },
//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((m: any) =>
//         m._id === assignment._id ? assignment : m
//       ) as any;
//     },
//     editAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.map((m: any) =>
//         m._id === assignmentId ? { ...m, editing: true } : m
//       ) as any;
//     },
//   },
// });
// export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
//   assignmentsSlice.actions;
// export default assignmentsSlice.reducer;


