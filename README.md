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

6. What is a Git branch?  
   - A) A copy of a file  
   - B) A code versioning snapshot  
   - **C) A version of your repository history**  
   - D) A type of commit  

7. What does `git pull` do?  
   - A) Push commits to GitHub  
   - B) Reset your repo  
   - **C) Fetch and merge from remote**  
   - D) Backup your files  

8. How do you stage all modified files?  
   - A) `git all`  
   - B) `git push`  
   - C) `git commit -m`  
   - **D) `git add .`**  

---

#### ⚙️ **.NET Core**

9. What is Entity Framework Core used for?  
   - A) Managing user roles  
   - B) Handling web requests  
   - **C) Mapping C# classes to database tables**  
   - D) Running JavaScript  

10. What's the purpose of `appsettings.json`?  
    - A) Store API endpoints  
    - **B) Configure app settings like DB connection strings**  
    - C) Define controllers  
    - D) Handle routing  

11. Which command runs a .NET Core project?  
    - A) `dotnet start`  
    - B) `dotnet compile`  
    - **C) `dotnet run`**  
    - D) `dotnet execute`  

12. What does `[HttpPost]` represent in a controller?  
    - A) A file upload  
    - B) An HTML POST form  
    - **C) An endpoint for POST requests**  
    - D) A redirect  

---

#### ⚛️ **Frontend Frameworks**

13. What command creates a new Angular project?  
    - A) `ng app create`  
    - B) `ng start`  
    - **C) `ng new`**  
    - D) `angular init`  

14. In React, what is a component?  
    - A) A database table  
    - **B) A function or class that renders UI**  
    - C) A hook  
    - D) A node module  

15. How do you bind data in VueJS templates?  
    - A) `{= value =}`  
    - **B) `v-bind:value` or `:value`**  
    - C) `v-for:value`  
    - D) `@value`  

16. What is the default file extension for Svelte components?  
    - **A) `.svelte`**  
    - B) `.svt`  
    - C) `.js`  
    - D) `.component`  

---

#### 💡 **General Concepts**

17. What does REST stand for?  
    - A) Random Enhanced Server Transfer  
    - B) Ready State Environment Transport  
    - **C) Representational State Transfer**  
    - D) Remote Execution Static Transfer  

18. What is JSON used for?  
    - A) Sending UI files  
    - B) Styling elements  
    - **C) Structuring and exchanging data**  
    - D) Loading database drivers  

19. What is the role of `Tailwind CSS`?  
    - A) It's a database system  
    - B) A backend tool for API management  
    - **C) A utility-first CSS framework**  
    - D) A JavaScript compiler  

20. What does `docker-compose down` do?  
    - A) Launches containers  
    - **B) Stops and removes containers, networks, volumes**  
    - C) Restarts all containers  
    - D) Clears Docker images  

---

### 💻 **Part II – Final Project (10 points)**

#### 🔧 Project: **Custom Project Assigned by Last Digit of RA**

Each student must build a **fullstack CRUD application** using:

- **Backend:** ASP.NET Core WebAPI with Entity Framework, based on last digit of **student ID**
- **Frontend:** You are free to choose the frontend framework
- **Docker Compose:** Must be used to simulate production environment
- **GitHub:** Public repository with correct structure and README

---

### 🛠️ Project Assignments (Randomized by Last Digit)

| Last Digit | Fullstack Project             |
| ---------- | ----------------------------- |
| 0          | **Book Library System**       |
| 1          | **Bug Tracker System**        |
| 2          | **Contact List Manager**      |
| 3          | **Expense Tracker**           |
| 4          | **Travel Journal App**        |
| 5          | **Fitness Tracker App**       |
| 6          | **Student Attendance System** |
| 7          | **Movie Watchlist**           |
| 8          | **Job Application Tracker**   |
| 9          | **Recipe Manager**            |

---

### ✅ Must Include

#### 📦 Backend (ASP.NET Core API):

Create a `.NET Core WebAPI` project  
Build CRUD operations for the **entity below**, based on your assigned project:  
Use Entity Framework with PostgreSQL || MySQL || MSSQL || SQLite  
Enable CORS  
Push code to a public GitHub repository  

##### Entities by Project:

