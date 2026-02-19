"use client";

import { postUserData } from "@/action/server/auth";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {

        const imageFile = data.image[0]

        const formData = new FormData()

        formData.append('image',imageFile)

        const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY

        const imageresponse = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`,formData)
        const image = imageresponse.data.data.url

        const userInfo={
            name:data.name,
            email: data.email,
            image:image,
            password: data.password
        }
        
        const res = await postUserData(userInfo)

        if(res.insertedId){
            alert('Your Registration has been successfully!')
        }

        reset()

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary/5 p-4">
            {/* Card */}
            <div className="w-full max-w-md bg-base-100 shadow-xl rounded-box p-8">

                {/* Title */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-primary">
                        Create Account
                    </h2>
                    <p className="text-base-content/70 text-sm mt-1">
                        Register to get started
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">
                                Full Name
                            </span>
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full focus:input-primary"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />

                        {errors.name && (
                            <p className="text-error text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

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

                    {/* Image */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">
                                Profile Image
                            </span>
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            className="file-input file-input-bordered w-full focus:file-input-primary"
                            {...register("image", {
                                required: "Profile image is required",
                            })}
                        />

                        {errors.image && (
                            <p className="text-error text-sm mt-1">
                                {errors.image.message}
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
                            placeholder="Create password"
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

                    {/* Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full text-white"
                    >
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="divider text-sm">OR</div>

                {/* Google */}
                <button className="btn btn-outline w-full">
                    Continue with Google
                </button>

                {/* Login Link */}
                <p className="text-center text-sm mt-6 text-base-content/70">
                    Already have an account?{" "}
                    <span className="text-secondary font-medium cursor-pointer hover:underline">
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}
