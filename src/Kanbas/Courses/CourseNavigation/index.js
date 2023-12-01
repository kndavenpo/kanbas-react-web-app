import React from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import "../../index.css"
import db from "../../Database";

function CourseNavigation({coursesdata}) {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = coursesdata.find((c) => c._id.$oid === courseId);
  const links = ["Home", "Modules", "Assignments", "Grades"];
  console.log(course);

  return (
      <div>
        <div className={'course-navigation-header'}>
          {course.number} {course.name}
        </div>
        <div className="cn-wd-secondary-navigation list-group">
          {links.map((link, index) => (
              <Link
                  key={index}
                  to={`/Kanbas/Courses/${courseId}/${link}`}
                  className={`cn-list-group-item ${pathname.includes(link) && 'active'}`}
              >
                {link}
              </Link>
          ))}
        </div>
      </div>
  );
}
export default CourseNavigation;