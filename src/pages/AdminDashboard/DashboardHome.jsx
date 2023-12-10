import { Chart } from 'react-google-charts';
import useApprovedArticles from '../../hooks/useApprovedArticles';
import { Helmet } from 'react-helmet-async';

const DashboardHome = () => {
  const [articles, loading] = useApprovedArticles();

  if (loading) {
    return <div>Loading...</div>;
  }

  const publicationCounts = articles.reduce((counts, article) => {
    const publication = article?.publisher;

    // Check if the article has a valid publication property
    if (publication) {
      counts[publication] = (counts[publication] || 0) + 1;
    }

    return counts;
  }, {});

  const chartDataPie = Object.entries(publicationCounts).map(([publication, count]) => {
    return [publication, count];
  });

  // Check if there is any valid data to display
  if (chartDataPie.length === 0) {
    return <div>No data available for the pie chart.</div>;
  }

  // Additional static chart data (Example: Bar Chart)
  const chartDataBar = [['Publisher', 'Article Count'], ...chartDataPie];

  // Additional static chart data (Example: Line Chart)
  const chartDataLine = [['Publisher', 'Article Count'], ...chartDataPie];

  return (
    <div>
            <Helmet>
        <title>The Daily Pulse | Dashboard Home</title>
      </Helmet>
      {/* Pie Chart */}
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={[['Publication', 'Article Count'], ...chartDataPie]}
        options={{
          title: 'Article Distribution by Publication',
        }}
      />

      {/* Bar Chart */}
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="BarChart"
        loader={<div>Loading Chart...</div>}
        data={chartDataBar}
        options={{
          title: 'Article Distribution by Publication (Bar Chart)',
        }}
      />

      {/* Line Chart */}
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={chartDataLine}
        options={{
          title: 'Article Distribution by Publication (Line Chart)',
        }}
      />
    </div>
  );
};

export default DashboardHome;
