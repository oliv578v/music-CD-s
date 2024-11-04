document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cd-form');
    const tableBody = document.getElementById('cd-table-body');


    function addCD(title, author, year) {

    const row = document.createElement('tr');
    
    const titleCell = document.createElement('td');
    titleCell.textContent = title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = author;
    row.appendChild(authorCell);
    
    const yearCell = document.createElement('td');
    yearCell.textContent = year;
    row.appendChild(yearCell);

    const actionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
    row.remove();
    });
    actionsCell.appendChild(deleteButton);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
    }

    form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    addCD(title, author, year);
    
    form.reset();
    });
});
