import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const VistaForo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vistaForo}>
      <View style={styles.layoutFormRegistro}>
        <View style={styles.statusBar}>
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
      <View style={[styles.frame, styles.frameFlexBox1]}>
        <Text style={[styles.trabajadores, styles.textTypo]}>Trabajadores</Text>
      </View>
      <View style={[styles.vistaForoChild, styles.navBarMovilPosition]} />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Image
          style={styles.dAvatars15}
          resizeMode="cover"
          source={require("../assets/3d-avatars--27.png")}
        />
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Image
          style={styles.dAvatars15}
          resizeMode="cover"
          source={require("../assets/avatars--3d-avatar-10.png")}
        />
      </View>
      <View style={[styles.frame3, styles.frameFlexBox1]}>
        <Image
          style={styles.dAvatars15}
          resizeMode="cover"
          source={require("../assets/3d-avatars--23.png")}
        />
      </View>
      <View style={[styles.frame4, styles.frameFlexBox1]}>
        <Text style={[styles.juanPerez, styles.textTypo]}>Juan Perez</Text>
      </View>
      <View style={[styles.frame5, styles.frameFlexBox1]}>
        <Text style={[styles.juanPerez, styles.textTypo]}>Camila Osorio</Text>
      </View>
      <View style={[styles.frame6, styles.frameFlexBox1]}>
        <Text style={[styles.am, styles.amTypo]}>9:50AM</Text>
      </View>
      <View style={[styles.frame7, styles.frameFlexBox1]}>
        <Text style={[styles.text, styles.textTypo]}>{`22/02/2024 `}</Text>
      </View>
      <View style={[styles.frame8, styles.frameFlexBox1]}>
        <Text style={[styles.am, styles.amTypo]}> 3:00 PM</Text>
      </View>
      <View style={[styles.frame9, styles.frameFlexBox1]}>
        <Text style={[styles.am, styles.amTypo]}> 3:15 PM</Text>
      </View>
      <View style={[styles.frame10, styles.frameFlexBox1]}>
        <Text style={[styles.juanPerez, styles.textTypo]}>
          Alguno me explica un ejercicio?
        </Text>
      </View>
      <View style={[styles.frame11, styles.frameFlexBox1]}>
        <Text style={[styles.juanPerez, styles.textTypo]}>
          Alguien va a smart fit?
        </Text>
      </View>
      <View style={[styles.frame12, styles.frameFlexBox1]}>
        <Text style={[styles.juanPerez, styles.textTypo]}>
          Alguien va a bodytech?
        </Text>
      </View>
      <View style={[styles.frame13, styles.frameFlexBox1]}>
        <Text style={[styles.juanPerez, styles.textTypo]}>
          Ricardo Martninez
        </Text>
      </View>
      <View style={[styles.frame14, styles.frameFlexBox1]}>
        <View style={styles.frameChild} />
      </View>
      <Image
        style={[styles.frameIcon, styles.frameLayout]}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <View style={[styles.frame15, styles.frameFlexBox1]}>
        <Text style={[styles.escribirMensaje, styles.amTypo]}>
          Escribir mensaje
        </Text>
      </View>
      <View style={[styles.navBarMovil, styles.navBarMovilPosition]}>
        <View style={[styles.frame16, styles.frameLayout]}>
          <Pressable
            style={styles.cottage}
            onPress={() => navigation.navigate("FrameMainMenu")}
          >
            <Image
              style={[styles.icon, styles.avatars3dLayout]}
              resizeMode="cover"
              source={require("../assets/cottage.png")}
            />
          </Pressable>
          <Pressable
            style={styles.icon1}
            onPress={() => navigation.navigate("FrameAjustes")}
          >
            <Image
              style={[styles.icon, styles.avatars3dLayout]}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </Pressable>
          <Text style={styles.fitalarm}>Fitalarm</Text>
          <Image
            style={[styles.avatars3dAvatar21, styles.avatars3dLayout]}
            resizeMode="cover"
            source={require("../assets/avatars--3d-avatar-21.png")}
          />
        </View>
        <Pressable
          style={styles.sms}
          onPress={() => navigation.navigate("MensajesDirectos")}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/sms1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.frame17, styles.frameFlexBox1]}>
        <View style={styles.dAvatars15}>
          <Image
            style={[styles.avatars3dAvatar101, styles.avatars3dLayout]}
            resizeMode="cover"
            source={require("../assets/avatars--3d-avatar-102.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationLayout: {
    height: 24,
    position: "absolute",
  },
  frameFlexBox1: {
    justifyContent: "center",
    alignItems: "flex-end",
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    lineHeight: 20,
  },
  navBarMovilPosition: {
    width: 412,
    left: 0,
    position: "absolute",
  },
  frameFlexBox: {
    width: 51,
    justifyContent: "center",
    alignItems: "flex-end",
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  amTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoFlexRegular,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  frameLayout: {
    height: 60,
    overflow: "hidden",
  },
  avatars3dLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  time: {
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelLarge,
    zIndex: 0,
    textAlign: "left",
    lineHeight: 20,
    color: Color.onPrimaryHighEmphasis,
    letterSpacing: 0.1,
    fontSize: FontSize.m3LabelLarge_size,
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
    height: 52,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "flex-end",
    flexDirection: "row",
    left: 0,
    right: 16,
    top: 0,
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
    height: 24,
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
  trabajadores: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.2,
    color: Color.onPrimaryHighEmphasis,
  },
  frame: {
    top: 160,
    width: 286,
  },
  vistaForoChild: {
    top: 200,
    backgroundColor: Color.colorGainsboro_100,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 687,
    borderStyle: "solid",
  },
  dAvatars15: {
    width: 40,
    height: 40,
  },
  frame1: {
    top: 361,
  },
  frame2: {
    top: 254,
  },
  frame3: {
    top: 468,
    width: 49,
  },
  juanPerez: {
    color: Color.colorBlack,
    letterSpacing: 0.1,
    fontFamily: FontFamily.robotoFlexRegular,
    fontSize: FontSize.m3LabelLarge_size,
  },
  frame4: {
    top: 251,
    width: 133,
  },
  frame5: {
    width: 153,
    top: 361,
  },
  am: {
    color: Color.colorBlack,
  },
  frame6: {
    top: 261,
    width: 323,
  },
  text: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    letterSpacing: 0.1,
    fontFamily: FontFamily.robotoFlexRegular,
  },
  frame7: {
    top: 208,
    width: 239,
  },
  frame8: {
    top: 376,
    width: 332,
  },
  frame9: {
    top: 472,
    width: 333,
  },
  frame10: {
    top: 272,
    width: 263,
  },
  frame11: {
    top: 381,
    width: 203,
  },
  frame12: {
    top: 490,
    width: 209,
  },
  frame13: {
    top: 470,
    width: 179,
  },
  frameChild: {
    backgroundColor: Color.colorGray_200,
    width: 337,
    height: 37,
  },
  frame14: {
    top: 841,
    width: 344,
  },
  frameIcon: {
    top: 849,
    width: 369,
    left: 0,
    position: "absolute",
  },
  escribirMensaje: {
    color: Color.onPrimaryHighEmphasis,
  },
  frame15: {
    top: 850,
    width: 96,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cottage: {
    left: "0%",
    top: "21.67%",
    right: "91.48%",
    bottom: "28.33%",
    width: "8.52%",
    height: "50%",
    position: "absolute",
  },
  icon1: {
    left: "10.51%",
    top: "26.67%",
    right: "82.39%",
    bottom: "31.67%",
    width: "7.1%",
    height: "41.67%",
    position: "absolute",
  },
  fitalarm: {
    left: 145,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0.3,
    lineHeight: 60,
    fontFamily: FontFamily.m3BodyLarge,
    textAlign: "center",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  avatars3dAvatar21: {
    height: "66.67%",
    width: "11.36%",
    top: "16.67%",
    right: "0%",
    bottom: "16.67%",
    left: "88.64%",
    position: "absolute",
  },
  frame16: {
    width: 352,
  },
  icon3: {
    overflow: "hidden",
  },
  sms: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  navBarMovil: {
    top: 55,
    backgroundColor: Color.colorWhitesmoke,
    height: 77,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_2xs,
    paddingTop: 9,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    width: 412,
    overflow: "hidden",
  },
  avatars3dAvatar101: {
    height: "41.75%",
    width: "41.75%",
    top: "29.25%",
    right: "-41.75%",
    bottom: "29%",
    left: "100%",
    display: "none",
    position: "absolute",
  },
  frame17: {
    top: 244,
    width: 44,
  },
  vistaForo: {
    flex: 1,
    height: 892,
    width: "100%",
  },
});

export default VistaForo;
