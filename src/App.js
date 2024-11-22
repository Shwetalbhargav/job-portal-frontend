
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Home';
import JobSeekerForm from './Forms/JobSeekerForm';
import EmployerForm from './Forms/EmployerForm';
import JobListingPage from './Listing/jobListing';
import CandidateList from './Listing/candidatelist';
import Dashboard from './pages/Dashboard';
import PaidInternship from './Job-Posting/PaidInternship';
import UnpaidInternship from './Job-Posting/UnpaidInternship';
import GetListing from './Listing/getListing';
import AutomateListing from './Listing/AutomateListing';
import ClosedListing from './Listing/ClosedListing';
import JobStatus from './Listing/JobStatus';
import GetAssignment from './Assignment/GetAssignment';
import AddAssignment from './Assignment/AddAssignment';
import GetMessage from './Messaging/GetMessage';
import SetMessage from './Messaging/SetMessage';
import GetChat from './Messaging/GetChat';
import SendMessage from './Messaging/SendMessage';
import ReplyCandidate from './CandidateManagement/ReplyCandidate';
import ReplyCandidateBot from './CandidateManagement/ReplyCandidateBot';
import CandidateEmail from './CandidateManagement/CandidateEmail';
import HireCandidate from './CandidateManagement/HireCandidate';
import GetUpdate from './Announcement/GetUpdate';
import Announcement from './Announcement/Announcement';
import ReplyDaily from './Announcement/ReplyDaily';
import MarkEvalIntershala from './Evaluation and Review/MarkEvalIntershala';
import MarkEvalBot from './Evaluation and Review/MarkEvalBot';
import MarkEvalFuture from './Evaluation and Review/MarkEvalFuture';
import GetQuestion from './FAQ/GetQuestion';
import ReplyQuestion from './FAQ/ReplyQuestion';

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
        <Route path='/PaidInternship' element={<PaidInternship/>}/>
        <Route path='/UnpaidInternship' element={<UnpaidInternship/>}/>
        <Route path='/GetListing' element={<GetListing/>}/>
        <Route path='/AutomateListin' element={<AutomateListing/>}/>
        <Route path='/ClosedListing' element={<ClosedListing/>}/>
        <Route path='/JobStatus' element={<JobStatus/>}/>
        <Route path='/GetAssignment' element={<GetAssignment/>}/>
        <Route path='/AddAssignment' element={<AddAssignment/>}/>
        <Route path='/GetMessage' element={<GetMessage/>}/>
        <Route path='/SetMessage' element={<SetMessage/>}/>
        <Route path='/GetChat'  element={<GetChat/>}/>
        <Route path='/SendMessage' element={<SendMessage/>}/>
        <Route path='/ReplyCandidate' element={<ReplyCandidate/>}/>
        <Route path='/ReplyCandidateBot' element={<ReplyCandidateBot/>}/>
        <Route path='/CandidateEmail' element={<CandidateEmail/>}/>
        <Route path='/HireCandidate' element={<HireCandidate/>}/>
        <Route path='/GetUpdate' element={<GetUpdate/>}/>
        <Route path='/Announcement' element={<Announcement/>}/>
        <Route path='/ReplyDaily' element={<ReplyDaily/>}/>
        <Route path='MarkEvalIntershala' element={<MarkEvalIntershala/>}/>
        <Route path='/MarkEvalBot' element={<MarkEvalBot/>}/>
        <Route path='/MarkEvalFuture' element={<MarkEvalFuture/>}/>
        <Route path='/GetQuestion' element={<GetQuestion/>}/>
        <Route path='/ReplyQuestion' element={<ReplyQuestion/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
