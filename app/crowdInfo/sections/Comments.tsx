import AddCommentModal from "@/components/AddCommentModal";
import CommentList from "@/components/CommentList";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

type Comment = {
  id: string;
  text: string;
};

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentVisible, setNewCommentVisible] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");
  const [allCommentsVisible, setAllCommentsVisible] = useState<boolean>(false);

  const addComment = (): void => {
    if (newComment.trim() === "") return;

    setComments((prev) => [
      ...prev,
      {id: Date.now.toString(), text: newComment},
    ]);

    setNewComment("");
    setNewCommentVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>
      {comments.length === 0 ? (
        <Text style={styles.noComments}>No comments</Text>
      ) : (
        <CommentList 
          comments={comments}
          allCommentsVisible={allCommentsVisible}
          setAllCommentsVisible={setAllCommentsVisible}
        />
      )}

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setNewCommentVisible(true)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <AddCommentModal 
        newCommentVisible={newCommentVisible} 
        setNewCommentVisible={setNewCommentVisible} 
        newComment={newComment} 
        setNewComment={setNewComment} 
        addComment={addComment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  noComments: {
    color: "#666",
    textAlign: "center",
    fontSize: 22,
    paddingTop: 50,
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
