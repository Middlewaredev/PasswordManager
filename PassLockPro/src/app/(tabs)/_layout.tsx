import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import colors from "../styles/colors";

export default function TabsRouteLayout() {
    return(
        <Tabs
            screenOptions={{
                tabBarActiveBackgroundColor: colors.gray,
                tabBarInactiveBackgroundColor: colors.gray,
                headerLeft: () => (
                    <MaterialIcons
                        name="menu"
                        size={45}
                        color={colors.white}
                        style={{marginHorizontal: 20}}
                    />
                ),
                headerRight: () => (
                    <MaterialIcons
                        name="filter-alt"
                        size={45}
                        color={colors.white}
                        style={{marginHorizontal: 20}}
                    />
                ),
                headerStyle: {
                    backgroundColor: colors.black,
                    borderBottomWidth: 2
                }
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    tabBarIcon: ({size, color}) => <MaterialIcons
                        name="home"
                        size={size}
                        color={color}
                    />,
                    title: '',
                    
                    
                }}
            />
            <Tabs.Screen
                name="createPassword"
                options={{
                    title: '',
                    tabBarIcon: ({size, color}) => <MaterialIcons 
                        name="add"
                        size={size}
                        color={color}
                    />
                }}
            />
        </Tabs>
    )
}