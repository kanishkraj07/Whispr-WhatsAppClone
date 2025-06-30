import { Text } from "react-native";
import { getPerfectTime } from "@/utils";
import { Box } from "../ui/box";

export interface ReceiverBlockProps {
  message: string;
  receivedTime: Date;
  className?: string;
}

export default function ReceiverBlock({ message, receivedTime, className }: ReceiverBlockProps) {
  return (
    <Box className={`bg-secondaryBg max-w-[80%] rounded-xl px-4 py-2 self-start mt-1.5 flex-col flex-wrap ${className}`}>
      <Box className="flex-row flex-wrap items-end gap-2">
        <Text className="text-base font-medium font-spaceMono-medium text-text-primary flex-grow">
          {message}
        </Text>
        <Text className="text-2xs font-medium font-spaceMono-medium text-[#b3b3b3] ml-auto">
          {getPerfectTime(receivedTime)}
        </Text>
      </Box>
    </Box>
  );
}
