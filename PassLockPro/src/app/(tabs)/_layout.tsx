import { Tabs } from "expo-router";

export default function TabsRouteLayout() {
    return(
        <Tabs>
            <Tabs.Screen 
                name="home"
                options={{
                    title: "Home"
                }}
            />
            <Tabs.Screen
                name="createPassword"
                options={{
                    title: "Create Password"
                }}
            />
        </Tabs>
    )
}