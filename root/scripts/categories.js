const categoryModal = document.getElementById("modalCategory");
const categoryBtn = document.getElementById("category");
const categoryClose = document.querySelector("#modalCategory .close");

categoryBtn.onclick = () => {
  categoryModal.style.display = "block";
};

categoryClose.onclick = () => {
  categoryModal.style.display = "none";
};

window.addEventListener("click", (event) => {
  if (event.target === categoryModal) {
    categoryModal.style.display = "none";
  }
});

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// } 

//put the categories in the container
function renderCategories(data) {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = '';

    let categoryHtml = '<button id="addCategory">Add Category</button>';

    // Check categories properly
    if (data.categories && data.categories.length !== 0) {

        data.categories.forEach(category => {
            categoryHtml += `
                <div class="category-item">
                    <label>Name</label>
                    <input type="text" value="${category.name}" readonly>

                    <label>Color</label>
                    <input type="color" value="${category.color}" readonly>
                </div>
            `;
        });

        categoryHtml += `<button id="save">Save</button>` ;

        categoryContainer.innerHTML = categoryHtml;

    } else {
        categoryContainer.innerHTML = '<p>No categories available.</p>';
    }
}




// Fetch and load the data
fetch('./data/data.json')
    .then(res => res.json())
    .then(data => {
        renderTasks(data);      // data.js logic
        renderCategories(data); // categories.js logic
    })
    .then(() => console.log('Data loaded successfully.'))
    .catch(err => {
        console.error('Data load failed:', err);
        document.getElementById('category-container').innerHTML = '<p>Error loading categories. Please try again later.</p>'
    });