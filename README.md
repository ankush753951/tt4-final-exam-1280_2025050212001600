# TT4 - 1280

- You have 4h to do this exam (14:00 - 18:00)
- 20 multiple-choice questions (easy to intermediate)
- A complete fullstack project (backend + frontend)
- GitHub publishing
- Docker Compose for running the app (production-like environment)
- Backend project depends on the **last digit of the student ID**
- Free to choose the Frontend framework

---

### ⏰ IMPORTANT – Read Carefully

Please read the exam instructions thoroughly. Whether you're submitting a smart strategy is to **create your GitHub repository right at the beginning of the exam**.

📎 Then, **submit your repository link as soon as possible** to avoid any last-minute issues or missing the deadline.

✅ This way, you can focus on developing your project calmly, without the stress of rushing to submit the link at the end of the exam.

---

## 📝 **FINAL EXAM – Fullstack Development with Docker, Git, GitHub, .NET Core and JavaScript Frameworks**

---

### ✍️ **Part I – Multiple Choice Questions (20 questions)**  
Each question is worth 0.5 points. Total: **10 points**

---

#### 🐳 **Docker**

1. Which file is used to define how a Docker image is built?  
   - A) `docker-compose.yml`  
   - **B) `Dockerfile`**  
   - C) `image.config`  
   - D) `container.yml`  

2. What does `docker images` command show?  
   - A) Current containers  
   - B) Docker logs  
   - **C) Downloaded images**  
   - D) Running apps  

3. How do you remove a Docker container?  
   - A) `docker stop`  
   - B) `docker delete`  
   - C) `docker remove`  
   - **D) `docker rm`**  

4. What port does Docker map to when using `EXPOSE 80`?  
   - A) Host port 3000  
   - **B) Container's internal port 80**  
   - C) Always port 8080  
   - D) The backend's IP  

---

#### 🌿 **Git / GitHub**

5. Which command initializes a new Git repository?  
   - A) `git new`  
   - B) `git start`  
   - **C) `git init`**  
   - D) `git open`  

---

### 🚀 **Part II – Fullstack Project (10 points)**

#### Backend (ASP.NET Core API):
- Create a .NET Core WebAPI project
- Build CRUD operations for the entity below, based on your assigned project:
  - Use Entity Framework with PostgreSQL || MySQL || MSSQL || SQLite
  - Enable CORS
  - Push code to a public GitHub repository

#### Student Attendance System:
- StudentAttendance: ID, StudentName, Date, Present (boolean), Remarks

#### Frontend App:
- Frameworks allowed: Angular, ReactJS, VueJS, Svelte
- List, Create, Update, Delete items
- API integration
- Use a UI library (Tailwind, Material or Bootstrap)

#### 🐳 Docker Setup:
- Dockerfile for frontend and backend
- docker-compose.yml in root
- App should run via docker-compose up

#### GitHub Repo Structure
Repository name: tt4-final-exam-1280_2025050614001800

Rough structure:
```
/
├── backend/
│   ├── .gitignore
│   ├── Dockerfile
│   └── ...
├── frontend/
│   └── ...
├── .gitignore
├── .dockerignore
├── default.conf
├── Dockerfile
├── docker-compose.yml
├── README.md
```

---

# Student Attendance System

A full-stack application for managing student attendance records.

## Project Structure
```
/
├── backend/           # ASP.NET Core WebAPI
│   ├── .gitignore
│   ├── Dockerfile
│   └── StudentAttendance.API/
├── frontend/         # React Frontend
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── src/
├── .gitignore
├── .dockerignore
├── docker-compose.yml
└── README.md
```

## Technologies Used
- Backend: ASP.NET Core WebAPI 8.0
- Frontend: React with Material-UI
- Database: PostgreSQL
- Containerization: Docker & Docker Compose

## Features
- View all attendance records
- Add new attendance records
- Update existing records
- Delete records
- Responsive design with Material-UI

## API Endpoints
- GET /api/StudentAttendance - Get all attendance records
- POST /api/StudentAttendance - Create new attendance record
- PUT /api/StudentAttendance/{id} - Update attendance record
- DELETE /api/StudentAttendance/{id} - Delete attendance record

## Data Model
```csharp
public class StudentAttendanceRecord
{
    public int Id { get; set; }
    public required string StudentName { get; set; }
    public DateTime Date { get; set; }
    public bool Present { get; set; }
    public required string Remarks { get; set; }
}
```

## Getting Started

### Prerequisites
- Docker and Docker Compose
- .NET Core SDK 8.0 (for local development)
- Node.js 18+ (for local development)

### Running with Docker
1. Clone the repository
2. Navigate to the project root
3. Run `docker-compose up --build`
4. Access the application at `http://localhost:3000`
5. Access the API at `http://localhost:5000/swagger`

### Running Locally

#### Backend
1. Navigate to the backend directory
2. Run `dotnet restore`
3. Run `dotnet run`
4. API will be available at `http://localhost:5000`

#### Frontend
1. Navigate to the frontend directory
2. Run `npm install`
3. Run `npm start`
4. Application will be available at `http://localhost:3000`

## License
MIT 