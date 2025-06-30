import { ReactNode } from "react";
import { View } from "react-native";

interface TabBottomBarIconProps {
    focused: boolean;
    children: ReactNode
}

export default function TabBottomBarIcon ({ focused, children }: TabBottomBarIconProps) {
    return <View className={`w-[4.5rem] h-9 flex justify-center items-center ${focused ? 'bg-primary' : ''} rounded-3xl`}>{children}</View>
}