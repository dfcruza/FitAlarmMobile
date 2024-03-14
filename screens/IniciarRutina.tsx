import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const IniciarRutina = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iniciarRutina}>
      <View style={[styles.layoutFormRegistro, styles.filterChipPosition]} />
      <View style={styles.statusBar}>
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
      <Text style={[styles.seleccioneElGrupo, styles.seleccioneElGrupoTypo]}>
        Seleccione el grupo muscular
      </Text>
      <Text
        style={[styles.seleccionaLaDificutlad, styles.seleccioneElGrupoTypo]}
      >
        Selecciona la dificutlad
      </Text>
      <View style={[styles.filterChip, styles.filterChipFlexBox]}>
        <View style={[styles.stateLayer, styles.filterChipFlexBox]}>
          <Text style={styles.labelText}>Seleccionar</Text>
          <Image
            style={styles.trailingIcon}
            resizeMode="cover"
            source={require("../assets/trailing-icon.png")}
          />
        </View>
      </View>
      <View style={[styles.navBarMovil, styles.filterChipPosition]}>
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
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
          style={[styles.avatars3dAvatar21, styles.iconLayout1]}
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
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("SeleccionarRutina")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-49.png")}
        />
      </Pressable>
      <Image
        style={[styles.iniciarRutinaChild, styles.wrapperLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-50.png")}
      />
      <Image
        style={[styles.iniciarRutinaItem, styles.iniciarPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <Image
        style={[styles.iniciarRutinaInner, styles.iniciarPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-52.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.wrapperLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-53.png")}
      />
      <Text style={[styles.pecho, styles.pechoTypo]}>Pecho</Text>
      <Text style={[styles.hombro, styles.timeTypo]}>Hombro</Text>
      <Text style={[styles.brazo, styles.brazoTypo]}>Brazo</Text>
      <Text style={[styles.pierna, styles.brazoTypo]}>Pierna</Text>
      <Text style={[styles.espalda, styles.pechoTypo]}>Espalda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  filterChipPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    letterSpacing: 0.1,
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.onPrimaryHighEmphasis,
    lineHeight: 20,
  },
  navigationLayout: {
    height: 24,
    position: "absolute",
  },
  seleccioneElGrupoTypo: {
    letterSpacing: 0.2,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  filterChipFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  smsLayout: {
    width: "6.07%",
    height: "32.47%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 94,
    width: 126,
    position: "absolute",
  },
  iniciarPosition: {
    top: 410,
    height: 94,
    width: 126,
    position: "absolute",
  },
  pechoTypo: {
    top: 373,
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  brazoTypo: {
    top: 521,
    textAlign: "left",
    color: Color.onPrimaryHighEmphasis,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.m3LabelLarge_size,
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
    borderStyle: "solid",
    overflow: "hidden",
  },
  time: {
    zIndex: 0,
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
    right: 0,
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
    bottom: 0,
    left: 0,
    right: 0,
    height: 24,
  },
  seleccioneElGrupo: {
    top: 215,
    left: 85,
  },
  seleccionaLaDificutlad: {
    top: 717,
    left: 111,
  },
  labelText: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.onPrimaryHighEmphasis,
    lineHeight: 20,
  },
  trailingIcon: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
  stateLayer: {
    height: 32,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_7xs,
  },
  filterChip: {
    top: 757,
    left: 141,
    borderRadius: Border.br_5xs,
    borderColor: Color.onPrimaryHighEmphasis,
    borderWidth: 1,
    overflow: "hidden",
    position: "absolute",
    borderStyle: "solid",
  },
  icon: {
    top: "32.47%",
    right: "81.8%",
    bottom: "35.06%",
    left: "12.14%",
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
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    right: "10.19%",
    bottom: "25.97%",
    left: "80.1%",
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
  wrapper: {
    top: 262,
    width: 126,
    left: 226,
  },
  iniciarRutinaChild: {
    left: 39,
    top: 262,
    width: 126,
  },
  iniciarRutinaItem: {
    left: 39,
  },
  iniciarRutinaInner: {
    left: 226,
  },
  rectangleIcon: {
    top: 558,
    left: 39,
  },
  pecho: {
    left: 79,
  },
  hombro: {
    top: 669,
    left: 76,
    position: "absolute",
  },
  brazo: {
    left: 271,
  },
  pierna: {
    left: 81,
  },
  espalda: {
    left: 264,
  },
  iniciarRutina: {
    flex: 1,
    height: 892,
    width: "100%",
  },
});

export default IniciarRutina;
