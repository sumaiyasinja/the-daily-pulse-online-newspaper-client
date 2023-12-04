import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useMyArticles = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
  const {
    data: articles = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/articles/${user?.email}`);
      return res.data;
    },
  });

  return [articles, loading, refetch];
};

export default useMyArticles;
