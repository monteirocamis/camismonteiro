import Image from "next/image";

const Avatar = () => {
  return (
    <div className=" xl-flex xl:max-w-none">
      <Image
      //removed hidden
        className=" translate-z-0 w-full h-full"
        src={'/camis.png'}
        width={737}
        height={678}
        alt="image of a girl, in a jacket ,  with glasses smiling "
      />
    </div>
  );
};

export default Avatar;
