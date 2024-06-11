import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

import { useLocation } from "react-router-dom"

export default function KanbasNavigation() {
  //       {/* <li><a id="wd-neu-link"  href="https://www.northeastern.edu/">Northeastern</a></li> */}
  //       {/* <li><a id="wd-account-link" href="#/Kanbas/Account">Account</a></li> */}
  //       {/* <li><a id="wd-dashboard-link" href="#/Kanbas/Dashboard">Dashboard</a></li> */}
  //       {/* <li><a id="wd-course-link" href="#/Kanbas/Courses">Courses</a></li> */}
  //       {/* <li><a id="wd-calendar-link" href="#/Kanbas/Calendar">Calendar</a></li> */}
  //       {/* <li><a id="wd-inbox-link" href="#/Kanbas/Inbox">Inbox</a></li> */}
  //       {/* <li><a id="wd-labs-link" href="#/Labs">Labs</a></li> */}
  //     </div>
  //   );
  // }

  const { pathname } = useLocation();

  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0"
      >
        <img src="/images/NEU.png" width="75px" alt="NEU Logo" />
      </a>

      <a
        id="wd-account-link"
        href="#/Kanbas/Account"
        className={`list-group-item text-center border-0 ${pathname.includes('/Kanbas/Account')
            ? 'bg-white text-danger'
            : 'bg-black text-white'
          }`}
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </a>

      <a
        id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
        className={`list-group-item text-center border-0 ${pathname.includes('Dashboard')
            ? 'bg-white text-danger'
            : 'bg-black text-white'
          }`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </a>

      <a
        id="wd-course-link"
        href="#/Kanbas/Courses"
        className={`list-group-item text-center border-0 ${pathname.includes('Courses')
            ? 'bg-white text-danger'
            : 'bg-black text-white'
          }`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </a>

      <a
        id="wd-calendar-link"
        href="#/Kanbas/Calendar"
        className={`list-group-item text-center border-0 ${pathname.includes('Calendar')
            ? 'bg-white text-danger'
            : 'bg-black text-white'
          }`}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </a>

      <a
        id="wd-inbox-link"
        href="#/Kanbas/Inbox"
        className={`list-group-item text-center border-0 ${pathname.includes('Inbox')
            ? 'bg-white text-danger'
            : 'bg-black text-white'
          }`}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </a>

      <a
        id="wd-labs-link"
        href="#/Labs"
        className={`list-group-item text-center border-0 ${pathname.includes('Labs')
            ? 'bg-white text-danger'
            : 'bg-black text-white'
          }`}
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </a>
    </div>
  );
}
