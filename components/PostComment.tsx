import ProfileImage from "@/assets/images/profile_temp.jpg";
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

interface PostCommentProps {
  newComment: string;
  setNewComment: (text: string) => void;
  addComment: () => void;
}

export default function PostComment({ 
  newComment, 
  setNewComment, 
  addComment 
}: PostCommentProps) {
  return (
    <View style={styles.container}>
      <Image source={ProfileImage} style={styles.profileImage} />
      <TextInput
        style={styles.textInput}
        placeholder="What's happening?"
        placeholderTextColor="#cccccc"
        value={newComment}
        onChangeText={setNewComment}
      />
      <TouchableOpacity onPress={addComment}>
        <Ionicons 
          name="send" 
          size={26} 
          color="#33bff4" 
          style={styles.icon} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
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
  icon: {
    padding: 10,
  },
});
