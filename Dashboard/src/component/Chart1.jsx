import Chart from "react-apexcharts";
function Chart1() {
  return (
    <div>
      <Chart
        type="bar"
        width={"550px"}
        height={"260px"}
        series={[
          {
            name: "Social Media Subscriber",
            data: [500, 600, 700, 800, 1100],
          },
        ]}
        options={{
          title: {
            text: "Bar chart for social media active user ",
            style: { fontSize: 15 },
          },

          colors: ["#f90000"],

          xaxis: {
            categories: [
              "facebook",
              "twitte",
              "snapchat",
              "instagram",
              "linkedin",
            ],
            labels: {
              style: {
                colors: "#000000",
                fontSize: "14px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 600,
              },
            },

            title: {
              text: "Social Media User",
              style: { color: "#000000", fontSize: 15 },
            },
          },

          yaxis: {
            title: {
              text: "Number of user",
              style: { color: "#000000", fontSize: 15 },
            },
          },
        }}
      ></Chart>
    </div>
  );
}

export default Chart1;
