import {Navigate, Route, Routes} from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
// import Account from "./Account";     -- OLD ACCOUNTnp
import Dashboard from "./Dashboard";
import axios from "axios";
import store from "./store";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import SignIn from "./users/signin";      // A6 - 3.5.1
import Account from "./users/account";    // A6 - 3.5.2
import UserTable from "./users/table";    // A6 - 3.5.4
import SignUp from "./users/signup";      // A6 - 3.5.9

function Kanbas() {
  // A5: 4.2.1 Retrieving Courses
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  }
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course Name", number: "New Course Number", startDate: "2023-09-10", endDate: "2023-12-15",
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

  // Updated with Professor on 11/14/2023
  const updateCourse = async () => {
    const response = await axios.put(
        `${URL}/${course._id}`,
        course
    );
    setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          }
          return c;
        })
    );
    setCourse({ name: "" });
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
              {/* A6 - 3.5.1*/}
              <Route path="/signin" element={<SignIn />} />

              {/* A6 - 3.5.2*/}
              <Route path="/account" element={<Account />} />

              {/* A6 - 3.5.4*/}
              <Route path="/admin/users" element={<UserTable />} />

              {/* A6 - 3.5.8*/}
              <Route path="account/:id" element={<Account />} />

              {/* A6 - 3.5.9*/}
              <Route path="/signup" element={<SignUp />} />

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