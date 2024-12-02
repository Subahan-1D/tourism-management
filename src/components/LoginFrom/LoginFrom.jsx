"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { doSocialLogin } from "../../../_actions";
import LogOut from "./LogOut";
const Login = () => {
  const [showPassword, setShowPassword] = useState();
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)]">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://i.ibb.co.com/Gd2NptF/login.jpg')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8 rounded-full"
              src="https://i.ibb.co.com/VSfzQph/subahan.jpg"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Welcome back!
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
              or login with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form action={doSocialLogin}>
            <div className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 ">
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <div className="w-5/6 px-4 py-3 font-bold text-center">
                <button type="submit" name="action" value="google">
                  Sign in with Google
                </button>
              </div>
            </div>
            <div className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 ">
              <div className="px-4 py-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0.297C5.372 0.297 0 5.67 0 12.297C0 17.596 3.438 22.092 8.207 23.642C8.805 23.746 9.024 23.396 9.024 23.09C9.024 22.81 9.014 22.112 9.008 21.199C5.672 21.934 4.968 19.694 4.968 19.694C4.422 18.292 3.633 17.922 3.633 17.922C2.545 17.246 3.717 17.261 3.717 17.261C4.914 17.354 5.54 18.516 5.54 18.516C6.633 20.33 8.405 19.791 9.146 19.498C9.242 18.73 9.55 18.219 9.887 17.934C7.215 17.647 4.432 16.569 4.432 11.986C4.432 10.635 4.922 9.54 5.75 8.69C5.621 8.399 5.197 7.099 5.866 5.394C5.866 5.394 6.895 5.084 9.014 6.694C9.999 6.405 11.05 6.263 12.098 6.257C13.146 6.263 14.198 6.405 15.186 6.694C17.302 5.084 18.329 5.394 18.329 5.394C18.999 7.099 18.576 8.399 18.447 8.69C19.279 9.54 19.766 10.635 19.766 11.986C19.766 16.581 16.974 17.639 14.287 17.922C14.732 18.301 15.135 19.002 15.135 20.09C15.135 21.65 15.124 22.781 15.124 23.09C15.124 23.396 15.34 23.748 15.944 23.642C20.715 22.09 24 17.596 24 12.297C24 5.67 18.627 0.297 12 0.297Z" />
                </svg>
              </div>

              <div className="w-5/6 px-4 py-3 font-bold text-center">
                <button type="submit" name="action" value="github">
                  Sign in with Github
                </button>
              </div>
            </div>

            {/* <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div> */}

            {/* <div className="relative mt-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered  block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                id="loggingPassword"
                autoComplete="current-password"
                required
              />
              <span
                className="absolute top-4 right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div> */}
            {/* <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div> */}
          </form>

          {/* <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              href=""
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
