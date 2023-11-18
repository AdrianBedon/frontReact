import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../auth/context/AuthContext";

export const UsersList = () => {
  const { users } = useContext(UserContext);

  const { login } = useContext(AuthContext);

  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Email</th>
          {!login.isAdmin || (
            <>
              <th>Update Modal</th>
              <th>Update Form</th>
              <th>Delete</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, username, email }) => (
          <UserRow key={id} id={id} username={username} email={email} />
        ))}
      </tbody>
    </table>
  );
};