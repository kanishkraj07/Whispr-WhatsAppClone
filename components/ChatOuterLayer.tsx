import { Image } from "./ui/image";
import { VStack } from "./ui/vstack";
import { HStack } from "./ui/hstack";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { convertDeliveryTime } from "@/utils";

export enum SentBy {
    FRIEND = 'FRIEND',
    ME = 'ME'
}

export interface RecentMessageDetails {
    message: string;
    deliverTime: Date | string;
    sentBy?: SentBy;
    isSeen?: boolean;
}

interface UnseenMessageDetails {
    count: number;
}

export interface ChatOuterLayerProps {
    friendId?: number;
    className?: string;
    profileDp?: string;
    friendName: string;
    recentMessageDetails: RecentMessageDetails;
    unseenMessagesDetails: UnseenMessageDetails;
    onPress?: () => void;
}

export default function ChatOuterLayer({ className, profileDp, friendName, recentMessageDetails, unseenMessagesDetails, onPress } : ChatOuterLayerProps) {
    return (
        <HStack className={`w-full bg-transparent justify-between items-center gap-3 ${className}`}>
    <TouchableWithoutFeedback onPress={onPress}>
        <HStack className="flex-1 gap-5 items-center">
            <Image source={profileDp} alt="profile-picture" size="sm" className="rounded-full" />
            <VStack className="justify-between flex-1">
                <Text className="text-text-primary text-lg  font-medium font-spaceMono-medium capitalize">{friendName?.trim() || ''}</Text>
                <HStack className="flex-1 gap-1 justify-start items-center">
                {
                    recentMessageDetails?.message && (
                        recentMessageDetails.sentBy === SentBy.ME 
                    && <Ionicons name="checkmark-done-outline" size={16} color={ recentMessageDetails?.isSeen ? '#4A90E2' : '#b3b3b3' }  />)
                }
                {
                    recentMessageDetails?.message && <Text className="w-full text-text-secondary text-base font-spaceMono line-clamp-1 truncate">{recentMessageDetails?.message ?? ''}</Text>

                }
                </HStack>
            </VStack>
           
        </HStack>
        </TouchableWithoutFeedback>
        <VStack className="justify-center gap-3 items-end self-start mt-1">
            { recentMessageDetails?.deliverTime && <Text className={`text-sm font-spaceMono ${unseenMessagesDetails?.count ? 'text-primary' : 'text-text-secondary'}`}>{convertDeliveryTime(new Date(recentMessageDetails?.deliverTime))}</Text> }
            { unseenMessagesDetails?.count && 
                    (<View className="size-6 justify-self-end rounded-full bg-primary flex-row justify-center items-center shadow-primary shadow-sm">
                        <Text className="text-text-primary text-sm font-medium font-spaceMono-medium">{unseenMessagesDetails?.count}</Text>
                    </View>) }

            </VStack>
           
        </HStack>
    )
}