| Project                     | Entity and Fields                                                                 |
|-----------------------------|-----------------------------------------------------------------------------------|
| **Book Library System**     | **Book**: ID, Title, Author, Genre, PublishedYear                                |
| **Recipe Manager**          | **Recipe**: ID, Name, Ingredients, Instructions, PrepTime                        |
| **Fitness Tracker App**     | **Workout**: ID, Date, Type, Duration, CaloriesBurned                            |
| **Contact List Manager**    | **Contact**: ID, FullName, Email, Phone, IsFavorite (boolean)                    |
| **Bug Tracker System**      | **Bug**: ID, Title, Description, Priority, IsResolved (boolean)                  |
| **Movie Watchlist**         | **Movie**: ID, Title, Genre, Watched (boolean), Rating                           |
| **Expense Tracker**         | **Expense**: ID, Description, Amount, Date, Category                             |
| **Job Application Tracker** | **Application**: ID, Company, Position, Status, AppliedDate                      |
| **Student Attendance System** | **StudentAttendance**: ID, StudentName, Date, Present (boolean), Remarks       |
| **Travel Journal App**      | **TravelEntry**: ID, Location, Date, Description, Photos (string or URL)         |

---

#### 🌐 Frontend App:

- Frameworks allowed: Angular, ReactJS, VueJS, Svelte
- List, Create, Update, Delete items  
- API integration  
- Use a UI library (Tailwind, Material or Bootstrap)

---

### 🐳 Docker Setup:
- `Dockerfile` for frontend and backend  
- `docker-compose.yml` in root  
- App should run via `docker-compose up`  

---

### 📁 GitHub Repo Structure
Repository name: `tt4-final-exam-1280_2025050212001600`

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

## 📄 **Extra Requirement – Project README**

The `README.md` file in the GitHub repository **must contain this final exam** (both parts I and II).

- Students must **highlight their selected answers** in the multiple-choice questions by surrounding the chosen option with `**` (markdown bold).
  
  ### Example:
  ```markdown
  1. What is Docker?  
     - A) A relational database  
     - **B) A container platform for creating and managing environments**  
     - C) A web server  
     - D) A frontend framework  
  ```
  
---

## 📤 HOW TO COPY THIS EXAM INTO YOUR README

> ✨ Follow these steps to copy this entire exam into your `README.md` file:

**Scroll up → Click the "Raw" button on the top → Press Ctrl + A → Ctrl + C (copy the content) → Paste into your `README.md` file**

---

### 📊 **Grading Criteria**

| Section                                  | Points | Notes                                                              |
|------------------------------------------|--------|--------------------------------------------------------------------|
| **Structure (Working) + MCQ submission** | 4.0    | Just having the full structure working + answered questions (right or wrong) |
| **Backend implementation**               | 2.0    | CRUD API, DB, CORS, EF, correct endpoints                         |
| **Frontend implementation**              | 2.0    | CRUD with correct framework, working with API                     |
| **Docker & Compose setup**               | 1.5    | Functional Dockerfiles, working Compose setup                     |
| **GitHub + README**                      | 0.5    | Proper structure, includes this full exam in README               |
| **TOTAL**                                | 10.0   |                                                                    |

---

### 🔍 Example Projects (Reference Only)

  - [Product Managemnet System](https://github.com/allanbarcelos/product-management-system)
  - [Task Management System](https://github.com/allanbarcelos/task-management-system)
  - [Project Management System](https://github.com/allanbarcelos/project-management-system)
  - [Student Management System](https://github.com/allanbarcelos/student-management-system)
  - [FullSTack Project VueJS](https://github.com/allanbarcelos/tt4-final-exam-simulation_vuejs)
  - [FullSTack Project Angular](https://github.com/allanbarcelos/tt4-final-exam-simulation_angular)
  - [FullSTack Project ReactJS](https://github.com/allanbarcelos/tt4-final-exam-simulation_reactjs)
  - [FullSTack Project Svelte](https://github.com/allanbarcelos/tt4-final-exam-simulation_svelte)

---

### 📩 SUBMISSION FORMAT

Create a **`.txt` file** using Notepad (or any text editor) and name it:

```
final-exam.txt
```

Inside this file, paste **one of the following**:

- The **link to your GitHub repository**  

📝 This `.txt` file is what you will submit on the platform (Omnivox / LEA).

---

# ❌ Not following the repository structure = Automatic elimination  
# 🚨 Submit only the link to your GitHub repository  
# ✅ This document must be included and completed in `README.md`

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