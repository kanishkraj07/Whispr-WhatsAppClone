import "@/global.css";
import { ScreenWraper } from "@/components/ScreenWrapper";

import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { ActivityIndicator, Text, TouchableWithoutFeedback, View } from "react-native";
import { ChatOuterLayerProps } from "@/components/ChatOuterLayer";
import { HStack } from "@/components/ui/hstack";
import { ChevronLeftIcon, Icon } from "@/components/ui/icon";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Provider, useSelector } from 'react-redux';
import { whisprStore } from '../store/store'
import { Image } from "@/components/ui/image";

export default function RootLayout() {
  const [loaded] = useFonts({
    "spaceMono": require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk-Regular.ttf'),
    "spaceMono-medium": require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk-Medium.ttf'),
    "spaceMono-semi-bold": require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf'),
    "spaceMono-bold": require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf'),
  });

  const router = useRouter();

  if (!loaded) {
    return <ActivityIndicator />
  }

  return (
    <ScreenWraper>
      <Provider store={whisprStore}>
      <KeyboardProvider>
            <Stack initialRouteName="(stack)/(auth)/index">
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="(stack)/(auth)/index" options={{ headerShown: false }} />
              <Stack.Screen name="(stack)/(auth)/otp-verification/index" options={{title: '', headerShown: true, headerStyle: {
                backgroundColor: '#121212',
              }, headerTintColor: '#FFF', headerBackTitle: 'back', headerBackTitleStyle: { fontFamily: 'spaceMono' } }} />
            <Stack.Screen name="(stack)/profile/index" options={{ headerShown: false }} />

              <Stack.Screen name="(stack)/chatlayer/index" options={({ route }) => ({ 
                headerShown: true,
                headerShadowVisible: true,
                 header: () => {
                  console.log(route);
                  const { friendId } = route.params as any
                  return <ChatLayerHeader friendId={friendId ?? 1} />
                 }
                })} />

            </Stack>
        </KeyboardProvider>
        </Provider>
            <StatusBar  style="light"></StatusBar>
    </ScreenWraper>
  );
}

const ChatLayerHeader = ({ friendId  }: any) => {
  const friendDetails = useSelector((state: any) => state?.friendsList?.filter((friend: any) => friend?.friendId === Number(friendId))[0]) || {};
  const router = useRouter();
  return (
     <HStack className="bg-background justify-start items-center gap-3 py-5 px-3">
            <TouchableWithoutFeedback onPress={() => router.back()}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableWithoutFeedback>
            <Image source={ friendDetails?.profileDP || ''} alt="profile-picture" size="xs" className="rounded-full" />
            <Text className="text-lg text-text-primary font-medium font-spaceMono-medium">{friendDetails?.name || ''}</Text>
            <View style={{ flex: 1 }} />
            <HStack className="items-center gap-5">
              <MaterialCommunityIcons name="video-outline" size={24} color="#FFFFFF" />
              <MaterialCommunityIcons name="phone-outline" size={24} color="#FFFFFF" />
              <MaterialCommunityIcons name="dots-vertical" size={24} color="#FFFFFF" />
            </HStack>
     </HStack>
  )
}
