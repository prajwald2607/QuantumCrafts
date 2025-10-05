import { Box, Container, Stack, Typography } from "@mui/material";
import { Title } from "../components/Title";
import { ButtonWithIcons } from "../components/ButtonWithIcons";
import { Email, WhatsApp } from "@mui/icons-material";

export const ReadyTostart = () => {
  return (
    <Container
      maxWidth={"lg"}
      sx={{
        height: "fit-content",
        padding: { xs: "80px 16px 60px 16px", md: "80px 24px 60px 24px" },
      }}
      id="ready-to-start"
    >
      <Box
        sx={{
          background:
            "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
          borderRadius: "16px",
          padding: "32px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Title line3="Ready to Start Your Project?" />
        <Typography sx={{ color: "white" }}>
          Get in touch today and let's discuss how we can bring your vision to
          life. Free consultation and quote available.
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          marginTop={"48px"}
          gap={3}
        >
          <ButtonWithIcons
            bgcolor="#fff"
            label="Email Us"
            startIcon={<Email />}
            textColor="linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
          />
          <ButtonWithIcons
            bgcolor="primary"
            label="WhatsApp"
            startIcon={<WhatsApp />}
            textColor="white"
          />
        </Stack>
      </Box>
    </Container>
  );
};
