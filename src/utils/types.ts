export type CarouselItemType = "Image" | "Content";

export interface LandingPageCarousel {
  image?: ImageMetadata;
  content?: string;
  avatar?: ImageMetadata;
  loveIcon?: ImageMetadata;
  user?: {
    name: string;
    title: string;
  };
  type: CarouselItemType;
}
