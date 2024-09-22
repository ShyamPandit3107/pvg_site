"use client";
import { useAllEvents } from "@/api/api-hooks";
import { useStore } from "@/store";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight, Eye } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import Heading from "../ui/heading";
import Image from "next/image";
import { imageShowUrl } from "@/lib/BaseUrl";
import Content from "../ui/content";
import SubHeading from "../ui/sub-heading";

const EventAccrediationVisionMission = ({
  iso_certificate,
  vision,
  mission,
}: {
  iso_certificate: any;
  vision: any;
  mission: any;
}) => {
  const eid = useStore((state) => state.ids.eventId);
  const { data: allEvents } = useAllEvents(eid);
  // console.log(allEvents);
  console.log(iso_certificate);
  const notices = [
    {
      id: 1,
      title: "Campus Drive of Kirloskar for MECH 2022 Batch on 12th July",
    },
    {
      id: 2,
      title:
        "Campus Drive of Everest Ltd for MECH & Electrical on 8th July 2022",
    },
    {
      id: 3,
      title:
        "Campus Drive of Walchandnagar Industries for MECH on 15th June 2022",
    },
    {
      id: 4,
      title:
        "Campus Drive of Drive of ApMoSys Technologies for All the Branches on 7th...",
    },
    {
      id: 5,
      title: "CRETECHNOVA-2K24",
    },
    {
      id: 6,
      title: "Campus Drive of Kirloskar for MECH 2022 Batch on 12th July",
    },
    {
      id: 7,
      title:
        "Campus Drive of Everest Ltd for MECH & Electrical on 8th July 2022",
    },
    {
      id: 8,
      title:
        "Campus Drive of Walchandnagar Industries for MECH on 15th June 2022",
    },
    {
      id: 9,
      title:
        "Campus Drive of Drive of ApMoSys Technologies for All the Branches on 7th...",
    },
    {
      id: 10,
      title: "CRETECHNOVA-2K24",
    },
    // Add more notices as needed
  ];
  return (
    <div className="sm:m-10 m-2 ">
      <div className="flex justify-between items-center  flex-col md:flex-row h-fit">
        <div className=" w-full max-w-md  bg-background shadow-md md:mt-0 mt-10">
          <SubHeading className="font-extrabold text-[1.5rem]">
            Upcoming Events
          </SubHeading>
          <div className="p-0 bg-background inseventsbox">
            <div className="scrollList">
              {allEvents?.all_events?.map((event: any) => (
                <Link
                  key={event._id}
                  href={`/events?eid=${event._id}`}
                  className="flex items-center p-4 border-b last:border-b-0"
                >
                  <div className="flex-grow pr-4">
                    <p className=" font-medium">{event.event_name}</p>
                  </div>
                  <div className="flex-shrink-0 bg-primary p-1 rounded-md">
                    <Eye className="h-5 w-5 text-primary-foreground " />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Card className="w-full max-w-md h-fit bg-background shadow-md md:mt-0 mt-10">
          <SubHeading className="font-extrabold text-[1.5rem]">
            Affiliation
          </SubHeading>
          <CardContent className="p-0 bg-background">
            <div className="grid grid-cols-2 gap-4 justify-center items-center mb-2">
              {iso_certificate?.map((certificate: any) => (
                <Card
                  key={certificate?._id}
                  className="relative overflow-hidden bg-background w-[145px]"
                >
                  <CardContent className="p-0 relative">
                    <Image
                      src={`${imageShowUrl}/${certificate.image}`}
                      alt={`${certificate.name} logo`}
                      width={150}
                      height={150}
                      // className="w-1/2 h-auto object-contain"
                    />
                    <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground p-2 w-full text-center">
                      <Link
                        className="font-semibold block"
                        href={certificate?.link}
                      >
                        {certificate.name}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-md h-[350px] bg-background shadow-md md:mt-0 mt-10">
          <SubHeading className="font-extrabold text-[1.5rem]">
            Our Vision
          </SubHeading>
          <Content>{vision}</Content>
          <SubHeading className="font-extrabold text-[1.5rem]">
            Our Mission
          </SubHeading>
          <Content>{mission}</Content>
          <CardFooter className="flex justify-end items-end mt-10">
            <Link
              href="/department"
              className="self-end text-primary b text-base sm:text-lg underline flex items-center mt-4 sm:mt-0"
            >
              Read More
              <ArrowUpRight className="ml-1" />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default EventAccrediationVisionMission;
