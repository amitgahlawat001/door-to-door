interface HeroSectionDataInterface {
  title: string;
  subtitle: string;
  bgImage: string;
  height: string;
}
const HeroSectionData: Record<string, HeroSectionDataInterface> = {
  "/": {
    title: "hero.home.title",
    subtitle: "hero.home.subtitle",
    bgImage: require("../assets/images/background/bg-image.jpg"),
    height: "h-[60vh]",
  },
  "/about": {
    title: "hero.about.title",
    subtitle: "hero.about.subtitle",
    bgImage: require("../assets/images/heroSectionImage/aboutUsHeader.jpg"),
    height: "h-[400px]",
  },
  "/services": {
    title: "hero.services.title",
    subtitle: "hero.services.subtitle",
    bgImage: require("../assets/images/heroSectionImage/servicesHeader.jpg"),
    height: "h-[350px]",
  },
  "/gallery": {
    title: "hero.gallery.title",
    subtitle: "hero.gallery.subtitle",
    bgImage: require("../assets/images/heroSectionImage/gallery.jpg"),
    height: "h-[350px]",
  },
  "/contact": {
    title: "hero.contact.title",
    subtitle: "hero.contact.subtitle",
    bgImage: require("../assets/images/heroSectionImage/contactUs.jpg"),
    height: "h-[350px]",
  },
  "/trackshipment": {
    title: "hero.track.title",
    subtitle: "hero.track.subtitle",
    bgImage: require("../assets/images/heroSectionImage/tracking.jpg"),
    height: "h-[60vh]",
  },
};

export default HeroSectionData;
