import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const VistaEjecucinRutina = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vistaEjecucinRutina}>
      <View style={styles.layoutFormRegistro}>
        <View style={[styles.statusBar, styles.statusBarPosition]}>
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
      <Text style={[styles.remo, styles.minFlexBox]}>Remo</Text>
      <Text style={[styles.repeticiones4, styles.repeticiones4Layout]}>
        Repeticiones: 4
      </Text>
      <Text style={styles.series3}>Series: 3</Text>
      <Text style={[styles.min, styles.minFlexBox]}>3:00 MIN</Text>
      <Text style={[styles.tiempoDescanso, styles.repeticiones4Layout]}>
        Tiempo descanso:
      </Text>
      <Image
        style={styles.vistaEjecucinRutinaChild}
        resizeMode="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("DetalleEjercicio")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/arrow-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => navigation.navigate("FrameMainMenu")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/arrow-3.png")}
        />
      </Pressable>
      <Image
        style={[styles.pauseCircleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/pause-circle.png")}
      />
      <Image
        style={[styles.playCircleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/play-circle.png")}
      />
      <Image
        style={[styles.replayCircleFilledIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/replay-circle-filled.png")}
      />
      <View style={styles.navBarMovil}>
        <Image
          style={[styles.icon2, styles.smsLayout]}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.fitalarm, styles.framePosition]}>Fitalarm</Text>
        <Pressable
          style={styles.cottage}
          onPress={() => navigation.navigate("FrameMainMenu")}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/cottage.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.sms, styles.smsLayout]}
          onPress={() => navigation.navigate("MensajesDirectos")}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/sms.png")}
          />
        </Pressable>
        <View style={[styles.frame, styles.framePosition]}>
          <Image
            style={styles.userImagesuserImages}
            resizeMode="cover"
            source={require("../assets/user-imagesuser-images.png")}
          />
          <Image
            style={[styles.avatars3dAvatar21, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/avatars--3d-avatar-212.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    right: 16,
    left: 0,
  },
  navigationLayout: {
    height: 24,
    position: "absolute",
  },
  minFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorSeashell,
    fontFamily: FontFamily.robotoFlexRegular,
    letterSpacing: 0.3,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  repeticiones4Layout: {
    height: 75,
    width: 307,
    letterSpacing: 0.2,
    alignItems: "center",
    display: "flex",
    color: Color.colorSeashell,
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  wrapperLayout: {
    height: 0,
    width: 57,
    top: 849,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  smsLayout: {
    width: "6.07%",
    height: "32.47%",
    position: "absolute",
  },
  framePosition: {
    top: 9,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0.1,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.onPrimaryHighEmphasis,
    zIndex: 0,
    textAlign: "left",
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
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    left: 0,
    position: "absolute",
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
  remo: {
    top: 151,
    left: 39,
    fontSize: FontSize.size_13xl,
    width: 229,
    height: 65,
  },
  repeticiones4: {
    top: 416,
    left: 136,
    fontSize: FontSize.size_xl,
    height: 75,
  },
  series3: {
    top: 481,
    left: 166,
    width: 307,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    alignItems: "center",
    display: "flex",
    color: Color.colorSeashell,
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  min: {
    top: 574,
    left: 152,
    fontSize: 30,
    width: 126,
    height: 71,
  },
  tiempoDescanso: {
    top: 513,
    left: 115,
    fontSize: FontSize.size_3xl,
  },
  vistaEjecucinRutinaChild: {
    top: 228,
    left: 87,
    width: 220,
    height: 189,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 13,
  },
  container: {
    left: 339,
  },
  pauseCircleIcon: {
    right: "45.63%",
    left: "43.45%",
    bottom: "20.96%",
    top: "73.99%",
    width: "10.92%",
    height: "5.04%",
    maxWidth: "100%",
    position: "absolute",
  },
  playCircleIcon: {
    right: "73.3%",
    left: "15.78%",
    bottom: "20.96%",
    top: "73.99%",
    width: "10.92%",
    height: "5.04%",
    maxWidth: "100%",
    position: "absolute",
  },
  replayCircleFilledIcon: {
    right: "15.78%",
    left: "73.3%",
    bottom: "20.96%",
    top: "73.99%",
    width: "10.92%",
    height: "5.04%",
    maxWidth: "100%",
    position: "absolute",
  },
  icon2: {
    top: "32.47%",
    right: "81.55%",
    bottom: "35.06%",
    left: "12.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fitalarm: {
    left: 159,
    fontSize: FontSize.size_6xl,
    lineHeight: 60,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0.3,
    top: 9,
  },
  icon3: {
    height: "100%",
    width: "100%",
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
  userImagesuserImages: {
    top: 13,
    left: 32,
    borderRadius: Border.br_81xl,
    width: 25,
    height: 25,
    overflow: "hidden",
    position: "absolute",
  },
  avatars3dAvatar21: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  frame: {
    left: 311,
    width: 64,
    height: 57,
    overflow: "hidden",
  },
  navBarMovil: {
    top: 62,
    backgroundColor: Color.colorWhitesmoke,
    width: 412,
    height: 77,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  vistaEjecucinRutina: {
    flex: 1,
    height: 892,
    width: "100%",
  },
});

export default VistaEjecucinRutina;
