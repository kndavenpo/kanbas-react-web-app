import React from "react";
import {Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "../../index.css";
import {HiMenu} from "react-icons/hi";

function Courses({ courses }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, courses_, id, screen] = pathname.split("/");
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const currentPage = links.find((link) => link === screen);
  const course = courses.find((course) => course._id === courseId);

  return (
      <div>
        <div className="d-flex align-items-center">
          <i className="fa fa-bars fa-1x me-2" ></i>
          <div className="breadcrumb">
            <HiMenu className="wd-icon" style={{ float: "left", fontSize: "1.5em" }} />
            <span className="breadcrumb-item">{course.number} {course.name} > {currentPage && <span>{currentPage}</span>}</span>
          </div>
        </div>
        <hr className="full-width-hr" />
        <CourseNavigation />
        <div>
          <div
              className="overflow-y-scroll position-fixed bottom-0 end-0"
              style={{
                left: "320px",
                top: "50px",
              }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default Courses;