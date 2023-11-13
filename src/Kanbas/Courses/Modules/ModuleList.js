import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "../../index.css"
import {GoCheckCircle} from "react-icons/go";
import {HiPlus} from "react-icons/hi";
import {useDispatch, useSelector} from "react-redux";
import {addModule, deleteModule, setModule, updateModule, setModules} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  // Constants
  const {courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  // A5: 4.3.1 Retrieving Modules for Course
  useEffect(() => {
    findModulesForCourse(courseId)
        .then((modules) =>
            dispatch(setModules(modules))
        );
  }, [courseId]);

  // A5: 4.3.2 Creating Modules for Course
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  // A5: 4.3.3 Delete a Module
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  // A5: 4.3.4 Update Module
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


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
            {/*<button type="button" className="btn btn-danger">*/}
            {/*  < HiPlus className = "wd-icon" style={{ color: "white" }} />*/}
            {/*  Module</button>*/}
          </div><br/>
          <br/><hr/>
          <li className="list-group-item col-md-8">
            <input value={module.name}
                   onChange={(e) =>
                       dispatch(setModule({ ...module, name: e.target.value }))}
                   className = "col-md-8 module-header"/>

            {/*A5: 4.3.2 Creating Modules for a Course*/}
            <button type="button" className="btn btn-success float-end spacer" onClick={handleAddModule}>
                {/*{() => dispatch(addModule({ ...module, course: courseId }))}>*/}
              Add
            </button>

            {/*A5: 4.3.4 Update a module - NOTHING WAS CHANGED HERE LIKE OTHERS */}
            <button type="button" className="btn btn-primary float-end spacer" onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
            <br/>
            <textarea value={module.description} onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))}
                      className = "col-md-8 module-header"/>
          </li>
        </div>
        {
          modules
              .filter((module) => module.course === courseId)
              .map((module, index) => (
                  <div key={index} className="list-group-item list-group-item-secondary button" style={{ background: "none", border: "none" }} >
                    <div className="module">
                      <button type="button" className="btn btn-success float-end spacer"
                          onClick={() => dispatch(setModule(module))}>
                        Edit
                      </button>

                      {/*A5: 4.3.3 Delete a Module*/}
                      <button type="button" className="btn btn-danger float-end spacer"
                              onClick={() => handleDeleteModule(module._id)}>
                          {/*onClick={() => dispatch(deleteModule(module._id))}>*/}
                        Delete
                      </button>


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



// VERSION BEFORE ADDING REDUCER
// function ModuleList() {
//   const { courseId } = useParams();
//   const [modules, setModules] = useState(db.modules);
//   const [module, setModule] = useState({
//     name: "New Module",
//     description: "New Description",
//     course: courseId,
//   });
//   const addModule = (module) => {
//     setModules([
//       { ...module, _id: new Date().getTime().toString() },
//       ...modules,
//     ]);
//   };
//   const deleteModule = (moduleId) => {
//     setModules(modules.filter(
//         (module) => module._id !== moduleId));
//   };
//
//   const updateModule = () => {
//     setModules(
//         modules.map((m) => {
//           if (m._id === module._id) {
//             return module;
//           } else {
//             return m;
//           }
//         })
//     );
//   }
//
//   const modules = db.modules;
//   return (
//       <ul className="list-group">
//         <div className="wd-general">
//           <div className="float-end module-buttons dropdown">
//             <button type="button" className="btn btn-secondary">Collapse All</button>
//             <button type="button" className="btn btn-secondary">View Progress</button>
//             <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
//                     aria-expanded="false">
//               < GoCheckCircle className = "wd-icon" style={{ color: "white" }} />
//               Publish All
//             </button>
//             <ul className="dropdown-menu">
//               <li><a className="dropdown-item" href="#">Publish All</a></li>
//               <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
//               <li><a className="dropdown-item" href="#">UnPublish</a></li>
//             </ul>
//             <button type="button" className="btn btn-danger">
//               < HiPlus className = "wd-icon" style={{ color: "white" }} />
//               Module</button>
//           </div><br/>
//           <br/><hr/>
//
//
//           <li className="list-group-item">
//             <button onClick={() => { addModule(module) }}>
//               Add
//             </button>
//             <button onClick={updateModule}>
//               Update
//             </button>
//             <input value={module.name}
//                    onChange={(e) =>
//                        setModule({...module, name: e.target.value })
//                    }/>
//             <textarea value={module.description}
//                       onChange={(e) =>
//                           setModule({...module, description: e.target.value })
//                       }/>
//           </li>
//         </div>
//         {
//           modules
//               .filter((module) => module.course === courseId)
//               .map((module, index) => (
//                   <div key={index} className="list-group-item list-group-item-secondary button" style={{ background: "none", border: "none" }} >
//                     <div className="module">
//                       <button
//                           onClick={(event) => { setModule(module); }}>
//                         Edit
//                       </button>
//                       <button
//                           onClick={() => deleteModule(module._id)}>
//                         Delete
//                       </button>
//                       <h4>{module.name}</h4>
//                       {module.description}
//                     </div>
//                     {module.lessons && module.lessons.map((lesson, index) => (
//                         <div key={index} className="lesson">
//                           <h5>{lesson.name}</h5>
//                           {lesson.description}
//                         </div>
//                     ))}
//                   </div>
//               ))
//         }
//       </ul>
//   );
// }
// export default ModuleList;