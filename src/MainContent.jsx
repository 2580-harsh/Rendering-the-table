import { Component } from "react";

export default class Main extends Component{

state = {
    pageTitle:"Customers",
customers :[
{id:1 , name:"Hasrsh", phone:"12345", address:{city:"NewDElhi"},photo:"https://picsum.photos/id/1010/60"},
{id:2 , name:"Aann", phone:"12345",address:{city:"NewDElhi"},photo:"https://picsum.photos/id/1011/60"},
{id:3 , name:"aMAN", phone:"12345",address:{city:"NewDElhi"},photo:"https://picsum.photos/id/1012/60"},
{id:4 , name:"Akush", phone:"12345",address:{city:"NewDElhi"},photo:"https://picsum.photos/id/1013/60"},
{id:5 , name:"HUstg", phone:"12345",address:{city:"NewDElhi"},photo:"https://picsum.photos/id/1014/60"},

]
}
    render(){
    return <div>
        <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}</h4>
        <table className="table">
            <thead>
                <tr>
                <th>#</th>
                <th>Customers Name</th>
                <th>Phone</th>
                <th>city</th>
                <th>images</th>
                </tr>
            </thead>
            <tbody>
                
                {this.state.customers.map((cust) => {
              return (
                   <tr>
                    <td>{cust.id}</td>
                    <td>{cust.name}</td>
                    <td>{cust.phone}</td>
                    <td>{cust.address.city}</td>
                    <td><img src={cust.photo}></img></td>
                    <td style = {{backgroundColor:(cust.name.startsWith("s"))?"green":"blue"}}></td>

                </tr>
              );    
            })}
            </tbody>
        </table>
    <button className = "btn btn-info" onClick ={this.onRefreshClick}>Refresh</button>
    </div>
}
onRefreshClick(){
    console.log("Refresh clicked");
}
}