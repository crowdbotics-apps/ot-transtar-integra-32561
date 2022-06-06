import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_145_49} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee0ea776-3fee-4d60-aa4f-0b40c40fdd5e"
        }}
        style={styles.ImageBackground_145_50}
      />
      <View style={styles.View_145_51} />
      <View style={styles.View_145_52}>
        <Text style={styles.Text_145_52}>
          OdysseyXpress: Connect Odyssey makes it simple, fast and easy for
          registered security holders to sign up for online access to confirm
          holdings, download a current DRS statement or make updates to account
          information.
        </Text>
      </View>
      <View style={styles.View_145_53}>
        <View style={styles.View_145_54} />
        <View style={styles.View_145_55}>
          <Text style={styles.Text_145_55}>
            In order to register for online access, we need to verify your
            identity. Please enter the following information exactly as it
            appears on your last DRS statement, proxy or certificate:
          </Text>
        </View>
        <View style={styles.View_145_56} />
        <View style={styles.View_145_57} />
        <View style={styles.View_145_58}>
          <Text style={styles.Text_145_58}>Your Name (Registration)</Text>
        </View>
        <View style={styles.View_145_59}>
          <Text style={styles.Text_145_59}>Holder ID</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24e599bf-ad69-473a-8f2c-10a7bb5a704c"
          }}
          style={styles.ImageBackground_145_60}
        />
        <View style={styles.View_145_64}>
          <Text style={styles.Text_145_64}>
            Enter at least two of the following:
          </Text>
        </View>
        <View style={styles.View_145_65} />
        <View style={styles.View_145_66} />
        <View style={styles.View_145_67} />
        <View style={styles.View_145_68}>
          <Text style={styles.Text_145_68}>Postal/Zip Code (optional)</Text>
        </View>
        <View style={styles.View_145_69}>
          <Text style={styles.Text_145_69}>Email Address</Text>
        </View>
        <View style={styles.View_145_70}>
          <Text style={styles.Text_145_70}>SIN or TIN</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/227a8fda-5c45-43a8-8660-70512ba1f23a"
        }}
        style={styles.ImageBackground_145_71}
      />
      <View style={styles.View_145_84}>
        <Text style={styles.Text_145_84}>|</Text>
      </View>
      <View style={styles.View_145_85}>
        <View style={styles.View_145_86} />
        <View style={styles.View_145_87}>
          <Text style={styles.Text_145_87}>
            © 2022 Odyssey Trust Company – odysseytrust.com. All Rights
            Reserved.
          </Text>
        </View>
        <View style={styles.View_145_88}>
          <Text style={styles.Text_145_88}>|</Text>
        </View>
        <View style={styles.View_145_89}>
          <Text style={styles.Text_145_89}>|</Text>
        </View>
        <View style={styles.View_145_90}>
          <Text style={styles.Text_145_90}>Terms of Use</Text>
        </View>
        <View style={styles.View_145_91}>
          <Text style={styles.Text_145_91}>Contact us</Text>
        </View>
        <View style={styles.View_145_92}>
          <Text style={styles.Text_145_92}>Privacy Policy</Text>
        </View>
        <View style={styles.View_145_93}>
          <Text style={styles.Text_145_93}>Cookie Policy</Text>
        </View>
      </View>
      <View style={styles.View_145_94} />
      <View style={styles.View_145_95}>
        <Text style={styles.Text_145_95}>SUBMIT</Text>
      </View>
      <View style={styles.View_145_96}>
        <View style={styles.View_145_97} />
        <View style={styles.View_145_98}>
          <Text style={styles.Text_145_98}>
            Odyssey makes it simple, fast and easy for registered security
            holders to sign up for online access to confirm holdings, download a
            current DRS statement or make updates to account information
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("123%") },
  View_145_49: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_145_50: {
    width: wp("118%"),
    minWidth: wp("118%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_145_51: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 41, 75, 1)",
    opacity: 0.699999988079071
  },
  View_145_52: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_145_52: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_53: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("12%")
  },
  View_145_54: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_145_55: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_145_55: {
    color: "rgba(14, 41, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_56: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("29%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(139, 139, 139, 1)",
    borderWidth: 1
  },
  View_145_57: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("52%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(139, 139, 139, 1)",
    borderWidth: 1
  },
  View_145_58: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_145_58: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_59: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_145_59: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_145_60: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_145_64: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_145_64: {
    color: "rgba(14, 41, 75, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_65: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("37%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(139, 139, 139, 1)",
    borderWidth: 1
  },
  View_145_66: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("61%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(139, 139, 139, 1)",
    borderWidth: 1
  },
  View_145_67: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("69%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(139, 139, 139, 1)",
    borderWidth: 1
  },
  View_145_68: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_145_68: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_69: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_145_69: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_70: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_145_70: {
    color: "rgba(176, 176, 176, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_145_71: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  View_145_84: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("118%"),
    justifyContent: "flex-start"
  },
  Text_145_84: {
    color: "rgba(14, 41, 75, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_85: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("116%")
  },
  View_145_86: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 236, 1)"
  },
  View_145_87: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_145_87: {
    color: "rgba(14, 41, 75, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_88: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_145_88: {
    color: "rgba(14, 41, 75, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_89: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_145_89: {
    color: "rgba(14, 41, 75, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_90: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_145_90: {
    color: "rgba(14, 41, 75, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_91: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_145_91: {
    color: "rgba(14, 41, 75, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_92: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_145_92: {
    color: "rgba(14, 41, 75, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_93: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_145_93: {
    color: "rgba(14, 41, 75, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_145_94: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("92%"),
    backgroundColor: "rgba(180, 135, 63, 1)"
  },
  View_145_95: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_145_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  View_145_96: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("68%")
  },
  View_145_97: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_145_98: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_145_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
