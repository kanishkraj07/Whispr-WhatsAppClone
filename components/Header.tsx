import { ParamListBase, RouteProp } from "@react-navigation/native"
import { ReactNode, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { HStack } from "./ui/hstack";

export interface HeaderMenuItem {
    icon: ReactNode;
    onClick: () => void;
}

interface HeaderProps {
    title: string;
    menuItems: HeaderMenuItem[];
}

export default function Header({title, menuItems}: HeaderProps) {
    return (
        <HStack className="w-full bg-background justify-between items-center px-5">
                    <View className="self-start"><Text className="text-text-primary text-2xl font-medium font-spaceMono-medium">{title}</Text></View>
                    <HStack className="justify-center items-center gap-5">
                        { menuItems && menuItems.length && (
                            menuItems.map((item, index) => (
                                <TouchableOpacity key={index} onPress={item.onClick}>
                                    {item.icon}
                                </TouchableOpacity>
                            ))
                        ) }
                    </HStack>
                </HStack>
    );
}