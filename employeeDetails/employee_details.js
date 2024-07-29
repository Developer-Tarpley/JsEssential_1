const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Barry Son', age: 37, department: 'IT', salary: 70000 },
    { id: 5, name: 'Derek Smokley', age: 40, department: 'Finance', salary: 65000 },
    { id: 6, name: 'Katherine Hockles', age: 32, department: 'IT', salary: 80000 },
    { id: 7, name: 'Sara Catronen', age: 53, department: 'HR', salary: 40000 },
    //... More employee records can be added here
];

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => {
        return `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department}
    - $${employee.salary}</p>`;
    }).join('');
    // console.log("totalEmployees: ",totalEmployees)
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
};

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => {
        return acc + employee.salary;
    }, 0);
    alert(`Total Salaries: $${totalSalaries}`);
};

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => {
        return `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    }).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
};

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}