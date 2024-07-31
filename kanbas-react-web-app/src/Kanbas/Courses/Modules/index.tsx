// export default function Modules() {
//   const { cid } = useParams();
//   const [modules, setModules] = useState<any[]>(db.modules);
//   const [moduleName, setModuleName] = useState("");
//   const addModule = () => {
//     setModules([...modules, {
//       _id: new Date().getTime().toString(),
//       name: moduleName, course: cid, lessons: []
//     }]);
//     setModuleName("");
//   };

//   const deleteModule = (moduleId: string) => {
//     setModules(modules.filter((m) => m._id !== moduleId));
//   };

//   const editModule = (moduleId: string) => {
//     setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
//   };
//   const updateModule = (module: any) => {
//     setModules(modules.map((m) => (m._id === module._id ? module : m)));
//   };

//   const { modules } = useSelector((state: any) => state.modulesReducer);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <ModulesControls setModuleName={setModuleName} moduleName={moduleName} 
//        addModule={() => {
//         dispatch(addModule({ name: moduleName, course: cid }));
//         setModuleName("");
//       }} />
//       <ul id="wd-modules" className="list-group rounded-0">
//         {modules
//           .filter((module: any) => module.course === cid)
//           .map((module: any) => (
//             <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//               <div className="wd-title p-3 ps-2 bg-secondary">
//                 <BsGripVertical className="me-2 fs-3" />
//                 {!module.editing && module.name}
//                 {module.editing && (
//                   <input className="form-control w-50 d-inline-block"
//                     onChange={(e) => updateModule({ ...module, name: e.target.value })}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         updateModule({ ...module, editing: false });
//                       }
//                     }}
//                     value={module.name} />
//                 )}
//                 <LessonControlPlus
//                   moduleId={module._id}
//                   deleteModule={deleteModule}
//                   editModule={editModule} />
//               </div>
//               {module.lessons && (
//                 <ul className="wd-lessons list-group rounded-0">
//                   {module.lessons.map((lesson: any) => (
//                     <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
//                       <BsGripVertical className="me-2 fs-3" />
//                       {lesson.name}
//                       <LessonControlButtons />
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { BsGripVertical } from "react-icons/bs";
// import { setModules,addModule, editModule, updateModule, deleteModule } from "./reducer";
// import ModulesControls from "./ModulesControls"; 
// import LessonControlPlus from "./LessonControlPlus"; // Adjust the path as needed
// import LessonControlButtons from "./LessonControlButtons"; // Adjust the path as needed
// import * as client from "./client";

// export default function Modules() {
//   const { cid } = useParams();
//   const [moduleName, setModuleName] = useState("");
//   const { modules } = useSelector((state: any) => state.modulesReducer);
//   const dispatch = useDispatch();

//   const createModule = async (module: any) => {
//     const newModule = await client.createModule(cid as string, module);
//     dispatch(addModule(newModule));
//   };

//   const fetchModules = async () => {
//     const modules = await client.findModulesForCourse(cid as string);
//     dispatch(setModules(modules));
//   };
//   useEffect(() => {
//     fetchModules();
//   }, []);

//   const removeModule = async (moduleId: string) => {
//     await client.deleteModule(moduleId);
//     dispatch(deleteModule(moduleId));
//   };

//   const saveModule = async (module: any) => {
//     const status = await client.updateModule(module);
//     dispatch(updateModule(module));
//   };

//   return (
//     <div className="wd-modules">
//       <ModulesControls
//         moduleName={moduleName}
//         setModuleName={setModuleName}
//         addModule={() => {
//           // dispatch(addModule({ name: moduleName, course: cid }));
//           createModule({ name: moduleName, course: cid });
//           setModuleName("");
//         }}
//       />
//       <ul id="wd-modules" className="list-group rounded-0">
//         {modules
//           .filter((module: any) => module.course === cid)
//           .map((module: any) => (
//             <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//               <div className="wd-title p-3 ps-2 bg-secondary">
//                 <BsGripVertical className="me-2 fs-3" />
//                 {!module.editing && module.name}
//                 {module.editing && (
//                   <input
//                     className="form-control w-50 d-inline-block"
//                     // onChange={(e) => 
//                     //   dispatch(updateModule({ ...module, name: e.target.value }))}
//                     onChange={(e) => saveModule({ ...module, name: e.target.value }) }
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         // dispatch(updateModule({ ...module, editing: false }));
//                         saveModule({ ...module, editing: false });
//                       }
//                     }}
//                     value={module.name}
//                   />
//                 )}
//                 <LessonControlPlus
//                   moduleId={module._id}
//                   // deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
//                   deleteModule={(moduleId) => { removeModule(moduleId); }}
//                   editModule={(moduleId) => dispatch(editModule(moduleId))}
//                 />
//               </div>
//               {module.lessons && (
//                 <ul className="wd-lessons list-group rounded-0">
//                   {module.lessons.map((lesson: any) => (
//                     <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
//                       <BsGripVertical className="me-2 fs-3" />
//                       {lesson.name}
//                       <LessonControlButtons />
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import ModulesControls from "./ModulesControls"; 
import LessonControlPlus from "./LessonControlPlus"; // Adjust the path as needed
import LessonControlButtons from "./LessonControlButtons"; // Adjust the path as needed
import * as client from "./client"; // Ensure this imports the correct functions

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const createModule = async (module: any) => {
    try {
      const newModule = await client.createModule(cid as string, module);
      dispatch(addModule(newModule));
    } catch (error) {
      console.error("Error creating module:", error);
    }
  };

  const fetchModules = async () => {
    try {
      const modules = await client.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  const removeModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  const saveModule = async (module: any) => {
    try {
      await client.updateModule(module);
      dispatch(updateModule(module));
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          createModule({ name: moduleName, course: cid });
          setModuleName("");
        }}
      />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) => saveModule({ ...module, name: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    value={module.name}
                  />
                )}
                <LessonControlPlus
                  moduleId={module._id}
                  deleteModule={(moduleId) => { removeModule(moduleId); }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

