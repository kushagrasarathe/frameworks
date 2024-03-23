import { getUserAllData } from "./airstack";
import {
  getUserGlobalEngagmentRanking,
  getUserGlobalFollowingRanking,
} from "./getOpenRankData";
import {
  getUserCasts,
  getUserLikes,
  getUserReactions,
  getUserRecasts,
} from "./neynar";
import {
  getReactionsLike,
  getReactionsRecasts,
  getUserAuthoredCasts,
} from "./pinata";

export const calculateScore = async (userHandle: string, fid: number) => {
  try {
    // 1. get Engagment ranking from openranks ( out of 200 )
    // const engagementRank = await getUserGlobalEngagmentRanking(userHandle);
    // const engagementPoints = engagementRank.percentile*2;
    // const fid = engagementRank.fid;
    // get Casts by the user
    // const casts = await getUserAuthoredCasts(fid);
    // const casts2 = await getUserCasts(fid);
    // 2.calculate the post freq score ( out of 150 )
    // const castFrequencyScore = await calculatePostFreq(casts2);
    // 3.calculate the post quality score ( out of 50 )
    // const postQualityScore = 50;
    //
    // fetch user reactions
    // 4. get the no of likes (out of 50)
    // const reactionsLike = await getUserLikes(fid);
    // const reactionLikeScore =
    //   ((await calculateReactionFreq(reactionsLike)) * 50) / 100;
    // 4. get the no of recasts  (out of 50)
    // const reactionsRecast = await getUserRecasts(fid);
    // const reactionRecastScore =
    //   ((await calculateReactionFreq(reactionsRecast)) * 50) / 100;
    // console.log(reactionLikeScore, reactionRecastScore);
    //
    // 5. Take the no of followers to calculate the  following score (out of 100)
    // const followingRank = await getUserGlobalFollowingRanking(userHandle);
    // const followingPoints = followingRank.percentile;
    // // fetch user data from Airstack
    const userData = await getUserAllData(userHandle);
    // console.log(userData);

    // // 6. Get the account creation time for user to calculate the longevity score (out of 100)
    const userCreatedTime = new Date(userData.userCreatedAtBlockTimestamp);
    const longevityScore = await calculateLongevityScore(userCreatedTime);
    console.log(longevityScore);

    // fetch users onchain activity data from airstack
    // 7. get the onchain activity like tokens transfer , nft minting , etc.
  } catch (error) {
    console.log(error);
  }
};

const calculatePostFreq = async (casts: any[]) => {
  const currentDate = new Date();

  //   const authoredCasts = casts.filter((cast: any) => {
  //     return !cast.parentHash;
  //   });
  const authoredCasts = casts;

  // might want to filter that they were the posts created by the user , only the post authored directly by the user , so there should be no parentAuthor & no parentHash

  const timeFilteredCasts = authoredCasts.filter((cast: any) => {
    // console.log(cast.timestamp);
    const postDate = new Date(cast.timestamp);
    const diffInDays = Math.floor(
      (currentDate.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diffInDays <= 100;
  });

  return timeFilteredCasts.length;
};

const calculateReactionFreq = async (reactions: any[]) => {
  const currentDate = new Date();

  //   const authoredCasts = casts.filter((cast: any) => {
  //     return !cast.parentHash;
  //   });

  // might want to filter that they were the posts created by the user , only the post authored directly by the user , so there should be no parentAuthor & no parentHash

  const timeFilteredReactions = reactions.filter((cast: any) => {
    const postDate = new Date(cast.reaction_timestamp);
    const diffInDays = Math.floor(
      (currentDate.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diffInDays <= 100;
  });

  return timeFilteredReactions.length;
};

const calculateLongevityScore = async (accountCreationDate: Date) => {
  const currentDate = new Date();

  const diffInDays = Math.floor(
    (currentDate.getTime() - accountCreationDate.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  if (diffInDays > 100) {
    return 100;
  } else {
    return (diffInDays / 100) * 100;
  }
};
