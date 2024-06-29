import Chart from "react-apexcharts";
import "./Chart2.css";
function chart2() {
  return (
    <div className="pieChart">
      <Chart
        type="pie"
        width={"500px"}
        height={"300px"}
        series={[149, 23, 50, 70, 80]}
        options={{
          title: { text: "student Pie-Chart" },
          labels: ["Hindi", "Marathi", "Math", "English", "Science"],
        }}
      ></Chart>
    </div>
  );
}

export default chart2;
