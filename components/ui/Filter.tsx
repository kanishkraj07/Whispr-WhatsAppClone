import { Button, Text, TouchableWithoutFeedback, View } from "react-native";
import { HStack } from "./hstack";
import { ReactNode } from "react";

export interface IconProps {
    className?: string;
    color?: string;
    size?: number;
}

export interface FilterProps {
    name: string | null;
    count?: number;
    isSelected?: boolean;
    Icon?: React.ComponentType<IconProps>;
    doFilter: (filterQuery: string | any) => void;
}

export default function Filter({  name, count, doFilter, isSelected, Icon }: FilterProps) {
    return (
        <TouchableWithoutFeedback onPress={doFilter}>
            <HStack className={`px-4 rounded-full py-1 justify-center items-center gap-1 ${isSelected ? 'bg-primary' : 'bg-secondaryBg border border-text-border'}`}>
                { Icon && <Icon size={18} color="#b3b3b3" className={`text-base capitalize font-medium spaceMono-medium ${isSelected ? 'text-text-primary' : 'text-text-secondary'}`}  /> }
            { name && <Text className={`text-base capitalize font-medium spaceMono-medium ${isSelected ? 'text-text-primary' : 'text-text-secondary'}`}>{ name ?? '' }</Text> }
                { count && <Text className={`text-base font-medium capitalize spaceMono-medium ${isSelected ? 'text-text-primary' : 'text-text-secondary'}`}>{count}</Text> }
            </HStack>
        </TouchableWithoutFeedback>
    )
}