import React, { Component } from "react";
import Employees from "../employees/employees";
import { Link } from "react-router-dom";

class Employeelist extends Component {

  showEmployee() {
    //Change here

    if (this.props.employees != null) {
      return (
        this.props.employees.recordsets &&
        this.props.employees.recordsets.map(employee => {
          return employee.slice(employee.length - 1).map(employees => { //Show the last data
            return <Employees key={employees.id} employee={employees} />;
          });
        })

        //test
        // this.props.employees &&
        // this.props.employees
        //   .slice(this.props.employees.length - 1)
        //   .map(product => {
        //     return <Employees key={product.id} employee={product} />;
        //   })
      );
    }
  }

  showEmployeeCCTV() {
    if (this.props.employeeCCTV != null) {
      // return (
      //   this.props.employeeCCTV &&
      //   this.props.employeeCCTV.map(employee => {
      //     return <Employees key={employee.id} employeeCCTV={employee} />;
      //   })
      // );

      return (
        this.props.employeeCCTV.recordsets &&
        this.props.employeeCCTV.recordsets.map(employee => {
          return employee.reverse().slice(1,10).map(employees => { //Show the last data
            return <Employees key={employees.id} employeeCCTV={employees} />;
          });
        })

      )

    }
  }
  render() {
    const overflow = {
      width: "auto",
      height: 596,
      overflowY: "scroll"
    };
    return (
      <div>
        {this.props.employees && (
          <div className="col-md-5">
            {/* Employee LIST */}
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">Recently Employee</h3>
              </div>
              <div style={{ minHeight: "100%" }}>{this.showEmployee()}</div>
              {/* /.box-footer */}
            </div>
          </div>
        )}
        {/* Change Control Page */}
        {this.props.employeeCCTV && (
          <div className="col-md-4">
            {/* Employee LIST */}
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">Recently Employee</h3>
              </div>
              <div style={{ minHeight: "100%" }} style={overflow}>
                {this.showEmployeeCCTV()}
              </div>

              {/* /.box-footer */}
              <div className="box-footer text-center">
              <Link to="/history">View All Products</Link>
            </div>
            </div>
            
          </div>
        )}
      </div>
    );
  }
}

export default Employeelist;
