interface HeroSectionDataInterface {
  title: string;
  subtitle: string;
  bgImage: string;
  height: string;
}
const HeroSectionData: Record<string, HeroSectionDataInterface> = {
  "/about": {
    title: "hero.about.title",
    subtitle: "hero.about.subtitle",
    bgImage: require("../assets/images/heroSectionImage/aboutUsHeader.jpg"),
    height: "h-[52vh] min-h-[380px]",
  },
  "/services": {
    title: "hero.services.title",
    subtitle: "hero.services.subtitle",
    bgImage: require("../assets/images/heroSectionImage/servicesHeader.jpg"),
    height: "h-[48vh] min-h-[340px]",
  },
  "/gallery": {
    title: "hero.gallery.title",
    subtitle: "hero.gallery.subtitle",
    bgImage: require("../assets/images/background/gallery3.jpg"),
    height: "h-[48vh] min-h-[340px]",
  },
  "/contact": {
    title: "hero.contact.title",
    subtitle: "hero.contact.subtitle",
    bgImage: require("../assets/images/heroSectionImage/contactUs.jpg"),
    height: "h-[48vh] min-h-[340px]",
  },
  "/trackshipment": {
    title: "hero.track.title",
    subtitle: "hero.track.subtitle",
    bgImage: require("../assets/images/heroSectionImage/tracking.jpg"),
    height: "h-[56vh] min-h-[400px]",
  },
};

export default HeroSectionData;
