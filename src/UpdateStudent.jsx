
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      id: "",
      name: "",
      email: ""
    }
  });

  useEffect(() => {
    fetch(`http://localhost:8091/student/get-student-by-id/${id}`)
      .then(res => res.json())
      .then(data => reset(data));
  }, []);

  const updateStudent = (data) => {
    fetch("http://localhost:8091/student/update-student", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => navigate("/faculty-dashboard/all-students"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(updateStudent)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Update Student</h1>

        <div>
          <label className="block mb-1 font-medium">ID</label>
          <input
            type="number"
            {...register("id", { required: "ID is required" })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            readOnly
          />
          <p className="text-red-500 text-sm">{errors.id?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required", minLength: { value: 3, message: "Min 3 characters" } })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600 transition"
        >
          Update Student
        </button>
      </form>
    </div>
  );
}