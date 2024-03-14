import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const FrameSeleccionTiempo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameSeleccionTiempo}>
      <View style={styles.layoutFormRegistro}>
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <Text style={[styles.time, styles.timeTypo]}>9:30</Text>
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
      <View style={[styles.options, styles.optionsPosition1]}>
        <View style={[styles.optionsChild, styles.optionsLayout]} />
        <Text style={[styles.minutos, styles.minutosTypo]}>30 minutos</Text>
        <View style={[styles.optionsItem, styles.optionsLayout]} />
        <View style={[styles.optionsInner, styles.optionsLayout]} />
        <Text style={[styles.minutos1, styles.minutosTypo]}>60 minutos</Text>
        <Text style={[styles.minutos2, styles.minutosTypo]}>90 minutos</Text>
      </View>
      <Image
        style={[styles.frameSeleccionTiempoChild, styles.optionsPosition1]}
        resizeMode="cover"
        source={require("../assets/arrow-2.png")}
      />
      <Pressable
        style={styles.containedaTextenabled}
        onPress={() => navigation.navigate("VistaEjecucinRutina")}
      >
        <View style={styles.text}>
          <Text style={[styles.label, styles.timeTypo]}>Iniciar</Text>
        </View>
      </Pressable>
      <Text style={styles.seleccioneElTiempo}>
        Seleccione el tiempo de la rutina
      </Text>
      <View style={styles.navBarMovil}>
        <Pressable
          style={[styles.icon, styles.smsLayout]}
          onPress={() => navigation.navigate("FrameAjustes")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Text style={[styles.fitalarm, styles.framePosition]}>Fitalarm</Text>
        <Pressable
          style={styles.cottage}
          onPress={() => navigation.navigate("FrameMainMenu")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            resizeMode="cover"
            source={require("../assets/cottage.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.sms, styles.smsLayout]}
          onPress={() => navigation.navigate("MensajesDirectos")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            resizeMode="cover"
            source={require("../assets/sms.png")}
          />
        </Pressable>
        <View style={[styles.frame, styles.framePosition]}>
          <View style={[styles.avatars3dAvatar21, styles.avatars3dPosition]} />
          <Image
            style={[styles.avatars3dAvatar211, styles.avatars3dPosition]}
            resizeMode="cover"
            source={require("../assets/avatars--3d-avatar-21.png")}
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
  timeTypo: {
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
  },
  navigationLayout: {
    height: 24,
    position: "absolute",
  },
  optionsPosition1: {
    left: 28,
    position: "absolute",
  },
  optionsLayout: {
    height: 65,
    width: 200,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  minutosTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoFlexRegular,
    fontSize: FontSize.m3BodyLarge_size,
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
  icon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  framePosition: {
    top: 9,
    position: "absolute",
  },
  avatars3dPosition: {
    right: "0%",
    position: "absolute",
  },
  time: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0.1,
    zIndex: 0,
    lineHeight: 20,
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
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
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
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
  optionsChild: {
    top: 42,
    left: 78,
    width: 200,
    backgroundColor: Color.colorGainsboro_100,
  },
  minutos: {
    top: 65,
    left: 139,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoFlexRegular,
    fontSize: FontSize.m3BodyLarge_size,
  },
  optionsItem: {
    top: 159,
    left: 78,
    width: 200,
    backgroundColor: Color.colorGainsboro_100,
  },
  optionsInner: {
    top: 271,
    left: 76,
  },
  minutos1: {
    top: 182,
    left: 138,
  },
  minutos2: {
    top: 294,
    left: 139,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoFlexRegular,
    fontSize: FontSize.m3BodyLarge_size,
  },
  options: {
    top: 187,
    width: 352,
    height: 447,
    overflow: "hidden",
  },
  frameSeleccionTiempoChild: {
    top: 849,
    width: 57,
    height: 0,
  },
  label: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 1,
    lineHeight: 16,
  },
  text: {
    paddingLeft: Padding.p_7xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_9xs,
    flexDirection: "row",
  },
  containedaTextenabled: {
    top: 818,
    left: 274,
    borderRadius: 4,
    backgroundColor: "#ff7232",
    width: 115,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_7xs,
    paddingBottom: Padding.p_7xs,
    flexDirection: "row",
    position: "absolute",
  },
  seleccioneElTiempo: {
    top: 177,
    left: 58,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  icon: {
    left: "12.62%",
    top: "33.77%",
    right: "81.31%",
    bottom: "33.77%",
  },
  fitalarm: {
    left: 159,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.3,
    lineHeight: 60,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.colorBlack,
    textAlign: "center",
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
    top: "0%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
  },
  avatars3dAvatar211: {
    height: "70.18%",
    width: "62.5%",
    top: "15.79%",
    bottom: "14.04%",
    left: "37.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frame: {
    left: 311,
    width: 64,
    height: 57,
    overflow: "hidden",
  },
  navBarMovil: {
    top: 71,
    backgroundColor: Color.colorWhitesmoke,
    width: 412,
    height: 77,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  frameSeleccionTiempo: {
    flex: 1,
    height: 892,
    width: "100%",
  },
});

export default FrameSeleccionTiempo;
