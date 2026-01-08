import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  MenuItem,
  Select,
  Typography,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

const statusColors = {
  Applied: '#1976d2',
  Interview: '#ed6c02',
  Offer: '#2e7d32',
  Rejected: '#d32f2f'
};

function JobList({ jobs, onUpdateStatus, onDeleteJob }) {
  const [filter, setFilter] = useState('all');

  const filteredJobs = filter === 'all' 
    ? jobs 
    : jobs.filter(job => job.status === filter);

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">
          Job Applications
        </Typography>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size="small"
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="all">All Status</MenuItem>
          <MenuItem value="Applied">Applied</MenuItem>
          <MenuItem value="Interview">Interview</MenuItem>
          <MenuItem value="Offer">Offer</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date Applied</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredJobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.role}</TableCell>
                <TableCell>
                  <Select
                    value={job.status}
                    onChange={(e) => onUpdateStatus(job._id, e.target.value)}
                    size="small"
                    sx={{ 
                      minWidth: 120,
                      color: statusColors[job.status],
                      '& .MuiSelect-icon': { color: statusColors[job.status] }
                    }}
                  >
                    {Object.keys(statusColors).map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  {format(new Date(job.dateApplied), 'MMM dd, yyyy')}
                </TableCell>
                <TableCell>
                  <a 
                    href={job.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#1976d2', textDecoration: 'none' }}
                  >
                    View
                  </a>
                </TableCell>
                <TableCell>
                  <IconButton 
                    onClick={() => onDeleteJob(job._id)}
                    color="error"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default JobList; 