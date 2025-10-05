import { Desc } from "../components/Desc";
import { Title } from "../components/Title";
import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from "@mui/icons-material/Palette";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ShieldIcon from "@mui/icons-material/Shield";
import { InfoCard } from "../components/InfoCard";
import { Box, Container, Stack } from "@mui/material";
import { useGetDeviceType } from "../hooks/useGetDeviceType";

export const WhyChoseUs = () => {
  const { isMobileDevice } = useGetDeviceType();
  const CardInfo = [
    {
      id: 1,
      Icon: <CodeIcon sx={{ color: "#fff" }} />,
      Heading: "Modern Development",
      Description:
        "Built with latest technologies including React, WordPress, and headless CMS solutions.",
    },
    {
      id: 2,
      Icon: <PaletteIcon sx={{ color: "#fff" }} />,
      Heading: "Custom Design",
      Description:
        "Unique, responsive designs tailored to your brand identity and business goals.",
    },
    {
      id: 3,
      Icon: <ElectricBoltIcon sx={{ color: "#fff" }} />,
      Heading: "Fast Delivery",
      Description:
        "Quick turnaround times without compromising on quality or attention to detail.",
    },
    {
      id: 4,
      Icon: <ShieldIcon sx={{ color: "#fff" }} />,
      Heading: "Secure & Optimized",
      Description:
        "Security hardening, performance optimization, and SEO best practices included.",
    },
  ];
  return (
    <Container
      maxWidth={"lg"}
      sx={{ height: "fit-content", marginTop: "100px" }}
    >
      <Title line1="Why Choose " line2=" QuantumCrafts ?" direction="row" />
      <Box sx={{ marginTop: "30px" }}>
        <Desc content="We combine technical expertise with creative design to deliver websites that not only look great but drive real business results." />
      </Box>

      <Stack
        direction={isMobileDevice ? "column" : "row"}
        gap={2}
        marginTop={"60px"}
      >
        {/* <InfoCard icon={icon} title={title} description={Description}/> */}
        {CardInfo.map((item) => {
          return (
            <InfoCard
              key={item.id}
              Description={item.Description}
              Heading={item.Heading}
              Icon={item.Icon}
            />
          );
        })}
      </Stack>
    </Container>
  );
};
