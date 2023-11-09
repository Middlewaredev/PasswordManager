import { View, Text } from "react-native";
import { layoutStyles } from "../styles/layoutStyles";
import Modal from "react-native-modal";

export default function Home({isModalVisible}) {

    const shows = () => {alert("test")}
    return (
        <View style={layoutStyles.container}>
            <Modal isVisible={false}>
                <Text>Test</Text>
            </Modal>
        </View>
    );
}