import React from "react";
import Posts from "./profile-parts/posts";
import UserInf from "./profile-parts/userInf";

function Profile(props) {
  console.log(props)
  debugger
  return (
    <div className="content">
      <UserInf />
      <Posts messages={props.messages} />
    </div>
  );
}

export default Profile