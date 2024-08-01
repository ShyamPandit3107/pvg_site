"use client";
import { useAllEvents, useNoticeInstitute } from "@/api/api-hooks";
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
import Content from "../ui/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Events = () => {
  // const id = useStore((state) => state.id);
  const eid = useStore((state) => state.ids.eventId);
  // console.log(eventId);
  const { data: AllEvents } = useAllEvents(eid);
  console.log(AllEvents);
  return (
    <article className="m-10 shadow-md border-[1px] brder-gray-200 rounded-md">
      <h1 className="text-center text-3xl text-primary font-bold my-4">
        Events
      </h1>
      <div className="mt-10 flex items-center  flex-col jusify-center mx-30 mb-10 px-20">
        <Carousel opts={{ align: "start" }} className="w-full ">
          <CarouselContent className="-ml-4">
            {AllEvents?.all_events?.map((item: any) => (
              <CarouselItem
                key={item?._id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-background shadow-md m-4">
                  <CardHeader className="h-[100px] box-border mb-2">
                    <CardTitle className="text-center mb-1">
                      {item?.event_name}
                    </CardTitle>
                    <p className="text-start">
                      <strong>Date : </strong>
                      {formatDate(item?.event_date)}
                    </p>
                  </CardHeader>
                  <CardContent className="h-[200px] flex items-center justify-center">
                    {item?.event_status}
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Read More</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Link
          href="/events"
          className="self-end text-primary text-lg underline  flex items-center"
        >
          Read More
          <ArrowUpRight className="ml-1" />
        </Link>
      </div>
    </article>
    // <div>hi</div>
  );
};

export default Events;
