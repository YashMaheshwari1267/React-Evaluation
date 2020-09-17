import React from 'react';
import './EmployeeTable.css';

const EmployeeTable = () => {

    const employee = [
        {name: "Yash", gender: "male",salary: "1000"},
        {name: "Vipul", gender: "male",salary: "2000"},
        {name: "Anshul", gender: "male",salary: "6000"},
        {name: "Yashi", gender: "female",salary: "2000"},
        {name: "Dinky", gender: "female",salary: "7000"}
    ];


    let employees = (
            employee.map(emp => {
            return (
                <tr>
                    <td>{emp.name}</td>
                    <td>{emp.gender}</td>
                    <td>{emp.salary}</td>
                </tr>
            )
        })
    );
    
    return(<div className="table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Salary</th>
                </tr>
                {employees}
            </table>    
        </div>
    )
}

export default EmployeeTable;
