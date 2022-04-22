`use script`;

// Daeclaration:
let cardId = document.getElementById("cardId");
let form = document.getElementById("card");




 //Constructor:
function Employee(id, name, department, level, image) {
    
    this.id = rdmId();
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;

}


Employee.prototype.render = function () {
    
    // creating the image of Emolyee :
    let imageEl = document.createElement('img');
    imageEl.src = this.image;
    cardId.appendChild(imageEl);

    // createing h2 of Emplyee Name :
    let fullName = document.createElement('h2');
    fullName.textContent = `Name: ${this.name}` ; 
    cardId.appendChild(fullName);

    let empId = document.createElement('h2');
    empId.textContent = `ID: ${this.id}` ; 
    cardId.appendChild(empId); 

    // createing h2 of department:
    let departmentEI = document.createElement('h2');
    departmentEI.textContent = `Department :${this.department}` ;
    cardId.appendChild(departmentEI);
    
    // createing h2 of  level:
    let levelEI = document.createElement('h2');
    levelEI.textContent = `Level : ${this.level}` ;
    cardId.appendChild(levelEI);
    
}

//Event listener
form.addEventListener("submit", handleSubmit);


// Functions:

function rdmId() {
  return Math.floor(1000 + Math.random() * 9000);
}
 

function handleSubmit(event) {

    event.preventDefault();

    let id = event.target.id.value;
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;

    // create a new employee card:
    let newEmp = new Employee(id,fullName, department, level, image);
    newEmp.render();
    console.log(newEmp);

}




