let main = document.querySelector('.container');
let pagination = document.getElementById('pagination');
let currentPage = 2;
let rows = 10;






let searchIcon = document.querySelector('.search-icon');
let searchBox = document.querySelector('.search-bar');
searchIcon.addEventListener('click', function () {
    searchBox.classList.toggle('hide');
});


// rendering employees
let employees = [];
let counter = 0;

async function getData () { 
        $.ajax({
            /* The whisperingforest.org URL is not longer valid, I found a new one that is similar... */
            url: 'https://randomuser.me/api/',
            async: true,
            dataType: 'json',
            success: function (data) {
                employees.push(data.results[0]);
                counter++;
                if (counter < 50) {
                    getData();
                } else {
                    displayData(employees, main, rows, currentPage);
                    setupPagination(employees, pagination, rows);
                    
                }               
            }
        });

}

function displayData(employees, main, rows, page) {
    main.innerHTML = "";
     page--;
     let start = rows * page;
     let end = start + rows;
     let paginatedList = employees.slice(start, end);
     console.log(paginatedList);
     for (let x = 0; x < paginatedList.length; x++) {
         // add array data parsed into html
         console.log(paginatedList[x]);
         main.innerHTML += ` <span class="close hide">X</span> <div class="card">
                    <img src="${paginatedList[x].picture.large}" />
                    <div class="card-body">
                        <h3>${paginatedList[x].name.first} ${paginatedList[x].name.last}</h3>
                        <p>${paginatedList[x].login.username}</p>
                        
                    </div>
                   <p style="padding: 1rem;">Last Joined 1/3/2020</p>
                </div>`;
    }
}


    function paginationButton(page, employees) {
        let button = document.createElement('button');
        button.innerText = page;

        if (currentPage == page) button.classList.add('active');

        button.addEventListener('click', e => {
            currentPage = page;
            displayData(employees, main, rows, currentPage);

            let current_btn = document.querySelector('.pagination button.active');
            current_btn.classList.remove('active');
            button.classList.add('active');
        })

        return button;
    }
function setupPagination(employees, wrapper, rows) {
    console.log('paginating');
    wrapper.innerHTML = "";
    let pageCount = Math.ceil(employees.length / rows);
    for (let i = 1; i < pageCount + 1; i++) {
        let pBtn = paginationButton(i, employees);
        wrapper.appendChild(pBtn);
        console.log(wrapper, pBtn);
    }



}


getData();


