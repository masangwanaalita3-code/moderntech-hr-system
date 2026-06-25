// =====================================
// ModernTech HR System JavaScript
// =====================================

// Sample Employee Data
const employees = [
    {
        id: "EMP001",
        name: "John Smith",
        department: "Development",
        email: "john@moderntech.com"
    },
    {
        id: "EMP002",
        name: "Sarah Jones",
        department: "HR",
        email: "sarah@moderntech.com"
    },
    {
        id: "EMP003",
        name: "Michael Brown",
        department: "Finance",
        email: "michael@moderntech.com"
    }
];

// Load Employees into Table
function loadEmployees() {
    const table = document.getElementById("employeeTable");

    if (!table) return;

    table.innerHTML = "";

    employees.forEach(employee => {
        table.innerHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.email}</td>
            </tr>
        `;
    });
}

// Update Dashboard Statistics
function updateDashboard() {
    const employeeCount = document.getElementById("employeeCount");
    const leaveCount = document.getElementById("leaveCount");
    const trainingCount = document.getElementById("trainingCount");
    const departmentCount = document.getElementById("departmentCount");

    if (employeeCount) {
        employeeCount.textContent = employees.length;
    }

    if (leaveCount) {
        leaveCount.textContent = 12;
    }

    if (trainingCount) {
        trainingCount.textContent = 8;
    }

    if (departmentCount) {
        departmentCount.textContent = 6;
    }
}

// Add New Employee
function addEmployee(id, name, department, email) {
    employees.push({
        id,
        name,
        department,
        email
    });

    loadEmployees();
    updateDashboard();
}

// Search Employee
function searchEmployee() {
    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const searchValue = searchInput.value.toLowerCase();

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchValue) ||
        employee.department.toLowerCase().includes(searchValue) ||
        employee.email.toLowerCase().includes(searchValue)
    );

    const table = document.getElementById("employeeTable");

    table.innerHTML = "";

    filteredEmployees.forEach(employee => {
        table.innerHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.email}</td>
            </tr>
        `;
    });
}

// Leave Requests
const leaveRequests = [
    {
        employee: "John Smith",
        type: "Annual Leave",
        status: "Pending"
    },
    {
        employee: "Sarah Jones",
        type: "Sick Leave",
        status: "Approved"
    }
];

// Display Leave Requests
function loadLeaveRequests() {
    console.log("Leave Requests Loaded");
    console.table(leaveRequests);
}

// Training Programs
const trainingPrograms = [
    "Vue.js Fundamentals",
    "Cybersecurity Awareness",
    "Workplace Communication"
];

// Display Training Programs
function loadTrainingPrograms() {
    console.log("Training Programs:");
    trainingPrograms.forEach(program => {
        console.log(program);
    });
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    loadEmployees();
    updateDashboard();
    loadLeaveRequests();
    loadTrainingPrograms();

    console.log("ModernTech HR System Loaded Successfully");
});