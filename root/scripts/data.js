function renderList(data) {
    // Get the container where tasks will be displayed
    const container = document.getElementById('tasks-container');
    
    // Clear any existing content
    container.innerHTML = '';

    if (!data.tasks || data.tasks.length != 0) {
        let html = '<table>' +
                    '<tr>' +
                        '<th>Name</th>' +
                        '<th>Category</th>' +
                        '<th>Status</th>' +
                        '<th>Date</th>' +
                        '<th>Est. Time</th>' +
                        '<th>Time Spent</th>' + 
                    '</tr>';
    
    // Loop through each task and create HTML elements
    data.tasks.forEach(task => {
        html += `
           <tr>
                <td>${task.name}</td>
                <td>${task.category}</td>
                <td>${task.status}</td>
                <td>${task.dueDate}</td>
                <td>${task.estimatedTime} minutes</td>
                <td>${task.timeSpent} minutes</td>
          </tr>
        `;
        
        // container.appendChild(taskDiv);
    });
    html += '</table>';
    container.innerHTML = html;
}

// don't know if this works yet!!!!!
else {
    container.innerHTML = '<p>No tasks available.</p>';
}
}

// Fetch and load the data
fetch('./data/data.json')
    .then(res => res.json())
    .then(data => renderList(data))
    .then(() => console.log('Data loaded successfully.'))
    .catch(err => console.error('Data load failed:', err));