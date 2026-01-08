import React, { useState } from 'react';
import {
  Paper,
  TextField,
  Button,
  Box,
  MenuItem,
  Typography
} from '@mui/material';

const statusOptions = ['Applied', 'Interview', 'Offer', 'Rejected'];

function AddJobForm({ onAddJob }) {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    link: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddJob(formData);
    setFormData({
      company: '',
      role: '',
      status: 'Applied',
      link: ''
    });
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add New Job Application
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          required
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          required
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          select
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          fullWidth
        >
          {statusOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          label="Application Link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          fullWidth
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          sx={{ mt: 2 }}
        >
          Add Application
        </Button>
      </Box>
    </Paper>
  );
}

export default AddJobForm; 