import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "../../index.css"
import { GoCheckCircle } from "react-icons/go";
import { HiPlus } from "react-icons/hi";
import {AiFillCheckCircle} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
        <ul className="list-group">
          <div className="wd-general">
              <div className="float-end module-buttons dropdown">
                <button type="button" className="btn btn-secondary">Collapse All</button>
                <button type="button" className="btn btn-secondary">View Progress</button>
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                  < GoCheckCircle className = "wd-icon" style={{ color: "white" }} />
                  Publish All
                </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Publish All</a></li>
                    <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
                    <li><a className="dropdown-item" href="#">UnPublish</a></li>
                  </ul>
                <button type="button" className="btn btn-danger">
                  < HiPlus className = "wd-icon" style={{ color: "white" }} />
                  Module</button>
              </div><br/>
              <br/><hr/>
          </div>
          {
            modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <div key={index} className="list-group-item list-group-item-secondary button" style={{ background: "none", border: "none" }} >
                      <div className="module">
                        <h4>{module.name}</h4>
                        {module.description}
                      </div>
                      {module.lessons && module.lessons.map((lesson, index) => (
                          <div key={index} className="lesson">
                            <h5>{lesson.name}</h5>
                            {lesson.description}
                          </div>
                      ))}
                    </div>
                ))
          }
        </ul>
        );
}
export default ModuleList;