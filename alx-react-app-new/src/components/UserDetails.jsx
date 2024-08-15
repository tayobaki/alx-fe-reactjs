import React, { useContext } from "react";
import UserContext from "../../UserContext";

function UserDetails() {
    // Consume the UserContext using useContext hook
    const user = useContext(UserContext);

    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Other user details */}
        </div>
    );
}

export default UserDetails;