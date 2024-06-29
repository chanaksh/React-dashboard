import "./Chart4.css";
import Chart from "react-apexcharts";

function Chart4() {
  return (
    <div>
      <Chart
        type="donut"
        width={"500px"}
        height={"300px"}
        series={[45, 34, 67, 43, 89]}
        options={{
          labels: ["USA", "India", "China", "UK", "Russia"],
          title: { text: "medal country name" },

          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    fontSize: 25,
                  },
                },
              },
            },
          },
        }}
      ></Chart>
    </div>
  );
}

export default Chart4;
