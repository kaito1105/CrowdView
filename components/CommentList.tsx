import ProfileImage from "@/assets/images/profile_temp.jpg";
import {
  FlatList,
  Image,
  ListRenderItem,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export interface Comment {
  id: Date;
  text: string;
};

interface Props {
  comments: Comment[];
  allCommentsVisible: boolean;
  setAllCommentsVisible: (visible: boolean) => void;
};

export default function CommentList({
  comments,
  allCommentsVisible,
  setAllCommentsVisible
}: Props) {
  const diffInMinutes = (data: Date): string => {
    const now = new Date();
    const diffMs = Math.abs(now.getTime() - data.getTime());
    const diffMin = Math.floor(diffMs / 60000);

    if (diffMin >= 60) {
      const diffHour = Math.floor(diffMin / 60);
      return `${diffHour}h`;
    }
    return `${diffMin}m`;
  };

  const fixTextLength = (text: string): string => {
    const maxLength = 85;

    if (text.length <= maxLength) return text;

    const cutOff = text.includes(" ") ? maxLength : maxLength - 14;
    return text.slice(0, cutOff).trimEnd() + " ...";
  };

  const commentsLength = comments.length;
  const smallScreenRenderItem: ListRenderItem<Comment> = ({ item }) => (
    // <TouchableOpacity onPress={() => setAllCommentsVisible(true)}>
      <View style={styles.container}>
        <View style={styles.commentLine}>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>{diffInMinutes(item.id)}</Text>
          </View>
          <Image source={ProfileImage} style={styles.profileImage} />
          <Text style={styles.comments}>{fixTextLength(item.text)}</Text>
        </View>
      </View>
    // </TouchableOpacity>
  );

  const fullScreenRenderItem: ListRenderItem<Comment> = ({ item }) => (
    <View style={styles.modalComment}>
      <View style={styles.commentLine}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <Text style={styles.name}>Name</Text>
      </View>
      <Text style={styles.comments}>{item.text}</Text>
    </View>
  );

  return (
    <>
      <FlatList
        data={comments.slice(commentsLength - 3, commentsLength).reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={smallScreenRenderItem}
        scrollEnabled={false}
        // keyboardShouldPersistTaps="handled"
      />

      <Modal
        visible={allCommentsVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setAllCommentsVisible(false)}
      // presentationStyle="formSheet"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>All Comments</Text>
          <FlatList
            data={comments.reverse()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={fullScreenRenderItem}
          />
          <TouchableOpacity onPress={() => setAllCommentsVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  commentLine: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    width: "75%",
  },
  timeBox: {
    width: 40,
    paddingRight: 8,
  },
  timeText: {
    fontSize: 14,
    alignSelf: "center",
    color: "#707070",
    letterSpacing: 0.3,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  comments: {
    fontSize: 12,
    color: "#333",
    marginLeft: 8,
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    paddingTop: 50,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalComment: {
    marginBottom: 15,
  },
  closeText: {
    color: "#007bff",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 18,
  },
});
