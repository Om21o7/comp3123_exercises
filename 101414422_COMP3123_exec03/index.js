var http = require("http");
const employeeModule = require('./Employee');

console.log("Lab 03 -  NodeJs");


const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); 

    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
        return; 
    }

    if (req.url === '/') {
        // Display welcome message
        res.setHeader('Content-Type', 'text/html'); 
        res.end("<h1>Welcome to Lab Exercise 03</h1>");
        return; 
    }

    if (req.url === '/employee') {
        // Display all details for employees in JSON format
        const employees = employeeModule.getAllEmployees();
        res.end(JSON.stringify(employees));
        return; 
    }

    if (req.url === '/employee/names') {
        // Display only all employees' {first name + last name} in ascending order in JSON Array
        const employeeNames = employeeModule.getAllEmployees()
            .map(emp => `${emp.firstName} ${emp.lastName}`)
            .sort(); // Sort names alphabetically
        res.end(JSON.stringify(employeeNames));
        return; 
    }

    if (req.url === '/employee/totalsalary') {
        // Calculate and display the sum of all employees' salaries
        const totalSalary = employeeModule.getAllEmployees()
            .reduce((sum, emp) => sum + emp.Salary, 0); 
        res.end(JSON.stringify({ total_salary: totalSalary }));
        return; 
    }

    // Handle 404 - Not Found
    res.statusCode = 404;
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});