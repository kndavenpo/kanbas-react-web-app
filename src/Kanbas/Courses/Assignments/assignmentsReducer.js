import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  assignment: {title: "New Assignment", course: "RS100", description: "New Assignment Description", points: "100",
    due: "2023-06-15", available_from: "2023-06-01", available_to: "2023-06-15"}
}

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      state.assignments = [
        {...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
      ];
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
      );
    },

    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const { addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;