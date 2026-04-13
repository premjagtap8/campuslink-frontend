
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AllUsers() {
  const [users, setusers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch("http://localhost:8091/user/get-all-user")
      .then((response) => response.json())
      .then((data) => {
        setusers(data);
      });
  };

  const updateUser = (username) => {
    navigate(`${username}`);
  };

  const deleteUser = (username) => {
    fetch(
      `http://localhost:8091/user/delete-user-by-username?username=${username}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.text())
      .then(() => {
        getAllUsers();
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Users
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">Password</th>
              <th className="p-3 text-left">First Name</th>
              <th className="p-3 text-left">Last Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((singleuser) => (
                <tr
                  key={singleuser.username}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="p-3">{singleuser.username}</td>
                  <td className="p-3">{singleuser.password}</td>
                  <td className="p-3">{singleuser.firstName}</td>
                  <td className="p-3">{singleuser.lastName}</td>
                  <td className="p-3">{singleuser.email}</td>
                  <td className="p-3">{singleuser.role}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => deleteUser(singleuser.username)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => updateUser(singleuser.username)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-4 text-gray-500"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}