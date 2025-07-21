// import CommentList, { Comment } from "@/components/CommentList";
// import PostComment from "@/components/PostComment";
// import useFacility from "@/hooks/useFacility";
// import { useState } from "react";
// import {
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableWithoutFeedback,
//   View
// } from "react-native";

// export default function AllCommentsScreen() {
//   const [comments, setComments] = useState<Comment[]>([
//     { id: new Date("2025-07-18T11:04:00"), text: "Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" },
//     { id: new Date("2025-07-18T10:03:00"), text: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" },
//     { id: new Date("2025-07-18T10:01:00"), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
//     { id: new Date("2025-07-18T09:02:00"), text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ." },
//   ]);
//   const [newComment, setNewComment] = useState<string>("");

//   const facility = useFacility();
//   if (!facility) return;

//   const addComment = (): void => {
//     if (newComment.trim() === "") return;

//     const now = new Date();
//     setComments((prev) => [
//       { id: now, text: newComment },
//       ...prev,
//     ]);

//     setNewComment("");
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//       // keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.container}>
//           <View>
//             {comments.length === 0 ? (
//               <Text style={styles.noComments}>No comments</Text>
//             ) : (
//               <CommentList comments={comments} allCommentsVisible={true} />
//             )}
//           </View>

//           <View style={styles.footer}>
//             <PostComment
//               newComment={newComment}
//               setNewComment={setNewComment}
//               addComment={addComment}
//             />
//           </View>
//         </ View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     height: "100%",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 5,
//   },
//   title: {
//     fontSize: 14,
//     color: "#707070",
//     letterSpacing: 0.3,
//     marginBottom: 5,
//   },
//   seeMoreButton: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   seeMoreText: {
//     fontWeight: "bold",
//     color: "#0a78f2",
//     fontSize: 13,
//     letterSpacing: 0.3,
//   },
//   noComments: {
//     color: "#707070",
//     textAlign: "center",
//     fontSize: 22,
//     marginVertical: 20,
//   },
//   footer: {
//     position: "absolute",
//     alignSelf: "center",
//     width: "100%",
//     bottom: 10,
//   },
// });


import CommentList, { Comment } from "@/components/CommentList";
import PostComment from "@/components/PostComment";
import useFacility from "@/hooks/useFacility";
import { useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ListRenderItem,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function AllCommentsScreen() {
  const [comments, setComments] = useState<Comment[]>([
    { id: new Date("2025-07-18T11:04:00"), text: "Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" },
    { id: new Date("2025-07-18T10:03:00"), text: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" },
    { id: new Date("2025-07-18T10:01:00"), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
    { id: new Date("2025-07-18T09:02:00"), text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ." },
  ]);
  const [newComment, setNewComment] = useState<string>("");

  const facility = useFacility();
  if (!facility) return;

  const addComment = (): void => {
    if (newComment.trim() === "") return;

    const now = new Date();
    setComments((prev) => [
      { id: now, text: newComment },
      ...prev,
    ]);
    setNewComment("");
  };

  const renderItem: ListRenderItem<Comment> = ({ item: comment }) => (
    <CommentList comment={comment} allCommentsVisible={true} />
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <FlatList
            style={styles.commentContainer}
            data={comments}
            keyExtractor={comment => comment.id.toString()}
            renderItem={renderItem}
          />
          <View style={styles.footer}>
            <PostComment
              newComment={newComment}
              setNewComment={setNewComment}
              addComment={addComment}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 15,
  },
  footer: {
    backgroundColor: "#fff",
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    bottom: 0,
    paddingVertical: 10,
  },
});