import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function AllStudent() {
  const navigate = useNavigate();
  const [students, setstudents] = useState([]);

  useEffect(() => {
    getAllStudent();
  }, []);

  const getAllStudent = () => {
    fetch("http://localhost:8091/student/get-all-students")
      .then((response) => response.json())
      .then((data) => setstudents(data));
  };

  const deleteStudent = (id) => {
    fetch(`http://localhost:8091/student/delete-student/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then(() => getAllStudent())
      .catch((error) => console.log(`error is ${error.message}`));
  };

  const updateStudent = (id) => {
    navigate(`${id}`);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">All Students</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border-collapse">

          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Id</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((singlestudent) => (
              <tr key={singlestudent.id} className="border-t hover:bg-gray-100">

                <td className="p-3">{singlestudent.id}</td>
                <td className="p-3">{singlestudent.name}</td>
                <td className="p-3">{singlestudent.email}</td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => deleteStudent(singlestudent.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => updateStudent(singlestudent.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Update
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}