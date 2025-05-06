import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { DailyLoads } from "../pages/CMS";
// import { colors } from "../assets/styles/colors";

Chart;

interface Props {
  dailyLoads: DailyLoads[] | undefined;
}

export default function DailyGraph({ dailyLoads }: Props) {
  const data = {
    labels: dailyLoads?.slice(0, 32).map((load) => load.created_at),
    datasets: [
      {
        label: "Daglige besøk",
        data: dailyLoads?.slice(0, 32).map((load) => load.value_count),
        // borderColor: colors.contrastColor,
        // backgroundColor: colors.contrastColor,
        tension: 0.2,
      },
    ],
  };
  const options = { elements: { line: { tension: 0.5 } } };
  const graphStyles = {
    container: {
      display: "flex",
      margin: "0 auto",
      padding: "5px",
      width: "max-content",
      height: "500px",
    },
  };
  const key = dailyLoads ? JSON.stringify(dailyLoads) : "initial-key";
  return (
    <div style={graphStyles.container}>
      {dailyLoads && <Line key={key} data={data} options={options} />}
    </div>
  );
}
