fetch("http://localhost:5000/api/candidates")
.then(res => res.json())
.then(data => {
    const tbody = document.querySelector("#candidatesTable tbody");
    data.forEach(c => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${c.name}</td>
        <td>${c.email}</td>
        <td>${c.visaStatus}</td>
        <td>${c.skills}</td>
        <td><a href="http://localhost:5000/uploads/${c.resume}" target="_blank">Resume</a></td>
        `;
        tbody.appendChild(row);
    });
});
