import { Text, View } from "react-native";
import { HStack } from "./ui/hstack";
import { Image } from "./ui/image";
import { VStack } from "./ui/vstack";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { formatDateTime } from "@/utils";

export interface CallHistoryProps {
    friendName: string;
    friendProfileDp?: string;
    isIncomingCall: boolean;
    isMissedCall?: boolean;
    callTime: Date;
    isVideoCall?: boolean;
    todayCallHistoryCount?: number
}

export default function CallHistory({ friendName, friendProfileDp, isIncomingCall, isMissedCall, callTime, isVideoCall, todayCallHistoryCount }: CallHistoryProps) {
    return (
        <HStack className={`w-full bg-transparent justify-between items-center`}>
        <HStack className="gap-3 items-center">
            <Image source={friendProfileDp} alt="profile-picture" size="sm" className="rounded-full" />
            <VStack className="justify-between">
                <Text className={`text-lg  font-medium font-spaceMono-medium capitalize ${isMissedCall ? 'text-text-error' : 'text-text-primary '}`}>{`${friendName?.trim() || ''} ${todayCallHistoryCount ? `(${todayCallHistoryCount})` : ''}`}</Text>
                <HStack className="gap-1 justify-start items-center">
                {
                    isMissedCall && isIncomingCall && (<Feather name="arrow-down-left" size={20} color="#EF4444" />)
                }
                
                {
                    isIncomingCall && !isMissedCall && (<Feather name="arrow-down-left" size={20} color="#4A90E2" />)
                }

                {
                    !isIncomingCall && ( <Feather name="arrow-up-right" size={20} color="#4A90E2" />)
                }

                {
                    callTime && <Text className="text-text-secondary text-base font-spaceMono">{formatDateTime(callTime) ?? ''}</Text>
                }
                </HStack>
            </VStack>
            </HStack>
            { isVideoCall ? <MaterialCommunityIcons name="video-outline" size={24} color="#FFFFFF" /> : <MaterialCommunityIcons name="phone-outline" size={24} color="#FFFFFF" /> }
        </HStack>
    )
}