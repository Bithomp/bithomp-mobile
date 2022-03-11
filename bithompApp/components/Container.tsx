import { View } from './Themed';
import Header from './Header';
import { StyleSheet } from 'react-native';

export default function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <View>
      <Header />
      <View style={styles.bodyAndFooter}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyAndFooter: {
    position: 'absolute',
    top: 80,
  },
});