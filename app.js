// Initial declartion ---------------------

var employeeDetails = function(employee_ID,firstName,lastName,gender,age,phoneNumber,address,salary)
{
    this.employee_ID = employee_ID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.salary = salary;
}

employeeDetails.prototype.advancedAccess = function()
{
    console.log(`EMPID-${this.employee_ID} accessed additional access`);
}


var HumanResource = function(employee_ID,firstName,lastName,gender,age,phoneNumber,address,salary,designation)
{
    employeeDetails.call(this,employee_ID,firstName,lastName,gender,age,phoneNumber,address,salary);
    this.designation = designation;
}


var MemberLeadershipStaff = function(employee_ID,firstName,lastName,gender,age,phoneNumber,address,salary,designation)
{
    employeeDetails.call(this,employee_ID,firstName,lastName,gender,age,phoneNumber,address,salary);
    this.designation = designation;
}

var MemberTechnicalStaff = function(employee_ID,firstName,lastName,gender,age,phoneNumber,address,salary,designation)
{
    employeeDetails.call(this,employee_ID,firstName,lastName,gender,age,phoneNumber,address,salary);
    this.designation = designation;
}

var ProjectTrainee = function(employee_ID,firstName,lastName,gender,age,phoneNumber,address,salary,designation)
{
    employeeDetails.call(this,employee_ID,firstName,lastName,gender,age,phoneNumber,address,salary);
    this.designation = designation;
}

//--------------------- Initial declartion 

// variable declaration -----------------

var employeeID=1;
var HR = [],MLS = [],MTS = [],PT = [];
var HrDesignation = {designation : "HumanResource"};
var MlsDesignation = {designation : "MemberLeadershipStaff"};
var MtsDesignation = {designation : "MemberTechnicalStaff"};
var PtDesignation = {designation : "ProjectTrainee"};

//------------------variable declaration

//data creation------------------

document.getElementById("submit").addEventListener("click", function(){
    

    employeeID = (HR.length+MLS.length+MTS.length+PT.length)+1;
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);
    var phoneNumber = parseInt(document.getElementById('phnumber').value);
    var address = document.getElementById('address').value;
    var designation = document.getElementById('designation').value;
    var salary = parseInt(document.getElementById('salary').value);
    
    if(designation === "HumanResource")
    {
        HR.push(new HumanResource(('000' + employeeID).substr(-3),firstName,lastName,gender,age,phoneNumber,address,salary,designation));
    }
    else if(designation === "MemberLeadershipStaff")
    {
        MLS.push(new MemberLeadershipStaff(('000' + employeeID).substr(-3),firstName,lastName,gender,age,phoneNumber,address,salary,designation));
    }
    else if(designation === "MemberTechnicalStaff")
    {
        MTS.push(new MemberTechnicalStaff(('000' + employeeID).substr(-3),firstName,lastName,gender,age,phoneNumber,address,salary,designation));
    }
    else
    {
        PT.push(new ProjectTrainee(('000' + employeeID).substr(-3),firstName,lastName,gender,age,phoneNumber,address,salary,designation));
    }
    
    
    Init();
});

function Init()
{
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('gender').value = 'Male';
    document.getElementById('age').value = '';
    document.getElementById('phnumber').value = '';
    document.getElementById('address').value = '';
    document.getElementById('designation').value = 'HumanResource';
    document.getElementById('salary').value = '';
    document.getElementById('bindEmployeeID').value = '';
}

//------------------data creation

// array operation -----------------------

document.getElementById("filter").addEventListener("click", function(){
    var salaryFilterRecord;
    var salaryFilter = document.getElementById('filterSalary').value;
    salaryFilterRecord = [...HR.filter(arrayItem => arrayItem.salary > salaryFilter
    ),...MLS.filter(arrayItem => arrayItem.salary > salaryFilter
    ),...MTS.filter(arrayItem => arrayItem.salary > salaryFilter
    ),...PT.filter(arrayItem => arrayItem.salary > salaryFilter
    )];
    console.log(salaryFilterRecord);
});


document.getElementById("find").addEventListener("click", function(){
    var EmployeeFindRecord = findEmployeeDetailsByID(document.getElementById('findEmployeeID').value);   
    
    console.log(EmployeeFindRecord);
});

