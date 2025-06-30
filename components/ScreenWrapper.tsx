import { PropsWithChildren, ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"

interface ScreenWraperProps {
    bgColor?: string;
    children: ReactNode;
}

export const ScreenWraper = ({children, bgColor}: ScreenWraperProps) => {
    return (
        <SafeAreaView className={`flex-1`} style={{
            backgroundColor: bgColor ? bgColor : '#121212'
        }}>
            {children}
        </SafeAreaView>
    );
}