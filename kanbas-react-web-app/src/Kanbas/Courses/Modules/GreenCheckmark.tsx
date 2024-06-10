import { FaCheckCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaTimesCircle } from 'react-icons/fa';

export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle style={{ top: "2px" }}
        className="text-success me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
export function Cancelbutton() {
  return (
    <button className="btn btn-light btn-cancel">
      <FaTimesCircle className="text-danger me-1" />
      Cancel
    </button>
  );
}
