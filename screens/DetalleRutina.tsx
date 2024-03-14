import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const DetalleRutina = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.detalleRutina}>
      <View style={[styles.layoutFromRegistro, styles.navBarMovilPosition]}>
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
      <View style={[styles.detalleRutinaChild, styles.detalleLayout]} />
      <View style={[styles.detalleRutinaItem, styles.detalleLayout]} />
      <Text style={[styles.remo, styles.remoTypo]}>Remo</Text>
      <Text style={[styles.pullup, styles.remoTypo]}>Pullup</Text>
      <Pressable
        style={[styles.visibility, styles.visibilityPosition]}
        onPress={() => navigation.navigate("DetalleEjercicio")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/visibility.png")}
        />
      </Pressable>
      <Image
        style={[styles.detalleRutinaInner, styles.wrapperPosition]}
        resizeMode="cover"
        source={require("../assets/arrow-2.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("FrameSeleccionTiempo")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/arrow-3.png")}
        />
      </Pressable>
      <View style={[styles.navBarMovil, styles.navBarMovilPosition]}>
        <Image
          style={[styles.avatars3dAvatar21, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/avatars--3d-avatar-212.png")}
        />
        <Image
          style={[styles.icon2, styles.smsLayout]}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={styles.fitalarm}>Fitalarm</Text>
        <Image
          style={[styles.cottageIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/cottage.png")}
        />
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
      </View>
      <Text style={styles.ejerciciosDeEspalda}>Ejercicios de espalda 1</Text>
      <Image
        style={[styles.visibilityIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/visibility.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navBarMovilPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  statusBarPosition: {
    right: 16,
    left: 0,
  },
  navigationLayout: {
    height: 24,
    position: "absolute",
  },
  detalleLayout: {
    height: 78,
    width: 305,
    backgroundColor: Color.colorGainsboro_100,
    left: 53,
    position: "absolute",
  },
  remoTypo: {
    height: 41,
    width: 192,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.m3BodyLarge_size,
    left: 76,
    color: Color.colorBlack,
    letterSpacing: 0.2,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  visibilityPosition: {
    height: "3.92%",
    width: "8.5%",
    right: "16.99%",
    left: "74.51%",
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapperPosition: {
    width: 57,
    top: 849,
    position: "absolute",
  },
  smsLayout: {
    width: "6.07%",
    height: "32.47%",
    position: "absolute",
  },
  time: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0.1,
    zIndex: 0,
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
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
  layoutFromRegistro: {
    top: -8,
    left: -8,
    borderRadius: Border.br_lg,
    backgroundColor: Color.m3RefNeutralNeutral10,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 8,
    width: 428,
    height: 908,
  },
  detalleRutinaChild: {
    top: 251,
  },
  detalleRutinaItem: {
    top: 368,
  },
  remo: {
    top: 271,
  },
  pullup: {
    top: 386,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  visibility: {
    top: "30.72%",
    bottom: "65.36%",
  },
  detalleRutinaInner: {
    left: 13,
    height: 0,
  },
  icon1: {
    maxHeight: "100%",
    width: "100%",
  },
  wrapper: {
    left: 324,
  },
  avatars3dAvatar21: {
    height: "74.03%",
    width: "15.53%",
    top: "12.99%",
    right: "11.65%",
    bottom: "12.99%",
    left: "72.82%",
    maxHeight: "100%",
    position: "absolute",
  },
  icon2: {
    top: "32.47%",
    right: "81.8%",
    bottom: "35.06%",
    left: "12.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fitalarm: {
    top: 9,
    left: 159,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.3,
    lineHeight: 60,
    fontFamily: FontFamily.m3BodyLarge,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  cottageIcon: {
    height: "38.96%",
    width: "7.28%",
    top: "28.57%",
    right: "89.32%",
    bottom: "32.47%",
    left: "3.4%",
    maxHeight: "100%",
    position: "absolute",
  },
  sms: {
    left: "91.26%",
    top: "31.17%",
    right: "2.67%",
    bottom: "36.36%",
  },
  navBarMovil: {
    top: 83,
    backgroundColor: Color.colorWhitesmoke,
    width: 412,
    height: 77,
    left: 0,
  },
  ejerciciosDeEspalda: {
    top: 182,
    left: 102,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  visibilityIcon: {
    top: "43.61%",
    bottom: "52.47%",
    maxHeight: "100%",
    height: "3.92%",
    width: "8.5%",
    right: "16.99%",
    left: "74.51%",
    position: "absolute",
  },
  detalleRutina: {
    flex: 1,
    height: 892,
    width: "100%",
  },
});

export default DetalleRutina;
