import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default {
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column"
  },
  blurredView: {
    position: "absolute",
    width: "100%",
    height: 200
  },
  imageWrapper: {
    width: "100%",
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: width * 0.25,
    borderRadius: (width * 0.25) / 2,
    aspectRatio: 1
  },
  DetailsItem: {
    wrapper: {
      flexDirection: "column",
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderBottomColor: "#aaa",
      borderBottomWidth: 1,
      width: "100%"
    },
    title: {
      padding: 5,
      fontWeight: "bold",
      color: "#969494"
    },
    content: {
      padding: 5
    }
  }
};
