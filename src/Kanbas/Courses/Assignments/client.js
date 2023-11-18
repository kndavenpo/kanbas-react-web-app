import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";

const API_BASE = process.env.REACT_APP_API_BASE;
const ASSIGNMENTS_URL = `${API_BASE}/assignments`;

// NOTE: Copy from Modules (modules > assignments)
// Retrieve Assignments for a Course
export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios
      .get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

// Create Assignment for a Course
export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      assignment
  );
  return response.data;
};

// Delete an assignment
export const deleteAssignment = async (assignmentId) => {
  const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};

// Update assignment
export const updateAssignment = async (assignmentId, assignment) => {
  const response = await axios.put(`${ASSIGNMENTS_URL}/${assignmentId}`, assignment);
  return response.data;
};
