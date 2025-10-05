import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import QLogo from "../assets/Q.png";

export const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Contact", href: "#ready-to-start" },
    { label: "Pricing", href: "#pricing-plans" },
    { label: "Testimonials", href: "#hero" },
  ];

  const drawer = (
    <Box sx={{ width: 250, padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <img src={QLogo} alt="logo" height={40} width={40} />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={handleDrawerToggle}
            sx={{
              cursor: "pointer",
              borderRadius: "12px",
              marginBottom: 1,
              "&:hover": {
                backgroundColor: "rgba(63, 94, 251, 0.1)",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: "500",
                  fontSize: "1.1rem",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        position: "fixed",
        top: 0,
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "0 16px", md: "0 24px" },
        }}
      >
        {/* Logo on the left */}
        <img
          src={QLogo}
          alt="logo"
          height={isMobile ? 50 : 60}
          width={isMobile ? 50 : 60}
        />

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 4 }}>
            {navItems.map((item) => (
              <Typography
                key={item.label}
                onClick={() => {
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                sx={{
                  cursor: "pointer",
                  padding: "10px 20px",
                  borderRadius: "64px",
                  transition: "all 0.3s ease-in-out",
                  fontWeight: "500",
                  "&:hover": {
                    color: "white",
                    background:
                      "linear-gradient(321deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(63, 94, 251, 0.1)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Empty space on the right for balance (desktop only) */}
        {!isMobile && <Box sx={{ width: 60 }} />}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            backgroundColor: "white",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};
