import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const VistaDm = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vistaDm}>
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
      <Text style={[styles.foros, styles.forosTypo]}>FOROS</Text>
      <Text style={styles.juanPerez}>Juan Perez</Text>
      <Text style={[styles.movilidad, styles.forosTypo]}>MOVILIDAD</Text>
      <View style={[styles.vistaDmChild, styles.vistaLayout]} />
      <View style={[styles.vistaDmChild, styles.vistaLayout]} />
      <View style={[styles.vistaDmInner, styles.vistaLayout]} />
      <View style={styles.rectangleView} />
      <Text style={[styles.am, styles.holaTypo]}> 9:50AM</Text>
      <Text style={[styles.pm, styles.holaTypo]}>{`3 :00 PM `}</Text>
      <Text style={[styles.text, styles.holaTypo]}>{`22/02/2024 `}</Text>
      <Text style={[styles.holaProfeNo, styles.holaClr]}>
        Hola profe, no entiendo un ejercicio
      </Text>
      <Text
        style={[styles.holaCuentame, styles.holaClr]}
      >{`Hola cuentame `}</Text>
      <Image
        style={styles.polygonIcon}
        resizeMode="cover"
        source={require("../assets/polygon-5.png")}
      />
      <Image
        style={styles.vistaDmChild1}
        resizeMode="cover"
        source={require("../assets/polygon-4.png")}
      />
      <Text style={[styles.escribirMensaje, styles.holaTypo]}>
        Escribir mensaje
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.navBarMovilPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <View style={[styles.navBarMovil, styles.navBarMovilPosition]}>
        <Pressable
          style={[styles.icon, styles.smsPosition]}
          onPress={() => navigation.navigate("FrameAjustes")}
        >
          <Image
            style={[styles.icon1, styles.avatars3dLayout]}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Text style={[styles.fitalarm, styles.holaClr]}>Fitalarm</Text>
        <Pressable
          style={styles.cottage}
          onPress={() => navigation.navigate("FrameMainMenu")}
        >
          <Image
            style={[styles.icon1, styles.avatars3dLayout]}
            resizeMode="cover"
            source={require("../assets/cottage.png")}
          />
        </Pressable>
        <Image
          style={[styles.avatars3dAvatar21, styles.avatars3dLayout]}
          resizeMode="cover"
          source={require("../assets/avatars--3d-avatar-21.png")}
        />
        <Pressable
          style={[styles.sms, styles.smsPosition]}
          onPress={() => navigation.navigate("MensajesDirectos")}
        >
          <Image
            style={[styles.icon1, styles.avatars3dLayout]}
            resizeMode="cover"
            source={require("../assets/sms.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.avatars3dAvatar10, styles.avatars3dLayout]}
        resizeMode="cover"
        source={require("../assets/avatars--3d-avatar-101.png")}
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
  forosTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xl,
    top: 520,
    fontFamily: FontFamily.robotoFlexRegular,
    letterSpacing: 0.2,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  vistaLayout: {
    height: 53,
    width: 193,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  holaTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  holaClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  navBarMovilPosition: {
    width: 412,
    left: 0,
    position: "absolute",
  },
  smsPosition: {
    height: "32.47%",
    width: "6.07%",
    bottom: "36.36%",
    top: "31.17%",
    position: "absolute",
  },
  avatars3dLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  time: {
    fontSize: FontSize.m3LabelLarge_size,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelLarge,
    zIndex: 0,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0.1,
    color: Color.onPrimaryHighEmphasis,
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
    borderColor: Color.colorGray_300,
    borderWidth: 8,
    width: 428,
    height: 908,
    overflow: "hidden",
    borderStyle: "solid",
    position: "absolute",
  },
  foros: {
    left: 149,
  },
  juanPerez: {
    top: 181,
    left: 99,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoFlexRegular,
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    lineHeight: 20,
    position: "absolute",
  },
  movilidad: {
    left: 65,
  },
  vistaDmChild: {
    top: 269,
    left: 12,
  },
  vistaDmInner: {
    top: 373,
    left: 185,
  },
  rectangleView: {
    top: 827,
    backgroundColor: Color.colorGray_200,
    width: 320,
    height: 43,
    left: 23,
    position: "absolute",
  },
  am: {
    top: 286,
    left: 213,
    color: Color.onPrimaryHighEmphasis,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  pm: {
    top: 390,
    left: 124,
    color: Color.onPrimaryHighEmphasis,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text: {
    left: 168,
    top: 229,
    color: Color.onPrimaryHighEmphasis,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  holaProfeNo: {
    top: 289,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0.1,
    left: 23,
  },
  holaCuentame: {
    top: 387,
    left: 195,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  polygonIcon: {
    top: 671,
    left: 415,
    width: 32,
    height: 23,
    position: "absolute",
  },
  vistaDmChild1: {
    top: 831,
    left: 343,
    width: 52,
    height: 39,
    position: "absolute",
  },
  escribirMensaje: {
    top: 836,
    left: 37,
    color: Color.onPrimaryHighEmphasis,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rectangleIcon: {
    height: 561,
    top: 229,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  icon: {
    left: "13.83%",
    right: "80.1%",
  },
  fitalarm: {
    top: 9,
    left: 159,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.3,
    lineHeight: 60,
    fontFamily: FontFamily.m3BodyLarge,
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
  avatars3dAvatar21: {
    height: "51.95%",
    width: "9.71%",
    top: "22.08%",
    right: "11.17%",
    bottom: "25.97%",
    left: "79.13%",
    position: "absolute",
  },
  sms: {
    left: "91.26%",
    right: "2.67%",
  },
  navBarMovil: {
    top: 70,
    backgroundColor: Color.colorWhitesmoke,
    height: 77,
    overflow: "hidden",
  },
  avatars3dAvatar10: {
    height: "5.61%",
    width: "12.14%",
    top: "18.61%",
    right: "80.83%",
    bottom: "75.78%",
    left: "7.04%",
    position: "absolute",
  },
  vistaDm: {
    flex: 1,
    height: 892,
    width: "100%",
  },
});

export default VistaDm;
