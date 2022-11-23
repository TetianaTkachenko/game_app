import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButon ({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContaiber}>
            <Pressable 
                style={({ pressed }) => 
                    pressed 
                        ? [styles.pressed, styles.buttonInnerContainer] 
                        : styles.buttonInnerContainer}
                android_ripple={{ color: Colors.primary600 }}
                onPress={onPress}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButon;

const styles = StyleSheet.create({
    buttonOuterContaiber: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: Colors.primary600,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'open-sans'
    },
    pressed: {
        opacity: 0.25
    }
})