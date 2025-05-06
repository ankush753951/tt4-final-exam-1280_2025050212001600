using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentAttendance.API.Data;
using StudentAttendance.API.Models;

namespace StudentAttendance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentAttendanceController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StudentAttendanceController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/StudentAttendance
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentAttendanceRecord>>> GetStudentAttendances()
        {
            return await _context.StudentAttendances.ToListAsync();
        }

        // GET: api/StudentAttendance/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentAttendanceRecord>> GetStudentAttendance(int id)
        {
            var studentAttendance = await _context.StudentAttendances.FindAsync(id);

            if (studentAttendance == null)
            {
                return NotFound();
            }

            return studentAttendance;
        }

        // POST: api/StudentAttendance
        [HttpPost]
        public async Task<ActionResult<StudentAttendanceRecord>> CreateStudentAttendance(StudentAttendanceRecord studentAttendance)
        {
            _context.StudentAttendances.Add(studentAttendance);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStudentAttendance), new { id = studentAttendance.Id }, studentAttendance);
        }

        // PUT: api/StudentAttendance/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudentAttendance(int id, StudentAttendanceRecord studentAttendance)
        {
            if (id != studentAttendance.Id)
            {
                return BadRequest();
            }

            _context.Entry(studentAttendance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentAttendanceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/StudentAttendance/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentAttendance(int id)
        {
            var studentAttendance = await _context.StudentAttendances.FindAsync(id);
            if (studentAttendance == null)
            {
                return NotFound();
            }

            _context.StudentAttendances.Remove(studentAttendance);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StudentAttendanceExists(int id)
        {
            return _context.StudentAttendances.Any(e => e.Id == id);
        }
    }
} 