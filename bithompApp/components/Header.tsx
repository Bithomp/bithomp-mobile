import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import Logo from '../assets/images/logo.svg';

import { View } from './Themed';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={logoPress} style={styles.logo}>
        <Logo width={120} height={46} />
      </TouchableOpacity>
    </View>
  );
}

function logoPress() {
  WebBrowser.openBrowserAsync(
    '/'
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#002C37",
    height: 80,
  },
  logo: {
    position: "absolute",
    top: 17,
    left: 20,
  },
});
