import { useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const User = (props) => {
  const { user } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 8,
      }}
      onPress={() => navigation.navigate("PostList", { id: user.id })}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{user.name}</Text>
      <Text>
        {user.username}, {user.email}
      </Text>
      <Text>{user.phone}</Text>
    </TouchableOpacity>
  );
};

const Post = (props) => {
  const { post } = props;
  return (
    <View
      style={{
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 8,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};

const UserList = () => {
  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <FlatList
      data={userList}
      renderItem={({ item }) => <User user={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const PostList = () => {
  const [postsList, setPostsList] = React.useState([]);
  const {
    params: { id },
  } = useRoute();

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        setPostsList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  return (
    <FlatList
      data={postsList}
      renderItem={({ item }) => <Post post={item} />}
    />
  );
};

const Exo4: React.FC<any> = () => {
  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen component={UserList} name="UserList" />
      <Stack.Screen component={PostList} name="PostList" />
    </Stack.Navigator>
  );
};

export default Exo4;
