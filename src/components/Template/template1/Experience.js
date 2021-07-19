import React, { useContext } from "react";
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
    margin:"2px 0"
  },
  instanceWrapper: {
    margin: "15px 0",
  },
  companywithLocationWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "5px 0",
  },
  jobTitleWithDateWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobPeriodWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 2px",
    alignItems: "center",
    color: "white",
    fontSize: "10px",
    backgroundColor: "black",
  },
  jobResponsibility: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "12px",
    margin: "5px 0",
  },
  listDot: {
    width: "5px",
    height: "5px",
    backgroundColor: "black",
    borderRadius: "50%",
  },
});

function Template1Experience(props) {
  const { experience } = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.sectionHeader}>
          <View>
            <Text>Work Experience</Text>
          </View>
          <View style={styles.Line}></View>
        </View>
        {experience.map((ele, index) => {
          return (
            <View style={styles.instanceWrapper} key={index}>
              <View style={styles.companywithLocationWrapper}>
                <Text style={{ fontWeight: "medium", fontSize: "15px" }}>
                  {ele.companyName}
                </Text>
                <Text style={{ fontSize: "10px" }}>{ele.jobLocation}</Text>
              </View>
              <View style={styles.jobTitleWithDateWrapper}>
                <View>
                  <Text style={{ fontSize: "12px" }}>{ele.jobTitle}</Text>
                </View>
                {ele.startDate !== "" && (
                  <View style={styles.jobPeriodWrapper}>
                    <Text style={{ margin: "0 2px" }}>{ele.startDate}</Text>
                    <Text style={{ margin: "0 2px" }}>-</Text>
                    <Text style={{ margin: "0 2px" }}>{ele.endDate}</Text>
                  </View>
                )}
              </View>
              {ele.jobResponsibility !== "" && (
                <View style={styles.jobResponsibility}>
                  <View style={styles.listDot}></View>
                  <Text style={{ margin: "0 5px" }}>
                    {ele.jobResponsibility}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}
export default Template1Experience;
