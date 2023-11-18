import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { HiPlus } from "react-icons/hi";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import AssignmentEditor from "./AssignmentEditor";

import {useDispatch, useSelector} from "react-redux";
import {addAssignment, deleteAssignment, setAssignment, updateAssignment} from "./assignmentsReducer";
import {deleteModule, setModule} from "../Modules/modulesReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();


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
        <div className="row">
          <li className="list-group-item col-md-8">
            <h6>Assignment Name</h6>
            <input value={assignment.title}
                   onChange={(e) =>
                       dispatch(setAssignment({ ...assignment, title: e.target.value }))}
                   className = "col-md-8 module-header"/>
            <button type="button" className="btn btn-success float-end spacer" onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}>
              Add
            </button>
            <button type="button" className="btn btn-primary float-end spacer" onClick={() => dispatch(updateAssignment(assignment))}>
              Update
            </button>
            <br/>
            <textarea value={assignment.description} onChange={(e) =>
                dispatch(setAssignment({ ...assignment, description: e.target.value }))}
                      className = "col-md-8 module-header"/>
            <input value={assignment.points} onChange={(e) =>
                dispatch(setAssignment({ ...assignment, points: e.target.value }))}
                      className = "col-md-8 module-header"/>
            <input value={assignment.due} onChange={(e) =>
                dispatch(setAssignment({ ...assignment, due: e.target.value }))}
                      className = "col-md-8 module-header"/>
            <input value={assignment.available_from} onChange={(e) =>
                dispatch(setAssignment({ ...assignment, available_from: e.target.value }))}
                      className = "col-md-8 module-header"/>
            <input value={assignment.available_to} onChange={(e) =>
                dispatch(setAssignment({ ...assignment, available_to: e.target.value }))}
                      className = "col-md-8 module-header"/>
          </li>
        </div><hr/><br/>
        <div className=" row list-group assignments">
          <div className="list-group-item" style={{ background: "lightgray" }}>
            <strong>ASSIGNMENTS</strong>
            <div className="float-end spacer">
              <button type="button" className="btn btn-outline-dark btn-sm oval-button">40% of total</button>
              <HiPlus className="wd-icon spacer" />
              <FaEllipsisV className="wd-icon" />
            </div>
          </div>
          {courseAssignments.map((assignment, index) => (
              <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="list-group-item">
                {assignment.title}
                <div className="float-end">
                  <AiFillCheckCircle className="wd-icon spacer" style={{ color: "green" }} />
                  <FaEllipsisV className="wd-icon" />
                  <button type="button" className="btn btn-success float-end spacer"
                          onClick={() => dispatch(setAssignment(assignment))}>
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger float-end spacer"
                          onClick={() => dispatch(deleteAssignment(assignment))}>
                    Delete
                  </button>
                </div>
        </Link>))}
        </div><br/>
      </div>
  );
}
export default Assignments;