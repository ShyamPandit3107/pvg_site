"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import TruncateText from "../ui/truncate";
import { getId } from "@/lib/utils";
import { imageShowUrl } from "@/lib/BaseUrl";
import SubHeading from "../ui/sub-heading";
const AboutIns = ({
  home_object,
  quick_links,
}: {
  home_object: any;
  quick_links: any;
}) => {
  const [play, setPlay] = useState(false);
  const handleClick = () => {
    setPlay(!play);
  };
  console.log(quick_links);
  return (
    <div className="grid md:grid-cols-3 grid-col-1 gap-4 mx-12">
      <div className="flex justify-center items-center">
        {home_object.typo === "YES" ? (
          <iframe
            src={`https://www.youtube.com/embed/${getId(
              home_object.link_images
            )}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className={`w-full md:w-11/12 md:h-[20rem] h-[15rem]`}
          />
        ) : (
          <img
            src={`${imageShowUrl}/${home_object.link_images}`}
            alt=""
            className="w-full md:w-11/12 md:h-[20rem]"
          />
        )}
      </div>
      <div>
        <SubHeading className="font-extrabold text-[1.5rem]">
          About Institute
        </SubHeading>
        <p className="text-gray-700 text-justify leading-5">
          <TruncateText text={home_object.about} />
          <Button className="border-primary hover:border-primary hover:border-[2px] hover:text-primary">
            <Link href={"/institute"}>Read More</Link>
          </Button>
        </p>
      </div>
      <div className="flex flex-col w-full">
        <SubHeading className="font-extrabold text-[1.5rem]">
          Quick Links
        </SubHeading>
        <div className="flex flex-col w-full">
          <div>
            <Link
              href={quick_links?.link_1?.link_images}
              target="_blank"
              className=" border-l-4 border-prime p-3 my-2 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
            >
              {quick_links?.link_1?.name}
            </Link>

            <Link
              href={quick_links?.link_2?.link_images}
              target="_blank"
              className=" border-l-4 border-prime p-3 my-2 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
            >
              {quick_links?.link_2?.name}
            </Link>

            <Link
              href={quick_links?.link_3?.link_images}
              target="_blank"
              className=" border-l-4 border-prime p-3 my-2 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
            >
              {quick_links?.link_3?.name}
            </Link>
            <Link
              href={quick_links?.link_4?.link_images}
              target="_blank"
              className=" border-l-4 border-prime p-3 my-2 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
            >
              {quick_links?.link_4?.name}
            </Link>

            <Link
              href={quick_links?.link_5?.link_images}
              target="_blank"
              className=" border-l-4 border-prime p-3 my-2 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
            >
              {quick_links?.link_5?.name}
            </Link>

            <Link
              href={quick_links?.link_6?.link_images}
              target="_blank"
              className=" border-l-4 border-prime p-3 my-2 bg-gray-200 hover:text-prime w-full md:w-11/12 block"
            >
              {quick_links?.link_6?.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AboutIns;
