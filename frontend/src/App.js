import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material';
import JobList from './components/JobList';
import AddJobForm from './components/AddJobForm';
import axios from 'axios';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [jobs, setJobs] = useState([]);

  // Fetch jobs from backend
  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Add new job
  const addJob = async (jobData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/jobs', jobData);
      setJobs([...jobs, response.data]);
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  // Update job status
  const updateJobStatus = async (id, status) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/jobs/${id}`, { status });
      setJobs(jobs.map(job => job._id === id ? response.data : job));
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  // Delete job
  const deleteJob = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`);
      setJobs(jobs.filter(job => job._id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Student Job Tracker
          </Typography>
          <AddJobForm onAddJob={addJob} />
          <JobList 
            jobs={jobs} 
            onUpdateStatus={updateJobStatus}
            onDeleteJob={deleteJob}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App; 