import React from "react";
import { useParams, Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "../../index.css";
import { HiMenu } from "react-icons/hi";


function Courses() {                                                             // original version
// function Courses({ courses }) {                                               // version with error
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);    // original version
  // const course = courses.find((course) => course._id === courseId);            // version with error
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const currentPage = links.find((link) => link === screen);
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








// PRIOR VERSION
// import React from "react";
// import { useParams, Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
// import db from "../Database";
// import CourseNavigation from "./CourseNavigation";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/AssignmentEditor";
// import Grades from "./Grades";
// import "../../index.css";
// import { HiMenu } from "react-icons/hi";
//
// function Courses() {                                                             // original version - new version has errors
// // function Courses({ courses }) {                                               // version with error
//   const { courseId } = useParams();
//   const { pathname } = useLocation();
//   const [empty, kanbas, courses, id, screen] = pathname.split("/");
//   const course = db.courses.find((course) => course._id === courseId);    // original version - new version has errors
//   // const course = courses.find((course) => course._id === courseId);            // version with error
//   const links = ["Home", "Modules", "Assignments", "Grades"];
//   const currentPage = links.find((link) => link === screen);
//
//   return (
//       <div>
//         <div className="d-flex align-items-center">
//           <i className="fa fa-bars fa-1x me-2" ></i>
//           <div className="breadcrumb">
//             <HiMenu className="wd-icon" style={{ float: "left", fontSize: "1.5em" }} />
//             <span className="breadcrumb-item">{course.number} {course.name} > {currentPage && <span>{currentPage}</span>}</span>
//           </div>
//         </div>
//         <hr className="full-width-hr" />
//         <CourseNavigation />
//         <div>
//           <div
//               className="overflow-y-scroll position-fixed bottom-0 end-0"
//               style={{
//                 left: "320px",
//                 top: "50px",
//               }}
//           >
//             <Routes>
//               <Route path="/" element={<Navigate to="Home" />} />
//               <Route path="Home" element={<Home />} />
//               <Route path="Modules" element={<Modules />} />
//               <Route path="Assignments" element={<Assignments />} />
//               <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
//               <Route path="Grades" element={<Grades />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//   );
// }
//
// export default Courses;