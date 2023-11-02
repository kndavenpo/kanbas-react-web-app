import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import {AiFillCheckCircle} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
      (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
      <div className={'wd-general'}>
        <div className="row float-end wd-general">
          <div className="col-auto">
            <AiFillCheckCircle className="wd-icon spacer" style={{ color: "green" }} />
            Published
            <FaEllipsisV className="wd-icon" />
          </div>
        </div><br />
        <hr style={{ width: "100%" }} />
                <input value={assignment.title} className="form-control mb-2" />
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger me-2">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success">
          Save
        </button>
      </div>
  );
}

export default AssignmentEditor;