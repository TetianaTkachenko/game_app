import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
    return (
        <View style={styles.textInputContainer}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    textInputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        backgroundColor: Colors.primary800,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6
    }
})