function renderList(data) {
    // Get the container where tasks will be displayed
    const container = document.getElementById('tasks-container');
    
    // Clear any existing content
    container.innerHTML = '';

    //get the categories
    if (data.categories && data.categories.length !== 0) 
        categoriesOptions = "";
        {
        data.categories.forEach(category => {
            //categoriesOptions += '<select>';
            categoriesOptions += `<option value="${category.name}" style="background-color: ${category.color};">${category.name}</option>`;

    });
   // categoriesOptions += '</select>';
    }
    


// try {
    if (data.tasks && data.tasks.length !== 0) {
        //
        let html = '<table>' +
                    '<tr>' +
                        '<th></th>' +
                        '<th>Name</th>' +
                        '<th>Category</th>' +
                        '<th>Status</th>' +
                        '<th>Due Date</th>' +
                        '<th>Est. Time</th>' +
                        '<th>Time Spent</th>' + 
                    '</tr>';
    
        // Loop through each task and create HTML elements
        data.tasks.forEach(task => {
            html += `
            <tr>
                    <td><button class="timer">Start Timer</button></td>
                    <td><input type="text" value="${task.name}"></td>
                    <td><select>
                        ${categoriesOptions}
                    </select></td>
                    <td><select>
                        <option value="not-started" style="background-color: lightgray;" ${task.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
                        <option value="in-progress" style="background-color: lightblue;" ${task.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                        <option value="completed" style="background-color: lightgreen;" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
                    </select></td>
                    <td><input type="date" value="${task.dueDate}"></td>
                    <td><input type="number" value="${task.estimatedTime}" min="0"> minutes</td>
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
// } catch (error) {
//     console.error('Error rendering tasks:', error);
//     container.innerHTML = '<p>Error loading tasks. Please try again later.</p>';
// }

// Fetch and load the data
fetch('./data/data.json')
    .then(res => res.json())
    .then(data => renderList(data))
    .then(() => console.log('Data loaded successfully.'))
    .catch(err => {
        console.error('Data load failed:', err); 
        document.getElementById('tasks-container').innerHTML = '<p>Error loading tasks. Please try again later.</p>'
    });