import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function UpdateUser() {
  const { username } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      role: ""
    }
  });

  useEffect(() => {
    fetch(`http://localhost:8091/user/get-user-by-username/${username}`)
      .then((res) => res.json())
      .then((data) => reset(data));
  }, []);

  const updateUser = (data) => {
    fetch("http://localhost:8091/user/update-user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then(() => navigate("/admin-dashboard/all-users"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(updateUser)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-xl font-semibold text-center">Update User</h1>

        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            readOnly
          />
          <p className="text-red-500 text-sm">{errors.username?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: { value: 4, message: "Min 4 characters" } })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="FACULTY">FACULTY</option>
          </select>
          <p className="text-red-500 text-sm">{errors.role?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Update User
        </button>
      </form>
    </div>
  );
}