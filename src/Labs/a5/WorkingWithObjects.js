import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState(
      {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const URL = "http://localhost:4000/a5/assignment";

  // 3.4.4. Fetching and updating objects
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
    console.log(assignment);
  };
  const updateTitle = async () => {
    const response = await axios
        .get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);


  return (
      <div>
        <h3>Working With Objects</h3>
        <div>
          <h4>Retrieving Objects</h4>
          <a href="http://localhost:4000/a5/assignment"
             className="btn btn-primary me-2">
            Get Assignment
          </a>
        </div><br/>
        <div>
          <h4>Retrieving Properties</h4>
          <a
              href="http://localhost:4000/a5/assignment/title"
              className="btn btn-primary me-2">
            Get Title
          </a>
        </div><br/>

        <div>
          <h4>Modifying Properties</h4>
          <div>
          {/*3.2.3 Modifying Objects */}
            <a
                href={`${URL}/title/${assignment.title}`}
                className="btn btn-primary me-2 float-end"
            >
              Update Title
            </a>
            <input
                onChange={(e) => setAssignment({ ...assignment,
                  title: e.target.value })}
                value={assignment.title}
                className="form-control mb-2 w-75"
                type="text" /><br/>

          {/*3.2.4 Extra Credit*/}
            <a
                href={`${URL}/score/${assignment.score}`}
                className="btn btn-primary me-2 float-end"
            >
              Update Score
            </a>
            <input
                onChange={(e) => setAssignment({ ...assignment,
                  score: e.target.value })}
                value={assignment.score}
                className="form-control mb-2 w-75"
                type="text" /><br/>

            <a
                href={`${URL}/completed/${assignment.completed}`}
                className="btn btn-primary me-2 float-end"
            >
              Update Completed
            </a>
            <input
                onChange={(e) => setAssignment({ ...assignment,
                  completed: e.target.value })}
                value={assignment.completed}
                className="form-control mb-2 w-75"
                type="text" /><br/><br/>



            {/*A5: 3.4.4 - Fetching and updating objects*/}
            <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
              <a
                  href={`${URL}/${assignment.id}/assignment/${assignment.title}`}
                  style={{ textDecoration: 'none', color: 'white' }}
              >
                Update Title to: {assignment.title}
              </a>
            </button>
            <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
              <a href={URL} style={{ textDecoration: 'none', color: 'white' }}>
                Fetch Assignment
              </a>
            </button>


          </div><br/>
        </div>
      </div>
  );
}
export default WorkingWithObjects;