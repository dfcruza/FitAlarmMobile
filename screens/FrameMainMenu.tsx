import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const FrameMainMenu = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameMainMenu}>
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
      <Pressable
        style={[styles.frameMainMenuChild, styles.frameLayout]}
        onPress={() => navigation.navigate("IniciarRutina")}
      />
      <Text style={[styles.iniciarRutina, styles.forosTypo]}>
        Iniciar rutina
      </Text>
      <Pressable
        style={[styles.frameMainMenuItem, styles.frameLayout]}
        onPress={() => navigation.navigate("FrameVerHistorial")}
      />
      <ImageBackground
        style={[styles.imgIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/img.png")}
      />
      <Pressable
        style={[styles.frameMainMenuInner, styles.frameLayout]}
        Foros="Foros"
        onPress={() => navigation.navigate("Foros")}
      />
      <Text style={[styles.miProgreso, styles.forosTypo]}>Mi progreso</Text>
      <Text style={[styles.foros, styles.forosTypo]}>Foros</Text>
      <View style={styles.navBarMovil}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={styles.fitalarm}>Fitalarm</Text>
        <Image
          style={[styles.cottageIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/cottage.png")}
        />
        <Image
          style={[styles.avatars3dAvatar21, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/avatars--3d-avatar-21.png")}
        />
        <Pressable
          style={[styles.sms, styles.smsLayout]}
          onPress={() => navigation.navigate("MensajesDirectos")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/sms.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.dumbellIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/dumbell.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: 0,
    right: 16,
  },
  navigationLayout: {
    height: 24,
    position: "absolute",
  },
  frameLayout: {
    height: 78,
    width: 305,
    left: 50,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  forosTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoFlex,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xl,
    left: 158,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  iconLayout1: {
    height: 50,
    width: 50,
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
  time: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0.1,
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.onPrimaryHighEmphasis,
    zIndex: 0,
    textAlign: "left",
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
  frameMainMenuChild: {
    top: 215,
  },
  iniciarRutina: {
    top: 244,
  },
  frameMainMenuItem: {
    top: 357,
  },
  imgIcon: {
    top: 371,
    left: 65,
    width: 50,
  },
  frameMainMenuInner: {
    top: 499,
  },
  miProgreso: {
    top: 386,
  },
  foros: {
    top: 528,
  },
  icon: {
    top: "33.77%",
    right: "79.85%",
    bottom: "33.77%",
    left: "14.08%",
    width: "6.07%",
    height: "32.47%",
    position: "absolute",
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
  cottageIcon: {
    height: "38.96%",
    width: "7.28%",
    top: "28.57%",
    right: "89.32%",
    bottom: "32.47%",
    left: "3.4%",
    position: "absolute",
  },
  avatars3dAvatar21: {
    height: "51.95%",
    width: "9.71%",
    top: "22.08%",
    right: "10.92%",
    bottom: "25.97%",
    left: "79.37%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  sms: {
    left: "91.26%",
    top: "31.17%",
    right: "2.67%",
    bottom: "36.36%",
  },
  navBarMovil: {
    top: 74,
    width: 412,
    height: 77,
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  dumbellIcon: {
    top: 227,
    borderRadius: 33,
    left: 65,
    width: 50,
  },
  icon2: {
    top: 515,
    left: 62,
  },
  frameMainMenu: {
    flex: 1,
    height: 892,
    width: "100%",
  },
});

export default FrameMainMenu;
