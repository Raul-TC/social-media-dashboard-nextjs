import Image from "next/image";
import React from "react";
import CountFollowers from "./CountFollowers";

const DetailsCard = ({
  mediaName,
  icon,
  arrow,
  isUp,
  sectionName,
  state,
  percentage,
}) => {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-card-light dark:text-text-light bg-card-dark text-text-dark dark:hover:bg-[#dadeeb] hover:bg-[#45455c] cursor-pointer h-auto rounded overflow-hidden transition-colors ease-linear duration-300 gap-10 w-full px-8 py-6">
      <span className="flex justify-between w-full items-center">
        <p className="font-semibold">{sectionName}</p>
        <Image src={icon} width={22} height={22} alt={`${mediaName}_icon`} />
      </span>
      <span className="flex justify-between w-full items-center">
        <CountFollowers followers={state} card={false} />
        <span className={`${isUp ? "text-text-green-arrow" : "text-text-red-arrow"}`}>
          <Image src={arrow} width={12} height={15} className="inline-block" alt="arrow-stat" />
          {percentage}
        </span>
      </span>
    </div>
  );
};

export default DetailsCard;
