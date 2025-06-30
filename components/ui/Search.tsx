import { TextInput, View } from "react-native";
import { SearchIcon } from "./icon";
import { Input, InputField, InputIcon, InputSlot } from "./input";
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Fragment, useRef, useState } from "react";
import { HStack } from "./hstack";
import { VStack } from "./vstack";

interface SearchProps {
    placeholder: string;
    showBackIcon?: boolean;
    variation?: "Search" | "Chat";
    showSeacrhIconOnFocus?: boolean;
    query: string;
    setQuery: React.Dispatch<string>;
    onBack?: () => void;
}

export default function Search({ placeholder, showBackIcon, showSeacrhIconOnFocus , query, setQuery, onBack, variation = "Search" } : SearchProps) {

    return (
    <HStack className="flex-1 bg-secondaryBg py-3.5 px-7 shadow-secondaryBg rounded-3xl flex-row justify-start items-center">
        { variation === "Search" && <HStack className="justify-start items-center gap-5"><Ionicons name="search" className="mt-1" size={20} color="#b3b3b3" />
        <TextInput 
        multiline
        className="flex-1 text-start p-0 m-0 text-text-secondary font-spaceMono text-lg placeholder:text-lg placeholder:color-text-secondary"
         value={query || ''} placeholder={placeholder} onChangeText={(text) => setQuery(text || '')}></TextInput></HStack> }


        { variation === "Chat" && <HStack className="items-center justify-start">
            <MaterialCommunityIcons name="sticker-emoji" size={22} color="#b3b3b3" />
            <VStack className="flex-1 items-start">
            <TextInput
                multiline
                value={query || ''}
                onChangeText={(text) => setQuery(text || '')}
                placeholder={placeholder}
                className="ml-2 text-text-secondary max-h-40 overflow-y-scroll p-0 m-0 font-spaceMono text-lg placeholder:text-lg  placeholder:text-text-secondary"
                />
           </VStack>
        <HStack className="justify-center items-center gap-5">
            <Ionicons name="attach-outline" size={22} color="#b3b3b3" />
           { !query?.length && <><View className="w-6 h-6 rounded-full flex-row justify-center items-center border-2 border-[#b3b3b3]">
                <MaterialIcons name="currency-rupee" size={12} color="#b3b3b3" />
            </View>
            <Feather name="camera" size={22} color={"#b3b3b3"} /> </>}
        </HStack>
        </HStack> }
    </HStack>
    )
}