import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../css/GoogleSignInButton.css'
import { FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
// import { useSpring, animated } from "react-spring";
import useAuth from './../../hooks/useAuth';


const Register = () => {
  const {createUserWithEmail,loginWithGoogle} = useAuth()
  const navigate = useNavigate()
  const location =useLocation()
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.Name.value;
    const photo = form.photo.value;

    console.log(email, password, name, photo);
    if (password.length < 6) {

      return toast.error("Password must be at least 6 characters")

  } else if (!/[A-Z]/.test(password)) {
       return toast.error("Password must contain at least one uppercase letter")

  } else if (!/[!@#$%^&*]/.test(password)) {
      return toast.error("Password must contain at least one special character")
  } 
  

  createUserWithEmail(email, password)
  .then(() => {
    toast.success("Registration Successful!");
    // Update user profile here
    updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: photo, 
    })
      .then(() => {
        console.log("Profile data updated!");
        navigate(location.state ? location.state :'/')
      })
      .catch((error) => {
        toast.error(error.message);
      });
  })
  .catch((error) => {
    toast.error(error.message);
  });

}
  

  const handleGoogleSignIn = () => {
    loginWithGoogle()
    .then(()=> {
        toast.success("Succefully logged in with google.")
        navigate(location.state ? location.state :'/')
    })
      .catch(e=> toast.error(e.message))   
       console.log("Signing in with Google");
  };

   // Animation for the Register form
  //  const formAnimation = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   config: { duration: 500 },
  // });

  return (
  //   <animated.section
  //   style={formAnimation}
  //   className="p-6 bg-gray-100 text-gray-800"
  // >
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2  xl:grid-cols-5">
        <Toaster></Toaster>
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-3 bg-gray-50">
          <img
            src="https://i.ibb.co/vwKr253/Untitled.png"
            alt="news logo"
            className="object-cover  rounded-md xl:col-span-3 bg-gray-500"
          />
        </div>

        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 lg:grid-cols-2  xl:col-span-2 bg-gray-50">
          <span className="block mb-2 text-blue-600">
            Register Now For Free !
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900">Register</h1>
          <p className="my-8">
            <span className="font-medium text-gray-900">
              Join our community
            </span>{" "}
            and get updated with all the latest news! Our platform is always in
            the top.
          </p>
          <form onSubmit={handleRegister} className="self-stretch space-y-3">
            <div>
              <label  className="text-sm sr-only">
                Your Name
              </label>
              <input
                id="Name"
                type="Name"
                name="name"
                placeholder="Name "
                required
                className="w-full rounded-md focus:ring focus:ring-blue-300 border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="Photo" className="text-sm sr-only">
                Your Name
              </label>
              <input
                id="Photo"
                type="Photo"
                name="photo"
                placeholder="Your profile Photo URL link "
                required
                className="w-full rounded-md focus:ring focus:ring-blue-300 border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full rounded-md focus:ring focus:ring-blue-300 border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm sr-only">
                Your password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                placeholder="Your password"
                className="w-full rounded-md focus:ring focus:ring-blue-300 border-gray-300"
              />
            </div>
            <p className="block mb-2 text-blue-600">
              <Link to="/login" className="ml-1">
                Already have an account? Login
              </Link>
            </p>
            <button
              className="google-sign-in-button flex items-center justify-center gap-3  w-full"
              onClick={handleGoogleSignIn}
            >
              <FaGoogle/>
              Sign In with Google
            </button>
           

            <input
              type="submit"
              value={"Register"}
              className="w-full py-2 font-semibold rounded bg-blue-600 google-sign-in-button text-gray-50"
            />
          </form>
        </div>
      </div>
      // </animated.section>
  );
};

export default Register;
