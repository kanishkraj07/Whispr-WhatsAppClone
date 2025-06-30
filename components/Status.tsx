import { PersonType } from "@/models/chat";
import { VStack } from "./ui/vstack";
import { StyleSheet, Text, View } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { Fab, FabIcon } from "./ui/fab";
import { AddIcon } from "./ui/icon";

export interface StatusProps {
    profileDp: string;
    name: string;
    personType: PersonType;
    recentStatusPic?: string;
}

export default function ({ profileDp, name, personType, recentStatusPic }: StatusProps) {
    return (
            <ImageBackground imageStyle={{
                borderRadius: 20,
            }} style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 20,   
                borderWidth: 0.5,
                height: 170,
                backgroundColor: '#1E1E1E',
                width: 100,
            }}  contentFit="cover" source={recentStatusPic && personType !== PersonType.ME ? recentStatusPic : undefined}
            alt="status-image">
                
                <VStack className="flex-1 justify-between items-start inset-shadow-xl" style={{
                }}>
                    <Image contentFit="cover" source={profileDp} style={styles.profileDp} alt="profile-image">
                    </Image>

                    

                    { personType === PersonType.ME && <Fab className="bg-primary absolute bottom-90 size-6 top-6 right-8 border border-background"  isHovered={false} isPressed={false}>
                        <FabIcon as={AddIcon} size="sm" color="#121212" />
                    </Fab> }

                    <Text className="text-md text-text-primary font-semibold font-spaceMono-semi-medium truncate line-clamp-2 capitalize">{name}</Text>
                </VStack>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    profileDp: {
        width: 45,
        height: 45,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#4A90E2'
    }
})