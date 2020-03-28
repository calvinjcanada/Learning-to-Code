// import React, { Component } from "react";
import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

export const Users = ({ users, loading }) => {
  // state = {
  //   // Hard-coded array of users (don't do this)
  //   // Pull from Github api
  //   users: [
  //     {
  //       id: "1",
  //       login: "mojombo",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //       html_url: "https://github.com/mojombo"
  //     },
  //     {
  //       id: "2",
  //       login: "defunkt",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
  //       html_url: "https://github.com/defunkt"
  //     },
  //     {
  //       id: "3",
  //       login: "pjhyett",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
  //       html_url: "https://github.com/pjhyett"
  //     }
  //   ]
  // };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      // Return a div containing a list of the users array (user.login)
      // .map() accepts an arrow function (it creates the list on the page)
      <div style={userStyle}>
        {users.map(user => (
          // this.props uses state from the API
          // <div key={user.id}>{user.login}</div>
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
const userStyle = {
  // You HAVE to use "camelCase" when using JSX
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};
export default Users;
