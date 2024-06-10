import React from 'react';
import { FaPlus, FaCheckCircle, FaSearch, FaFolderPlus } from "react-icons/fa";
import { Table, Button, Dropdown, DropdownButton, InputGroup, FormControl,Form} from 'react-bootstrap';
import { FaFileImport, FaFileExport,FaCog,FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Grade() {
  return (
    // Button
<div className="container mt-4">
      <div className="row mb-3">
        <div className="col d-flex justify-content-end">
          <Button variant="outline-secondary" className="mr-2 bg-third ">
            <FaFileImport /> Import
          </Button>
          
          <DropdownButton
            variant="outline-secondary bg-third"
            title={<span><FaFileExport /> Export</span>}
          >
            <Dropdown.Item href="#">Export Option 1</Dropdown.Item>
            <Dropdown.Item href="#">Export Option 2</Dropdown.Item>
          </DropdownButton>
          <Button variant="outline-secondary" className="ms-2 bg-third">
            <FaCog />
          </Button>
        </div>
      </div>
      
      <div className="row mb-2">
        <div className="col-sm-6 d-flex justify-content-start">
        <div className="input-group input-group-responsive">
          <h5>Student Names</h5>
        </div>
        </div>
       
        <div className="col-sm-6 d-flex justify-content-end ">
        <div className="input-group input-group-responsive">
          <h5>Assignment Names</h5>
        </div>
        </div>
      </div>
      

<div className="row mb-2">
        <div className="col-sm-6 d-flex justify-content-start">
          <div className="input-group input-group-responsive">
            <span className="input-group-text"><FaSearch /></span>
            <Form.Select aria-label="Search Students">
              <option>Search Students</option>
              <option value="1">Jane Adams</option>
              <option value="2">Christina Allen</option>
              <option value="3">Samreen Ansari</option>
              <option value="3">Han Bao</option>
              <option value="3">Mahi Sai Srinivas Bobbili</option>
              <option value="3">Siran Cao</option>
            </Form.Select>
          </div>
        </div>
        <div className="col-sm-6 d-flex justify-content-end">
          <div className="input-group input-group-responsive">
            <span className="input-group-text"><FaSearch /></span>
            <Form.Select aria-label="Search Assignments">
              <option>Search Assignments</option>
              <option value="1">Assignment 1</option>
              <option value="2">Assignment 2</option>
              <option value="3">Assignment 3</option>
            </Form.Select>
          </div>
        </div>
      </div>
      <div className="row mb-1">
        <div className="col d-flex justify-content-start">
          <Button variant="outline-secondary bg-third">
            <FaFilter /> Apply Filters
          </Button>
        </div>
      </div>

     
{/* Table */}
      <Table bordered hover>
        <thead>
          <tr className="bg-third">
            <th className="bg-third">Student Name</th>
            <th className="bg-third">A1 SETUP<br />(Out of 100)</th>
            <th className="bg-third">A2 HTML<br />(Out of 100)</th>
            <th className="bg-third">A3 CSS<br />(Out of 100)</th>
            <th className="bg-third">A4 BOOTSTRAP<br />(Out of 100)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-danger ">Jane Adams</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>92.18%</td>
            <td>66.22%</td>
          </tr>
          <tr>
            <td className="text-danger bg-third">Christina Allen</td>
            <td className="text-danger bg-third">100%</td>
            <td className="text-danger bg-third">100%</td>
            <td className="text-danger bg-third">100%</td>
            <td className="text-danger bg-third">100%</td>
          </tr>
          <tr>
            <td className="text-danger">Samreen Ansari</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr className="bg-light">
            <td className="text-danger bg-third">Han Bao</td>
            <td className="text-danger bg-third">100%</td>
            <td className="text-danger bg-third">100%</td>
            <td className="text-danger bg-third">
              <InputGroup className="text-danger bg-third">
                <FormControl  defaultValue="88.03%" />
              </InputGroup>
            </td>
            <td className="text-danger bg-third">98.99%</td>
          </tr>
          <tr>
            <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>98.37%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td className="text-danger bg-third">Siran Cao</td>
            <td className="text-danger bg-third">100%</td>
            <td className="text-danger bg-third">100%</td>
            <td className="text-danger bg-third">100%</td>
            <td className="text-danger bg-third">100%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
