import ChatOuterLayer, { ChatOuterLayerProps, RecentMessageDetails, SentBy } from '@/components/ChatOuterLayer';
import Filter from '@/components/ui/Filter';
import { HStack } from '@/components/ui/hstack';
import Search from '@/components/ui/Search';
import { VStack } from '@/components/ui/vstack';
import { CHAT_FILTER, ChatFilter } from '@/models/chat';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {  ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function Chats() {

  const router = useRouter();

  const allChats: ChatOuterLayerProps[] = useSelector((state: any) => state.friendsList.map((friend: any, index: number) => {
    const chatDetails: any = state.chatsList.find((chat: any) => chat.friendId === friend.friendId);
    const recentChatDetails = chatDetails.details?.[0]?.chats?.[chatDetails.details?.[0]?.chats?.length -1];
    return {
      friendId: friend.friendId,
      friendName: friend.name || '',
      profileDp: friend.profileDP,
      recentMessageDetails: {
        message: recentChatDetails?.message,
        sentBy: recentChatDetails?.from,
        deliverTime: recentChatDetails?.sentTime
      },
      unseenMessagesDetails: { count: recentChatDetails?.from === SentBy.FRIEND ?  index + 2 : 0}
    }
  }
  ));

  const [searchQuery, setSearchQuery] = useState<string>();
  const allChatFilters: ChatFilter[] = [ { name: CHAT_FILTER.ALL, count: 0, isSelected: true }, { name: CHAT_FILTER.UNREAD, count: 5}, { name: CHAT_FILTER.FAVOURITES, count: 2 }, { name: CHAT_FILTER.GROUPS, count: 0 }, { name: null, count: 0, Icon: (({ className, color, size }) => <Feather color={color} size={size} className={className} name="plus" />)} ];
  return (
    <ScrollView className='flex-1' bounces={false} showsVerticalScrollIndicator={false}>
    <VStack className='flex-1 bg-background px-3 justify-start items-start pt-5 gap-7'>
          <Search placeholder='Ask Meta AI or Search' showBackIcon={true} showSeacrhIconOnFocus={true} query={searchQuery || ''} setQuery={setSearchQuery} onBack={() => {}}  />
  
            { allChatFilters.length && 
            <HStack className='justify-start items-center gap-3'>
              { allChatFilters.map((filter, index) => <Filter name={filter.name} count={filter.count} isSelected={filter.isSelected} doFilter={() => {}} Icon={filter.Icon} />) }

            </HStack> 
            }

            { allChats && allChats.length && <VStack className='gap-8 mt-2'>
              { allChats.map((item, index) => <ChatOuterLayer onPress={() => {
                router.push(`/chatlayer?friendId=${item.friendId}`)
              }} {...item} />) }
              </VStack> }
    </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
