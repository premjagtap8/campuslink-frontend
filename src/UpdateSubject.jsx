
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export function UpdateSubject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      id: "",
      name: ""
    }
  });

  useEffect(() => {
    fetch(`http://localhost:8091/subject/get-subject-by-id/${id}`)
      .then((res) => res.json())
      .then((data) => reset(data));
  }, []);

  const updateSubject = (data) => {
    fetch("http://localhost:8091/subject/update-subject", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then(() => navigate("/admin-dashboard/all-subject"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(updateSubject)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-xl font-semibold text-center">Update Subject</h1>

        <div>
          <label className="block mb-1 font-medium">Subject Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Subject name is required",
              minLength: { value: 3, message: "Minimum 3 characters required" },
            })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
        >
          Update Subject
        </button>
      </form>
    </div>
  );
}