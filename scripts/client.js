const form = $("form")
const salaryTable = $("#salary-table")
const total = $("#total")

form.submit(function(event){
    event.preventDefault();
    let formData = {
        firstName: $("#first_name").val(),
        lastName: $("#last_name").val(),
        id: $("#id").val(),
        jobTitle: $("#job_title").val(),
        salary: $("#salary").val()
    }

    insertFormData(formData);
    resetFormData();
    calculateTotal();
})

function resetFormData() {
    $("#first_name").val("")
    $("#last_name").val("")
    $("#id").val("")
    $("#job_title").val("")
    $("#salary").val("")
}


function insertFormData (formData) {
 const tbody = $("#tbody")
 const markup  =`
 <tr id="my_row">
      <td> ${formData.firstName}</td>
      <td> ${formData.lastName}</td>
      <td> ${formData.id}</td>
      <td> ${formData.jobTitle}</td>
      <td> ${formData.salary}</td>
      <td> <button  onclick="deleteData(this)">delete</button> </td>
 </tr>
 `
 tbody.append(markup)
}

function calculateTotal () {
    let table = document.getElementById("salary-table"), sumVal = 0;

    for(let i = 1; i < table.rows.length; i++){
      
        sumVal = sumVal + parseInt(table.rows[i].cells[4].textContent);
        
    }

total.text(`Total monthly: $${sumVal}`)

if(sumVal > 20000){
    total.addClass('cost')
}else{
    total.removeClass('cost')
}
}


function deleteData  (td) {

let jqueryObj = jQuery(td);
 row = jqueryObj.parent().parent()
 row.remove();
}




