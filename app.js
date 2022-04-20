`use script`;

// Daeclaration:
const tax = 0.075 ;
let grossSalary=0;
let employ = [];
 employ[0] = new Employee ("1000" ,"Ghazi Samer","Administration","Senior","empImage.jpg")
 employ[1] = new Employee ("1001" ,"Lana Ali","Finance","Senior","empImage.jpg")
 employ[2] = new Employee ("1002" ,"Tamara Ayoub","Marketing","Senior","empImage.jpg")
 employ[3] = new Employee ("1003" ,"Safi Walid" ,"Administration","Mid-Senior","empImage.jpg")
 employ[4] = new Employee ("1004" ,"Omar Zaid","Development","Senior","empImage.jpg")
 employ[5] = new Employee ("1005" ,'Rana Saleh',"Development","Junior","empImage.jpg")
 employ[6] = new Employee ("1006" ,"Hadi Ahmad","Finance","Mid-Senior","empImage.jpg")

 //Constructor:
function Employee(id, name, department, level, image) {
    this.employeeId = id;
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.image = image;
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


Employee.prototype.render = function () {
    document.write(`<h3> The Name of the Employee is: ${this.fullName}  </h3>`)
    document.write(`<h3> His /Her Salary : ${this.salary}</h3>`)
}

for (i = 0; i < 6;i++){
    employ[i].sal();
    employ[i].render();
    console.table(employ[i]);
}


// Function:

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


