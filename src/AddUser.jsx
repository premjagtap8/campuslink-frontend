import { useForm } from "react-hook-form";

export function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addUser = (data) => {
    fetch("http://localhost:8091/user/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(addUser)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-xl font-semibold text-center">Add User</h1>

        {/* Username */}
        <div>
          <label>Username</label>
          <input
            type="text"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters required",
              },
            })}
            className="w-full border p-2 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errors.username?.message}</p>
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },
            })}
            className="w-full border p-2 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        {/* First Name */}
        <div>
          <label>First Name</label>
          <input
            type="text"
            {...register("firstName", {
              required: "First name is required",
            })}
            className="w-full border p-2 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name</label>
          <input
            type="text"
            {...register("lastName", {
              required: "Last name is required",
            })}
            className="w-full border p-2 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className="w-full border p-2 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* Role */}
        <div>
          <label>Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Select Role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="FACULTY">FACULTY</option>
          </select>
          <p className="text-red-500 text-sm">{errors.role?.message}</p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
}