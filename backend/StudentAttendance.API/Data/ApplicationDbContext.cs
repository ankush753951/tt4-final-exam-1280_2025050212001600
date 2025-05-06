using Microsoft.EntityFrameworkCore;
using StudentAttendance.API.Models;

namespace StudentAttendance.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<StudentAttendanceRecord> StudentAttendances { get; set; }
    }
} 