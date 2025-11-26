import { API_BASE_URL } from "./config.js";

async function loadStudents() {
    try {
        const response = await fetch(`${API_BASE_URL}/students`);
        const data = await response.json();

        if (!response.ok) {
            alert("Failed to load students.");
            return;
        }

        const tbody = document.getElementById("studentsTableBody");
        tbody.innerHTML = "";

        data.forEach((student) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.given_name} ${student.last_name}</td>
                <td>${student.student_number}</td>
                <td>${student.course_year_section}</td>
                <td>
                    <select class="attendance-select">
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Excused">Excused</option>
                    </select>
                </td>
            `;
            tbody.appendChild(row);
        });
    } catch (err) {
        alert("Failed to load students.");
    }
}

document.addEventListener("DOMContentLoaded", loadStudents);
