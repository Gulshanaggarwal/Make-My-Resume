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
import Template1Header from "./Header";

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
    margin:"2px 0"
  },
  educationInstanceContainer: {
    margin: "10px 0",
  },

  schoolWithDateWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "15px",
    margin: "10px 0",
  },
  dateWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "10px",
    backgroundColor: "black",
    padding: "2px",
    color: "white",
  },
  dateText: {
    margin: "0 2px",
  },
  schoolLocation: {
    fontSize: "10px",
  },
  degreeDetail: {
    fontSize: "12px",
    display: "flex",
    flexDirection: "row",
  },
  degreeDetailText: {
    margin: "0 3px",
  },
});

function Template1Education(props) {
  const { education } = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.sectionHeader}>
          <View>
            <Text>Education</Text>
          </View>
          <View style={styles.Line}></View>
        </View>
        {education.map((ele, index) => {
          return (
            <View style={styles.educationInstanceContainer} key={index}>
              <View style={styles.schoolWithDateWrapper}>
                <View>
                  <Text>{ele.schoolName}</Text>
                </View>
                {ele.sessionStart !== "" && (
                  <View style={styles.dateWrapper}>
                    <Text style={styles.dateText}>{ele.sessionStart}</Text>
                    <Text style={styles.dateText}>-</Text>
                    <Text style={styles.dateText}>{ele.sessionEnd}</Text>
                  </View>
                )}
              </View>
              <View style={styles.schoolLocation}>
                <Text>{ele.schoolCity}</Text>
              </View>
              <View style={styles.degreeDetail}>
                <Text>{ele.degree}</Text>
                <Text style={styles.degreeDetailText}>-</Text>
                <Text style={styles.degreeDetailText}>{ele.major}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default Template1Education;
