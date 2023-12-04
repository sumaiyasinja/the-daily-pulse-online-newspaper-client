import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://thedailypulse-717h5qv56-sumaiyasinja.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
