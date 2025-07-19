import useFacility from "@/hooks/useFacility";
import { Text } from "react-native";

export default function AllCommentsScreen() {

  const facility = useFacility();
  if (!facility) return <Text>Facility not found.</Text>;

  return (
    <Text>Hello</Text>
    // <CommentList comments={comments} allCommentsVisible={true} />
  )
}