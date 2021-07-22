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
  skillWrapper:{
      display:"flex",
      flexDirection:"row",
      flexWrap:'wrap',
      width:"80%",
      margin:"10px 0"
  }
  ,
  skillBox:{
      backgroundColor:"gray",
      borderRadius:"5px",
      padding:"4px 6px",
      margin:"5px 5px",
      color:"white",
      fontSize:"8px"
  }
});

function Template1Skill(props) {
  
    const {skill}=props.data;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.sectionHeader}>
          <View>
            <Text>Skills</Text>
          </View>
          <View style={styles.Line}></View>
        </View>
        <View style={styles.skillWrapper}>
            {skill.map((ele,index)=>{
                return(
                   <View key={index}>
                   {ele.skillName!=="" && <Text style={styles.skillBox}>{ele.skillName}</Text>}
                   </View>
                )
            })}
        </View>
      </View>
    </View>
  );
}

export default Template1Skill;
