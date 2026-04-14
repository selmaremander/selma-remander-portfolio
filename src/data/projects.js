import pike2 from "../assets/images/pike2.png";
import pike5 from "../assets/images/pike5.png";
import joopajoo from "../assets/images/joopajoo.png";
import ohjain from "../assets/images/ohjain.png";
import kuvislukio from "../assets/images/kuvislukio.jpeg";

const projects = [
  {
    id: "p1",
    title: "School Group Project, PikeGame",
    description:
      "I worked as a programmer and UI artist. 'PikeGame'Can be found in the apple store and play store.",
    link: "https://play.google.com/store/apps/details?id=com.TurkuAMK.PikeGame&hl=en-US",
    images: [pike5, pike2],
  },
  {
    id: "p2",
    title: "Website Portfolio",
    description: "Learning web developement with react.",
    link: "",
    images: [kuvislukio, joopajoo, joopajoo],
  },
  {
    id: "p3",
    title: "School Group Project, IceBreaker",
    description:
      "An serious game for icebreak safety. I worked as a programmer and UI artist.",
    link: "",
    images: [ohjain, ohjain, ohjain],
  },
];

export default projects;
