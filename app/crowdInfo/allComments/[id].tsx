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
    { id: new Date("2025-07-23T12:42:00"), text: "Getting a bit crowded around lunchtime, especially near the entrance area." },
    { id: new Date("2025-07-23T11:59:00"), text: "Very packed today, almost no space to sit. I’d recommend coming later." },
    { id: new Date("2025-07-23T10:01:00"), text: "I stopped by around 10 a.m., and the place was surprisingly quiet. Most of the tables were available, and I didn’t have to wait at all to use the equipment. It was a very relaxed atmosphere—great time to come if you prefer fewer people around." },
    { id: new Date("2025-07-23T09:02:00"), text: "Hello!" },
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
    backgroundColor: "#ffffff",
    paddingTop: 15,
  },
  footer: {
    backgroundColor: "#ffffff",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // borderWidth: 1,
    // borderColor: "#bbbbbb",
    // borderRadius: 10,

    // iOS shadow
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Android shadow
    elevation: 3,
  },

});