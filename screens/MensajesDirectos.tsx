import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MensajesDirectos = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mensajesDirectos}>
      <View style={styles.layoutFormRegistro}>
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <Text style={[styles.time, styles.profeFlexBox]}>9:30</Text>
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
          <View style={[styles.handle, styles.handleBg]} />
        </View>
        <View style={styles.layoutFormRegistroChild} />
        <View style={[styles.navBarMovil, styles.handleBg]}>
          <Pressable
            style={[styles.icon, styles.iconLayout1]}
            onPress={() => navigation.navigate("FrameAjustes")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
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
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/cottage.png")}
            />
          </Pressable>
          <Image
            style={[styles.smsIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/sms.png")}
          />
          <Image
            style={[styles.avatars3dAvatar21, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/avatars--3d-avatar-21.png")}
          />
        </View>
        <Image
          style={[styles.dAvatars27, styles.avatarsLayout]}
          resizeMode="cover"
          source={require("../assets/3d-avatars--27.png")}
        />
        <Image
          style={[styles.dAvatars23, styles.avatarsLayout]}
          resizeMode="cover"
          source={require("../assets/3d-avatars--23.png")}
        />
        <Image
          style={[styles.avatars3dAvatar10, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/avatars--3d-avatar-10.png")}
        />
      </View>
      <Image
        style={[styles.mensajesDirectosChild, styles.mensajesLayout]}
        resizeMode="cover"
        source={require("../assets/polygon-5.png")}
      />
      <Pressable
        style={styles.juanPerez}
        onPress={() => navigation.navigate("VistaDm")}
      >
        <Text style={[styles.juanPerez1, styles.profeTypo]}>Juan Perez</Text>
      </Pressable>
      <Text style={[styles.holaProfe, styles.profeTypo]}>Hola profe</Text>
      <Text style={[styles.profeNoEntiendo, styles.profeTypo]}>
        Profe no entiendo un ejercicio
      </Text>
      <Text style={[styles.meGustLa, styles.meGustLaFlexBox]}>
        Me gustó la rutina de espalda
      </Text>
      <Text style={[styles.ricardoMartinez, styles.camilaOsorioTypo]}>
        Ricardo Martinez
      </Text>
      <Text style={[styles.camilaOsorio, styles.camilaOsorioTypo]}>
        Camila Osorio
      </Text>
      <Image
        style={[styles.mensajesDirectosItem, styles.mensajesLayout]}
        resizeMode="cover"
        source={require("../assets/polygon-5.png")}
      />
      <View style={[styles.mensajesDirectosInner, styles.lineViewLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Text style={[styles.mensajesDirectos1, styles.meGustLaFlexBox]}>
        MENSAJES DIRECTOS
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    right: 16,
    left: 0,
  },
  profeFlexBox: {
    textAlign: "left",
    lineHeight: 20,
  },
  navigationLayout: {
    height: 24,
    position: "absolute",
  },
  handleBg: {
    backgroundColor: Color.onPrimaryHighEmphasis,
    position: "absolute",
  },
  iconLayout1: {
    height: "32.47%",
    width: "6.07%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  avatarsLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  mensajesLayout: {
    height: 23,
    width: 32,
    left: 424,
    position: "absolute",
  },
  profeTypo: {
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    letterSpacing: 0.1,
    fontSize: FontSize.size_3xs,
  },
  meGustLaFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  camilaOsorioTypo: {
    left: 99,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 340,
    borderTopWidth: 1,
    left: 36,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  time: {
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelLarge,
    zIndex: 0,
    color: Color.onPrimaryHighEmphasis,
    letterSpacing: 0.1,
    fontSize: FontSize.size_3xs,
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
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    height: 52,
    left: 0,
    position: "absolute",
  },
  handle: {
    marginTop: -2,
    marginLeft: -54,
    top: "50%",
    borderRadius: Border.br_xs,
    width: 108,
    height: 4,
    left: "50%",
  },
  navigation: {
    bottom: 16,
    left: 0,
    right: 16,
  },
  layoutFormRegistroChild: {
    top: 262,
    left: 40,
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 327,
    height: 395,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  icon: {
    left: "12.86%",
    top: "33.77%",
    right: "81.07%",
    bottom: "33.77%",
  },
  fitalarm: {
    top: 9,
    left: 187,
    lineHeight: 60,
    fontFamily: FontFamily.m3BodyLarge,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0.1,
    fontSize: FontSize.size_3xs,
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
  smsIcon: {
    top: "31.17%",
    right: "2.67%",
    bottom: "36.36%",
    left: "91.26%",
    height: "32.47%",
    width: "6.07%",
    position: "absolute",
  },
  avatars3dAvatar21: {
    height: "51.95%",
    width: "9.71%",
    top: "24.68%",
    right: "8.74%",
    bottom: "23.38%",
    left: "81.55%",
    position: "absolute",
  },
  navBarMovil: {
    top: 52,
    width: 412,
    height: 77,
    left: 0,
    overflow: "hidden",
  },
  dAvatars27: {
    top: 410,
    left: 48,
  },
  dAvatars23: {
    top: 541,
    left: 43,
  },
  avatars3dAvatar10: {
    height: "4.41%",
    width: "9.35%",
    top: "30.73%",
    right: "78.27%",
    bottom: "64.87%",
    left: "12.38%",
    position: "absolute",
  },
  layoutFormRegistro: {
    top: -8,
    left: -8,
    borderRadius: Border.br_lg,
    backgroundColor: Color.m3RefNeutralNeutral10,
    borderColor: Color.colorGray_300,
    borderWidth: 8,
    width: 428,
    height: 908,
    overflow: "hidden",
    borderStyle: "solid",
    position: "absolute",
  },
  mensajesDirectosChild: {
    top: 647,
  },
  juanPerez1: {
    textAlign: "left",
    lineHeight: 20,
  },
  juanPerez: {
    left: 103,
    top: 274,
    position: "absolute",
  },
  holaProfe: {
    top: 300,
    left: 107,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  profeNoEntiendo: {
    top: 431,
    left: 102,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  meGustLa: {
    top: 562,
    left: 98,
    width: 243,
    height: 35,
    fontFamily: FontFamily.robotoFlexRegular,
    color: Color.colorBlack,
    letterSpacing: 0.1,
    fontSize: FontSize.size_3xs,
  },
  ricardoMartinez: {
    top: 537,
  },
  camilaOsorio: {
    top: 408,
  },
  mensajesDirectosItem: {
    top: 636,
  },
  mensajesDirectosInner: {
    top: 503,
  },
  lineView: {
    top: 361,
  },
  mensajesDirectos1: {
    top: 142,
    left: 81,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.2,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    width: 259,
    color: Color.onPrimaryHighEmphasis,
    height: 52,
  },
  mensajesDirectos: {
    flex: 1,
    height: 892,
    width: "100%",
  },
});

export default MensajesDirectos;
