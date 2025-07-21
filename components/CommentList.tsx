import ProfileImage from "@/assets/images/profile_temp.jpg";
import {
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View
} from "react-native";

export interface Comment {
  id: Date;
  text: string;
};

interface Props {
  comment: Comment;
  allCommentsVisible: boolean;
};

export default function CommentList({ comment, allCommentsVisible }: Props) {

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

  const smallScreenRenderItem: ListRenderItem<Comment> = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.commentLine}>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{diffInMinutes(item.id)}</Text>
        </View>
        <Image source={ProfileImage} style={styles.profileImage} />
        <Text style={styles.comments}>{fixTextLength(item.text)}</Text>
      </View>
    </View>
  );

  return (
    <>
      {!allCommentsVisible ?
        <Text>Hello</Text> :
        // <FlatList
        //   data={comments.slice(0, 3)}
        //   keyExtractor={(item) => item.id.toString()}
        //   renderItem={smallScreenRenderItem}
        //   scrollEnabled={false}
        // // keyboardShouldPersistTaps="handled"
        // /> :

        <View style={styles.fullContainer}>
          <View style={styles.commentWrapper}>
            <Image source={ProfileImage} style={styles.fullProfileImage} />
            <View>
              <View style={styles.header}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.timeText}>{diffInMinutes(comment.id)} ago</Text>
              </View>
              <Text style={styles.fullComments}>{comment.text}</Text>
            </View>
          </View>
        </View>
      }
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
    color: "#292929",
    marginLeft: 8,
  },

  fullContainer: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    alignSelf: "center",
    width: "90%",
  },
  fullProfileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  commentWrapper: {
    paddingTop: 15,
    paddingHorizontal: 10,
    width: "90%",
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    marginLeft: 8,
    marginRight: 20,
    color: "#292929",
    letterSpacing: 0.3,
  },
  fullComments: {
    fontSize: 14,
    color: "#292929",
    marginLeft: 8,
  },
});
