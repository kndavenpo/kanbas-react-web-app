import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules";

// A5: 4.3.1 Retrieving Modules for a Course
export const findModulesForCourse = async (courseId) => {
  const response = await axios
      .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

// A5: 4.3.2 Creating Modules for a Course
export const createModule = async (courseId, module) => {
  const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
  );
  return response.data;
};

// A5: 4.3.3 Deleting a module
export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

// A5: 4.3.4 Update module
export const updateModule = async (moduleId, module) => {
  const response = await axios.put(`${MODULES_URL}/${moduleId}`, module);
  return response.data;
};

