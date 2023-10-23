import db from "../Database";
import { Link } from "react-router-dom";
import "../../index.css";
import { FaEllipsisV } from "react-icons/fa";
import { CiMemoPad } from "react-icons/ci";

function Dashboard() {
  const courses = db.courses;
  const cardColors = ['indianred','steelblue','seagreen']
  return (
    <div className="wd-general">
      <h2>Dashboard</h2>
      <hr/>
      <h4>Published Courses ({courses.length})</h4>
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