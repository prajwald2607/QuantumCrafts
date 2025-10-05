import { Stack, Typography } from "@mui/material";
import { useGetDeviceType } from "../hooks/useGetDeviceType";
interface TitleProps {
  line1?: string;
  line2?: string;
  line3?: string;
  direction?: string;
}

export const Title = ({ line1, line2, line3, direction }: TitleProps) => {
  const { isMobileDevice } = useGetDeviceType();
  return (
    <>
      <Stack
        direction={direction && !isMobileDevice ? "row" : "column"}
        gap={2}
      >
        <Typography sx={{ fontWeight: "500" }} variant="h2" color="black">
          {line1}
        </Typography>
        <Typography sx={{ fontWeight: "500" }} variant="h2" color="primary">
          {line2}
        </Typography>
        <Typography sx={{ fontWeight: "500" }} variant="h2" color="white">
          {line3}
        </Typography>
      </Stack>
    </>
  );
};
