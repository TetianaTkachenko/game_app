import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>
                {children}
            </Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    numberContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderColor: Colors.accent500,
        borderWidth: 4,
        borderRadius: 8
    },
    number: {
        fontFamily: 'open-sans-bold',
        fontSize: 36,
        color: Colors.accent500
    }
})