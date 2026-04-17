const completedModal = document.getElementById("modalCompleted");
const completedBtn = document.getElementById("viewCompleted");
const completedClose = document.querySelector("#modalCompleted .close");

completedBtn.onclick = () => {
  completedModal.style.display = "block";
};

completedClose.onclick = () => {
  completedModal.style.display = "none";
};


//put the completed tasks in the container
function renderCompletedTasks(data) {
    const categoryContainer = document.getElementById('completed-container');
    categoryContainer.innerHTML = '';

    let html = "";


    //get the categories
    let categoriesOptions = "";
    if (data.categories && data.categories.length !== 0) {
        data.categories.forEach(category => {
            //categoriesOptions += '<select>';
            categoriesOptions += `<option value="${category.name}" style="background-color: ${category.color};">${category.name}</option>`;

        });
        // categoriesOptions += '</select>';
    }



    // try {
    if (data.tasks && data.tasks.length !== 0) {

        // Loop through each task and create HTML elements
        data.tasks.forEach(task => {
            if (task.status === "Completed") {
            html += `
<p>${task.name}</p>
<p>${task.dueDate}</p>
<p>${task.timeSpent}</p>
<p>${task.completedOn}</p>
`;
            }
        });
        categoryContainer.innerHTML = html;
    }

    else {
        categoryContainer.innerHTML = '<p>No tasks available.</p>';
    }
}




// Fetch and load the data
fetch('./data/data.json')
    .then(res => res.json())
    .then(data => {
        renderTasks(data);      // data.js logic
        renderCompletedTasks(data); // completedTasks.js logic
    })
    .then(() => console.log('Data loaded successfully.'))
    .catch(err => {
        console.error('Data load failed:', err);
        document.getElementById('category-container').innerHTML = '<p>Error loading categories. Please try again later.</p>'
    });