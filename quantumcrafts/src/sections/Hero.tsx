import { Box, Chip, Container, Stack } from "@mui/material";
import { Title } from "../components/Title";
import { Desc } from "../components/Desc";
import { ButtonWithIcons } from "../components/ButtonWithIcons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Hero = () => {
  const scrollToPricingPlans = () => {
    const element = document.getElementById("pricing-plans");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailClick = () => {
    window.open(
      "mailto:quantumcrafts.in@gmail.com?subject=Inquiry from Website&body=Hello, I would like to know more about your services.",
      "_blank"
    );
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I would like to know more about your web development services."
    );
    window.open(`https://wa.me/7822957411?text=${message}`, "_blank");
  };

  return (
    <Container
      maxWidth={"lg"}
      sx={{
        height: "fit-content",
        padding: { xs: "120px 16px 60px 16px", md: "120px 24px 60px 24px" },
        minHeight: { xs: "100vh", md: "85vh" },
      }}
      id="hero"
    >
      <Box marginTop={{ xs: "20px", md: "100px" }}>
        <Chip
          label="Crafting Digital Excellence"
          sx={{
            padding: { xs: 1.5, md: 2 },
            fontWeight: 600,
            fontSize: { xs: "0.8rem", md: "1rem" },
          }}
        />
      </Box>

      <Box marginTop={{ xs: "40px", md: "60px" }}>
        <Title line1="Transform Your Ideas Into" line2="Stunning Websites" />
      </Box>

      <Box marginTop={{ xs: "40px", md: "60px" }}>
        <Desc content="Professional web development services starting from just ₹999. From simple landing pages to complex e-commerce platforms, we deliver quality that exceeds expectations." />
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"center"}
        gap={2}
        marginTop={"32px"}
        sx={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <ButtonWithIcons
          label="View Pricing Plans"
          endIcon={<ArrowForwardIcon />}
          bgcolor="linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
          textColor="#fff"
          onClick={scrollToPricingPlans}
        />
        <ButtonWithIcons
          label="Email Us"
          startIcon={<EmailIcon />}
          bgcolor="#fff"
          textColor="#000"
          onClick={handleEmailClick}
        />
        <ButtonWithIcons
          label="WhatsApp"
          startIcon={<WhatsAppIcon />}
          bgcolor="#25D366"
          textColor="#fff"
          onClick={handleWhatsAppClick}
        />
      </Stack>
    </Container>
  );
};
