import React from "react";
import { Text, View } from "react-native";
import config from "../index";

const isMyRoomClean = (isClean) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isClean) resolve("clean");
      else reject("not clean");
    }, 3000);
  });

const RoomIsClean: React.FC<any> = ({ isClean }: { isClean: boolean }) => {
  const [state, setState] = React.useState("");

  React.useEffect(() => {
    isMyRoomClean(isClean)
      .then((res) => {
        setState(res);
      })
      .catch((err) => {
        setState(err);
      });
  }, [isClean]);

  return <Text>Room is {state}</Text>;
};

const RoomIsCleanFetch: React.FC<any> = ({ isClean }: { isClean: boolean }) => {
  const [state, setState] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await isMyRoomClean(isClean);
        setState(res);
      } catch (err) {
        setState(err);
      }
    };
    fetchData();
  }, [isClean]);

  return <Text>Room is {state}</Text>;
};

const Exo1: React.FC<any> = () => {
  return (
    <View style={config.commonStyle.container}>
      <Text style={config.commonStyle.title}>1.1 --- then/catch</Text>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        (props isClean: true)
      </Text>
      <RoomIsClean isClean={true} />
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        (props isClean: false)
      </Text>
      <RoomIsClean isClean={false} />
      <Text style={config.commonStyle.title}>
        1.2 --- async/await, try/catch
      </Text>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        (props isClean: true)
      </Text>
      <RoomIsCleanFetch isClean={true} />
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        (props isClean: false)
      </Text>
      <RoomIsCleanFetch isClean={false} />
    </View>
  );
};

export default Exo1;
