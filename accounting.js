'use strict'


let employeeCard = localStorage.getItem("employeeCard");
let emp = JSON.parse(employeeCard);
let tableEl = document.getElementById("table1");


getAccountData("Administration");
getAccountData("Marketing");
getAccountData("Development");
getAccountData("Finance");



function getAccountData(department) {

    let numOfEmp=0;
    let totalSal =0;
    let avgSal;
    let numOfDepEmp=0;
    let totalDepSal = 0;
    let avgDepSal;

    emp.forEach(element => {

        numOfEmp = numOfEmp + 1;
        totalSal = totalSal + (element.salary);
        avgSal = totalSal / numOfEmp;
        
        if (element.department == department) {
            
            numOfDepEmp = numOfDepEmp + 1;
            totalDepSal = totalDepSal + (element.salary);
            avgDepSal = totalDepSal / numOfDepEmp;
        }
    })
    
    console.log(`For each ${department} Department:`);
    console.log(`# of Employees :${numOfDepEmp}`);
    console.log(`Total Slaries : ${totalDepSal}`);
    console.log(`Avg of Salaries : ${avgDepSal}`);
    
    console.log("For All Employees ");
    console.log(`# of Employees : ${numOfEmp}`);
    console.log(`Total Slaries : ${totalSal}`);
    console.log(`Avg of Salaries :${avgSal}`);

}









