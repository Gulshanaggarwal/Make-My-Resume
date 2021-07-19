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
    fontSize: "22px",
    fontWeight: "heavy",
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
  const { fullName, email, phone, linkedinUrl,address } = props.data.personal;

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.fullnameContainer}>
          <Text style={styles.fullname}>{fullName}</Text>
        </View>
        <View style={styles.addressContainer}>
          <View style={styles.linkContainer}>
            <FaLink />
            <Text>{address}</Text>
          </View>
          <View style={styles.linkContainer}>
            <Link href={`tel:${phone}`}>{phone}</Link>
          </View>
          <View style={styles.linkContainer}>
            <FaEnvelope style={styles.icon} />
            <Link href={`mailto:${email}`}>{email}</Link>
          </View>

          <View style={styles.linkContainer}>
            <FaLink />
            <Link href={linkedinUrl}>
              {linkedinUrl}
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Template1Header;
