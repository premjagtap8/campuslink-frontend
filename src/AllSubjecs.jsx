import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function AllSubjects() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getAllSubjects();
  }, []);

  const getAllSubjects = () => {
    fetch("http://localhost:8091/subject/get-all-subjects")
      .then((res) => res.json())
      .then((data) => setSubjects(data || []));
  };

  const deleteSubject = (id) => {
    if (!window.confirm("Are you sure you want to delete this subject?")) return;

    fetch(`http://localhost:8091/subject/delete-subject/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then(() => getAllSubjects());
  };

  const updateSubject = (id) => {
    navigate(`${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">All Subjects</h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects.length > 0 ? (
              subjects.map((subject) => (
                <tr
                  key={subject.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="p-3">{subject.id}</td>
                  <td className="p-3">{subject.name}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => deleteSubject(subject.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => updateSubject(subject.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  No subjects found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}