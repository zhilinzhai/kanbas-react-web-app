import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {BsPlus} from "react-icons/bs";

export default function LessonControlPlus() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="me-1 fs-3" />
      <IoEllipsisVertical className="fs-4" />

    </div>
);}
