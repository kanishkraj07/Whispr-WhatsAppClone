import Community, { CommunityProps } from "@/components/Community";
import GroupOuterLayer from "@/components/Group";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { CommunityType } from "@/models/community";
import { Feather, Octicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableWithoutFeedback } from "react-native";
import { useSelector } from "react-redux";

export default function Communities() {

    const allExistingCommunities: CommunityProps[] = useSelector((state: any) => state?.communitiesList);
    return (
        <ScrollView className="flex-1 bg-background" bounces={false} showsVerticalScrollIndicator={false}>
        <VStack className="flex-1justify-start items-center pt-8">
            <VStack className="w-full px-3 pb-5 justify-center items-center gap-4 bg-background">
                <HStack className="pl-5 pr-10 py-3 justify-start items-center gap-5 border-2 w-full border-text-border rounded-xl">
                        <Octicons className="self-start mt-1" name="light-bulb" size={28} color="#d1d5db" />
                        <VStack className="gap-2 justify-center items-start">
                            <Text className="text-text-primary text-lg font-medium font-spaceMono-medium">Communities are moving</Text>
                            <Text className="text-text-primary text-md font-spaceMono pr-8">View and create communities from the Chats tab, and organise them with a list.</Text>
                            <TouchableWithoutFeedback>
                                <Text className="text-primary block text-md font-bold font-spaceMono-bold">Add communities list</Text>
                            </TouchableWithoutFeedback>
                        </VStack>
                </HStack>
                <Community communityId={0} name="New Community" type={CommunityType.NEW} allGroups={[]} />
            </VStack>
            <Divider orientation="horizontal" className="w-full bg-black h-2"></Divider>

            { allExistingCommunities && allExistingCommunities?.length && (
                allExistingCommunities.map((community, index) => (
                    <>
                    <VStack className="w-full gap-4">

                    <VStack className="w-full px-3 pt-4">
                        <Community {...community} />
                    </VStack>

                    <Divider orientation="horizontal" className="w-full bg-text-border"></Divider>

                    { community.allGroups?.length && community.allGroups.map((group, index) => (
                        <GroupOuterLayer className="px-3 pb-4" Icon={group?.isDefault ? ({ color, size, className }) => (
                            <Octicons name="megaphone" size={size} color={color} className={className} />
                          ) : () => <></>} iconUrl={group.iconUrl} {...group} />
                    )) }

                    { community?.allGroups.length > 1 && (
                        <HStack className="px-3 justify-start items-center pb-4 gap-1">
                            <Feather name="arrow-right" size={20} color="#b3b3b3" />
                            <Text className="text-text-secondary text-md font-medium font-spaceMono-medium">View all</Text>
                        </HStack>
                    ) }

                </VStack>
            <Divider orientation="horizontal" className="w-full bg-black h-2"></Divider>
            </>

                
                ))   
            )}

        </VStack>
        </ScrollView>
    );
}