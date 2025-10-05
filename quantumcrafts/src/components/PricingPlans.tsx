import {
  Box,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import { ButtonWithIcons } from "./ButtonWithIcons";
import { ArrowForward, Check, Close } from "@mui/icons-material";
type PricingFeature = {
  text: string;
  included: boolean;
};

interface PricingPlansCard {
  title: string;
  subtitle: string;
  price: string;
  delivery: string;
  support: string;
  features: PricingFeature[];
  popular?: boolean;
}

export const PricingPlansCard = ({
  title,
  subtitle,
  price,
  delivery,
  features,
  popular = false,
}: PricingPlansCard) => {
  const scrollToReadyToStart = () => {
    const element = document.getElementById("ready-to-start");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Card
      sx={{
        position: "relative",
        border: popular
          ? "2px solid transparent"
          : "1px solid rgba(145, 196, 195, 0.3)",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: { xs: "auto", md: "500px" },
        width: { xs: "100%", lg: "auto" },
        maxWidth: { xs: "400px", lg: "none" },
        background: popular
          ? "linear-gradient(white, white) padding-box, linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%) border-box"
          : "white",
        boxShadow: popular
          ? "0 20px 40px rgba(63, 94, 251, 0.15), 0 8px 16px rgba(252, 70, 107, 0.1)"
          : "0 8px 32px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: popular
            ? "0 25px 50px rgba(63, 94, 251, 0.2), 0 12px 24px rgba(252, 70, 107, 0.15)"
            : "0 16px 48px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      {/* Popular Badge */}
      {popular && (
        <Chip
          label="Most Popular"
          sx={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            color: "white",
            fontWeight: "bold",
            fontSize: "0.75rem",
            zIndex: 1,
          }}
        />
      )}

      <CardContent
        sx={{
          padding: { xs: "24px 20px 16px 20px", md: "32px 24px 16px 24px" },
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", marginBottom: "24px" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
              color: popular ? "#3f5efb" : "#1a1a1a",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#666",
              fontSize: "0.9rem",
              marginBottom: "24px",
            }}
          >
            {subtitle}
          </Typography>

          {/* Price */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              background: popular
                ? "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
                : "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "8px",
            }}
          >
            {price}
          </Typography>

          {/* Delivery Info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              marginBottom: "24px",
            }}
          >
            <Typography
              sx={{
                color: "#666",
                fontSize: "0.85rem",
                fontWeight: "500",
              }}
            >
              Delivery: {delivery}
            </Typography>
          </Box>
        </Box>

        {/* Features */}
        <Box sx={{ marginBottom: "24px" }}>
          {features.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="flex-start"
              sx={{
                marginBottom: "12px",
                padding: "8px 0",
              }}
            >
              <Box
                sx={{
                  marginRight: "12px",
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: item.included
                    ? "rgba(63, 94, 251, 0.1)"
                    : "rgba(255, 0, 0, 0.1)",
                }}
              >
                {item.included ? (
                  <Check sx={{ fontSize: "14px", color: "#3f5efb" }} />
                ) : (
                  <Close sx={{ fontSize: "14px", color: "#ff4444" }} />
                )}
              </Box>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: item.included ? "#333" : "#999",
                  textDecoration: item.included ? "none" : "line-through",
                  lineHeight: 1.4,
                }}
              >
                {item.text}
              </Typography>
            </Stack>
          ))}
        </Box>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "center",
          padding: "0 24px 24px 24px",
          marginTop: "auto",
        }}
      >
        <ButtonWithIcons
          label="Get Started"
          endIcon={<ArrowForward />}
          bgcolor={
            popular
              ? "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
              : "#f8f9fa"
          }
          textColor={popular ? "#fff" : "#333"}
          onClick={scrollToReadyToStart}
        />
      </CardActions>
    </Card>
  );
};
