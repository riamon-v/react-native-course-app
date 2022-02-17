import React from "react";
import { Alert, Text, View } from "react-native";
import Case from "./Case";

const Morpion: React.FC<any> = (props) => {
  const [grid, setGrid] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [turn, setTurn] = React.useState(false);

  const handleClick = (row, col) => {
    let tmp = [...grid];

    tmp[row][col] = turn ? 1 : 2;
    setGrid(tmp);
    setTurn((t) => !t);
  };

  const renderTurn = React.useCallback(
    (turn) => {
      return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          {!turn ? (
            <Text
              style={{ backgroundColor: "salmon", color: "white", padding: 20 }}
            >
              Player 1
            </Text>
          ) : (
            <Text
              style={{
                backgroundColor: "lightblue",
                color: "white",
                padding: 20,
              }}
            >
              Player 2
            </Text>
          )}
        </View>
      );
    },
    [turn]
  );

  React.useEffect(() => {}, [turn]);

  return (
    <View style={{ flex: 1 }}>
      {renderTurn(turn)}
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Game</Text>
      {grid.map((row, r) => (
        <View key={`row${r}`} style={{ flexDirection: "row", flex: 1 }}>
          {row.map((col, c) => (
            <Case
              key={`col${r}-${c}`}
              handleClick={() => handleClick(r, c)}
              type={col}
              size={50}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Morpion;
