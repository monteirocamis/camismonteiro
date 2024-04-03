import { Limelight } from "@next/font/google";
import Link from "next/link";
import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
  RiYoutubeLine,
  RiWhatsappFill,
  RiTiktokLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link
        href={"https://api.whatsapp.com/send/?phone=5511949230302"}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiWhatsappFill />
      </Link>
      <Link
        href={"https://linkedin.com/in/camismonteiro"}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://www.github.com/monteirocamis"}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.youtube.com/@devcamis3d"}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/camis.3d"}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.tiktok.com/camis3d"}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiTiktokLine />
      </Link>
    </div>
  );
};

export default Socials;
