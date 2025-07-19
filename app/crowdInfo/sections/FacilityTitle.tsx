import { StyleSheet, Text } from "react-native"

export default function FacilityTitle({ id }: { id: string }) {
  return <Text style={styles.title}>{id}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#292929",
    letterSpacing: 0.5,
    marginBottom: 25,
    marginTop: 5,
  }
})