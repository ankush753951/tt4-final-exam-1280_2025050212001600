import React, { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { StudentAttendanceRecord } from '../types/StudentAttendance';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/StudentAttendance';

const StudentAttendanceList: React.FC = () => {
  const [attendances, setAttendances] = useState<StudentAttendanceRecord[]>([]);
  const [open, setOpen] = useState(false);
  const [editingAttendance, setEditingAttendance] = useState<StudentAttendanceRecord | null>(null);
  const [formData, setFormData] = useState<Partial<StudentAttendanceRecord>>({
    studentName: '',
    date: new Date().toISOString().split('T')[0],
    present: true,
    remarks: '',
  });

  useEffect(() => {
    fetchAttendances();
  }, []);

  const fetchAttendances = async () => {
    try {
      const response = await axios.get(API_URL);
      setAttendances(response.data);
    } catch (error) {
      console.error('Error fetching attendances:', error);
    }
  };

  const handleOpen = (attendance?: StudentAttendanceRecord) => {
    if (attendance) {
      setEditingAttendance(attendance);
      setFormData({
        ...attendance,
        date: new Date(attendance.date).toISOString().split('T')[0]
      });
    } else {
      setEditingAttendance(null);
      setFormData({
        studentName: '',
        date: new Date().toISOString().split('T')[0],
        present: true,
        remarks: '',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingAttendance(null);
  };

  const handleSubmit = async () => {
    try {
      const dataToSubmit = {
        ...formData,
        date: new Date(formData.date!).toISOString()
      };

      if (editingAttendance) {
        await axios.put(`${API_URL}/${editingAttendance.id}`, dataToSubmit);
      } else {
        await axios.post(API_URL, dataToSubmit);
      }
      handleClose();
      fetchAttendances();
    } catch (error) {
      console.error('Error saving attendance:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchAttendances();
    } catch (error) {
      console.error('Error deleting attendance:', error);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add New Attendance
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Present</TableCell>
              <TableCell>Remarks</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendances.map((attendance) => (
              <TableRow key={attendance.id}>
                <TableCell>{attendance.studentName}</TableCell>
                <TableCell>{new Date(attendance.date).toLocaleDateString()}</TableCell>
                <TableCell>{attendance.present ? 'Yes' : 'No'}</TableCell>
                <TableCell>{attendance.remarks}</TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    onClick={() => handleOpen(attendance)}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDelete(attendance.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editingAttendance ? 'Edit Attendance' : 'Add New Attendance'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Student Name"
            fullWidth
            value={formData.studentName}
            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.present}
                onChange={(e) => setFormData({ ...formData, present: e.target.checked })}
              />
            }
            label="Present"
          />
          <TextField
            margin="dense"
            label="Remarks"
            fullWidth
            multiline
            rows={4}
            value={formData.remarks}
            onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            {editingAttendance ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default StudentAttendanceList; 