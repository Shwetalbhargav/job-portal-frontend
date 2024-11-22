import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Dashboard.css";

export const Dashboard = () => {
    const [dropdownStates, setDropdownStates] = useState({});

    const toggleDropdown = (key) => {
        setDropdownStates((prevStates) => ({
            ...prevStates,
            [key]: !prevStates[key],
        }));
    };

    return (
        <div className="dashboard-layout">
            {/* Header */}
            <header>
                <div className="h3 mb-0">JobPortal</div>
                <nav className="d-flex gap-3 align-items-center">
                    <a href="#home" className="text-white text-decoration-none">Home</a>
                    <Link to="/LandingPage" className="text-white text-decoration-none">Home</Link>
                    <Link to="/dashboard" className="text-white text-decoration-none">Dashboard</Link>
                    <a href="#contact" className="text-white text-decoration-none">Contact</a>
                    <button className="btn btn-outline-light">Get Started</button>
                </nav>
            </header>
            {/* Sidebar */}
            <div className="dashboard-container">
                <h4 className="dashboard-header">Dashboard</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button className="dropdown-btn" onClick={() => toggleDropdown('job-posting')}>
                            Job Posting <span className="arrow">{dropdownStates['job-posting'] ? '▼' : '▶'}</span>
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
                            Job Listing <span className="arrow">{dropdownStates['job-listing'] ? '▼' : '▶'}</span>
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
                            Assignment <span className="arrow">{dropdownStates['assignment'] ? '▼' : '▶'}</span>
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
                            Messaging <span className="arrow">{dropdownStates['messaging'] ? '▼' : '▶'}</span>
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
                            Candidate Management <span className="arrow">{dropdownStates['Candidate Management'] ? '▼' : '▶'}</span>
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
                            Announcement <span className="arrow">{dropdownStates['Announcement'] ? '▼' : '▶'}</span>
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
                            Review and Evaluation <span className="arrow">{dropdownStates['Review and Evaluation'] ? '▼' : '▶'}</span>
                        </button>
                        {dropdownStates['Review and Evaluation'] && (
                            <div className="dropdown-content">
                                <Link to="/MarkEvalIntershala" className="nav-link">Mark Evaluation Interhsala</Link>
                                <Link to="/MarkEvalBot" className="nav-link">Mark Evaluation Bot</Link>
                                <Link to="/MarkEvalFuture" className="nav-link">Mark future Evaluation</Link>
                                
                            </div>
                        )}
                    </li>
                    <li className="nav-item">
                        <button className="dropdown-btn" onClick={() => toggleDropdown('faq')}>
                            FAQ <span className="arrow">{dropdownStates['faq'] ? '▼' : '▶'}</span>
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
            <div className="main-content d-flex flex-wrap justify-content-around py-4">
        <Link to="/job-listing/get-list" className="card-link">
          <div className="content-card shadow-sm">
            <h3>Job Listings</h3>
            <p>View and manage all job postings.</p>
          </div>
        </Link>
        <Link to="/messaging/get-message" className="card-link">
          <div className="content-card shadow-sm">
            <h3>Messaging</h3>
            <p>Communicate with candidates and employers.</p>
          </div>
        </Link>
        <Link to="/faq/get-question" className="card-link">
          <div className="content-card shadow-sm">
            <h3>FAQs</h3>
            <p>View or answer common questions.</p>
          </div>
        </Link>
        <Link to="/messaging/set-message" className="card-link">
          <div className="content-card shadow-sm">
            <h3>Announcements</h3>
            <p>Post important updates and announcements.</p>
          </div>
        </Link>
      </div>

            {/* Footer */}
            <footer className="footer">
                <p>Privacy Policy | Terms of Service | Contact</p>
                <div className="social-icons">🔗🔗🔗</div>
            </footer>
        </div>
    );
};

export default Dashboard;
