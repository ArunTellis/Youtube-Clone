const GOOGLE_API_KEY = "AIzaSyAsgizPDpn-Z-ScOmwmhWX0WfADa-hnKEQ";

//This is the offset or the maximum value that the live chat can contain
export const LIVE_CHAT_COUNT = 10;

//This API used to fetch the data for most Popular videos which will appear in the main page
export const YOUTUBE_VIDEO_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

//This API is used for searching the contents in the Youtube Search Bar
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_RECOMMENDATIONS_API =
  "https://www.googleapis.com/youtube/v3/activitiespart=snippet%2CcontentDetails&channelId={channel—_Id}&maxResults=25&regionCode=tw&key=" +
  GOOGLE_API_KEY;
