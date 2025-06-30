import { CommunityType, Group } from "@/models/community";
import { HStack } from "./ui/hstack";
import { Image } from "./ui/image";
import { VStack } from "./ui/vstack";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fab, FabIcon } from "./ui/fab";
import { AddIcon } from "./ui/icon";

export interface CommunityProps {
    communityId: number;
    name: string;
    type: CommunityType;
    icon?: string;
    allGroups: Group[]
}


export default function  Community({ communityId, name, type, icon, allGroups }: CommunityProps) {
    return (
        <HStack key={communityId} className={`w-full bg-transparent justify-start items-center gap-3`}> 
            { icon ? <Image source={icon} alt="profile-picture" size="sm" className="rounded-2xl" /> : 
            <View className="rounded-2xl size-14 bg-gray-700 flex-row justify-center items-center">
                <FontAwesome5 name="users" size={22} color={"#FFFFFF"} />
                { type === CommunityType.NEW && <Fab className="bg-primary absolute size-6 top-8 left-8 right-0 border border-background"  isHovered={false} isPressed={false}>
                        <FabIcon as={AddIcon} size="sm" color="#121212" />
                    </Fab> }
            </View> }
                <Text className="text-text-primary text-lg font-semibold font-spaceMono-semi-bold capitalize">{name?.trim() || ''}</Text>
        </HStack>
    )
}