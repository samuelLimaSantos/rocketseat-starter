import React from "react";
import { WebView } from "react-native-webview";

const Product = ({ route }) => {
  return <WebView source={{ uri: route.params.product.url }} />;
};

Product.navigationOptions = (props) => ({
  title: props.route.params.product.title,
});

export default Product;
