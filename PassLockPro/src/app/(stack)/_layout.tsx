import { Stack } from "expo-router";
import colors from "../styles/colors";

export default function StackLayout(){
    return(
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name="index"
            />
        </Stack>
    )
}