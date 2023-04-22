import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from ".";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {/* So videos is the LIST, we are mapping over it. */}
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* IF we recieve the something with  channelID , we'll display it as a CHANNEL */}
          {/* IF we recieve the a video , we'll display it as a videoCard */}
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
