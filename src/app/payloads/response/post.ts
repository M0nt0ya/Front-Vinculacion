import { User } from "src/app/user-model";

export interface PostResponse{
    timestamp: string | number | Date;
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    duration: string,
    tweetText: string,
    replyCounter: number,
    retweetCounter: number,
    likeCounter: number,
    retweetedBy?: User,
    quote?: PostResponse
}
