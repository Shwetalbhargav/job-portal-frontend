
import axios from 'axios';

/*const BASE_URL = 'http://localhost:5000/api';*/
const BASE_URL = 'https://job-portal-backend-4vvg.onrender.com/api';

// Configure axios instance
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Helper function to add token to headers if needed
const setAuthHeader = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

// ==================== Applicant APIs ====================

// Register a new applicant
export const registerApplicant = async (applicantData, additionalHeaders = {})  => {
    try {
        const response = await api.post('/applicants/register', applicantData,{
            headers: {
                ...additionalHeaders,
            }    
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Applicant login
export const loginApplicant = async (email, password) => {
    try {
        const response = await api.post('/applicants/login', { email, password });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Get applicant profile by ID
export const getApplicants = async () => {
    
    try {
        const response = await api.get(`/applicants`);
        return response.data;
    } catch (error) {
        console.error('Error fetching applicants:', error);
        throw error.response?.data || error.message;
    }
};

// Update applicant profile
export const updateApplicantProfile = async (applicantId, updateData, token) => {
    setAuthHeader(token);
    try {
        const response = await api.put(`/applicants/${applicantId}`, updateData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Upload applicant resume or other documents
export const uploadApplicantDocument = async (applicantId, file, token) => {
    setAuthHeader(token);
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await api.post(`/applicants/upload/${applicantId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// ==================== Employer APIs ====================

// Register a new employer
export const registerEmployer = async (employerData) => {
    try {
        const response = await api.post('/employers/register', employerData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Get employer profile by ID
export const getEmployerProfile = async (employerId, token) => {
    setAuthHeader(token);
    try {
        const response = await api.get(`/employers/${employerId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Update employer profile
export const updateEmployerProfile = async (employerId, updateData, token) => {
    setAuthHeader(token);
    try {
        const response = await api.put(`/employers/${employerId}`, updateData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
