import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    this.state = {
      friends: [],
      picture: "",
      name: ""
    }
  }

  updatePicture(value) {
      this.setState({picture: value})
  }
  updateName(value) {
    this.setState({ name: value})
  }
  addFriend(value) {
    const { friends,
            picture,
            name } = this.state;
    let newFriends = friends.slice();
    newFriends.push({picture, name})
    this.setState({ friends: newFriends, picture: '', name: ''});
  }


  handleOnclick() {
    this.setState()
  }





  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const friends = this.state.friends.map( ( friend, index ) => (
      <div key={ `friend-${ index }-${ friend.name }` }>
        <img width="100px" src={ friend.picture } />
        <span>{ friend.name }</span>
      </div>
    ));
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">My Mini React App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
          </Collapse>
        </Navbar>

        <span>Paste picture here:</span>
        <input onChange={(e) => this.updatePicture(e.target.value)}
               value={this.state.picture}/>
        <br/>
        <span >Name:</span>
        <input onChange={(e) => this.updateName(e.target.value)}
               value={this.state.name}/>
      
        <Button color="light" onClick={ () => this.addFriend() }>Add Friend</Button>  

        {friends}
      </div>

      

    );
  }
}

export default App;

