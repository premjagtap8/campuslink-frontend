

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export function TakeAttendance() {
  const [subjects, setsubjects] = useState([]);
  const [students, setstudents] = useState([]);

  const { register, handleSubmit } = useForm();

  

  

  useEffect(() => {
   

    getAllSubjects();
    getAllStudents();
  }, []);

  const addAttendance = (data) => {
     const username = localStorage.getItem("username"); 
    console.log("addAttendance function is called");
    console.log(data);

    console.log(username)

    data.students = data.students.map((id) => {
      return { id: Number(id) };
    });

    fetch("http://localhost:8091/attendance/take-attendance", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        subjectId: data.subjectId,
        date: data.date,
        time: data.time,
        students: data.students,
      }),
    });
  };

  const getAllSubjects = () => {
    fetch("http://localhost:8091/subject/get-all-subjects")
      .then((response) => response.json())
      .then((data) => {
        setsubjects(data);
      });
  };

  const getAllStudents = () => {
    fetch("http://localhost:8091/student/get-all-students")
      .then((response) => response.json())
      .then((data) => {
        setstudents(data);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(addAttendance)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">
          Take Attendance
        </h2>

        {/* Subject */}
        <div>
          <label className="block mb-1 font-medium">Select Subject</label>
          <select
            {...register("subjectId")}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {subjects.map((singlesubject) => (
              <option key={singlesubject.id} value={singlesubject.id}>
                {singlesubject.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block mb-1 font-medium">Time</label>
          <input
            type="time"
            {...register("time")}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Students */}
        <div className="max-h-40 overflow-y-auto border p-3 rounded-lg">
          <p className="font-medium mb-2">Select Students</p>
          {students.map((singlestudent) => (
            <div
              key={singlestudent.id}
              className="flex items-center gap-2 mb-1"
            >
              <input
                type="checkbox"
                value={singlestudent.id}
                {...register("students")}
                className="accent-blue-500"
              />
              <span>{singlestudent.name}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Attendance
        </button>
      </form>
    </div>
  );
}