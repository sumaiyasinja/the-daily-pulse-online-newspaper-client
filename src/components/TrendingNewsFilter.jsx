import useApprovedArticles from '../hooks/useApprovedArticles';

const TrendingNewsFilter = () => {
    const articles = useApprovedArticles();
    console.log(articles);
  // Step 1: Sort articles based on views in descending order
  const sortedArticles = articles.sort((a, b) => b.views - a.views);

  // Step 2: Take the top six articles or all available articles if there are fewer than six
  const topSixArticles = sortedArticles.slice(
    0,
    Math.min(sortedArticles.length, 6)
  );

  // Now 'topSixArticles' contains the top six viewed articles or all available articles if less than six
  console.log(topSixArticles);
    return (
        <div>
            {topSixArticles.map((article) => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TrendingNewsFilter;