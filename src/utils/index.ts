import type { LandingPageCarousel } from "./types";
import Avatar from "../assets/landing_page/avatar.png";
import Video from "../assets/landing_page/video.png";
import LoveIcon from "../assets/landing_page/love.png";

export const landing_page_carousel: LandingPageCarousel[] = [
  {
    image: Video,
    type: "Image",
  },
  {
    avatar: Avatar,
    type: "Content",
    content:
      " Igor started creating websites years ago, going on to learn coding and mastering his creativity to build websites for other businesses, helping him make over $800,000 on UpWork, creating websites. He now manages his own team who does all the work while expands his web development agency online.",
    loveIcon: LoveIcon,
    user: {
      name: "Igvor .K",
      title: "Senior Wordpress Developer",
    },
  },
  {
    image: Video,
    type: "Image",
  },
  {
    avatar: Avatar,
    type: "Content",
    content:
      " Igor started creating websites years ago, going on to learn coding and mastering his creativity to build websites for other businesses, helping him make over $800,000 on UpWork, creating websites. He now manages his own team who does all the work while expands his web development agency online.",
    loveIcon: LoveIcon,
    user: {
      name: "Igvor .K",
      title: "Senior Wordpress Developer",
    },
  },
];
