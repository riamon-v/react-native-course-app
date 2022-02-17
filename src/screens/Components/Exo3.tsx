import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CheckBox = (props) => {
  return (
    <View style={{ flexDirection: "row", marginVertical: 3 }}>
      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: props.checked ? "skyblue" : "transparent",
          borderWidth: 0.5,
        }}
        onPress={props.handleClick}
      >
        {props.checked && (
          <Ionicons name="md-checkmark" size={15} color="white" />
        )}
      </TouchableOpacity>
      <Text style={{ marginLeft: 5 }}>{props.label}</Text>
    </View>
  );
};

const Exo3: React.FC<any> = (props) => {
  const [checkStates, setCheckStates] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const [checkAll, setCheckAll] = React.useState({
    value: false,
    manually: false,
  });

  React.useEffect(() => {
    const tmp = checkStates?.map(() => checkAll.value);

    if (checkAll.manually === true) {
      setCheckStates(tmp);
    }
  }, [checkAll.value]);

  React.useEffect(() => {
    const allChecked = checkStates.every((e) => e === true);
    setCheckAll({ value: allChecked, manually: false });
  }, [checkStates]);

  const handleClick = (index: number) => {
    const tmp = [...checkStates];

    tmp[index] = !tmp[index];
    setCheckStates(tmp);
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View>
        <CheckBox
          label="All Select"
          checked={checkAll.value}
          handleClick={() =>
            setCheckAll({ value: !checkAll.value, manually: true })
          }
          style={{
            marginBottom: 50,
          }}
        />
        {checkStates?.map((check, index) => {
          return (
            <CheckBox
              key={`Checkbox ${index}`}
              label={`Checkbox ${index}`}
              checked={check}
              handleClick={() => handleClick(index)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Exo3;
