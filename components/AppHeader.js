import { Text, View } from 'react-native';

export default function AppHeader() {
  return (
    <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
      <Text style={{ padding: 40, fontSize: 30, color: 'black' }}>
         Welcome to Little Lemon
      </Text>
    </View>
  );
}
