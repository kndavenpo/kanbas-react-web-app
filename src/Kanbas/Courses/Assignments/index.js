import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {HiPlus} from "react-icons/hi";
import {FaEllipsisV} from "react-icons/fa";
import {AiFillCheckCircle} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {addAssignment, deleteAssignment, setAssignment, setAssignments, updateAssignment} from "./assignmentsReducer";
import * as client from "./client";
import {createAssignment, findAssignmentsForCourse} from "./client";


function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);

  useEffect(() => {
    findAssignmentsForCourse(courseId)
        .then((assignments) =>
            dispatch(setAssignments(assignments))
        );
  }, [courseId]);

  const handleAddAssignment = () => {
    createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };


  return (
      <div className={'wd-general'}>
        {/*Search bar and buttons on top */}
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

        {/*Assignment details, add and update buttons */}
        <div className="row">
          <li className="list-group-item col-md-8">
            <h6>Assignment Details</h6>
            <input value={assignment.title}
                   onChange={(e) =>
                       dispatch(setAssignment({ ...assignment, title: e.target.value }))}
                   className = "col-md-8 module-header"/>
            <button type="button" className="btn btn-success float-end spacer" onClick={handleAddAssignment}>
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
        <div className=" row list-group">
          <div className="list-group-item">
            <strong>ASSIGNMENTS</strong>
            <div className="float-end spacer">
              <button type="button" className="btn btn-outline-dark btn-sm oval-button">40% of total</button>
              <HiPlus className="wd-icon spacer" />
              <FaEllipsisV className="wd-icon" />
            </div><br/><br/>
            {courseAssignments.map((assignment, index) => (
                <div key={index} className="list-group-item list-group-item-secondary button">
                  <div className="module">
                    <button type="button" className="btn btn-success float-end spacer"
                            onClick={() => dispatch(setAssignment(assignment))}>
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger float-end spacer"
                            onClick={() => handleDeleteAssignment(assignment._id)}>
                      Delete
                    </button>
                    <AiFillCheckCircle className="wd-icon float-end spacer" style={{ color: "green" }} />
                    <FaEllipsisV className="wd-icon float-end" />
                    {assignment.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
export default Assignments;