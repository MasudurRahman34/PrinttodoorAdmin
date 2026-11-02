"use client";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { loginMutation } from "@/resolvers/mutation";
import { loginSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const showToastMessage = useToastMessage();
  const { login, isAuthenticated } = useAuth();
  const [show, setshow] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationKey: "login",
    mutationFn: loginMutation,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => {
    const variables = {
      email: data.email,
      password: data.password,
    };

    mutate(
      {
        variables,
      },
      {
        onSuccess: (data) => {
          const { token, tokenType, user } = data?.data;

          login({ token, token_type: tokenType, user });
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-center h-full authentication authentication-basic text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-12">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="col-span-12 xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8">
              <div className="box">
                <div className="box-body !p-[3rem]">
                  <p className="mb-2 font-semibold text-center h5">Sign In</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-12 gap-y-4">
                      <div className="col-span-12 xl:col-span-12">
                        <label
                          for="signin-username"
                          className="form-label text-default"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg w-full !rounded-md"
                          id="signin-username"
                          placeholder="Enter Email"
                          {...register("email", {
                            required: true,
                            validate: (value) => value.includes("@"),
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="col-span-12 mb-2 xl:col-span-12">
                        <label
                          for="signin-password"
                          className="flex justify-between form-label text-default "
                        >
                          Password
                        </label>
                        <div className="input-group">
                          <input
                            type={`${show ? "text" : "password"}`}
                            className="form-control form-control-lg !rounded-s-md"
                            id="signin-password"
                            placeholder="password"
                            {...register("password", { required: true })}
                          />
                          <button
                            aria-label="button"
                            className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                            type="button"
                            onclick="createpassword('signin-password',this)"
                            id="button-addon2"
                          >
                            <i
                              onClick={() => setshow(!show)}
                              className="align-middle ri-eye-off-line"
                            ></i>
                          </button>
                        </div>
                        {errors.password && (
                          <p className="text-red-500">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                      <div className="grid col-span-12 mt-2 xl:col-span-12">
                        <button
                          type="submit"
                          href="index.html"
                          className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium"
                          disabled={isPending}
                        >
                          {isPending ? "Loading..." : "Sign In"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
