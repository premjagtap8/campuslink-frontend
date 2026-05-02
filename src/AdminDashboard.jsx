

import { Link, Outlet } from "react-router-dom";

export function AdminDashboard() {


  const logOut=()=>{
    console.log("logout function is called");
    localStorage.clear()
    

  }




  return (
    <div className="min-h-screen flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-5 space-y-4">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

        <Link
          to="add-user"
          className="block p-2 rounded-lg hover:bg-gray-700 transition"
        >
          Add User
        </Link>

        <Link
          to="all-users"
          className="block p-2 rounded-lg hover:bg-gray-700 transition"
        >
          All Users
        </Link>

        <Link
          to="add-subject"
          className="block p-2 rounded-lg hover:bg-gray-700 transition"
        >
          Add Subject
        </Link>

        <Link
          to="all-subject"
          className="block p-2 rounded-lg hover:bg-gray-700 transition"
        >
          All Subjects
        </Link>
      </div>

      <button onClick={logOut}>logout</button>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>

    </div>
  );
}