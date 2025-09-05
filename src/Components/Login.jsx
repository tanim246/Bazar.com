import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-md"
      >
        <legend className="fieldset-legend text-pink-500 flex justify-center text-lg font-bold">
          Login
        </legend>

        {/* Name field */}
        <label className="label">Name</label>
        <input
          {...register("name", { required: "name must provide" })}
          type="text"
          className="input border-1 outline-pink-500 w-full"
          placeholder="Name"
        />
        {errors?.name && (
          <p className="text-red-500 text-sm">{errors?.name?.message}</p>
        )}

        {/* Email field */}
        <label className="label">Email</label>
        <input
          {...register("email", {
            required: "email must provide",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "please enter  valid email address",
            },
          })}
          type="text"
          className="input border-1 outline-pink-500 w-full"
          placeholder="Email"
        />
        {errors?.email && (
          <p className="text-red-500 text-sm ">{errors?.email?.message}</p>
        )}

        {/* Password field */}
        <label className="label mt-2">Password</label>
        <input
          {...register("password", {
            required: "password must provide",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must be at least 8 characters, include uppercase, lowercase, number & special character",
            },
          })}
          type="text"
          className="input border-1 outline-pink-500 w-full"
          placeholder="Password"
        />
        {errors?.password && (
          <p className="text-red-500 text-sm ">{errors?.password?.message}</p>
        )}

        {/* pink-500 button */}
        <button className="btn bg-pink-500 hover:bg-pink-600 text-white mt-4 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