function findEmployeeDetailsByID(EmployeeFind)
{
    var EmployeeFindRecord;
    EmployeeFindRecord = [HR.find(arrayItem => arrayItem.employee_ID == EmployeeFind
    ),MLS.find(arrayItem => arrayItem.employee_ID == EmployeeFind
    ),MTS.find(arrayItem => arrayItem.employee_ID == EmployeeFind
    ),PT.find(arrayItem => arrayItem.employee_ID == EmployeeFind
    )];
    EmployeeFindRecord = EmployeeFindRecord.filter(x =>  x !== undefined);
    
    return EmployeeFindRecord;
}

document.getElementById("mapAndReduce").addEventListener("click", function(){
    
     sum =  [...HR.map(obj => obj.salary),
             ...MLS.map(obj => obj.salary),
             ...MTS.map(obj => obj.salary),
             ...PT.map(obj => obj.salary)]
             .reduce((accumulator, currentValue) =>         accumulator + currentValue, 0);
    
        
        console.log(sum);
    
});


document.getElementById("every").addEventListener("click", function(){
    var EmployeeMinimumSalaryRecord;
    var SalaryFilter = document.getElementById('minimumSalary').value;
    EmployeeMinimumSalaryRecord = 
        [HR.every(obj => obj.salary > SalaryFilter),     MLS.every(obj => obj.salary > SalaryFilter),
        MTS.every(obj => obj.salary > SalaryFilter),     PT.every(obj => obj.salary > SalaryFilter)]
        .every(obj => obj == true);
    
    console.log(EmployeeMinimumSalaryRecord);
});


document.getElementById("some").addEventListener("click", function(){
    var EmployeeMinimumSalaryRecord;
    var SalaryFilter = document.getElementById('maximumSalary').value;
        EmployeeMinimumSalaryRecord = 
        [HR.some(obj => obj.salary > SalaryFilter),     MLS.some(obj => obj.salary > SalaryFilter),
        MTS.some(obj => obj.salary > SalaryFilter),     PT.some(obj => obj.salary > SalaryFilter)]
        .some(obj => obj == true);
    
    console.log(EmployeeMinimumSalaryRecord);
});


document.getElementById("foreach").addEventListener("click", function(){
    EmployeeMinimumSalaryRecord = [];
        
    HR.forEach(obj => EmployeeMinimumSalaryRecord.push(obj));
    MLS.forEach(obj => EmployeeMinimumSalaryRecord.push(obj));
    MTS.forEach(obj => EmployeeMinimumSalaryRecord.push(obj));
    PT.forEach(obj => EmployeeMinimumSalaryRecord.push(obj));
    
    console.log(EmployeeMinimumSalaryRecord);
});

//------------------ array operation


// Object operation ------------------

HumanResource.prototype = Object.create(employeeDetails.prototype);

document.getElementById("create").addEventListener("click", function(){
    
    HR.forEach(obj => console.log(obj.advancedAccess()));
    
});


document.getElementById("assign").addEventListener("click", function(){
    
    var EmployeeFindRecord = findEmployeeDetailsByID(document.getElementById('employeeIDAssign').value);    
    var designationAssign = document.getElementById('designationAssign').value;
    
    if(designationAssign == "HumanResource")
    {
        returnedTarget = Object.assign(EmployeeFindRecord[0], HrDesignation);
    }
    else if(designationAssign == "MemberLeadershipStaff")
    {
        returnedTarget = Object.assign(EmployeeFindRecord[0], MlsDesignation);
    }
    else if(designationAssign == "MemberTechnicalStaff")
    {
        returnedTarget = Object.assign(EmployeeFindRecord[0], MtsDesignation);
    }
    else
    {
        returnedTarget = Object.assign(EmployeeFindRecord[0], PtDesignation);
    }
    
    console.log(returnedTarget);
});



//------------------Object operation

//function operation------------------

document.getElementById("bind").addEventListener("click", function(){
    
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);
    var phoneNumber = parseInt(document.getElementById('phnumber').value);
    var address = document.getElementById('address').value;
    
    var EmployeeFindRecord = findEmployeeDetailsByID(document.getElementById('bindEmployeeID').value);
    
    
    var unboundedEmployeeRecord = function(firstName,lastName,gender,age,phoneNumber,address=this.address)
    {
        if(firstName){this.firstName = firstName;}
        if(lastName){this.lastName = lastName;}
        if(gender){this.gender = gender;}
        if(age){this.age = age;}
        if(phoneNumber){this.phoneNumber = phoneNumber;} 
        
    };
    
    const boundedEmployeeRecord = unboundedEmployeeRecord.bind(EmployeeFindRecord[0]);
    
    boundedEmployeeRecord(firstName,lastName,gender,age,phoneNumber,address);
    
    Init();
    
});


//------------------function operation















