import Headset from "../assets/images/headset.avif";
import Keyboard from "../assets/images/keyboard.avif";
import Laptop from "../assets/images/laptop.avif";
import Microphone from "../assets/images/microphone.avif";
import Mouse from "../assets/images/mouse.avif";
import Speaker from "../assets/images/speaker.avif";

const products = [
  {
    id: 1,
    name: "Sony WH-CH510 Bluetooth Wireless Headphones",
    description:
      "These Bluetooth wireless headphones from Sony offer an immersive audio experience. Enjoy crystal-clear sound and seamless connectivity for up to 35 hours of playback time. Stay hands-free with the built-in microphone for clear calls on the go.",
    price: 149,
    image: Headset,
  },
  {
    id: 2,
    name: "boAt Rockerz 450 Wireless Bluetooth Keyboard",
    description:
      "The boAt Rockerz 450 wireless Bluetooth keyboard provides a seamless typing experience. With its ergonomic design and responsive keys, typing becomes effortless. Stay productive on the go with wireless connectivity and long-lasting battery life.",
    price: 49,
    image: Keyboard,
  },
  {
    id: 3,
    name: "Acer Tune 760NC Laptop",
    description:
      "The Acer Tune 760NC headphones offer premium sound quality and active noise cancellation. Immerse yourself in your favorite music and enjoy clear calls with these stylish headphones. The comfortable design ensures all-day wearability.",
    price: 179,
    image: Laptop,
  },
  {
    id: 4,
    name: "Logitech H111 Wired Microphone",
    description:
      "The Logitech H111 wired microphone is perfect for clear communication in any environment. Enjoy crisp audio and noise cancellation for uninterrupted conversations. The adjustable design ensures a comfortable fit for extended use.",
    price: 39,
    image: Microphone,
  },
  {
    id: 5,
    name: "APPLE Airpods Max Bluetooth Mouse",
    description:
      "The Apple Airpods Max Bluetooth mouse delivers precise control and seamless connectivity. With its sleek design and advanced features, this mouse enhances your productivity. Enjoy smooth scrolling and effortless navigation with ease.",
    price: 199,
    image: Mouse,
  },
  {
    id: 6,
    name: "ZEBRONICS Zeb-Thunder Wired Speaker",
    description:
      "The ZEBRONICS Zeb-Thunder wired speaker delivers powerful sound and immersive bass. Elevate your audio experience with this versatile speaker, featuring multiple connectivity options. Whether wired or wireless, enjoy your favorite music in style.",
    price: 29,
    image: Speaker,
  },
];

export default products;
