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
                                <Link to="/job-posting/full-time" className="nav-link">Post Full Time Job</Link>
                                <Link to="/job-posting/internship-paid" className="nav-link">Post Full Time Internship</Link>
                                <Link to="/job-posting/internship-unpaid" className="nav-link">Post Unpaid Internship</Link>
                            </div>
                        )}
                    </li>
                    <li className="nav-item">
                        <button className="dropdown-btn" onClick={() => toggleDropdown('job-listing')}>
                            Job Listing <span className="arrow">{dropdownStates['job-listing'] ? '▼' : '▶'}</span>
                        </button>
                        {dropdownStates['job-listing'] && (
                            <div className="dropdown-content">
                                <Link to="/job-listing/get-list" className="nav-link">Get List</Link>
                                <Link to="/job-listing/automate" className="nav-link">Automate List</Link>
                                <Link to="/job-listing/active" className="nav-link">Active Jobs</Link>
                                <Link to="/job-listing/closed" className="nav-link">Closed Jobs</Link>
                                <Link to="/job-listing/status" className="nav-link">Job Status</Link>
                            </div>
                        )}
                    </li>
                    <li className="nav-item">
                        <button className="dropdown-btn" onClick={() => toggleDropdown('assignment')}>
                            Assignment <span className="arrow">{dropdownStates['assignment'] ? '▼' : '▶'}</span>
                        </button>
                        {dropdownStates['assignment'] && (
                            <div className="dropdown-content">
                                <Link to="/assignment/get" className="nav-link">Get Assignment</Link>
                                <Link to="/assignment/add" className="nav-link">Add Assignment</Link>
                            </div>
                        )}
                    </li>
                    <li className="nav-item">
                        <button className="dropdown-btn" onClick={() => toggleDropdown('messaging')}>
                            Messaging <span className="arrow">{dropdownStates['messaging'] ? '▼' : '▶'}</span>
                        </button>
                        {dropdownStates['messaging'] && (
                            <div className="dropdown-content">
                                <Link to="/messaging/get-message" className="nav-link">Get Message</Link>
                                <Link to="/messaging/set-message" className="nav-link">Set Message</Link>
                                <Link to="/messaging/get-chat" className="nav-link">Get Chat</Link>
                                <Link to="/messaging/send-message" className="nav-link">Send Message</Link>
                            </div>
                        )}
                    </li>
                    <li className="nav-item">
                        <button className="dropdown-btn" onClick={() => toggleDropdown('messaging')}>
                            Candidate Management <span className="arrow">{dropdownStates['messaging'] ? '▼' : '▶'}</span>
                        </button>
                        {dropdownStates['messaging'] && (
                            <div className="dropdown-content">
                                <Link to="/messaging/get-message" className="nav-link">Reply Candidate</Link>
                                <Link to="/messaging/set-message" className="nav-link">Reply Candidate Bot</Link>
                                <Link to="/messaging/get-chat" className="nav-link">Candidate Email</Link>
                                <Link to="/messaging/send-message" className="nav-link">Hire Candidate</Link>
                            </div>
                        )}
                    </li>
                    <li className="nav-item">
                        <button className="dropdown-btn" onClick={() => toggleDropdown('messaging')}>
                            Announcement <span className="arrow">{dropdownStates['messaging'] ? '▼' : '▶'}</span>
                        </button>
                        {dropdownStates['messaging'] && (
                            <div className="dropdown-content">
                                <Link to="/messaging/get-message" className="nav-link">Announcement</Link>
                                <Link to="/messaging/set-message" className="nav-link">Job Listing Status</Link>
                                <Link to="/messaging/get-chat" className="nav-link">Reply Daily</Link>
                                <Link to="/messaging/send-message" className="nav-link">Get Update</Link>
                            </div>
                        )}
                    </li>
                    <li className="nav-item">
                        <button className="dropdown-btn" onClick={() => toggleDropdown('messaging')}>
                            Review and Evaluation <span className="arrow">{dropdownStates['messaging'] ? '▼' : '▶'}</span>
                        </button>
                        {dropdownStates['messaging'] && (
                            <div className="dropdown-content">
                                <Link to="/messaging/get-message" className="nav-link">Mark Evaluation Interhsala</Link>
                                <Link to="/messaging/set-message" className="nav-link">Mark Evaluation Bot</Link>
                                <Link to="/messaging/get-chat" className="nav-link">Mark future Evaluation</Link>
                                
                            </div>
                        )}
                    </li>
                    <li className="nav-item">
                        <button className="dropdown-btn" onClick={() => toggleDropdown('faq')}>
                            FAQ <span className="arrow">{dropdownStates['faq'] ? '▼' : '▶'}</span>
                        </button>
                        {dropdownStates['faq'] && (
                            <div className="dropdown-content">
                                <Link to="/faq/get-question" className="nav-link">Get Question</Link>
                                <Link to="/faq/reply" className="nav-link">Reply Question</Link>
                            </div>
                        )}
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h2>Main Content Area</h2>
                <p>This is where the rest of your content will appear.</p>
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
