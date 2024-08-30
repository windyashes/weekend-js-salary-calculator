document.addEventListener('DOMContentLoaded', onReady(), false)

function onReady(){
    console.log('dom is ready');
}


function submitEmployeeForm(event){
    event.preventDefault();
    alert('i ran')
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
              <button onclick="deleteEmployee(event)">Delete</button>
          </td>
         </tr>
    `
}
function deleteEmployee(event){
    event.target.closest('tr').remove();
}