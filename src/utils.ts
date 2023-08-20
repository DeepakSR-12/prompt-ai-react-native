import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react-native";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "Conversation",
    color: "#8b5cf6",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "Image",
    color: "#ec4899",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "Video",
    color: "#c2410c",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "Music",
    color: "#10b981",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "Code",
    color: "#22c55e",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "Settings",
    color: "#ffffff",
  },
];

const testimonials = [
  {
    name: "Deepak Rajkumar",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Naren Kumar U V",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Priya",
    avatar: "M",
    title: "Manager",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export { tools, testimonials, cn };
