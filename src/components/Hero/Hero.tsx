import Image from "next/image";
import classes from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/My Photo.jpg"}
          alt="An image showing Varoon"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Varoon</h1>
      <p>I am a Full Stack Developer who loves Backend more than Frontend :)</p>
    </section>
  );
};
