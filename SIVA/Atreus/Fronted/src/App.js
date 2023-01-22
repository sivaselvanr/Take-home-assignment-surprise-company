import React, { Fragment } from "react";

//calling StudentDetails.js from directory /src/components/StudentDetails.js
import StudentDetails from "./components/StudentDetails";
import MarkDetails from "./components/MarkDetails";

function App() {
  return (
      <Fragment> 
        <div className="container">

          {/* calling studentdatils page */}
          <StudentDetails />
          <MarkDetails />
        </div>
      </Fragment>
    );
}

export default App;
