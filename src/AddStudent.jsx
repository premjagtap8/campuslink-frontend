import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"

export function AddStudent() {
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate()

  const addStudent = (data) => {
    fetch("http://localhost:8091/student/add-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/faculty-dashboard/all-students")

      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit(addStudent)}
        className="bg-white p-8 rounded-2xl shadow-lg w-96 flex flex-col gap-4"
      >

        <h1 className="text-2xl font-bold text-center">
          Add Student
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          {...register("name", { required: true })}
          className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", { required: true })}
          className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Add Student
        </button>

      </form>

    </div>
  );
}