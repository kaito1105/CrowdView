import useFacility from "@/hooks/useFacility";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import BusinessHours from "./sections/BusinessHours";
import Comments from "./sections/Comments";
import CrowdLevelCard from "./sections/CrowdLevelCard";
import FacilityImage from "./sections/FacilityImage";
import FacilityTitle from "./sections/FacilityTitle";
import Graph from "./sections/Graph";
import Vote from "./sections/Vote";

export default function CrowdInfoScreen() {
  const facility = useFacility();
  if (!facility) return <Text>Facility not found.</Text>;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    // keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.background}>
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <FacilityImage imagePath={facility.imagePath} />
            <View style={styles.container}>
              <FacilityTitle id={facility.id} />
              <View style={styles.section}>
                <CrowdLevelCard level={facility.level} />
                <BusinessHours
                  hours={facility.hours}
                  dayIndex={new Date().getDay()}
                />
              </View>
              <Vote />
              <Graph />
              <Comments />
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
});

// import useFacility from "@/hooks/useFacility";
// import {
//   FlatList,
//   Keyboard,
//   KeyboardAvoidingView,
//   ListRenderItem,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableWithoutFeedback,
//   View
// } from "react-native";
// import BusinessHours from "./sections/BusinessHours";
// import Comments from "./sections/Comments";
// import CrowdLevelCard from "./sections/CrowdLevelCard";
// import FacilityImage from "./sections/FacilityImage";
// import FacilityTitle from "./sections/FacilityTitle";
// import Graph from "./sections/Graph";
// import Vote from "./sections/Vote";

// export interface Comment {
//   id: Date;
//   text: string;
// };

// // 仮のコメントデータ
// const commentData = [
//   { id: new Date("2025-07-18T11:04:00"), text: "Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" },
//   { id: new Date("2025-07-18T10:03:00"), text: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" },
//   { id: new Date("2025-07-18T10:01:00"), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
//   { id: new Date("2025-07-18T09:02:00"), text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ." },
// ];

// export default function CrowdInfoScreen() {
//   const facility = useFacility();
//   if (!facility) return <Text>Facility not found.</Text>;

//   const renderComment: ListRenderItem<Comment> = ({ item }) => (
//     <Text style={{ marginBottom: 10 }}>{item.text}</Text>
//   );

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//       // keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.background}>
//           <FlatList
//             data={commentData}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={renderComment}
//             ListHeaderComponent={
//               <>
//                 <FacilityImage imagePath={facility.imagePath} />
//                 <View style={styles.container}>
//                   <FacilityTitle id={facility.id} />
//                   <View style={styles.section}>
//                     <CrowdLevelCard level={facility.level} />
//                     <BusinessHours
//                       hours={facility.hours}
//                       dayIndex={new Date().getDay()}
//                     />
//                   </View>
//                   <Vote />
//                   <Graph />
//                   <Comments />
//                   <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
//                     Comments
//                   </Text>
//                 </View>
//               </>
//             }
//             contentContainerStyle={{ paddingBottom: 60 }}
//             showsVerticalScrollIndicator={false}
//             keyboardShouldPersistTaps="handled"
//           />
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: "#fff",
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     marginHorizontal: 30,
//     marginVertical: 20,
//   },
//   section: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 30,
//   },
// });