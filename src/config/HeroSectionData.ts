interface HeroSectionDataInterface {
  title: string;
  subtitle: string;
  bgImage: string;
  height: string;
}

const HeroSectionData: Record<string, HeroSectionDataInterface> = {
  "/": {
    title: "Fast, NYC Courier Service",
    subtitle:
      "Send documents or large shipments, enjoy tailored service, schedule and budget. Vehicles: bikes, cars, vans.",
    bgImage: require("../assets/images/background/bg-image.jpg"),
    height: "h-[60vh]",
  },
  "/about": {
    title: "About Us",
    subtitle:
      "Founded in the heart of New York, Start Door To Door is a customer focused courier company dedicated to reliability and speed.",
    bgImage: require("../assets/images/heroSectionImage/aboutUsHeader.jpg"),
    height: "h-[400px]",
  },
  "/services": {
    title: "Our Services",
    subtitle:
      "We provide fast, secure and reliable courier solutions tailored to your needs. From same-day delivery to specialized handling, we’ve got you covered.",
    bgImage: require("../assets/images/heroSectionImage/servicesHeader.jpg"),
    height: "h-[350px]",
  },
  "/gallery": {
    title: "Delivery In Action",
    subtitle:
      "Explore how we bring reliability and speed to every delivery — from same-day shipping to specialized services.",
    bgImage: require("../assets/images/heroSectionImage/gallery.jpg"),
    height: "h-[350px]",
  },
  "/contact": {
    title: "Get in Touch With Us",
    subtitle:
      "We're here to help — reach out for support, inquiries, or feedback.",
    bgImage: require("../assets/images/heroSectionImage/contactUs.jpg"),
    height: "h-[350px]",
  },
  "/trackshipment": {
    title: "Track Your Package",
    subtitle:
      "Enter your tracking number to get real-time updates on your parcel’s journey—from pickup to delivery.",
    bgImage: require("../assets/images/heroSectionImage/tracking.jpg"),
    height: "h-[60vh]",
  },
};

export default HeroSectionData;
