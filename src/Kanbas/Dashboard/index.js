import db from "../Database";
import { Link } from "react-router-dom";
import { React, useState} from "react"
import "../../index.css";
import { FaEllipsisV } from "react-icons/fa";
import { CiMemoPad } from "react-icons/ci";

function Dashboard ({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  const cardColors = ['indianred','steelblue','seagreen', 'orange','forestgreen','darkblue']

  return (
      <div className="wd-general">
        <h2>Dashboard</h2>
        <hr/>
        <h4>Published Courses ({courses.length})</h4>
        <div className="row wd-dashboard-grid col-md-8">
          <li className="list-group-item">
            <input value={course.name} className="col-md-8 module-header"
                   onChange={(e) => setCourse( { ...course, name: e.target.value})}/>

            <button className="btn btn-success float-end spacer" onClick={addNewCourse} >
              Add
            </button>
            <button className="btn btn-primary float-end spacer" onClick = {updateCourse}>
              Update
            </button>
            <input value={course.number} className="col-md-8 module-header"
                   onChange={(e) => setCourse( { ...course, number: e.target.value})}/>
            {/*<input value={course.startDate} className= "col-md-6 module-header form-control" type = "date"*/}
            {/*       onChange={(e) => setCourse( { ...course, startDate: e.target.value})}/>*/}
            {/*<input value={course.endDate} className= "col-md-6 module-header form-control" type = "date"*/}
            {/*       onChange={(e) => setCourse( { ...course, endDate: e.target.value})}/>*/}
            <hr/>
            <div className="list-group">
              {courses.map((course) => (
                  <div key={course._id} className="list-group-item">
                    {course.name}
                    <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-warning float-end spacer">
                      Edit
                    </Link>
                    <button
                        className="btn btn-danger float-end spacer"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                    >
                      Delete
                    </button>
                  </div>
              ))}
            </div>
          </li>
        </div>
        <div className="row wd-dashboard-grid">
          {courses.map((course, index) => (
              <div key={course._id} className="col-md-3" style={{ color: cardColors[index] }}>
                <div className="card h-100">
                  <div className="card-header" style={{ backgroundColor: cardColors[index] }}>
                    < FaEllipsisV className = "wd-icon" style={{ float: "right", color: "white" }} />
                  </div>
                  <div className="card-body">
                    <p className="card-title" style={{ color: cardColors[index] }}>{course.number}</p>
                    <Link to={`/Kanbas/Courses/${course._id}`} className="card-text">
                      {course.number + "." + course.name}
                    </Link>
                    <br/><br/>
                    < CiMemoPad className = "wd-icon" style={{ color: "grey", fontSize: "1.5em" }}/>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}
export default Dashboard;

// OLD CODE
// const [courses, setCourses] = useState(db.courses);
// const [course, setCourse] = useState({
//   name: "New Course", number: "New Number", startDate: "2023-09-10", endDate: "2023-12-15",
// });
// const addNewCourse = () => {
//   setCourses([ ...courses, { ... course, _id: new Date().getTime() }]);
//     };
// const deleteCourse = (courseId) => {
//   setCourses(courses.filter((course) => course._id !== courseId));
// }
// const updateCourse = () => {
//   setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//   );
// };