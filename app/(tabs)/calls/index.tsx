import CallHistory from "@/components/CallHistory";
import { VStack } from "@/components/ui/vstack";
import { CallerType, CallHistory as CallHist } from "@/models/chat";
import { SectionList, Text, View } from "react-native";
import { useSelector } from "react-redux";


export default function Calls() {

    let callHistoryDetails: CallHist[] = useSelector((state: any) => state?.callsList.map((call: any) => {
    const { name, profileDP } = state?.friendsList.filter((friend: any) => friend.friendId === call?.friendId)[0]
    return {
        friendName: name,
        friendProfileDp: profileDP,
        callerType: call?.callerType,
        isIncomingCall: call?.isIncomingCall,
        isMissedCall: call?.isMissedCall,
        callTime: call?.callTime,
        isVideoCall: call?.isVideoCall,
        todayCallHistoryCount: call?.todayCallHistoryCount
    }
}))

const favouriteCallerHistory = callHistoryDetails.filter(ch => ch.callerType === CallerType.FAVOURITES);
const recentCallerHistory = callHistoryDetails.filter(ch => ch.callerType === CallerType.RECENT);

    return (
        <VStack className="flex-1 bg-background px-3 justify-start items-start pt-2">
            <SectionList alwaysBounceVertical={false} bounces={false}
            sections={[{ title: CallerType.FAVOURITES, data: favouriteCallerHistory }, { title: CallerType.RECENT, data: recentCallerHistory }]}
            renderItem={(({ item }) => <CallHistory {...item} />)}
            keyExtractor={(item, index) => index.toString()}
            stickyHeaderHiddenOnScroll={true}
            ItemSeparatorComponent={(() => <View className="h-6" />)}
            SectionSeparatorComponent={(() => <View className="mt-2" />)}
            renderSectionHeader={(({ section }) => <Text className="text-xl text-text-primary my-5 font-medium font-spaceMono-medium capitalize truncate">{section?.title || ''}</Text>)}
            />
         </VStack>
    );
}