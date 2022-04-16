import React, { Component } from "react";
import './form.css'
import Form2 from "./form2.js";
class FeedBackForm extends Component{

    state ={
        name:"",
        dept:"",
        rating:"",
        employee:[],
        showEmp:false
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleClick=(e)=>{
        e.preventDefault();
        const empData=[...this.state.employee]
        empData.push({name:this.state.name, dept:this.state.dept, rating:this.state.rating});
        this.setState({ employee: empData, showEmp:true, name: "", dept: "" , rating: ""});
        console.log(empData)

    }   

    showEmpData=()=>{
        this.setState({showEmp:!this.state.showEmp})
    }
    
    render(){
        return(
            <div>
                {
                    this.state.showEmp 
                    ? 
                    <Form2 employee={this.state.employee} showEmpData={this.showEmpData}/>
                    :
                    
                    <div class="formdata">
                        <h1>Employee Feedback Form</h1>
                        <form onSubmit={this.handleClick}>
                            <label className="label">Name :</label> 
                            <input value={this.state.name} id="name" onChange={this.handleChange}  />
                            <br/><br/>

                            <label>Department :</label> 
                            <input value={this.state.dept} id="dept" onChange={this.handleChange} />
                            <br/><br/>

                            <label>Rating :</label> 
                            <input value={this.state.rating} id="rating" onChange={this.handleChange}  />
                            <br/><br/>

                            <button className="button1" style={{fontSize:"25px"}}>Submit</button>

                        </form>
                    </div>
                    
                }
            </div>
            )
    }
}
export default FeedBackForm;

