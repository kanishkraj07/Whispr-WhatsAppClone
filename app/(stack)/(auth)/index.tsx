import { ScreenWraper } from "@/components/ScreenWrapper";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { updatePhoneNumber } from "@/store/reducers/user-details.reducer";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, ViewStyle } from "react-native";
import PhoneInput, { ICountry, isValidPhoneNumber } from "react-native-international-phone-number";
import { useDispatch } from "react-redux";

export default function WelcomeAuth() {

    const [country, setCountry] = useState<ICountry | null>(null);
    const [phoneNo, setPhoneNo] = useState<string | null>(null);
    const router = useRouter();
    const dispatch = useDispatch();

    const sendSMS = () => {
        if(country?.callingCode && phoneNo?.length && isValidPhoneNumber(phoneNo, country))  {
            dispatch(updatePhoneNumber({ phoneNo: country.callingCode.trim() + ' ' + phoneNo.toString().split('').filter(ch => ch.trim()?.length).join("") }));
            router.push(`/otp-verification`);
        } 
        router.push(`/otp-verification`);
    }

    return (
        <ScreenWraper>
            <VStack className="flex-1 justify-center items-center gap-10 px-10">
                <VStack className="justify-center items-center">
                    <Text className="text-4xl font-medium font-spaceMono-medium text-center text-text-primary">Welcome to <Text className="text-primary">Whispr</Text></Text>
                </VStack>
                <VStack className="justify-center items-center">
                    <Text className="text-xl font-medium mb-5 font-spaceMono-medium text-center text-text-primary">Enter your phone number</Text>
                    <VStack className="justify-start items-center gap-1">
                        <Text className="text-md font-spaceMono text-center text-text-secondary">Whipr will need to verify your phone number.</Text>
                        <Text className="text-md font-spaceMono text-center text-text-secondary">Carrier charges may apply. <Text className="text-primary font-bold font-spaceMono-bold">{"What's my number?"}</Text></Text>
                    </VStack>
                    <PhoneInput defaultCountry="US" phoneInputStyles={{
                        container: {
                            backgroundColor: '#121212',
                            marginTop: 30,
                            height: 40,
                            borderColor: '#4A90E2'
                        },
                        divider: {
                            backgroundColor: '#4A90E2'
                        },
                        caret: {
                            color: '#4A90E2',
                            fontSize: 10
                        },
                        flag: {
                            fontSize: 17
                        },
                        callingCode: {
                            fontFamily: 'spaceMono-medium',
                            color: '#FFF',
                            fontSize: 14
                        },
                        input: {
                            fontFamily: 'spaceMono-medium',
                            fontSize: 14,
                            color: '#FFF'
                        },
                        flagContainer: {
                            backgroundColor: '#121212'
                        }
                    }}  modalStyles={{
                    callingCode: {
                        fontFamily: 'spaceMono-medium'
                    },
                    countryName: {
                        fontFamily: 'spaceMono-medium'

                    }
                        
                    }}
                    value={phoneNo as string}
                     selectedCountry={country}
                      onChangePhoneNumber={setPhoneNo}
                       onChangeSelectedCountry={setCountry}
                       placeholder="Phone number"  />
            
                </VStack>
                <Button size="md" className="bg-primary text-center self-end" onPress={sendSMS}>
                        <ButtonText className="text-md w-full font-medium text-center font-spaceMono-medium text-background">Next</ButtonText>
                 </Button>
            </VStack>
        </ScreenWraper>
    )
}