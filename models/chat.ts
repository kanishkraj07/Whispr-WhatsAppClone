import { CallHistoryProps } from "@/components/CallHistory";
import { SentBy } from "@/components/ChatOuterLayer";
import { FilterProps } from "@/components/ui/Filter"

export enum CHAT_FILTER {
    ALL = 'All',
    UNREAD = 'Unread',
    FAVOURITES = 'Favourites',
    GROUPS = 'Groups'
}

export enum CallerType {
    RECENT = 'Recent',
    FAVOURITES = 'Favourites'
}

export type ChatFilter = Pick<FilterProps, 'name' | 'count' | 'isSelected' | 'Icon'>;

export interface CallHistory extends CallHistoryProps {
    callerType: CallerType
}

export enum PersonType {
    ME = 'Me',
    FRIEND = 'Friend'
}

export interface FriendConversation {
    friendId: number;
    details: Array<{ onDay: Date, chats: Array<{ message: string; from: SentBy, sentTime: Date }> }>
}