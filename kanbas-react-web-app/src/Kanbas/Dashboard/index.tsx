export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
          <div className="wd-dashboard-course">
            <img src="/images/Mysql.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1235/Home">
                CS5200 Database Management
              </a>
              <p className="wd-dashboard-course-title">
                SQL Database Development
              </p>
              <a href="#/Kanbas/Courses/1235/Home">Go</a>
            </div>
          </div>
        <div className="wd-dashboard-course">
          <img src="/images/R language.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1235/Home">
              DS5010 Data Mining Techique
            </a>
            <p className="wd-dashboard-course-title">
              Data Mining Techique with R language 
            </p>
            <a href="#/Kanbas/Courses/1235/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/Python.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1235/Home">
              CS5010 Fundamental of CS
            </a>
            <p className="wd-dashboard-course-title">
              Fundamental of CS with Python language 
            </p>
            <a href="#/Kanbas/Courses/1235/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/Java.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1235/Home">
              CS5004 Object-Orient Design
            </a>
            <p className="wd-dashboard-course-title">
             Object-Orient Design with Java language 
            </p>
            <a href="#/Kanbas/Courses/1235/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/C language.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1235/Home">
              CS5001 Datastructure 
            </a>
            <p className="wd-dashboard-course-title">
             Datastructure in C language 
            </p>
            <a href="#/Kanbas/Courses/1235/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/Figma.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1235/Home">
              CS5340 Human-Computer Interaction Design
            </a>
            <p className="wd-dashboard-course-title">
             Interface Design with Figma 
            </p>
            <a href="#/Kanbas/Courses/1235/Home">Go</a>
          </div>
        </div>
      </div>
    </div>
  );
}

