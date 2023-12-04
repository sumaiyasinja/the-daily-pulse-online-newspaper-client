// Change this import statement
// import { PieChart } from 'react-google-charts';
// to
import { Chart } from 'react-google-charts';

// ...

const PieChartData = ({ publisherPercentages }) => {
  const data = [
    ["Publisher", "Percentage"],
    ...Object.entries(publisherPercentages).map(([publisher, percentage]) => [publisher, percentage]),
  ];

  const options = {
    title: "Approved Articles by Publisher",
    sliceTitle: "Percentage",
    isStacked: true,
    legendPosition: "bottom",
    chartArea: { width: "50%", height: "80%" },
  };

  return (
    <div>
      {/* Change PieChart to Chart here */}
      <Chart
        chartType="PieChart"  // Specify the chart type here if needed
        chartData={data}
        options={options}
        graphContainerCssClass="pieChart"
      />
    </div>
  );
};

export default PieChartData;
