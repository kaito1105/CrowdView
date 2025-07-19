import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Graph() {
  const dataLabels: string[] = [];

  const insertDataLabels = () => {
    const now = new Date();
    let i = 3;
    while (i >= 0) {
      const timeMs = new Date(now.getTime() - i * 60 * 60 * 1000);
      i -= 0.5;

      const time = timeMs.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      dataLabels.push(time);
    }

    return dataLabels;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Crowd Level Graph</Text>
      <Text style={styles.graphTitle}>Last 3 Hours</Text>
      <LineChart
        data={{
          labels: insertDataLabels(),
          datasets: [{ data: [50, 68, 72, 47, 50, 39, 66] }],
        }}
        width={Dimensions.get("window").width * 0.85}
        height={300}
        verticalLabelRotation={35}
        chartConfig={{
          // backgroundColor: "#e26a00",
          // backgroundGradientFrom: "#fb8c00",
          // backgroundGradientTo: "#ffa726",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          // decimalPlaces: 0,
        }}
        bezier
        xLabelsOffset={-10}
        style={styles.graph}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "40%",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 14,
    color: "#707070",
    letterSpacing: 0.3,
    marginBottom: 5,
  },
  graphTitle: {
    fontSize: 14,
    color: "#292929",
    letterSpacing: 0.3,
    marginBottom: 5,
    textAlign: "center",
  },
  graph: {
    borderRadius: 16,
    paddingRight: 60,
  },
});
