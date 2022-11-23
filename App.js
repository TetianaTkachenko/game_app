import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, useCallback } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [isGameOver, setGameIsOver] = useState(true)
  const [fontsIsReady,setFontsIsReady] = useState(false)
  const [guessRounds, setGuessRounds] = useState(0)

  SplashScreen.preventAutoHideAsync()

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
        })
      } finally {
        setFontsIsReady(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [fontsIsReady])

  if (!fontsIsReady) {
    return null
  }

  function pickedNumberHandler(number) {
    setUserNumber(number)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRound) {
    setGameIsOver(true)
    setGuessRounds(numberOfRound)
  }

  function startNewGameHandler() {
    setUserNumber(null)
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(isGameOver && userNumber) {
    screen = <GameOverScreen 
      userNumber={userNumber} 
      onStartNewGame={startNewGameHandler} 
      roundsNumber={guessRounds} />
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient 
        colors={[Colors.primary700, Colors.accent500]} 
        style={styles.rootScreen}
      >
        <ImageBackground 
          source={require('./assets/image/dices.jpg')}
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
          resizeMode='cover'>
            <SafeAreaView 
              style={styles.rootScreen} 
              onLayout={onLayoutRootView}
            >
              {screen}
            </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
