import { useState } from 'react';
import { 
        TextInput,
        View,
        StyleSheet,
        Alert,
        useWindowDimensions,
        KeyboardAvoidingView,
        ScrollView
    } from 'react-native';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButon from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function StartGameScreen ({ onPickNumber }) {
    const [textInputNumber, setTextInputNumber] = useState('')

    const {width, height} = useWindowDimensions()

    function numberInputHandler(textInputValue) {
        setTextInputNumber(textInputValue)
    }

    function confirmInputNumebr() {
        const chosenNumber = parseInt(textInputNumber)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 to 99.',
                [{
                    text: 'Okey',
                    style: 'destructive',
                    onPress: resetInputNumber
                }]
            )
            return
        }
        onPickNumber(chosenNumber)
    }

    function resetInputNumber() {
        setTextInputNumber('')
    }

    const marginTopDistance = height < 380 ? 30 : 100

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>
                        Guess My Number
                    </Title>
                    <Card>
                        <InstructionText>
                            Enter a Number
                        </InstructionText>
                        <TextInput 
                            style={styles.numberInput} 
                            maxLength={2}
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={textInputNumber}
                            onChangeText={numberInputHandler} />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <PrimaryButon onPress={resetInputNumber}>
                                    Reset
                                </PrimaryButon>
                            </View>
                            <View style={styles.button}>
                                <PrimaryButon onPress={confirmInputNumebr}>
                                    Confirm
                                </PrimaryButon>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 34,
        fontFamily: 'open-sans-bold',
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        marginVertical: 8,
       textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        flex: 1
    }
})