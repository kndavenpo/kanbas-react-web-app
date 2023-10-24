import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { HiPlus } from "react-icons/hi";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);
  return (
      <div className={'wd-general'}>
        <div className="row">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Search for Assignment"></input>
          </div>
          <div className="col-md-8 text-end module-buttons">
            <button type="button" className="btn btn-secondary">
              < HiPlus className = "wd-icon" style={{ color: "white" }} />
              Group
            </button>
            <button type="button" className="btn btn-danger">
              < HiPlus className = "wd-icon" style={{ color: "white" }} />
              Assignment
            </button>
          </div>
        </div><hr/>
        <br/>
        <div className="list-group assignments">
          <div className="list-group-item" style={{ background: "lightgray" }}>
            <strong>ASSIGNMENTS</strong>
            <div className="float-end spacer">
              <button type="button" className="btn btn-outline-dark btn-sm oval-button">40% of total</button>
              <HiPlus className="wd-icon spacer" />
              <FaEllipsisV className="wd-icon" />
            </div>
          </div>
          {courseAssignments.map((assignment) => (
              <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="list-group-item">
                {assignment.title}
                <div className="float-end">
                  <AiFillCheckCircle className="wd-icon spacer" style={{ color: "green" }} />
                  <FaEllipsisV className="wd-icon" />
                </div>
              </Link>
          ))}
        </div>
      </div>
  );
}
export default Assignments;