export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br />
      <br />
      <textarea id="wd-description">
        The assignment is available online
        Submit a link to the landing page of your Web application running on Netlify.
        The landing page should include the following: Your full name and section Links to each of the lab
        assignment Link to the Kanbas application Links to all relevant source code repositories
        The Kanbas application should include a link to navigate back to the landing page.

      </textarea>
      <br />
      <table>
        <br />
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="assignment1">ASSIGNMENT1</option>
              <option value="assignment2">ASSIGNMENT2</option>
              <option value="assignment3">ASSIGNMENT3</option>
              <option value="assignment4">ASSIGNMENT4</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-grade-display">Display Grade as</label>
          </td>
          <td>
            <select id="wd-grade-display">
              <option value="percentage">Percentage</option>
              <option value="number">Number</option>
              <option value="Letter grade">Letter grade</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
              <option value="in person">In person</option>
            </select>
          </td>
        </tr>
      </table>
      <br />
      <div>
        <label>Online Entry Options</label>
        <div>
          <input type="checkbox" id="wd-text-entry" name="wd-text-entry" value="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div>
          <input type="checkbox" id="wd-website-url" name="wd-website-url" value="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>
        <div>
          <input type="checkbox" id="wd-media-recordings" name="wd-media-recordings" value="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div>
          <input type="checkbox" id="wd-student-annotation" name="wd-student-annotation" value="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div>
          <input type="checkbox" id="wd-file-uploads" name="wd-file-uploads" value="wd-file-uploads" />
          <label htmlFor="wd-file-uploads">File Uploads</label>
        </div>
      </div>
      <br />
      <div>
        <label htmlFor="wd-file-upload">Upload File:</label>
        <input type="file" id="wd-file-upload" name="wd-file-upload" />
      </div>
      <br />
      <div>
        <label htmlFor="wd-assign-to">Assign to</label>
        <br />
        <input id="wd-assign-to" value="Everyone" />
        <br /><br />
        <label htmlFor="wd-due-date">Due</label>
        <br />
        <input id="wd-due-date" type="date" value="2024-05-13" />
        <br /><br />
        <label htmlFor="wd-available-from">Available from</label>
        <br />
        <input id="wd-available-from" type="date" value="2024-05-06" />
        <label htmlFor="wd-available-until">Until</label>
        <input id="wd-available-until" type="date" value="2024-05-20" />
        <br /><br />
        <button>Cancel</button>
        <button>Save</button>
        <button>Submit</button>
      </div>
    </div>
  );
}
