import React from "react";
import {
  Text,
  View,
  StyleSheet
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
    fontSize: "15px",
  },
  Line: {
    backgroundColor: "gray",
    height: "0.5px",
    width: "100%",
    margin:"2px 0"
  },
  instanceWrapper: {
    margin: "8px 0",
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
    alignItems:"center",
    padding: "0 2px",
    color: "white",
    fontSize: "6px",
    backgroundColor: "black",
  },
  jobResponsibility: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "8px",
    margin: "5px 0",
    width:"80%"
  },
  listDot: {
    width: "3px",
    height: "3px",
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
                <Text style={{ fontWeight: "medium", fontSize: "12px" }}>
                  {ele.companyName}
                </Text>
                <Text style={{ fontSize: "8px" }}>{ele.jobLocation}</Text>
              </View>
              <View style={styles.jobTitleWithDateWrapper}>
                <View>
                  <Text style={{ fontSize: "10px" }}>{ele.jobTitle}</Text>
                </View>
                {(ele.startDate !== "" || ele.endDate!=="") && (
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
