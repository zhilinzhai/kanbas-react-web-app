import { FaFolderPlus, FaPlus, FaSave, FaTimes } from 'react-icons/fa';
import './index.css';

export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Edit Assignment</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="assignmentName" className="col-sm-2 col-form-label">Assignment Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="assignmentName" placeholder="Assignment Name" defaultValue="A1" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="assignmentDescription" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="assignmentDescription" rows={6} defaultValue={`The assignment is available online\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kanbas application\n- Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-10 offset-md-2">
            <div className="row mb-3">
              <label htmlFor="points" className="col-sm-4 col-form-label text-right">Points</label>
              <div className="col-sm-8">
                <input type="number" className="form-control" id="points" defaultValue="100" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="assignmentGroup" className="col-sm-4 col-form-label text-right">Assignment Group</label>
              <div className="col-sm-8">
                <select className="form-control" id="assignmentGroup" defaultValue="ASSIGNMENTS">
                  <option>ASSIGNMENTS 1</option>
                  <option>ASSIGNMENTS 2</option>
                  <option>ASSIGNMENTS 3</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="displayGradeAs" className="col-sm-4 col-form-label text-right">Display Grade as</label>
              <div className="col-sm-8">
                <select className="form-control" id="displayGradeAs" defaultValue="Percentage">
                  <option>Percentage</option>
                  <option>Letter grade</option>
                  <option>Number</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* submissionType */}
        <div className="mb-3 row offset-md-2">
          <label htmlFor="submissionType" className="col-sm-2 col-form-label">Submission Type</label>
          <div className="col-sm-10">
            <div className="card">
              <div className="card-body">
                <select className="form-select mb-3" id="submissionType" defaultValue="Online">
                  <option>Online</option>
                  <option>In Person</option>
                </select>
                <label className="col-form-label">Online Entry Options</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="textEntry" id="textEntry" />
                  <label className="form-check-label" htmlFor="textEntry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="websiteURL" id="websiteURL" defaultChecked />
                  <label className="form-check-label" htmlFor="websiteURL">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="mediaRecordings" id="mediaRecordings" />
                  <label className="form-check-label" htmlFor="mediaRecordings">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="studentAnnotation" id="studentAnnotation" />
                  <label className="form-check-label" htmlFor="studentAnnotation">
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="fileUploads" id="fileUploads" />
                  <label className="form-check-label" htmlFor="fileUploads">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Assign */}
        <div className="mb-3 row offset-md-2">
          <label htmlFor="Assign" className="col-sm-2 col-form-label">Assign</label>
          <div className="col-sm-10">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Assign to</label>
                  <input type="text" className="form-control" defaultValue="Everyone" />
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <label className="form-label">Due</label>
                    <input type="datetime-local" className="form-control" defaultValue="2024-05-13T23:59" />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Available from</label>
                    <input type="datetime-local" className="form-control" defaultValue="2024-05-06T00:00" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Until</label>
                    <input type="datetime-local" className="form-control" defaultValue="2024-05-20T00:00" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="d-flex justify-content-end mb-2">
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-secondary">
              <FaTimes className="me-2" />
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              <FaSave className="me-2" />
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}