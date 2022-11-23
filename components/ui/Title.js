import { Text, StyleSheet } from 'react-native';

function Title({ children }) {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: 'center',
        padding: 12,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        fontFamily: 'open-sans-bold',
        maxWidth: '80%',
        width: 300
    }
})