import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default {
  item: {
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    aspectRatio: 2.5,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#EBEAF4",
    marginBottom: 5
  },
  imageWrapper: {
    width: "40%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: width * 0.25,
    borderRadius: (width * 0.25) / 2,
    aspectRatio: 1
  },
  info: {
    flex: 1,
    width: "60%",
    paddingRight: 20,
    height: "100%",
    paddingVertical: 10,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  infoName: {
    fontWeight: "bold"
  },
  infoLocation: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#969494"
  },
  infoDate: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#969494"
  }
};
