import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginAsync } from "../../redux/slices/authSlice";
import Allert from "../../components/allert/allert";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resultAction = await dispatch(LoginAsync({ email, password }));
    if (LoginAsync.fulfilled.match(resultAction)) {
      const role = resultAction.payload.data.user.role;
      if (role === "admin") {
        navigate("/");
      } else if (role === "owner") {
        navigate("/owner");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <section className="relative w-screen h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="images/assets/login/imglogin.png"
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="bg-quaternary-900 bg-opacity-75 p-10 px-20 rounded-lg max-w-xl w-full">
          <div className="flex flex-col justify-center items-center gap-2 mb-6">
            <img
              className="lg:w-32 md:mr-4 md:w-10"
              src="images/logo-2.png"
              alt="Gambar"
            />
            <h1 className="font-bold text-2xl text-primary-50 font-montserrat">
              Welcome Back to Rent id
            </h1>
            <p className="font-medium text-white text-md">
              Sign into your account
            </p>
          </div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-md text-white">
              Email
            </label>
            <input
              className="p-2 rounded-lg text-primary-50 bg-quaternary-500 placeholder:text-primary-800 border-2 border-white focus:outline-none focus:ring-1 focus:ring-white"
              type="email"
              name="email"
              id="email"
              placeholder="Masukkan email anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative mt-4">
              <div className="mb-2">
                <label htmlFor="password" className="text-sm text-white">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  className="p-2 rounded-lg text-primary-50 bg-quaternary-500 placeholder:text-primary-800 border-2 border-white focus:outline-none focus:ring-1 focus:ring-white w-full"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                >
                  {!showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-primary-50"
                    >
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-primary-50"
                    >
                      <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {error && <Allert message={error} />}

            <Link className="text-sm text-white ml-auto mt-2">
              Forget Password?
            </Link>

            <button
              type="submit"
              className="rounded-lg bg-primary-100 p-2 text-black text-lg font-semibold mt-5"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            <p className="pt-8 text-center text-white">
              Don’t have an account?{" "}
              <Link to="/register" className="text-white font-bold">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
