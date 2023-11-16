import React, { useEffect } from "react";
import "./GrowthEnquiry.css";
import { useSelector, useDispatch } from "react-redux";
import { showUser, deleteUser } from "../../features/user/userSlice";

function GrowthEnquiry() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  return (
    <>
    
      <h1>Enquiry</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Phone No.</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td> {user.name}</td>
              <td> {user.message}</td>
              <td> {user.phone}</td>
              <td> {user.email}</td>
              <td>
                <img
                  src="imgs/delete.png"
                  alt="X"
                  onClick={() => dispatch(deleteUser(user))}
                ></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GrowthEnquiry;
