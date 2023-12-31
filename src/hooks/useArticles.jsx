import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useArticles = () => {
    const axiosSecure = useAxiosSecure();
  const {
    data: articles = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      return res.data;
    },
  });

  return [articles, loading, refetch];
};

export default useArticles;
