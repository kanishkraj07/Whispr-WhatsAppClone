import { NewChannelDetails } from "@/models/Channel";
import { HStack } from "./ui/hstack";
import { Image } from "./ui/image";
import { Text } from "react-native";
import { VStack } from "./ui/vstack";
import { formatNumberShort } from "@/utils";
import { Button, ButtonText } from "./ui/button";

export default function NewChannel({ name, profileDp, followersCount }: NewChannelDetails) {
       return <HStack className={`w-full bg-transparent justify-between items-center`}>
        <HStack className="gap-3 items-center">
            <Image source={profileDp} alt="profile-picture" size="sm" className="rounded-full bg-secondaryBg" />
            <VStack className="justify-between">
                <Text className="text-text-primary text-lg  font-medium font-spaceMono-medium capitalize">{name?.trim() || ''}</Text>
                <HStack className="gap-1 justify-start items-center">
                {
                 followersCount && <Text className="text-text-secondary text-base font-spaceMono">{`${formatNumberShort(followersCount)} followers`}</Text>
                }
                </HStack>
            </VStack>
            </HStack>
            <Button size="sm" className="bg-primary text-center rounded-full" >
                <ButtonText className="text-base font-medium spaceMono-medium text-center text-text-primary">Follow</ButtonText>
            </Button>
        </HStack>
}