`use script`;

// Daeclaration:
let cardId = document.getElementById("cardId");
let form = document.getElementById("card");
let employ = [];
const tax = 0.075 ;
let grossSalary = 0;

employ[0] = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "./assest/Ghazi.jpg");
employ[1] = new Employee("1001", "Lana Ali", "Finance", "Senior", "./assest/Lana.jpg");
employ[2] = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "./assest/Tamara.jpg");
employ[3] = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "./assest/Safi.jpg");
employ[4] = new Employee("1004", "Omar Zaid", "Development", "Senior", "./assest/Omar.jpg");
employ[5] = new Employee("1005", 'Rana Saleh', "Development", "Junior", "./assest/Rana.jpg");
employ[6] = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "./assest/Hadi.jpg ");




//Constructor:
function Employee(empNmbr, name, department, level, image,id) {
    
    this.empNmbr = empNmbr;
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;
    this.id = rdmId();

    employ.push(this);

}


Employee.prototype.render = function () {
    
    let cardBox = document.createElement('div');
    cardId.appendChild(cardBox);

    // creating the image of Emolyee :
    let imageEl = document.createElement('img');
    imageEl.src = this.image;
    cardBox.appendChild(imageEl);

    // createing h2 of Emplyee Name :
    let fullName = document.createElement('h2');
    fullName.textContent = `Name: ${this.name}` ; 
    cardBox.appendChild(fullName);

    let nmbrEI = document.createElement('h2');
    nmbrEI.textContent = `ID : ${this.empNmbr}` ;
    cardBox.appendChild(nmbrEI);
    
    // createing h2 of department:
    let departmentEI = document.createElement('h2');
    departmentEI.textContent = `Department :${this.department}` ;
    cardBox.appendChild(departmentEI);
    
    // createing h2 of  level:
    let levelEI = document.createElement('h2');
    levelEI.textContent = `Level : ${this.level}` ;
    cardBox.appendChild(levelEI);
    
    let empId = document.createElement('h2');
    empId.textContent = `${this.id}` ; 
    cardBox.appendChild(empId); 

}

Employee.prototype.sal = function () {
    if (this.level== "Senior") {
        grossSalary = getRndInteger(1500, 2000);
    }
    else if(this.level == "Mid-Senior"){
        grossSalary = getRndInteger(1000, 1500);
    }
    else if(this.level == "Junior"){
        grossSalary = getRndInteger(500, 1000);
    }
    let netSalary = grossSalary - (grossSalary * tax);
    this.salary = netSalary;
}


form.addEventListener("submit", handleSubmit);

getData();


// Functions:

function renderAll() {
    for (i = 0; i < employ.length; i++){
        employ[i].sal();
        employ[i].render();
    }
}

function rdmId() {
  return Math.floor(1000 + Math.random() * 9000);
}
 
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function handleSubmit(event) {

    event.preventDefault();

    let id = event.target.id.value;
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    let empNmbr = 1000 + employ.length;
    let salary = Employee.prototype.sal ();

    // create a new employee card:
    let newEmp = new Employee(empNmbr, fullName, department, level, image, id, salary);
    newEmp.sal();
    newEmp.render();
    console.log(newEmp);
    saveData(employ);

}

function saveData(data) {

    let stringfiyData = JSON.stringify(data);
    localStorage.setItem("employeeCard", stringfiyData);
}


function getData() {
    let retrievedData = localStorage.getItem("employeeCard");
    let arrayData = JSON.parse(retrievedData);
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
            new Employee(arrayData[i].empNmbr, arrayData[i].name, arrayData[i].department, arrayData[i].level, arrayData[i].image, arrayData[i].id);
        } 
    }

renderAll();
}



