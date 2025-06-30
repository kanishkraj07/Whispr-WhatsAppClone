import { IconProps } from "@/components/ui/Filter";

export enum CommunityType {
    NEW = 'New',
    EXISTING = 'Existing'
}

export interface GroupRecentMessage {
    message: string;
    deliverTime: Date;

}

export interface Group {
    name: string;
    iconUrl?: string;
    Icon?: string | React.ComponentType<IconProps>;
    isAnnouncement?: boolean;
    recentMessageDetails: GroupRecentMessage;
    unSeenMessagesCount?: number;
    className?: string;
    isDefault?: boolean;
}