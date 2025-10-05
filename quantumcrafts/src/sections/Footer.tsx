import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";
import bg2Image from "../assets/bg2.png";
import { useGetDeviceType } from "../hooks/useGetDeviceType";

export const Footer = () => {
  const { isMobile } = useGetDeviceType();

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
    window.open(`https://wa.me/917822957411?text=${message}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+917822957411", "_self");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: { xs: "40px 0 20px 0", md: "60px 0 20px 0" },
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ padding: { xs: "0 16px", md: "0 24px" } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                background:
                  "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              QuantumCrafts
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2, opacity: 0.8 }}>
              Crafting digital excellence with innovative web solutions. We
              transform your ideas into stunning websites that exceed
              expectations.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
                  },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#3f5efb",
                  },
                }}
              >
                Home
              </Link>
              <Link
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#3f5efb",
                  },
                }}
              >
                About Us
              </Link>
              <Link
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#3f5efb",
                  },
                }}
              >
                Services
              </Link>
              <Link
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#3f5efb",
                  },
                }}
              >
                Pricing
              </Link>
              <Link
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": {
                    opacity: 1,
                    color: "#3f5efb",
                  },
                }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Web Development
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                E-commerce Solutions
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                UI/UX Design
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                SEO Optimization
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Mobile Apps
              </Typography>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateX(4px)",
                  },
                }}
                onClick={handleEmailClick}
              >
                <Email sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  quantumcrafts.in@gmail.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateX(4px)",
                  },
                }}
                onClick={handlePhoneClick}
              >
                <Phone sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +91 7822 957411
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateX(4px)",
                  },
                }}
                onClick={handleWhatsAppClick}
              >
                <WhatsApp sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  WhatsApp: +91 7822957411
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Pune, Maharashtra, India
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Mobile Logo Section */}
        {isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                width: "200px",
                height: "auto",
                opacity: 0.8,
                transition: "opacity 0.3s ease",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <img
                src={bg2Image}
                alt="QuantumCrafts Logo"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Box>
        )}

        <Divider
          sx={{
            margin: "40px 0 20px 0",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              © 2024 QuantumCrafts. All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Link
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.6,
                  fontSize: "0.875rem",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.6,
                  fontSize: "0.875rem",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.6,
                  fontSize: "0.875rem",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Cookie Policy
              </Link>
            </Box>
          </Box>

          {/* Desktop Company Logo Image */}
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: { md: "200px", lg: "250px" },
                height: "auto",
                opacity: 0.8,
                transition: "opacity 0.3s ease",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <img
                src={bg2Image}
                alt="QuantumCrafts Logo"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};
