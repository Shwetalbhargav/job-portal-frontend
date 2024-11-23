import React, { useState } from 'react';
import { FaBriefcase, FaList, FaFileAlt, FaEnvelope, FaUserFriends, FaBullhorn, FaClipboardCheck, FaQuestionCircle } from 'react-icons/fa';

import { Link } from "react-router-dom";
import "./Dashboard.css";

export const Dashboard = () => {
    const [dropdownStates, setDropdownStates] = useState({});
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleDropdown = (key) => {
        setDropdownStates((prevStates) => ({
            ...prevStates,
            [key]: !prevStates[key],
        }));
    };

    return (
        <div className="dashboard-layout"
        style={{
            backgroundColor: "rgb(120, 167, 185)",       
             
          }}
        >
            
            {/* Sidebar */}
            <div className={`dashboard-container ${isCollapsed ? 'collapsed' : ''}`}
            style={{
                backgroundColor: "rgb(120, 167, 185)",       
                 
              }}>
            <button className="collapse-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
                <span className="menu-icon">☰</span>
            </button>
            
            <ul className="nav flex-column">
                <li className="nav-item">
                    <button className="dropdown-btn" onClick={() => toggleDropdown('job-posting')}>
                        <FaBriefcase /> <span className="nav-text">Job Posting</span>
                    </button>
                    {dropdownStates['job-posting'] && (
                        <div className="dropdown-content">
                            <Link to="/EmployerForm" className="nav-link">Post Full Time Job</Link>
                            <Link to="/PaidInternship" className="nav-link">Post Full Time Internship</Link>
                            <Link to="/UnpaidInternship" className="nav-link">Post Unpaid Internship</Link>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <button className="dropdown-btn" onClick={() => toggleDropdown('job-listing')}>
                        <FaList /> <span className="nav-text">Job Listing</span>
                    </button>
                    {dropdownStates['job-listing'] && (
                        <div className="dropdown-content">
                            <Link to="/GetListing" className="nav-link">Get List</Link>
                            <Link to="/AutomateListin" className="nav-link">Automate List</Link>
                            <Link to="/JobListing" className="nav-link">Active Jobs</Link>
                            <Link to="/ClosedListing" className="nav-link">Closed Jobs</Link>
                            <Link to="/JobStatus" className="nav-link">Job Status</Link>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <button className="dropdown-btn" onClick={() => toggleDropdown('assignment')}>
                        <FaFileAlt />
                        <span className="nav-text">Assignment</span>
                    </button>
                    {dropdownStates['assignment'] && (
                        <div className="dropdown-content">
                            <Link to="/GetAssignment" className="nav-link">Get Assignment</Link>
                            <Link to="/AddAssignment" className="nav-link">Add Assignment</Link>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <button className="dropdown-btn" onClick={() => toggleDropdown('messaging')}>
                        <FaEnvelope />
                        <span className="nav-text">Messaging</span>
                    </button>
                    {dropdownStates['messaging'] && (
                        <div className="dropdown-content">
                            <Link to="/GetMessage" className="nav-link">Get Message</Link>
                            <Link to="/SetMessage" className="nav-link">Set Message</Link>
                            <Link to="/GetChat" className="nav-link">Get Chat</Link>
                            <Link to="/SendMessage" className="nav-link">Send Message</Link>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <button className="dropdown-btn" onClick={() => toggleDropdown('Candidate Management')}>
                        <FaUserFriends />
                        <span className="nav-text">Candidate Management</span>
                    </button>
                    {dropdownStates['Candidate Management'] && (
                        <div className="dropdown-content">
                            <Link to="/ReplyCandidate" className="nav-link">Reply Candidate</Link>
                            <Link to="/ReplyCandidateBot" className="nav-link">Reply Candidate Bot</Link>
                            <Link to="/CandidateEmail" className="nav-link">Candidate Email</Link>
                            <Link to="/HireCandidate" className="nav-link">Hire Candidate</Link>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <button className="dropdown-btn" onClick={() => toggleDropdown('Announcement')}>
                        <FaBullhorn />
                        <span className="nav-text">Announcement</span>
                    </button>
                    {dropdownStates['Announcement'] && (
                        <div className="dropdown-content">
                            <Link to="/Announcement" className="nav-link">Announcement</Link>
                            <Link to="/JobStatus" className="nav-link">Job Listing Status</Link>
                            <Link to="/ReplyDaily" className="nav-link">Reply Daily</Link>
                            <Link to="/GetUpdate" className="nav-link">Get Update</Link>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <button className="dropdown-btn" onClick={() => toggleDropdown('Review and Evaluation')}>
                        <FaClipboardCheck />
                        <span className="nav-text">Review and Evaluation</span>
                    </button>
                    {dropdownStates['Review and Evaluation'] && (
                        <div className="dropdown-content">
                            <Link to="/MarkEvalIntershala" className="nav-link">Mark Evaluation Intershala</Link>
                            <Link to="/MarkEvalBot" className="nav-link">Mark Evaluation Bot</Link>
                            <Link to="/MarkEvalFuture" className="nav-link">Mark Future Evaluation</Link>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <button className="dropdown-btn" onClick={() => toggleDropdown('faq')}>
                        <FaQuestionCircle />
                        <span className="nav-text">FAQ</span>
                    </button>
                    {dropdownStates['faq'] && (
                        <div className="dropdown-content">
                            <Link to="/GetQuestion" className="nav-link">Get Question</Link>
                            <Link to="/ReplyQuestion" className="nav-link">Reply Question</Link>
                        </div>
                    )}
                </li>
            </ul>
        </div>
            
            {/* Main Content */}
            <div className="main-content d-flex flex-wrap justify-content-around py-4" >
  <Link to="/job-management" className="card-link">
    <div className="content-card shadow-sm">
      <FaBriefcase className="card-icon" />
      <h3>Job Management</h3>
      <p>Post, manage, and oversee job listings.</p>
    </div>
  </Link>
  <Link to="/listings" className="card-link">
    <div className="content-card shadow-sm">
      <FaList className="card-icon" />
      <h3>Listings</h3>
      <p>Access active, closed, and automated listings.</p>
    </div>
  </Link>
  <Link to="/assignments" className="card-link">
    <div className="content-card shadow-sm">
      <FaFileAlt className="card-icon" />
      <h3>Assignments</h3>
      <p>Manage and track assignments.</p>
    </div>
  </Link>
  <Link to="/messaging" className="card-link">
    <div className="content-card shadow-sm">
      <FaEnvelope className="card-icon" />
      <h3>Messaging</h3>
      <p>Send and view system messages.</p>
    </div>
  </Link>
  <Link to="/candidate-management" className="card-link">
    <div className="content-card shadow-sm">
      <FaUserFriends className="card-icon" />
      <h3>Candidate Management</h3>
      <p>Manage candidate profiles and email details.</p>
    </div>
  </Link>
  <Link to="/announcements" className="card-link">
    <div className="content-card shadow-sm">
      <FaBullhorn className="card-icon" />
      <h3>Announcements</h3>
      <p>Create and view announcements.</p>
    </div>
  </Link>
</div>
            
        </div>
    );
};

export default Dashboard;
