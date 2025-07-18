import ProfileImage from "@/assets/images/profile_temp.jpg";
// import AddCommentModal from "@/components/AddCommentModal";
import CommentList, { Comment } from "@/components/CommentList";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([
    { id: new Date("2025-07-18T10:01:00"), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
    { id: new Date("2025-07-18T09:02:00"), text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ." },
    { id: new Date("2025-07-18T10:03:00"), text: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" },
    { id: new Date("2025-07-18T11:04:00"), text: "Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" },
  ]);
  const [newCommentVisible, setNewCommentVisible] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");
  const [allCommentsVisible, setAllCommentsVisible] = useState<boolean>(false);

  const addComment = (): void => {
    if (newComment.trim() === "") return;

    const now = new Date();
    setComments((prev) => [
      ...prev,
      { id: now, text: newComment },
    ]);

    setNewComment("");
    setNewCommentVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Recent Comments</Text>
        <TouchableOpacity style={styles.seeMoreButton} onPress={() => setAllCommentsVisible(true)}>
          <Text style={styles.seeMoreText}>SEE MORE</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#0a78f2"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.commentSection}>
        {comments.length === 0 ? (
          <Text style={styles.noComments}>No comments</Text>
        ) : (
          <CommentList
            comments={comments}
            allCommentsVisible={allCommentsVisible}
            setAllCommentsVisible={setAllCommentsVisible}
          />
        )}

        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => setNewCommentVisible(true)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity> */}

        {/* <AddCommentModal
              newCommentVisible={newCommentVisible}
              setNewCommentVisible={setNewCommentVisible}
              newComment={newComment}
              setNewComment={setNewComment}
              addComment={addComment}
            /> */}
      </View>

      <View style={styles.postCommentContainer}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <TextInput
          style={styles.textInput}
          placeholder="What's happening?"
          placeholderTextColor="#707070"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={addComment}>
          <Ionicons name="send" size={26} color="#33bff4" style={styles.post} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: "#707070",
    letterSpacing: 0.3,
    marginBottom: 5,
  },
  seeMoreButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seeMoreText: {
    fontWeight: "bold",
    color: "#0a78f2",
    fontSize: 13,
    letterSpacing: 0.3,
  },
  commentSection: {
    // marginHorizontal: 2,
  },
  noComments: {
    color: "#707070",
    textAlign: "center",
    fontSize: 22,
    paddingTop: 50,
  },
  postComment: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  postCommentContainer: {
    marginHorizontal: 10,
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  post: {
    padding: 10,
  },
  button: {
    position: "absolute",
    top: 5,
    right: 20,
    width: 30,
    height: 30,
    backgroundColor: "#007bff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
