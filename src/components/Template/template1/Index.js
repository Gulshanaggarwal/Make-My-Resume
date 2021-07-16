import React from "react";
import {
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import Template1Header from "./Header";
import Template1Education from "./Education";
import { FaBalanceScale } from "react-icons/fa";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "whitesmoke",
    width: "100%",
  },
  
});



function Template1(props) {
  
  return (
    <Page style={styles.page}>
      <Template1Header data={props.data} />
      <Template1Education/>
    </Page>
  );
}

export default Template1;
