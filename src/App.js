import { Component } from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import CardList from "./CardList";
import index from "../src/index.css"
import scroll from "./scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) })
  }

  onSearchchange = (event) => {
    this.setState({ searchField: event.target.value })
    console.log(event.target.value)
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })
    console.log(filterRobots)
  }
  render() {
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })
    if (this.state.robots.length === 0) {
      return <h1 className="tc" style={{ color: 'white' }}>Loading....</h1>

    } else {
      return (
        <div className="tc index" >
          <h1 style={{ color: 'white' }}>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchchange} />
          <scroll>
            <CardList robots={filterRobots} />
          </scroll>
        </div>
      );
    }
  }
}

export default App;
