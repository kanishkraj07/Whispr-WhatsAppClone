import ChatOuterLayer, { ChatOuterLayerProps, RecentMessageDetails, SentBy } from "@/components/ChatOuterLayer";
import NewChannel from "@/components/NewChannel";
import Status, { StatusProps } from "@/components/Status";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { NewChannelDetails } from "@/models/Channel";
import { PersonType } from "@/models/chat";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";


export default function Updates() {

    const { fullName, profileDpUrl } = useSelector((state: any) => state?.userProfileDetails);
    const statusData = useSelector((state: any) => state?.statusList?.map((statusDetails: any) => {
        const friendDetails = state?.friendsList?.filter((friend: any) => friend.friendId === statusDetails.friendId)[0] || {};
        return {
            name: friendDetails?.name || '',
            profileDp: friendDetails?.profileDP || '',
            recentStatusPic: statusDetails?.statusImgUrl || '',
            personType: PersonType.FRIEND
        }
    }));

    const JoinedchannelsData = useSelector((state: any) => state?.channelsList?.filter((ch: any) => ch?.isMember).map((channel: any) => {
        return {
            friendName: channel?.name || '',
            profileDp: channel?.icon || '',
            recentMessageDetails: channel?.recentMessageDetails || {},
            unseenMessagesDetails: channel?.unseenMessagesDetails || {},
        }
    }))

    const newchannelsData = useSelector((state: any) => state?.channelsList?.filter((ch: any) => !ch?.isMember).map((channel: any) => {
        return {
            name: channel?.name || '',
            profileDp: channel?.icon || '',
            followersCount: channel?.followersCount || 0
        }
    }))

    const updatesSectionList: Array<{ title: string;  data: StatusProps[] | ChatOuterLayerProps[]}> = [
         { title: 'Status', data: [
             { name: fullName, profileDp: profileDpUrl, recentStatusPic: 'https://i.scdn.co/image/ab6761610000e5eb7ac3385e1033229ea480dc9d', personType: PersonType.ME },
             ...statusData
              ]},

              { title: 'Channels', data: [
               ...JoinedchannelsData
              ]}
             
    ];


    const channelsToFollowList: NewChannelDetails[] = [
      ...newchannelsData
    ];
         
    return (
        <VStack className='flex-1 bg-background px-3 justify-start items-start pt-5'>
           <ScrollView className="flex-1 bg-background px-3 pt-5" bounces={false}>
        {updatesSectionList.map((section, index) => (
            <View key={index} className="mb-8">
                <HStack className="justify-between items-start mb-5">
                <Text className="text-xl text-text-primary font-medium font-spaceMono-medium capitalize truncate">
                {section.title}</Text>
                { index ===1 && <Button size="sm" className="bg-gray-700 text-center rounded-full" >
                <ButtonText className="text-base font-medium spaceMono-medium text-center text-text-primary">Explore</ButtonText>
            </Button> }
                </HStack>
           

            {section.title.toLowerCase() === 'status' && <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
                <HStack className="w-full justify-start items-center gap-3">
                    { section.data && (section.data as StatusProps[]).map((item, index) => <Status key={index} {...item} />) }
                </HStack>
            </ScrollView> }
            
            
            {section.title.toLowerCase() === 'channels' && 
                <VStack className="justify-start items-center gap-5">
                    { section.data && (section.data as ChatOuterLayerProps[]).map((item, index) => <ChatOuterLayer key={index} {...item} />) }
                </VStack>
            }

            </View>
        ))}
        <VStack className="gap-5">
            <Text className="font-medium text-md text-text-secondary font-spaceMono-medium">Find channels to follow</Text>
            <VStack className="justify-start items-center gap-5">
                    { channelsToFollowList && channelsToFollowList.map((item, index) => <NewChannel key={index} {...item} />) }
            </VStack>
        </VStack>
</ScrollView>

        </VStack>
    );
}