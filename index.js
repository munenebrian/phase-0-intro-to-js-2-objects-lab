// Write your solution in this file!
const employee = {
    name: "Maxine",
    streetAddress: "UT Street",
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const new1 = {...employee }
    new1[key] = value;
    return new1;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newOne = {...employee };
    delete newOne[key];
    return newOne
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}