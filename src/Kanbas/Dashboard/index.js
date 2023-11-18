import {Link} from "react-router-dom";
import {React} from "react"
import "../../index.css";
import {FaEllipsisV} from "react-icons/fa";
import {CiMemoPad} from "react-icons/ci";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";

function Dashboard ({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  const cardColors = ['indianred','steelblue','seagreen', 'orange','forestgreen','darkblue']
  const dispatch = useDispatch();

  return (
      <div className="wd-general">
        <h2>Dashboard</h2>
        <hr/>
        <h4>Published Courses ({courses.length})</h4>
        <div className="row wd-dashboard-grid col-md-8">
          <li className="list-group-item">
            <input value={course.number} className="col-md-8 module-header"
                   onChange={(e) =>
                       setCourse( { ...course, number: e.target.value})}/><br/>

            <button className="btn btn-success float-end spacer" onClick={addNewCourse} >
              Add
            </button>
            <button className="btn btn-primary float-end spacer" onClick = {updateCourse}>
              Update
            </button>

            <textarea className = "col-md-8 module-header"
                value={course.name}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
            /><hr/>

            <div className="list-group">
              {courses.map((course) => (
                  <div key={course._id} className="list-group-item">
                    {course.name}
                    <button type="button" className="btn btn-success float-end spacer"
                        onClick={() => setCourse(course)}>Edit</button>
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

