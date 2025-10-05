import { useMediaQuery, useTheme } from "@mui/material";

export const useGetDeviceType = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up("xl"));

  return {
    isMobile,
    isTablet,
    isDesktop,
    isSmallMobile,
    isLargeDesktop,
    // Convenience methods
    isMobileDevice: isMobile,
    isTabletDevice: isTablet,
    isDesktopDevice: isDesktop,
    // Combined checks
    isMobileOrTablet: isMobile || isTablet,
    isDesktopOrLarge: isDesktop || isLargeDesktop,
  };
};
