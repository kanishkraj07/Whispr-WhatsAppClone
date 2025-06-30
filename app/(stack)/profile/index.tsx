import { ScreenWraper } from "@/components/ScreenWrapper";
import { Box } from "@/components/ui/box";
import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "@/store/reducers/user-details.reducer";

export default function Profile() {

    const [isCreatingProfile, setIsCreatingProfile] = useState<boolean>(false);
    const [image, setImage] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);

    const dispatch = useDispatch();

    const pickProfileDp = async() => {


        const pickedImageRes = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ['images', 'livePhotos'],
            aspect: [4, 3],
            quality: 1
        });

        if(!pickedImageRes.canceled) {
            const profileDpUrl = pickedImageRes.assets[0].uri;
            setImage(profileDpUrl);
        }
    }

    const createProfile = () => {
        setIsCreatingProfile(true);
        dispatch(updateUserProfile({ fullName: name || '', profileDpUrl: image }));
        setTimeout(() => {
            setIsCreatingProfile(false);
        }, 3 * 1000);
        setIsCreatingProfile(true);
        router.push(`/chats?name=${name}`);
    }

    return (
        <ScreenWraper>
            <VStack className="gap-5 justify-start items-center px-10">
              <Text className="text-3xl font-medium font-spaceMono-medium text-center text-text-primary">Profile info</Text>
              <Text className="text-md font-medium font-spaceMono-medium text-center text-text-secondary">Please provide your name and an optional profile photo</Text>

              <Box className="mt-3 rounded-full flex justify-center items-center size-36 border border-[#2a2a2a] bg-secondaryBg relative">
                <TouchableWithoutFeedback onPress={pickProfileDp}>
                     <Box className="rounded-full z-10 flex bg-primary justify-center items-center size-12 border-4 border-[#121212] absolute top-[70%] bottom-0 right-0">
                <Feather name="camera" size={18} color={"#121212"} />
                </Box>
                </TouchableWithoutFeedback>
               
                { image ? <Image className="size-36 cover rounded-full" source={{uri: image}} />  : <FontAwesome5 name="user" size={35} color="#B3B3B3" />
            }
              </Box>

              <HStack className="mt-3">
               <TextInput onChangeText={setName} placeholder="Type your name here" className="flex-1 w-full text-md font-spaceMono-medium text-text-primary border-t-0 border-l-0 border-r-0 border-b border-b-primary placeholder:text-md placeholder:text-text-secondary placeholder:font-spaceMono-medium" />
              </HStack>
              <Button disabled={!name} size="md" className="bg-primary w-full self-end text-center rounded-full mt-5" onPress={createProfile}>
   { isCreatingProfile && <ButtonSpinner color={"#121212"} /> }
       <ButtonText className="font-medium text-md font-spaceMono-medium text-background">
           { isCreatingProfile ? 'Saving...' : 'Save' }
       </ButtonText>  
       </Button>
            </VStack>
        </ScreenWraper>
    )
}