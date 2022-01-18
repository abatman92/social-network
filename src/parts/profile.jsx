import React from "react";
import Posts from "./profile-parts/posts";
import UserInf from "./profile-parts/userInf";

function Profile() {
    return (
      <div className="content">
        <UserInf />
        <Posts />
      </div>
    );
}

export default Profile