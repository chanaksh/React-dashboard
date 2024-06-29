import Chart from "react-apexcharts";
import "./Chart3.css";
function Chart3() {
  return (
    <div className="lineChart">
      <Chart
        type="line"
        width={"500px"}
        height={"260px"}
        series={[
          {
            name: "T-shirt",
            data: [180, 39, 60, 30, 70, 44, 56],
          },
          {
            name: "Jeans",
            data: [50, 100, 37, 170, 44, 80, 10],
          },
        ]}
        options={{
          title: { text: "Product sell in 2021" },
          xaxis: {
            title: { text: "Product Sell in Months" },
            categories: ["jan", "fab", "march", "april", "may", "jun", "july"],
          },
        }}
      ></Chart>
    </div>
  );
}

export default Chart3;
