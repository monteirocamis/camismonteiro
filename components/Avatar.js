import Image from "next/image";

const Avatar = () => {
  return (
    <div className=" xl-flex xl:max-w-none">
      <Image
        //removed hidden
        className=" translate-z-0 w-full h-full"
        src={"/camisold.png"}
        width={100}
        height={100}
        alt="image of a girl, in a black blouse , pony hair and smiling "
      />
    </div>
  );
};

export default Avatar;
