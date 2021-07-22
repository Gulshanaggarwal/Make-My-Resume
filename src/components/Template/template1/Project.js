import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "10px 0",
  },
  subContainer: {
    width: "85%"
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
    margin: "5px 0",
  },
  DescriptionWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "10px",
    margin: "5px 0",
  },
  listDot: {
    width: "3px",
    height: "3px",
    backgroundColor: "black",
    borderRadius: "50%",
  },
});

function Template1Project(props) {
  
  const { project } = props.data;

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.sectionHeader}>
          <View>
            <Text>Recent Projects</Text>
          </View>
          <View style={styles.Line}></View>
        </View>
        {project.map((ele, index) => {
          return (
            <View style={styles.instanceWrapper} key={index}>
              <Text style={{ fontSize: "12px", fontWeight: "bold" }}>
                {ele.projectName}
              </Text>
              {ele.projectDescription !== "" && (
                <View style={styles.DescriptionWrapper}>
                  <View style={styles.listDot}></View>
                  <Text style={{margin:"0 5px"}}>
                    {ele.projectDescription}
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

export default Template1Project;
