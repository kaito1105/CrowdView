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
  id: string;
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
  const smallScreenRenderItem: ListRenderItem<Comment> = ({ item }) => (
    // <TouchableOpacity onPress={() => setAllCommentsVisible(true)}>
      <View style={styles.container}>
        <View style={styles.commentLine}>
          <Text style={styles.time}>{item.id}</Text>
          <Image source={ProfileImage} style={styles.profileImage} />
          <Text style={styles.comments}>{item.text}</Text>
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
        data={comments.slice(0, 3)}
        keyExtractor={(item) => item.id}
        renderItem={smallScreenRenderItem}
        scrollEnabled={false}
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
            data={comments}
            keyExtractor={(item) => item.id}
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
  time: {
    fontSize: 14,
    textAlign: "center",
    color: "#707070",
    letterSpacing: 0.3,
    width: 45,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  comments: {
    fontSize: 12,
    color: "#333",
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
