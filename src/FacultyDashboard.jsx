
import { Link, Outlet } from "react-router-dom";

export function FacultyDashboard() {
  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col p-5 gap-4">
        
        <h2 className="text-xl font-bold mb-4">Faculty Panel</h2>

        <Link 
          to="add-student" 
          className="hover:bg-gray-700 p-2 rounded"
        >
          Add Student
        </Link>

        <Link 
          to="all-students" 
          className="hover:bg-gray-700 p-2 rounded"
        >
          All Students
        </Link>

        <Link 
          to="take-attendance" 
          className="hover:bg-gray-700 p-2 rounded"
        >
          Take Attendance
        </Link>

        <Link 
          to="view-attendance" 
          className="hover:bg-gray-700 p-2 rounded"
        >
          View Attendance
        </Link>

        <button className="mt-auto bg-red-500 hover:bg-red-700 p-2 rounded">
          Logout
        </button>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>

    </div>
  );
}