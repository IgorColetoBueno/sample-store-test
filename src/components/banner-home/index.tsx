import Image from "next/image";
import Typography from "../typography";
import styles from "./styles.module.css";


const BannerHome = () => {
  return (
    <div className={styles.home}>
      <div className="mx-auto h-full container">
        <div className="flex h-full w-full justify-between flex-col pt-10 pl-10 pb-4 sm:flex-row sm:pt-2 sm:pb-10 sm:justify-between">
          <div>
            <Image width={100} height={33} alt="Logo" src="/logo.svg" />
          </div>
          <div className="text-white font-thin sm:self-end ">
            <Typography variant="text-h2" tag="h2" font="font-serif">
              Category
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
