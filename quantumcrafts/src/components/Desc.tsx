import { Typography } from "@mui/material";

interface DescProps {
  content: string;
}

export const Desc = ({ content }: DescProps) => {
  return (
    <>
      <Typography fontSize={"16px"} color="gray">
        {content}
      </Typography>
    </>
  );
};
