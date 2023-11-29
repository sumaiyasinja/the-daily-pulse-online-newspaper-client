import useArticles from "../../hooks/useArticles";

const AllArticles = () => {
    const [articles] = useArticles();
    console.log("articles",articles);
    return (
        <div>

            list of all articles
        </div>
    );
};

export default AllArticles;