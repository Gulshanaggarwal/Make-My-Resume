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
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    margin:'20px 0'
  },
  subContainer:{
      width:'85%',
  },
  sectionHeader:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end',
      fontWeight:'bold',
      fontSize:'20px'
  },
  Line:{
      backgroundColor:'black',
      height:'1px',
      width:'100%',
      marginLeft:'5px'
  },
  educationInstanceContainer:{
      margin:'20px 0'
  },

  degreeWrapper:{
      fontSize:'18px',
      fontWeight:'semibold'
  },
  schoolWithDateWrapper:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      fontSize:'15px',
      margin:'10px 0'
  }
  ,dateWrapper:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      fontSize:'10px',
      backgroundColor:'black',
      padding:'2px',
      color:'white'
      
  },
  dateText:{
      margin:'0 2px'
  },
  schoolLocation:{
      fontSize:'10px'
  },
  degreeDetail:{
      fontSize:'12px',
      display:'flex',
      flexDirection:'row'
  },
  degreeDetailText:{
      margin:'0 3px'

  }
});

function Template1Education() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.sectionHeader}>
          <View>
            <Text>Education</Text>
          </View>
          <View style={styles.Line}></View>
        </View>
        <View style={styles.educationInstanceContainer}>
            <View style={styles.degreeWrapper}>
                <Text>Bachelor's degree</Text>
            </View>
            <View style={styles.schoolWithDateWrapper}>
                <View>
                    <Text>Rajasthan technical University</Text>
                </View>
                <View style={styles.dateWrapper}>
                    <Text style={styles.dateText}>08/2019</Text>
                    <Text style={styles.dateText}>-</Text>
                    <Text style={styles.dateText}>Present</Text>
                </View>
            </View>
            <View style={styles.schoolLocation}>
                <Text>Kota, Rajasthan</Text>
            </View>
            <View style={styles.degreeDetail}>
                <Text>B.tech</Text>
                <Text style={styles.degreeDetailText}>-</Text>
                <Text style={styles.degreeDetailText}>Computer Science</Text>
            </View>

        </View>
      </View>
    </View>
  );
}

export default Template1Education;
