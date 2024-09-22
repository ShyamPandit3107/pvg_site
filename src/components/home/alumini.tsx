import React from "react";
import { User, UserRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import style from "./alumini.module.css";
import ImageViewer from "../ui/image-viewer";
import { imageShowUrl } from "@/lib/BaseUrl";
import Link from "next/link";
import Image from "next/image";
const testimonials = [
  {
    name: "Richi Rich",
    role: "Student",
    content:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium atque odit. Ullam delectus corrupti accusantium amet omnis voluptatem ipsa provident iste illo vel atque recusandae qui suscipit consectetur, impedit exercitationem? Dolorum, suscipit praesentium!"',
    avatar: <User className="w-12 h-12" />,
  },
  {
    name: "Richi Rich",
    role: "Student",
    content:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium atque odit. Ullam delectus corrupti accusantium amet omnis voluptatem ipsa provident iste illo vel atque recusandae qui suscipit consectetur, impedit exercitationem? Dolorum, suscipit praesentium!"',
    avatar: <UserRound className="w-12 h-12" />,
  },
  {
    name: "Richi Rich",
    role: "Student",
    content:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium atque odit. Ullam delectus corrupti accusantium amet omnis voluptatem ipsa provident iste illo vel atque recusandae qui suscipit consectetur, impedit exercitationem? Dolorum, suscipit praesentium!"',
    avatar: <User className="w-12 h-12" />,
  },
];

const TestimonialCard = ({ name, image, bio, link }: any) => (
  <Link
    href={link ? "http://" + link : "/"}
    className={`bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform skew-y-5  ${style.skewedContainer}`}
  >
    <div
      className={` w-full flex flex-col items-center justify-center ${style.skewedBody}`}
    >
      <div>
        <div className="mb-4 text-gray-600 flex items-center justify-center">
          <Image
            src={`
               ${
                 // image
                 // ?
                 imageShowUrl + "/" + image
                 //  : "/avtar.webp"
               }`}
            width={150}
            height={150}
            alt="no found"
            className="m-auto"
          />
        </div>
        <p className="text-gray-800 mb-4">{bio}</p>
        <h3 className="font-bold">{name}</h3>
      </div>
    </div>
  </Link>
);

const Testimonials = ({ data }: any) => {
  console.log(data);
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <Carousel opts={{ align: "start" }} className="w-full ">
          <CarouselContent className="-ml-2 sm:-ml-4 flex gap-3 mx-10">
            {data.map((testimonial: any, index: any) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
