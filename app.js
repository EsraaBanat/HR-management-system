`use script`;

// Daeclaration:
let cardId = document.getElementById("cardId");
let form = document.getElementById("card");
let employ = [];
employ[0] = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "./assest/Ghazi.jpg");
employ[1] = new Employee("1001", "Lana Ali", "Finance", "Senior", "./assest/Lana.jpg");
employ[2] = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "./assest/Tamara.jpg");
employ[3] = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "./assest/Safi.jpg");
employ[4] = new Employee("1004", "Omar Zaid", "Development", "Senior", "./assest/Omar.jpg");
employ[5] = new Employee("1005", 'Rana Saleh', "Development", "Junior", "./assest/Rana.jpg");
employ[6] = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "./assest/Hadi.jpg ");




//Constructor:
function Employee(id, name, department, level, image) {
    
    this.id = rdmId();
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;

    
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

    let empId = document.createElement('h2');
    empId.textContent = `ID: ${this.id}` ; 
    cardBox.appendChild(empId); 

    // createing h2 of department:
    let departmentEI = document.createElement('h2');
    departmentEI.textContent = `Department :${this.department}` ;
    cardBox.appendChild(departmentEI);
    
    // createing h2 of  level:
    let levelEI = document.createElement('h2');
    levelEI.textContent = `Level : ${this.level}` ;
    cardBox.appendChild(levelEI);
    
}

//Event listener
form.addEventListener("submit", handleSubmit);

for (i = 0; i < employ.length;i++){
    employ[i].render();
}

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




