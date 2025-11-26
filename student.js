import { API_BASE_URL } from "./config.js";

document.getElementById("studentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const payload = {
        last_name: document.getElementById("lastName").value,
        given_name: document.getElementById("givenName").value,
        middle_name: document.getElementById("middleName").value,
        extension: document.getElementById("extension").value,
        student_number: document.getElementById("studentNumber").value,
        course_year_section: document.getElementById("courseYearSection").value,
        email: document.getElementById("email").value,
    };

    try {
        const response = await fetch(`${API_BASE_URL}/students`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            alert("Error: " + data.error || "Registration failed");
            return;
        }

        alert("Student registered successfully!");
        document.getElementById("studentForm").reset();
    } catch (err) {
        alert("Error submitting form. Please try again.");
    }
});
