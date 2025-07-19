import ExclamationIcon from "@/components/ui/ExclamationIcon";
import VoteButtons from "@/components/VoteButtons";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Vote() {
  const handleVotePress = () => {
    Alert.alert("Voting can be updated every 10 minutes.");
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Crowd Level Vote</Text>
        <TouchableOpacity onPress={handleVotePress}>
          <ExclamationIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.question}>HOW CROWDED IS IT NOW?</Text>
      <VoteButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignContent: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#707070",
    letterSpacing: 0.3,
    marginBottom: 5,
  },
  question: {
    fontSize: 14,
    color: "#292929",
    letterSpacing: 0.3,
    marginBottom: 5,
  },
});
