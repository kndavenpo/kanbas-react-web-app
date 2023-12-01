import { Link, useLocation } from "react-router-dom";
import { AiOutlineStop } from "react-icons/ai";
import { BiUserCircle, BiHelpCircle} from "react-icons/bi";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { FaBook, FaUser, FaInbox, FaUsers } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { PiSignIn, PiMonitorPlay, PiSignInBold} from "react-icons/pi";
import { RiDashboard3Fill } from "react-icons/ri";

function KanbasNavigation() {
  const links = ["Account", "SignIn", "SignUp", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Help"];

  const linkToIconMap = {
    Account: < BiUserCircle className = "wd-icon" />,
    SignIn: < PiSignInBold className = "wd-icon" />,
    SignUp: < FaUsers className = "wd-icon" />,
    Dashboard: < RiDashboard3Fill className = "wd-icon" />,
    Courses: < FaBook className = "wd-icon" />,
    Calendar: < BsFillCalendar2WeekFill className = "wd-icon" />,
    Inbox: < FaInbox className = "wd-icon" />,
    History: < FiClock className = "wd-icon" />,
    Studio: < PiMonitorPlay className = "wd-icon" />,
    Help: < BiHelpCircle className = "wd-icon" />
  };

  const { pathname } = useLocation();
  return (
      <div className="list-group wd-kanbas-navigation" >
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item ${pathname.includes(link) && "active"}`}>
              {linkToIconMap[link]}<br/>
              {link}
            </Link>
        ))}
      </div>
  )
}
export default KanbasNavigation;


