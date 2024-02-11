import React from "react"

class UserClass extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      count: 0,
      count1: 1,
    }
  }
  render(){
    const {name, location} = this.props;
    return (
      <div className="user_card">
        <h1>{this.state.count1}</h1>
        <button onClick={()=>{
          this.setState({
            count1: this.state.count1 + 1,
          })
        }}>count increase</button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : jaake puch apne bare me</h4>
      </div>
    )
  }
}

export default UserClass;