import React from "react";
import { Text, View, StyleSheet, Link} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "25px",
    width: "85%",
  },
  fullnameContainer: {
    fontSize: "18px",
    fontWeight: "extrabold"
  },
  addressContainer: {
    margin: "0 3px",
    fontSize: "6px",
  },
  linkContainer: {
    margin: "2px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});


function Template1Header(props) {
  
  const { fullName, email, phone, linkedinUrl, address } = props.data.personal;


  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.fullnameContainer}>
          <Text style={styles.fullname}>{fullName}</Text>
        </View>
        <View style={styles.addressContainer}>
          <View style={styles.linkContainer}>
            <Text>{address}</Text>
          </View>
          <View style={styles.linkContainer}>
            <Link href={`tel:${phone}`}>{phone}</Link>
          </View>
          <View style={styles.linkContainer}>
            <Link href={`mailto:${email}`}>{email}</Link>
          </View>

          <View style={styles.linkContainer}>
            <Link href={linkedinUrl}>{linkedinUrl}</Link>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Template1Header;
