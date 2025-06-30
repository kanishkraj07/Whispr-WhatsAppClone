import { ScreenWraper } from "@/components/ScreenWrapper";
import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Redirect, useLocalSearchParams, useRouter } from "expo-router";
import { MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { useSelector } from "react-redux";


interface OTPBox {
    prevRef: RefObject<TextInput | null> | null
    currentRef: RefObject<TextInput | null>;
    nextRef: RefObject<TextInput | null> | null;
}

export default function OTPVerification() {

  const phoneNo: string = useSelector((state: any) => state?.userProfileDetails?.phoneNo)

    const box1Ref = useRef<TextInput | null>(null);
    const box2Ref = useRef<TextInput | null>(null);
    const box3Ref = useRef<TextInput | null>(null);
    const box4Ref = useRef<TextInput | null>(null);

    const router = useRouter();

    const [resendTimer, setResendTimer] = useState<number>(60);
    const [isResend, setIsResend] = useState<boolean>(false);
    const [isVerifyingOTP, setIsVerifyingOTP] = useState<boolean>(false);

    const [focusedIndex, setFocusedIndex] = useState(0);
    const [otpValues, setOtpValues] = useState(["", "", "", ""]);

    const OTPBoxes: OTPBox[] = [
        { prevRef: null, currentRef: box1Ref, nextRef: box2Ref}, { prevRef: box1Ref, currentRef: box2Ref, nextRef: box3Ref},
         { prevRef: box2Ref, currentRef: box3Ref, nextRef: box4Ref }, { prevRef: box3Ref, currentRef: box4Ref, nextRef: null }];


    if(!phoneNo) {
        return <Redirect href={"/(stack)/(auth)"} />
    }

    useEffect(() => {
        startResendTimer();
      }, []);

      const startResendTimer = () => {
        setResendTimer(60);
        const interval = setInterval(() => {
          setResendTimer((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      };

      const verifyOtp = () => {
        if(otpValues.join('').length === 4) {
            setIsVerifyingOTP(true);
            setTimeout(() => {
                setIsVerifyingOTP(false);
            }, 3 * 1000);
            router.push("/profile");
            setIsVerifyingOTP(true);
        }
      }

    return (
        <ScreenWraper>
            <VStack className="flex-1 justify-start items-center gap-5">
                <Text className="text-2xl font-medium font-spaceMono-medium text-center text-text-primary">Verifying your number</Text>
                <Text className="text-md font-spaceMono text-center text-text-secondary">SMS sent to <Text className="font-semibold font-spaceMono-semiBold text-text-primary">{phoneNo.toString().trim()}</Text>.&nbsp;<Text className="font-semibold font-spaceMono-semiBold text-primary">Wrong number?</Text></Text>


                <HStack className="justify-center items-center gap-6">
        {OTPBoxes.map((box, index) => (
        
                <TextInput textAlignVertical="center" textAlign="center" ref={box.currentRef as any} 
                key={`index${index}`} className={`size-16 border border-[#2A2A2A] mt-5 rounded-md bg-[#1A1A1A] text-text-primary text-md font-medium font-spaceMono-medium text-center
                 ${focusedIndex === index || !!otpValues[index] ? 'border-primary' : 'border-[#2A2A2A]'}`}  
                 onChangeText={(text) => {

                    if(/^[0-9]$/.test(text) || text === '') {
                        const newOtpValues = [...otpValues];
                        newOtpValues[index] = text;
                        setOtpValues(newOtpValues);    

                        if( text.length === 0) {
                            if(box?.prevRef?.current) {
                                box?.prevRef?.current.focus();
                                setFocusedIndex(--index);
                         }
                        }
                    if (text.length === 1) {
                        if(box.nextRef?.current){
                            box.nextRef?.current?.focus();
                            setFocusedIndex(index + 1);
                        }
                    }
                    }
                  }}

                  onKeyPress={({ nativeEvent }) => {
                    const key = nativeEvent.key;
                    if (/^[0-9]$/.test(key) && otpValues[index].length === 1) {
                      const newOtpValues = [...otpValues];
                      newOtpValues[index] = key;
                      setOtpValues(newOtpValues);
                
                      if (box.nextRef?.current) {
                        box.nextRef.current.focus();
                        setFocusedIndex(index + 1);
                      }
                    }
                  }}
                  onFocus={()=> {
                    setFocusedIndex(index)
                  }}
                  value={otpValues[index]}
                keyboardType="numeric" 
                maxLength={1} />

        ))}
      </HStack>


      <Button disabled={isVerifyingOTP || otpValues.join('').length < 4} size="md"  className="bg-primary w-[30%] text-center rounded-full mt-5" onPress={verifyOtp}>
   { isVerifyingOTP && <ButtonSpinner color={"#121212"} /> }
       <ButtonText className="font-medium text-md font-spaceMono-medium text-background">
           { isVerifyingOTP ? 'verifying...' : 'Verify' }
       </ButtonText>  
 </Button>

      <HStack className="justify-center items-center">
        <Text className="text-base text-center text-text-secondary font-spaceMono">{"Didn't receive code? "}</Text>
        { resendTimer > 0 ? <Text className="text-base text-center text-primary font-spaceMono">{`Resend in ${`00:${resendTimer.toString().padStart(2, '0')}`}`}</Text>
        : <TouchableWithoutFeedback onPress={() => {
          startResendTimer();
        }}>
        <Text className="text-base text-center font-medium text-primary font-spaceMono-medium underline">Resend</Text>
        </TouchableWithoutFeedback> }
      </HStack>
            </VStack>
        </ScreenWraper>
    )
}