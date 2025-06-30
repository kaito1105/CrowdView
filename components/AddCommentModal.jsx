import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddCommentModal({
  newCommentVisible, 
  setNewCommentVisible, 
  newComment, 
  setNewComment, 
  addComment,
}) {
  return (
    <Modal
      visible={newCommentVisible}
      animationType="fade"
      transparent
      onRequestClose={() => setNewCommentVisible(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Add a New Comment</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter comment..."
            placeholderTextColor="#aaa"
            value={newComment}
            onChangeText={setNewComment} 
          />

          <View style={styles.buttons}>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => setNewCommentVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.postButton} 
              onPress={addComment}
            >
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center"
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#333"
  },
  postButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center"
  },
  postButtonText: {
    fontSize: 16,
    color: "#fff"
  }
})