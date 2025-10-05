import { Box, Chip, Container, Stack } from "@mui/material";
import { Title } from "../components/Title";
import { Desc } from "../components/Desc";
import { PricingPlansCard } from "../components/PricingPlans";

export const Plans = () => {
  const pricingPlans = [
    {
      title: "Basic Starter",
      subtitle: "Perfect for individuals",
      price: "₹999",
      popular: false,
      delivery: "2–3 days",
      support: "3 days bug-fix only",
      features: [
        {
          text: "1-page static design (digital visiting card)",
          included: true,
        },
        { text: "Mobile-friendly layout", included: true },
        { text: "Basic contact form OR WhatsApp button", included: true },
        { text: "1 free revision", included: true },
        { text: "Hosting/domain not included", included: false },
      ],
    },
    {
      title: "Essential",
      subtitle: "For small shops & freelancers",
      price: "₹4,999",
      popular: true,
      delivery: "5–7 days",
      support: "7 days bug-fix after delivery",
      features: [
        { text: "Up to 2–3 pages (Home, About, Contact)", included: true },
        { text: "Responsive modern design", included: true },
        { text: "Contact form with auto email confirmation", included: true },
        { text: "Basic SEO setup (title, meta, sitemap)", included: true },
        { text: "Google Analytics integration", included: true },
        { text: "2 design revisions", included: true },
      ],
    },
    {
      title: "Professional",
      subtitle: "For small businesses",
      price: "₹14,999",
      popular: false,
      delivery: "1–2 weeks",
      support: "1 month free support",
      features: [
        {
          text: "4–6 pages (Home, About, Services, Blog, Contact)",
          included: true,
        },
        { text: "CMS integration (WordPress / headless CMS)", included: true },
        { text: "Advanced forms (newsletter, lead capture)", included: true },
        { text: "On-page SEO + basic schema markup", included: true },
        { text: "Performance optimizations", included: true },
        { text: "Social media integration", included: true },
      ],
    },
    {
      title: "Premium Business",
      subtitle: "For startups & growth",
      price: "₹39,999+",
      popular: false,
      delivery: "3–6 weeks",
      support: "2 months free support & training",
      features: [
        { text: "7–10+ pages or custom web app", included: true },
        {
          text: "E-commerce (up to 20 products) with payment gateway",
          included: true,
        },
        { text: "Custom UI/UX with animations", included: true },
        {
          text: "Admin dashboard for content/product management",
          included: true,
        },
        { text: "Security hardening + performance tuning", included: true },
        {
          text: "API/3rd-party integrations (CRM, WhatsApp, etc.)",
          included: true,
        },
      ],
    },
  ];

  return (
    <Container
      maxWidth={"lg"}
      sx={{
        height: "fit-content",
        padding: { xs: "80px 16px 60px 16px", md: "80px 24px 60px 24px" },
        minHeight: { xs: "auto", md: "100vh" },
        marginTop: "100px",
      }}
      id="pricing-plans"
    >
      <Chip
        label="Pricing Plans"
        sx={{
          fontSize: { xs: "0.8rem", md: "1rem" },
          padding: { xs: 1.5, md: 2 },
          fontWeight: 600,
        }}
      />

      <Title line1="Choose Your" line2="Perfect Plan" direction="row" />
      <Box marginTop={{ xs: "30px", md: "40px" }}>
        <Desc content="From simple landing pages to complex e-commerce platforms, we have a solution that fits your needs and budget." />
      </Box>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        gap={2}
        marginTop={{ xs: "40px", md: "50px" }}
        sx={{
          alignItems: { xs: "center", lg: "stretch" },
          width: "100%",
        }}
      >
        {pricingPlans.map((item, index) => {
          return (
            <PricingPlansCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              delivery={item.delivery}
              support={item.support}
              features={item.features}
              popular={item.popular}
            />
          );
        })}
      </Stack>
    </Container>
  );
};
