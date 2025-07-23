import CommentList, { Comment } from "@/components/CommentList";
import PostComment from "@/components/PostComment";
import useFacility from "@/hooks/useFacility";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Comments() {
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>([
    { id: new Date("2025-07-18T11:04:00"), text: "Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" },
    { id: new Date("2025-07-18T10:03:00"), text: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" },
    { id: new Date("2025-07-18T10:01:00"), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
    { id: new Date("2025-07-18T09:02:00"), text: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ." },
  ]);
  const [newComment, setNewComment] = useState<string>("");

  const handleCommentPress = (id: string) =>
    router.push(`/crowdInfo/allComments/${id}`);

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
    <CommentList comment={comment} allCommentsVisible={false} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Comments</Text>
        <TouchableOpacity
          style={styles.seeMoreButton}
          onPress={() => handleCommentPress(facility.id)}
        >
          <Text style={styles.seeMoreText}>SEE MORE</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#0a78f2"
          />
        </TouchableOpacity>
      </View>

      <View>
        {comments.length === 0 ? (
          <Text style={styles.noComments}>No comments</Text>
        ) : (
          <FlatList
            data={comments.slice(0, 3)}
            keyExtractor={comment => comment.id.toString()}
            renderItem={renderItem}
            scrollEnabled={false}
          />
        )}
      </View>
      <PostComment
        newComment={newComment}
        setNewComment={setNewComment}
        addComment={addComment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
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
  noComments: {
    color: "#707070",
    textAlign: "center",
    fontSize: 22,
    marginVertical: 20,
  },
});
