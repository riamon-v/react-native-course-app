import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import config from "../index";
import axios from "axios";

const PostDetailsCommon: React.FC<any> = ({ item }: { item: any }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <Text
        style={{
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: 22,
          marginBottom: 12,
        }}
      >
        {item.title}
      </Text>
      <Text style={{ fontSize: 15, color: "#AFAFAF" }}>{item.body}</Text>
    </View>
  );
};

const PostDetails = (props: { id: number; default?: boolean }) => {
  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${props.id}`
        );
        setPost(data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return <PostDetailsCommon item={post} />;
};

export const PostList = (props) => {
  const { posts, setPosts } = props;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <>
      {posts.map((p) => (
        <View style={{ marginVertical: 8 }} key={p.title}>
          <PostDetailsCommon item={p} />
        </View>
      ))}
    </>
  );
};

const Exo2: React.FC<any> = () => {
  const [posts, setPosts] = React.useState([]);

  return (
    <ScrollView contentContainerStyle={config.commonStyle.container}>
      <Text style={config.commonStyle.title}>2.0 --- then/catch</Text>
      <PostDetailsCommon
        item={{ title: "Titre", body: "Description ".repeat(10) }}
      />
      <Text style={config.commonStyle.title}>2.1 --- GET</Text>
      <PostDetails id={1} />
      <Text style={config.commonStyle.title}>2.2 --- Random post</Text>
      <PostDetails id={Math.floor(Math.random() * 20 + 1)} />
      <Text style={config.commonStyle.title}>2.3 --- Post list</Text>
      <PostList posts={posts} setPosts={setPosts} />
    </ScrollView>
  );
};

export default Exo2;
