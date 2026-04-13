
import { useForm } from "react-hook-form";

export function AddSubject() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const addSubject = (data) => {
    console.log("add subject method called");
    fetch("http://localhost:8091/subject/add-subject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(addSubject)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-xl font-semibold text-center">Add Subject</h1>

        <div>
          <label className="block mb-1 font-medium">Subject Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Subject name is required",
              minLength: { value: 3, message: "Minimum 3 characters required" },
            })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add Subject
        </button>
      </form>
    </div>
  );
}