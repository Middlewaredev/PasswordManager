import { View } from 'react-native';
import HeaderHighlight from '../components/headerHighlight';
import { layoutStyles } from '../styles/layoutStyles';

export default function App() {
  return (
    <View style={layoutStyles.container}>
      <HeaderHighlight />
    </View>
  );
}


