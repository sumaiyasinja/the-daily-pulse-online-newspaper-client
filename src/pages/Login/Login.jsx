import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import "../../css/GoogleSignInButton.css";


const Login = () => {
  const { loginWithEmailAndPasword, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginWithEmailAndPasword(email, password)
      .then(() => {
        toast.success("Succefully logged in");

        navigate(location?.state ? location?.state : "/");
      })
      .catch((e) => toast.error(e.message));
  };
  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Succefully logged in with google.");
        navigate(location.state ? location.state : "/");
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <section className="p-6 bg-gray-100 text-gray-800">
      <Toaster />
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
          <span className="block mb-2 text-blue-600">Welcome Back!</span>
          <h1 className="text-5xl font-extrabold text-gray-900">Login</h1>
          <p className="my-8">
            <span className="font-medium text-gray-900">
              Join our community
            </span>{" "}
            and get updated with all the latest news! Our platform is always in
            the top.
          </p>
          <form onSubmit={handleLogin} className="self-stretch space-y-3">
            <div>
              <label htmlFor="email" className="text-sm sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full rounded-md focus:ring focus:ring-blue-300 border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm sr-only">
                Your name
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Your password"
                className="w-full rounded-md focus:ring focus:ring-blue-300 border-gray-300"
              />
            </div>
            <p className="block mb-2 text-blue-600">
              <Link to="/register" className="ml-1">
                New here? Register
              </Link>
            </p>
            <button
              className="bg-blue-600 text-gray-50 py-2 flex items-center justify-center gap-3  w-full"
              onClick={handleGoogleSignIn}
            >
              <FaGoogle />
              Sign In with Google
            </button>
            <input
              type="submit"
              value={"Login"}
              className="w-full py-2 font-semibold rounded bg-blue-600 text-gray-50"
            />
          </form>
        </div>
        <img
          src="https://i.ibb.co/C7S8tCG/newspaper-cartoon.png"
          alt=""
          className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500"
        />
      </div>
    </section>
  );
};

export default Login;
