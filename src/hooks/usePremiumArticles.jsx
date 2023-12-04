import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const usePremiumArticles = () => {
    const axiosSecure = useAxiosSecure();
  const {
    data: articles = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/premium-articles");
      return res.data;
    },
  });

  return [articles, loading, refetch];
};

export default usePremiumArticles;
