import { Box, Card, CardContent, Typography } from "@mui/material";
import type { JSX } from "react";

interface InfoCardProps {
  Icon: JSX.Element;
  Heading: string;
  Description: string;
}

export const InfoCard = ({ Icon, Heading, Description }: InfoCardProps) => {
  return (
    <>
      <Card
        sx={{
          height: "320px",
          padding: 2,
          ":&hover": { opacity: 0.9, background: " #000" },
        }}
      >
        <CardContent>
          <Box
            sx={{
              height: "28px",
              width: "28px",
              backgroundColor: "#636CCB",
              padding: 1,
              borderRadius: "8px",
              background:
                "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            }}
          >
            {Icon}
          </Box>
          <Box sx={{ marginTop: "25px" }}>
            <Typography sx={{ fontWeight: "500", fontSize: "24px" }}>
              {Heading}
            </Typography>
          </Box>
          <Box sx={{ marginTop: "80px" }}>
            <Typography>{Description}</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
