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
import { FaEnvelope, FaMobileAlt, FaLink } from "react-icons/fa";

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "25px",
    width:"85%",
  },
  fullnameContainer: {
    fontSize: "22px",
    fontWeight:'heavy'
  },
  addressContainer: {
    margin: "0 3px",
    fontSize: "8px",
  },
  linkContainer: {
    margin: "3px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

function Template1Header(props) {
  const {fullname,email,phone,linkedin_url}=props.data.personal;
 
  
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.fullnameContainer}>
          <Text style={styles.fullname}>{fullname}</Text>
        </View>
        <View style={styles.addressContainer}>
          <View style={styles.linkContainer}>
            <Link href="">{phone}</Link>
          </View>
          <View style={styles.linkContainer}>
            <FaEnvelope style={styles.icon} />
            <Link href="">{email}</Link>
          </View>

          <View style={styles.linkContainer}>
            <FaLink />
            <Link href="">{linkedin_url}</Link>
          </View>
          <View style={styles.linkContainer}>
            <FaLink />
            <Link href="">
              https://www.linkedin.com/in/gulshan-aggarwal-64b4121a3
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Template1Header;
