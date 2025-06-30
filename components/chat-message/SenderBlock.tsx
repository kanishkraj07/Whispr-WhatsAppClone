import { Text } from "react-native";
import { Box } from "../ui/box";
import { getPerfectTime } from "@/utils";

export interface SenderBlockProps {
  message: string;
  sendTime: Date;
  className?: string;
}

export default function SenderBlock({ message, sendTime, className }: SenderBlockProps) {
  return (
    <Box className={`bg-primary max-w-[70%] rounded-xl px-4 flex-col flex-wrap py-2 self-end mt-1.5 ${className}`}>
      <Box className="flex-row flex-wrap items-end gap-2">
        <Text className="text-base font-medium font-spaceMono-medium flex-grow text-text-primary">
          {message}
        </Text>
        <Text className="text-2xs font-medium font-spaceMono-medium text-gray-300 ml-auto">
          {getPerfectTime(sendTime)}
        </Text>
      </Box>
    </Box>
  );
}
