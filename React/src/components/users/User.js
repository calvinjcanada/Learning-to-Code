import React, { Component, Fragment } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    console.log("This.props:");
    console.log(this.props);
    console.log("Props.user:");
    console.log(this.props.user);
    console.log("Params.login:");
    console.log(this.props.match.params.login);
    console.log("User component didMount fired!");
    // Pulls :login param from the route
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;
    console.log(`User: ${name}`);
    console.log({ name });
    console.log("Render this.props.user:");
    console.log(this.props.user);
    const { loading } = this.props;
    // Pull loading from this.props
    // return <div>{name}</div>;
    // return <div>{login}</div>;
    return <div>User</div>;
  }
}

export default User;
