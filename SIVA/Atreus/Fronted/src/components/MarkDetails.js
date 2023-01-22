import React, {Fragment, useEffect, useState} from "react";


//create constructor name "StudentDetails"
const MarkDetails = () => {

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

        {/* Mark-Details table name identity */}
        <center><h1>Mark-Details</h1></center>

        {/* Mark-Details Table tag start */}  
        <table className="table mt-5 text-center">
       
       {/* Mark-Details Frist row identiy */}
            <tr>
                <th>Student Roll no</th>
                <th>Name</th>
                <th>Maths </th>
                <th>Physics</th>
                <th>chemistry</th>
                <th>Digital Signal Processing</th>
            </tr>

             {/* Assign*/}
            {list.map(list => (

                // DB variable.backend db file
                <tr key={list.contact_id}>
                    <td>{list.roll_no}</td>
                    <td>{list.name}</td>
                    <td>{list.maths}</td>
                    <td>{list.physics}</td>
                    <td>{list.chemistry}</td>
                    <td>{list.dsp}</td>
                </tr>
            ))}

            {/* Mark-Details Table tag end*/} 
            </table>
        </Fragment>
    );
}

export default MarkDetails;
