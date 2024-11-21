
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Home';
import JobSeekerForm from './Forms/JobSeekerForm';
import EmployerForm from './Forms/EmployerForm';
import JobListingPage from './Listing/jobListing';
import CandidateList from './Listing/candidatelist';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<LandingPage/>}/>
        <Route path='/JobSeekerForm' element={<JobSeekerForm/>}/>
        <Route path='/EmployerForm' element={<EmployerForm/>}/>
        <Route path='/JobListing' element={<JobListingPage/>}/>
        <Route path='/CandidateList' element={<CandidateList/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/LandingPage' element={<LandingPage/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
