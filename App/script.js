document.addEventListener('DOMContentLoaded', onReady(), false)
let totalSalary = 0;
function onReady(){
    console.log('dom is ready');
}


function submitEmployeeForm(event){
    event.preventDefault();
    // alert('i ran')
    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let employeeIDElement = document.getElementById('employee-id');
    let titleElement = document.getElementById('employee-title');
    let salaryElement = document.getElementById('annual-salary');
    
    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let employeeID = employeeIDElement.value;
    let title = titleElement.value;
    let salary = salaryElement.value;

    let monthly = Math.round(Number(salary)/12)
    totalSalary += monthly;

    document.getElementById('employee-table').innerHTML += `
        <tr>
           <td>
                ${firstName}
          </td>
           <td>
                ${lastName}
           </td>
           <td>
                ${employeeID}
           </td>
           <td>
                ${title}
          </td>
          <td>
                ${salary}
           </td>
           <td>
              <button onclick="deleteEmployee(event)" data-monthly="${monthly}">Delete</button>
          </td>
         </tr>
    `
    firstNameElement.value = '';
    lastNameElement.value = '';
    employeeIDElement.value = '';
    titleElement.value = '';
    salaryElement.value = '';
    
    renderMonthly();
}
function deleteEmployee(event){
    console.log(event.target.dataset.monthly);
   totalSalary -= Number( event.target.dataset.monthly );
    event.target.closest('tr').remove();
    renderMonthly();
}
function renderMonthly(){
    document.getElementById('monthly').innerText = `${totalSalary}`;
}