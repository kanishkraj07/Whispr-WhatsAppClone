import ReceiverBlock from "@/components/chat-message/ReceiverBlock";
import SenderBlock from "@/components/chat-message/SenderBlock";
import { SentBy } from "@/components/ChatOuterLayer";
import { ScreenWraper } from "@/components/ScreenWrapper";
import Search from "@/components/ui/Search";
import { VStack } from "@/components/ui/vstack";
import useGradualAnimation from "@/hooks/useGradualAnimation";
import { FriendConversation, PersonType } from "@/models/chat";
import { addMessage } from "@/store/reducers/chats.reducer";
import { checkCurrentDate, formatDate } from "@/utils";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Fragment, useRef, useState } from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";

export default function ChatLayer() {
    const [message, setMessage] = useState<string>();
    const conversationContainerRef = useRef<ScrollView | null>(null);
    const { height } = useGradualAnimation();

    const { friendId } = useLocalSearchParams();
    const displatch = useDispatch();

    let friendConversation: FriendConversation = useSelector((state: any) => state?.chatsList?.filter((chat: any) => chat?.friendId === Number(friendId))[0]) || [];

    const fakeView = useAnimatedStyle(() => {
        return {
          height: Math.abs(height.value) - 50,
        };
      }, []);

      const sendChatMessage = () => {
        setMessage('');
        const newChat = { message: message || '', sentTime: new Date(), from: SentBy.ME };
        displatch(addMessage({ friendId:  friendConversation.friendId, newChat}))
      }

      const openMicToRecordVoice = () => {}

    return (
        <ScreenWraper>
            <VStack className="flex-1 justify-end px-2">
            
            <ScrollView keyboardShouldPersistTaps="handled"
 ref={conversationContainerRef}  onContentSizeChange={() => conversationContainerRef?.current?.scrollToEnd({  animated: true })}
               bounces={false} showsVerticalScrollIndicator={false}>
                { 
                friendConversation?.details?.toReversed().map((details, index) =>  {
                   return <Fragment key={index}>
                   { details.onDay && 
                   <View className="px-3 rounded-lg bg-secondaryBg self-center py-2 mt-8">
                    <Text className="text-sm font-medium font-spaceMono-medium text-[#b3b3b3] text-center">{formatDate(details.onDay)}</Text>
                   </View> }
                   { details?.chats.map((chat, index) => chat.from === 'ME' ?
                         <SenderBlock className={addSpaceBetweenMessagesClass(details?.chats, index, chat.from)} key={index} message={chat.message} sendTime={chat.sentTime} /> :
                         <ReceiverBlock className={addSpaceBetweenMessagesClass(details?.chats, index, chat.from)} key={index} message={chat.message} receivedTime={chat.sentTime} /> 
                   )}
                   </Fragment> })

                 }
            </ScrollView>
            <View className="flex-row justify-self-end justify-start items-center mt-3 gap-2 px-2">
                    <Search variation="Chat" placeholder="Message" setQuery={setMessage} query={message || ''}  />
                    <TouchableWithoutFeedback onPress={() => message?.length ? sendChatMessage() : openMicToRecordVoice()}>
                        <View className="w-12 h-12 rounded-full flex-row justify-center items-center bg-primary">
                            { message?.length ? <MaterialIcons name="send" size={20} color="#121212" />  : <FontAwesome name="microphone" size={20} color="#121212" /> }
                        </View>
                    </TouchableWithoutFeedback>
            </View>
            { <Animated.View style={fakeView} />}
            </VStack>
            </ScreenWraper>
    )
}

const addSpaceBetweenMessagesClass = (chats: Array<any>, index: number, currentFrom: SentBy): string => {
  return index > 0 ? (chats[index - 1].from !== currentFrom ? 'mt-8' : '') : 'mt-8';
}

