import {Navigate, Route, Routes} from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import axios from "axios";
import db from "./Database";
import store from "./store";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";

function Kanbas() {
  // A5: 4.2.1 Retrieving Courses
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  }
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course", number: "New Number", startDate: "2023-09-10", endDate: "2023-12-15",
  });

  // A5: 4.2.2 Create New Course
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  // A5: 4.2.3 Delete Course
  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
        `${URL}/${course._id}`
    );
    setCourses(courses.filter((course) => course._id !== courseId));
  }

  // A4: Courses
  const updateCourse = () => {
    setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
    );
  };

  return (
      <div className="d-flex">
        <Provider store={store}>
          <div className="d-flex">
            <KanbasNavigation />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<Account />} />
              <Route path="Dashboard" element={<Dashboard
                  courses = {courses}
                  course = {course}
                  setCourse = {setCourse}
                  addNewCourse = {addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>
              } />
              <Route path="Courses/:courseId/*" element={
                <Courses courses = {courses} />} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
            </Routes>
          </div>
      </Provider>
      </div>
  );
}
export default Kanbas;
