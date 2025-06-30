import { Text, View } from "react-native";
import { HStack } from "./ui/hstack";
import { Image } from "./ui/image";
import { VStack } from "./ui/vstack";
import { Group } from "@/models/community";
import { convertDeliveryTime } from "@/utils";

export default function GroupOuterLayer({ name, Icon, iconUrl, recentMessageDetails, unSeenMessagesCount, className} : Group) {
   return <HStack className={`bg-transparent justify-between items-center flex-1 ${className}`}>
        <HStack className="gap-3 items-center flex-1">
            { iconUrl ? <Image source={iconUrl} alt="profile-picture" size="sm" className="rounded-full" /> : Icon && <View className="rounded-full size-14 bg-gray-700 flex-row justify-center items-center"><Icon className="rounded-full" size={20} color="#4A90E2" /></View> }
            <VStack className="justify-between flex-1">
                <Text className="text-text-primary text-lg  font-medium font-spaceMono-medium">{name?.trim() || ''}</Text>
                <HStack className="gap-1 justify-start items-center">
                {
                    recentMessageDetails?.message && <Text className="w-full text-text-secondary text-base font-spaceMono truncate line-clamp-1">{recentMessageDetails?.message ?? ''}</Text>

                }
                </HStack>
            </VStack>
            </HStack>
            <VStack className="justify-center gap-3 items-end">
            { recentMessageDetails?.deliverTime && <Text className="text-text-secondary text-sm font-spaceMono">{convertDeliveryTime(recentMessageDetails?.deliverTime)}</Text> }
            { unSeenMessagesCount && 
                    (<View className="size-6 justify-self-end rounded-full bg-primary flex-row justify-center items-center shadow-primary shadow-sm">
                        <Text className="text-text-primary text-sm font-medium font-spaceMono-medium">{unSeenMessagesCount}</Text>
                    </View>) }

            </VStack>
        </HStack>
}