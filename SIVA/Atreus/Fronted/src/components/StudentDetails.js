import React, {Fragment, useEffect, useState} from "react";


//create constructor name "StudentDetails"
const StudentDetails = () => {

    const [list, setList] = useState([]);
    const getList = async() => {
        try {

            //get request and fetch
            const response = await fetch("http://ec2-18-142-181-195.ap-southeast-1.compute.amazonaws.com:5000/list")

            //json format data
            const jsonData = await response.json()
            setList(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    
    useEffect(() => {
        getList();
        // [] inserted, so fetch request shows up once and not a lot of times
    }, []);
    
    // console.log(todos); -> I can see the data on console
    return (
        <Fragment>

            {/* Student Details table name identity */}
              <center><h1 className="text-center mt-5">Student-Details </h1></center>

        {/* Student Details Table tag start */}      
        <table className="table mt-5 text-center">

            {/* Student Details Table */}
            <thead>

            {/* First row value identity 0:1 */}
            <tr>
                <th>Student Roll no</th>
                <th>First Name</th>
                <th>Branch</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Mark of 500</th>
            </tr>
            </thead>

            {/* Inner table cells */}
            <tbody>

            {/* Assigning value to  */}
            {list.map(list => (

                // DB variable.backend db file
                <tr key={list.contact_id}>
                    <td>{list.first_name}</td>
                    <td>{list.last_name}</td>
                    <td>{list.birth_date}</td>
                    <td>{list.phone_number}</td>
                    <td>{list.address_info}</td>
                    <td>{list.notes}</td>
                </tr>
            ))}
             </tbody>

        {/* Student Details Table tag end */}
        </table>
        
        </Fragment>
    );
}

export default StudentDetails;
