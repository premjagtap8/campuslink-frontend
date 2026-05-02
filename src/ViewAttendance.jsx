import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export function ViewAttendance() {
  const [records, setrecords] = useState([]);
  const [subjects, setsubjects] = useState([]);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getAllSubjects();
  }, []);

  const getAllSubjects = () => {
    fetch("http://localhost:8091/subject/get-all-subjects")
      .then((response) => response.json())
      .then((data) => {
        setsubjects(data);
      });
  };

  const getAllAttendanceByFaculty = (data) => {
    const username=localStorage.getItem("username")
    console.log("insie getAllAttendanceByFaculty method")
    fetch(
      `http://localhost:8091/attendance/get-attendance/${username}/${data.subjectId}/${data.date}`
    )
      .then((response) => response.json())
      .then((records) => {
        setrecords(records);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-6">
        View Attendance
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit(getAllAttendanceByFaculty)}
        className="bg-white p-4 rounded-xl shadow-md flex flex-wrap gap-4 justify-center mb-6"
      >
        <select
          {...register("subjectId")}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {subjects.map((singlesubject) => (
            <option key={singlesubject.id} value={singlesubject.id}>
              {singlesubject.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          {...register("date")}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          View Attendance
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3 text-left">Id</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Students</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">SubjectId</th>
              <th className="p-3 text-left">Faculty</th>
            </tr>
          </thead>

          <tbody>
            {records.length > 0 ? (
              records.map((record) => (
                <tr
                  key={record.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="p-3">{record.id}</td>
                  <td className="p-3">{record.date}</td>
                  <td className="p-3">{record.numberOfStudents}</td>
                  <td className="p-3">{record.time}</td>
                  <td className="p-3">{record.subject.id}</td>
                  <td className="p-3">{record.user.username}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center p-4 text-gray-500"
                >
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}