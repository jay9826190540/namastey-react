import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      usersList: [],
      userInput: ''
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }
  async componentDidMount() {
    const userData = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await userData.json();
    this.setState({
      users: jsonData,
      usersList: jsonData
    })
  }
  handleChangeInput(event) {
    console.log(event.target.value);
    let filteredData = this.state.usersList.filter((user) => {
      return (user.name.toLowerCase()).includes(event.target.value.toLowerCase());
    })
    this.setState({
      users: filteredData
    })
  }
  render() {
    return (
      <>
        <h1>User Data</h1>
        <input type="text" onChange={this.handleChangeInput}></input>
        {
          this.state.users.map((user) => {
            return (
              <div key={user.name}>
                <li >{user.name}</li>
              </div>
            )
          })
        }
      </>
    )
  }
}
export default Footer;