using System;

namespace StudentAttendance.API.Models
{
    public class StudentAttendanceRecord
    {
        public int Id { get; set; }
        public required string StudentName { get; set; }
        public DateTime Date { get; set; }
        public bool Present { get; set; }
        public required string Remarks { get; set; }
    }
} 