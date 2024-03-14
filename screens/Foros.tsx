import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Foros = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.foros}>
      <View style={styles.layoutFormRegistro}>
        <View style={[styles.statusBar, styles.frameFlexBox]}>
          <Text style={styles.time}>9:30</Text>
          <Image
            style={styles.rightIcons}
            resizeMode="cover"
            source={require("../assets/right-icons.png")}
          />
          <Image
            style={[styles.cameraCutoutIcon, styles.navigationLayout]}
            resizeMode="cover"
            source={require("../assets/camera-cutout.png")}
          />
        </View>
        <View style={[styles.navigation, styles.navigationLayout]}>
          <View style={styles.handle} />
        </View>
      </View>
      <Text style={styles.foros1}>Foros</Text>
      <View style={[styles.forosChild, styles.forosLayout]} />
      <Pressable
        style={[styles.visibility, styles.visibilityIconLayout]}
        onPress={() => navigation.navigate("VistaForo")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/visibility.png")}
        />
      </Pressable>
      <Image
        style={[styles.visibilityIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/visibility1.png")}
      />
      <View style={[styles.forosItem, styles.forosLayout]} />
      <Text style={[styles.trabajadores, styles.movilidadTypo]}>
        Trabajadores
      </Text>
      <Text style={[styles.estudiantes, styles.movilidadTypo]}>
        Estudiantes
      </Text>
      <View style={[styles.forosInner, styles.forosLayout]} />
      <Text style={[styles.movilidad, styles.movilidadTypo]}>Movilidad</Text>
      <Image
        style={[styles.visibilityIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/visibility.png")}
      />
      <Image
        style={[styles.visibilityIcon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/visibility.png")}
      />
      <View style={styles.navBarMovil}>
        <Pressable
          style={[styles.icon1, styles.smsLayout]}
          onPress={() => navigation.navigate("FrameAjustes")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Text style={styles.fitalarm}>Fitalarm</Text>
        <Pressable
          style={styles.cottage}
          onPress={() => navigation.navigate("FrameMainMenu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/cottage.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.sms, styles.smsLayout]}
          onPress={() => navigation.navigate("MensajesDirectos")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/sms.png")}
          />
        </Pressable>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <Image
            style={styles.avatars3dAvatar21}
            resizeMode="cover"
            source={require("../assets/avatars--3d-avatar-211.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "flex-end",
    position: "absolute",
  },
  navigationLayout: {
    height: 24,
    position: "absolute",
  },
  forosLayout: {
    height: 78,
    width: 305,
    backgroundColor: Color.colorGainsboro_100,
    left: 53,
    position: "absolute",
  },
  visibilityIconLayout: {
    height: "3.92%",
    width: "8.5%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  movilidadTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.robotoFlexRegular,
    letterSpacing: 0.2,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  smsLayout: {
    height: "32.47%",
    width: "6.07%",
    position: "absolute",
  },
  time: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0.1,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelLarge,
    zIndex: 0,
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    lineHeight: 20,
  },
  rightIcons: {
    width: 46,
    height: 17,
    zIndex: 1,
  },
  cameraCutoutIcon: {
    marginLeft: -12,
    top: 18,
    width: 24,
    zIndex: 2,
    left: "50%",
  },
  statusBar: {
    top: 0,
    height: 52,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    left: 0,
    right: 16,
  },
  handle: {
    marginTop: -2,
    marginLeft: -54,
    top: "50%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.onPrimaryHighEmphasis,
    width: 108,
    height: 4,
    left: "50%",
    position: "absolute",
  },
  navigation: {
    bottom: 16,
    left: 0,
    right: 16,
  },
  layoutFormRegistro: {
    top: -8,
    left: -8,
    borderRadius: Border.br_lg,
    backgroundColor: Color.m3RefNeutralNeutral10,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 8,
    width: 428,
    height: 908,
    overflow: "hidden",
    position: "absolute",
  },
  foros1: {
    top: 191,
    left: 170,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.robotoFlexRegular,
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    lineHeight: 20,
    position: "absolute",
  },
  forosChild: {
    top: 251,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  visibility: {
    left: "75.24%",
    top: "30.49%",
    right: "16.26%",
    bottom: "65.58%",
  },
  visibilityIcon: {
    height: "5.38%",
    width: "11.65%",
    top: "43.72%",
    right: "14.81%",
    bottom: "50.9%",
    left: "73.54%",
    position: "absolute",
  },
  forosItem: {
    top: 375,
  },
  trabajadores: {
    top: 280,
    left: 79,
    fontSize: FontSize.size_3xl,
  },
  estudiantes: {
    top: 404,
    left: 79,
    fontSize: FontSize.size_3xl,
  },
  forosInner: {
    top: 499,
  },
  movilidad: {
    top: 530,
    left: 80,
  },
  visibilityIcon1: {
    top: "44.17%",
    right: "16.75%",
    bottom: "51.91%",
    left: "74.76%",
    height: "3.92%",
    width: "8.5%",
    position: "absolute",
  },
  visibilityIcon2: {
    top: "58.63%",
    right: "16.99%",
    bottom: "37.44%",
    left: "74.51%",
    height: "3.92%",
    width: "8.5%",
    position: "absolute",
  },
  icon1: {
    left: "13.35%",
    top: "33.77%",
    right: "80.58%",
    bottom: "33.77%",
  },
  fitalarm: {
    top: 9,
    left: 159,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.3,
    lineHeight: 60,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  cottage: {
    left: "3.4%",
    top: "28.57%",
    right: "89.32%",
    bottom: "32.47%",
    width: "7.28%",
    height: "38.96%",
    position: "absolute",
  },
  sms: {
    left: "91.26%",
    top: "31.17%",
    right: "2.67%",
    bottom: "36.36%",
  },
  avatars3dAvatar21: {
    width: 40,
    height: 40,
  },
  frame: {
    height: "74.03%",
    width: "15.53%",
    top: "11.69%",
    right: "8.98%",
    bottom: "14.29%",
    left: "75.49%",
    justifyContent: "center",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
    overflow: "hidden",
  },
  navBarMovil: {
    top: 68,
    backgroundColor: Color.colorWhitesmoke,
    width: 412,
    height: 77,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  foros: {
    flex: 1,
    height: 892,
    width: "100%",
  },
});

export default Foros;
