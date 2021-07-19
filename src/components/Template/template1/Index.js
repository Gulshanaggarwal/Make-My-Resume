import React, { useContext } from "react";
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
import Template1Experience from "./Experience";
import Template1Skill from "./Skill";
import Template1Project from "./Project";
import Template1Award from "./Award";

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
      <Template1Education data={props.data} />
      <Template1Experience data={props.data} />
      <Template1Skill data={props.data} />
      <Template1Project data={props.data} />
      <Template1Award data={props.data}/>
    </Page>
  );
}

export default Template1;
