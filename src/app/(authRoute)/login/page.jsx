"use client";
import LoginButton from "@/Components/Buttons/LoginButton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    const result = await signIn("credentials",{
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if(result?.error){
        alert('Password or Email was Wrong')
    }
    else{
        router.push('/')
        reset()
    }

    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/5 px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-box p-8">
        
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-primary">
            Welcome Back
          </h2>
          <p className="text-base-content/70 text-sm mt-1">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-medium">
                Email Address
              </span>
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full focus:input-primary"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-error text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-medium">
                Password
              </span>
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full focus:input-primary"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot */}
          <div className="text-right">
            <a className="text-sm text-secondary hover:underline cursor-pointer">
              Forgot password?
            </a>
          </div>

          {/* Button */}

          <LoginButton/>
          
        </form>

        {/* Divider */}
        <div className="divider text-sm">OR</div>

        {/* Social */}
        <button className="btn btn-outline w-full">
          Continue with Google
        </button>

        {/* Register */}
        <p className="text-center text-sm mt-6 text-base-content/70">
          Don’t have an account?{" "}
          <Link href={'/register'} className="text-accent font-medium cursor-pointer hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
