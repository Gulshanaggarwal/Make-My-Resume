import React from "react";
import {
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "10px 0",
  },
  subContainer: {
    width: "85%",
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  Line: {
    backgroundColor: "gray",
    height: "0.5px",
    width: "100%",
    margin: "2px 0",
  },
  instanceWrapper: {
    margin: "5px 0",
  },
  awardNameWithIssuerWrapper: {
    fontSize: "12px",
    margin: "3px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  awardDescriptWithDateWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "10px",
  },
});

function Template1Award(props) {
  const { award } = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.sectionHeader}>
          <View>
            <Text>Awards</Text>
          </View>
          <View style={styles.Line}></View>
        </View>
        {award.map((ele, index) => {
          return (
            <View style={styles.instanceWrapper} key={index}>
              <View style={styles.awardNameWithIssuerWrapper}>
                <Text  style={{fontWeight:"bold"}}>{ele.awardName}</Text>
                <Text>{ele.awardIssuer}</Text>
              </View>
              <View style={styles.awardDescriptWithDateWrapper}>
                <Text>{ele.awardDescription}</Text>
                <Text>{ele.awardIssueDate}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default Template1Award;
