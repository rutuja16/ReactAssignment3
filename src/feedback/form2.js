import React from 'react';

class Form2 extends React.Component{
    render(){
        return(
            <div>
            <h1>EMPLOYEE FEEDBACK DATA</h1>
            <div className="Div2">
            {this.props.employee.map((value, index) => {
                return (
                    <div key={index} className="data">
                    <br/>
                    Name : {value.name} | Department : {value.dept} | Rating : {value.rating}
                    </div>
                    )
                })}
                </div>
                <br/>
                <button onClick={this.props.showEmpData}>Go Back</button>
                </div>
                )
            }
        }

export default Form2
