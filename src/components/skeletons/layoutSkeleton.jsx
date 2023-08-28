import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const LayoutSkeleton = () => {
  return (
    <Stack spacing={2}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="rectangular" width={"90%"} height={260} />
      <Skeleton variant="rectangular" width={710} height={60} />
      <Skeleton variant="rounded" width={510} height={60} />
      <Skeleton variant="circular" width={190} height={190} />
      <Skeleton variant="text" width={"40%"} sx={{ fontSize: "4rem" }} />
      {/* For other variants, adjust the size with `width` and `height` */}
    </Stack>
  );
};

export default LayoutSkeleton;
