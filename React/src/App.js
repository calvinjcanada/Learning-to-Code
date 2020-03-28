// import React from "react";
// import React, { Fragment, Component } from "react";
import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";

class App extends Component {
  // MUST extend the main React component class
  // main React component class = houses all of the lifecycle methods

  foo1 = () => "Global Scope";

  state = {
    // Holds the state of an object (the app)
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  async componentDidMount() {
    // Default users that are displayed before you search

    //   // Lifecycle function
    //   // Runs everytime a component mounts to the App.js file

    //   // if the profile is still loading, display a loading icon else display the data
    //   // You HAVE to use setState to change a state object attribute, cannot just do loading = true
    //   this.setState({ loading: true });

    //   console.log("component mounted - 123");
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    //   // Test Environment Variables from ".env file"

    //   // This is where you want to do your HTTP requests (HTTP Request or Axios [npm install axios])
    // const response = await axios.get(
    //   `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    // );
    //   // Use Environment Variables
    //   console.log(response.data);

    // this.setState({ users: response.data, loading: false });
  }

  searchUsers = async text => {
    // Function to take text from search bar and pass in API call to Github
    this.setState({ loading: true });
    console.log(text);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // Use Environment Variables: store api call and response data in response
    console.log(response.data.items);

    this.setState({ users: response.data.items, loading: false });
  };

  // Get user profiles
  getUser = async username => {
    this.setState({ loading: true });
    console.log(username);
    const response = await axios.get(
      `https://api.github.com/users?q=${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // Use Environment Variables: store api call and response data in response
    console.log(response.data.items);

    this.setState({ user: response.data, loading: false });
  };

  // clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set alerts (Does not display it..only puts in the state object[requires Alert component (Alert.js)])
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 2000);
    // Timer to remove alert
  };

  render() {
    const { users, user, loading } = this.state;
    // Required Lifecycle Function - Renders the app
    // In Class-Based components, you need a function that returns the app
    // [in Functional components, you just put this stuff in a return statment return (<CODE></CODE>)]

    // const name = "John Doe";

    // const foo2 = () => "Local Scope";
    // Arrow function: Just return string 'Bar'

    // const loading = true;
    // const loading = false;
    // boolean to be represent loading data (if data has returned or not)

    // if (loading) {
    //   return <h4>Loading.....</h4>;
    // }

    // const showName = true;
    // const showName = false;
    // boolean to control if name is shown

    return (
      <Router>
        {/* // The returned Element MUST always be one parent element (nothing can
        be outside of the div with class App */}
        <div className="App">
          <Navbar title="Github-Finder" icon="fab fa-github" />
          {/* Navbar is a React component that we created using Emmet "rce" */}
          {/* It resides in ./components/layout/Navbar.js */}
          {/*  */}
          {/* These are wrapped in the parent element */}
          {/* reference a variable = {name} */}
          {/* <h1>Hello {showName && name} from React</h1> */}
          {/* 1st argument = boolean conditional */}
          {/* 2nd argument = value to be computed */}
          {/* <h1>Hello {5 + 10} from React</h1> */}
          {/* <h1>Hello {name.toLowerCase()} from React</h1> */}
          {/* <h1>Hello {foo2()} from React</h1> */}
          {/* Local scope foo */}
          {/* <h1>Hello {this.foo1()} from React</h1> */}
          {/* Global scope foo */}
          {/* {loading ? <h4>Loading...</h4> : <h4>Page is loaded!!!</h4>}; */}
          {/*Ternary Operation is a boolean in expression form.*/}
          {/*1st = comparison [true or false]*/}
          {/*2nd = True value*/}
          {/*3rd = False value*/}
          {/* <UserItem /> */}

          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              {/* Root Route */}
              {/* The home page component: Renders the homepage */}
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      // {/* takes text from Search.js and passes to searchUsers function which passes the text in an api call */}
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      // Here we are passing props UP to the App level (these are propFunctions)
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                      // Add to propTypes
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              {/* User route */}

              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
              {/* About route: Routes directly to a local component */}
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
      //
      // React Fragments can make it possible to NOT need the one parent element
      // <Fragment>
      //   {/* <> </> also = <Fragment></Fragment> */}
      //   {/* These are NOT wrapped in the parent element */}
      //   <h1>Hello from React</h1>
      //   <h2>Goodbye</h2>
      // </Fragment>
      // You can only have 1(parent element) or the other (React fragments)
    );
  }
}

export default App;
