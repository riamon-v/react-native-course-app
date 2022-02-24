import axios from "axios";
import React from "react";
import { Button, ScrollView, View } from "react-native";
import { PostList } from "./Exo2";
import config from "../index";

const Exo3: React.FC<any> = () => {
  const [posts, setPosts] = React.useState([]);

  const createNewPost = async () => {
    try {
      const { data } = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`
      );

      setPosts([{ title: "Titre", body: "Description ".repeat(10) }, ...posts]);
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <View style={[{ flex: 1 }]}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, ...config.commonStyle.container }}
      >
        <PostList posts={posts} setPosts={setPosts} />
      </ScrollView>
      <Button onPress={createNewPost} title="New post" />
    </View>
  );
};

export default Exo3;
