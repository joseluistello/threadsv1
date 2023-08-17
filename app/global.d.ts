import { Database as DB } from '@/lib/database.types';

type Tweet = DB['public']['Tables']['tweets']['Row']
type Profile = DB['public']['Tables']['tweets']['Row']

declare global {
    type Database = DB;
    type TweetWithAutor = Tweet & {
        author: Profile;
        likes: number;
        user_has_liked_tweet: boolean; 
}};