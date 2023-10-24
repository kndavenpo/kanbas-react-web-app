import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
      <div className="row wd-general">
        <div className="col-10">
          <ModuleList />
        </div>
        <div className="col-2">
          <br/>
          <div className="d-grid gap-1 wd-small-text">
            <button type="button" className="btn btn-secondary text-start">Import Existing Content</button>
            <button type="button" className="btn btn-secondary text-start">Import From Commons</button>
            <button type="button" className="btn btn-secondary text-start">Choose Home Page</button>
            <button type="button" className="btn btn-secondary text-start">View Course Stream</button>
            <button type="button" className="btn btn-secondary text-start">New Announcements</button>
            <button type="button" className="btn btn-secondary text-start">New Analytics</button>
            <button type="button" className="btn btn-secondary text-start">View Course Notifications</button>
          </div><br/><br/>
          <h5>To Do</h5>
          <hr/>
          <div className="row">
            <div className="col">
              <a href="#" className="wd-course-links">Grade A1 - ENV + HTML</a>
              <div className="wd-small-text">
                100 points &bull; Sep 18 at 11:59
              </div><br/>
              <div className="col">
                <a href="#" className="wd-course-links">Grade A2 - HTML</a>
                <div className="wd-small-text">
                  100 points &bull; Sep 25 at 11:59
                </div>
              </div>
            </div>
          </div>
          <br/>
        </div>
      </div>
  );
}
export default Home;