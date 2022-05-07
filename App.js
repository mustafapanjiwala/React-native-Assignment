import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './Screen1';
import {
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic
} from '@expo-google-fonts/montserrat';
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';

export default function App() {
    let [fontsLoaded, error] = useFonts({
        El: Montserrat_200ExtraLight,
        L: Montserrat_300Light,
        Reg: Montserrat_400Regular,
        Med: Montserrat_500Medium,
        Sb: Montserrat_600SemiBold,
        B: Montserrat_700Bold,
        Eb: Montserrat_800ExtraBold,
        Black: Montserrat_900Black
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={styles.container}>
            <Screen1 />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
