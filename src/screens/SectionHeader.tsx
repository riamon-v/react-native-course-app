import React, { RefObject } from "react";
import {
  findNodeHandle,
  FlatList,
  Pressable,
  SectionList,
  SectionListProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  ViewToken,
} from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Blabla from "react-native-sectionlist-deliveroo";

function randomIntFromInterval(min, max) {
  // min and max included
  return 20; //Math.floor(Math.random() * (max - min + 1) + min);
}

const data = [
  {
    title: "Section 1",
    key: "Section1",
    data: [...Array(randomIntFromInterval(1, 20))],
  },
  {
    title: "Sec 2",
    key: "Section2",
    data: [...Array(randomIntFromInterval(1, 20))],
  },
  {
    title: "Sectioooooooooooon 3",
    key: "Section3",
    data: [...Array(randomIntFromInterval(1, 20))],
  },
  {
    title: "Section 4",
    key: "Section4",
    data: [...Array(randomIntFromInterval(1, 20))],
  },
  {
    title: "Sec 5",
    key: "Section5",
    data: [...Array(randomIntFromInterval(1, 20))],
  },
  {
    title: "Sectioooooooooooon 6",
    key: "Section6",
    data: [...Array(randomIntFromInterval(1, 20))],
  },
];

interface IndicatorProps {
  indicatorPos: SharedValue<{
    width: number;
    x: number;
  }>;
  indicatorContainerStyle?: StyleProp<ViewStyle>;
}

const Indicator = ({
  indicatorPos,
  indicatorContainerStyle,
}: IndicatorProps) => {
  const style = useAnimatedStyle(() => {
    const { x, width } = indicatorPos.value;
    return {
      width: withTiming(width),
      transform: [{ translateX: withTiming(x) }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.indicatorStyle,
        indicatorContainerStyle
          ? indicatorContainerStyle
          : styles.defaultIndicatorStyle,
        style,
      ]}
    />
  );
};

interface SectionHeaderStylingProps {
  colors?: {
    active: string;
    inactive: string;
  };
  headerContainerStyle?: StyleProp<ViewStyle>;
  headerItemStyle?: StyleProp<TextStyle>;
  indicatorContainerStyle?: StyleProp<ViewStyle>;
}

interface SectionHeaderProps extends SectionHeaderStylingProps {
  sectionTitles: string[];
  sectionListRef: RefObject<
    SectionList<any, { title: string; key: string; data: any[] }>
  >;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setHasBeenSetOnScroll: (v: boolean) => void;
}

const ItemHeader = React.forwardRef<
  View,
  {
    label: string;
    onPress: () => void;
    active: boolean;
    colors?: any;
    headerItemStyle?: StyleProp<TextStyle>;
  }
>((props, ref) => {
  return (
    <Pressable ref={ref} onPress={props.onPress}>
      <Text
        style={[
          styles.defaultItemStyle,
          {
            color: props.active
              ? props.colors?.active ?? "white"
              : props.colors?.inactive ?? "black",
          },
          props.headerItemStyle,
        ]}
      >
        {props.label}
      </Text>
    </Pressable>
  );
});

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const {
    sectionTitles,
    sectionListRef,
    activeIndex,
    setActiveIndex,
    setHasBeenSetOnScroll,
  } = props;
  const [measures, setMeasures] = React.useState<
    { x: number; width: number }[]
  >([]);
  const containerRef = React.useRef<FlatList<any>>(null);
  const indicatorPos = useSharedValue({ width: 0, x: 0 });
  const refs = React.useMemo(
    () => sectionTitles.map(() => React.createRef<View>()),
    []
  );

  React.useEffect(() => {
    containerRef?.current?.scrollToIndex({
      index: activeIndex,
      animated: true,
      viewOffset: 0,
      viewPosition: 0.5,
    });
    if (!!measures[activeIndex]) indicatorPos.value = measures[activeIndex];
  }, [activeIndex]);

  React.useEffect(() => {
    if (
      !!measures[0] &&
      indicatorPos.value.x === 0 &&
      indicatorPos.value.width === 0
    ) {
      indicatorPos.value = { width: measures[0].width, x: measures[0].x };
    }
  }, [measures]);

  React.useEffect(() => {
    const ms: { x: number; width: number }[] = [];
    refs.forEach((r: RefObject<View>, index) => {
      r.current?.measureLayout(
        findNodeHandle(containerRef.current),
        (x: number, y: number, width: number, height: number) => {
          ms.push({ x, width });
          if (ms.length === sectionTitles.length) {
            setMeasures(ms);
          }
        },
        () => null
      );
    });
  }, []);

  return (
    <FlatList
      horizontal
      data={sectionTitles}
      ref={containerRef}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[props.headerContainerStyle]}
      keyExtractor={(item) => item}
      ListHeaderComponent={
        <Indicator
          indicatorPos={indicatorPos}
          indicatorContainerStyle={props.indicatorContainerStyle}
        />
      }
      renderItem={({ item, index }) => (
        <ItemHeader
          label={item}
          ref={refs[index]}
          onPress={() => {
            setHasBeenSetOnScroll(false);
            setActiveIndex(index);
            sectionListRef?.current?.scrollToLocation({
              animated: true,
              sectionIndex: index,
              itemIndex: 0,
            });
          }}
          active={activeIndex === index}
          {...props}
        />
      )}
    />
  );
};

interface SectionListDeliverooProps
  extends SectionHeaderStylingProps,
    SectionListProps<any, any> {
  containerStyle?: StyleProp<ViewStyle>;
}

const SectionListDeliveroo: React.FC<SectionListDeliverooProps> = (props) => {
  const sectionListRef = React.useRef<SectionList<any, any>>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const hasBeenSetOnScroll = React.useRef(false);

  const onCheckViewableItems = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    const {
      section: { key },
    } = viewableItems[0];
    const actvI = props.sections.findIndex((item) => item.key === key) - 1;
    if (hasBeenSetOnScroll.current === true && activeIndex !== actvI) {
      setActiveIndex(actvI < 0 ? 0 : actvI);
    }
  };

  const setHadBeenSetOnScroll = React.useCallback((v: boolean) => {
    hasBeenSetOnScroll.current = v;
  }, []);

  return (
    <View style={props.containerStyle}>
      <SectionHeader
        sectionTitles={props.sections.map(({ title }) => title)}
        sectionListRef={sectionListRef}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setHasBeenSetOnScroll={setHadBeenSetOnScroll}
        {...props}
      />
      <SectionList
        ref={sectionListRef}
        {...props}
        onViewableItemsChanged={onCheckViewableItems}
        onScrollEndDrag={(e) => {
          hasBeenSetOnScroll.current = true;
          props.onScrollEndDrag?.(e);
        }}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 100,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultIndicatorStyle: {
    backgroundColor: "red",
    borderRadius: 50,
  },
  indicatorStyle: {
    position: "absolute",
    top: 0,
    bottom: 0,
  },
  defaultItemStyle: {
    marginHorizontal: 12,
    fontWeight: "bold",
    fontSize: 15,
  },
});

const Page = () => {
  return (
    <Blabla
      sections={data}
      contentContainerStyle={{
        padding: 12,
      }}
      headerContainerStyle={{
        marginTop: 10,
      }}
      // headerItemStyle={{
      //   paddingVertical: 5,
      // }}
      renderItem={({ index }) => <Text>{index}</Text>}
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
      renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
      keyExtractor={(_item, index) => `${index}`}
    />
  );
};

export default Page;
