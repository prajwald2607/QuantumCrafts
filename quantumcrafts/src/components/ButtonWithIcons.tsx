import { Button, Stack, Typography } from "@mui/material";
import type { JSX } from "react";

interface ButtonWithIconsProps {
  bgcolor?: string;
  label?: string;
  textColor?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
}
export const ButtonWithIcons = ({
  label,
  bgcolor,
  textColor,
  startIcon,
  endIcon,
  onClick,
}: ButtonWithIconsProps) => {
  return (
    <>
      <Stack direction={"row"} display={"flex"}>
        <Button
          onClick={onClick}
          sx={{
            background: bgcolor,
            backgroundColor: bgcolor,
            color: textColor,
            border: "1px solid transparent",
            gap: 1,
            borderRadius: "16px",
            padding: 2,
            textTransform: "none",
            fontWeight: "600",
            fontSize: "1rem",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              background: bgcolor,
            },
            "&:active": {
              transform: "translateY(0px)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          {startIcon}
          <Typography color={textColor} sx={{ fontWeight: "inherit" }}>
            {label}
          </Typography>
          {endIcon}
        </Button>
      </Stack>
    </>
  );
};
