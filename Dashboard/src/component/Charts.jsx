import "./Charts.css";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
function Charts() {
  return (
    <div className="charts">
      <div className="item1">
        <Chart1 />
      </div>
      <div className="item4">
        <Chart2 />
      </div>
      <div className="item2">
        <Chart3 />
      </div>
      <div className="item3">
        <Chart4 />
      </div>
    </div>
  );
}

export default Charts;
