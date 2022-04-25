'use strict'


let employeeCard = localStorage.getItem("employeeCard");
let emp = JSON.parse(employeeCard);
let tableOne = document.getElementById("table1");
let tableTwo = document.getElementById("table2");


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
    
    let dep = [department,numOfDepEmp,totalDepSal,avgDepSal];
    let all = [numOfEmp,totalSal,avgSal];
    
    for (let i = 0; i < 1; i++){
        let row = document.createElement("tr");
    for (let j = 0; j< 4;j++){
        let depCell = document.createElement("td");
        depCell.textContent = dep[j];
        row.appendChild(depCell);
    }
        tableOne.appendChild(row);
    }
    for (let i = 0; i < 1; i++){
       let row = document.createElement("tr");
    for (let j = 0; j< 3;j++){
        let cell = document.createElement("td");
        cell.textContent = all[j];
        row.appendChild(cell);
    }
    
        tableTwo.appendChild(row);
    }
    
}








