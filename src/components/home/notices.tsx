"use client";
import { useNoticeInstitute } from "@/api/api-hooks";
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
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
// import { Link } from "lucide-react";

const Notices = () => {
  const id = useStore((state) => state.id);
  const { data: noticeInstitute } = useNoticeInstitute({ id });
  console.log(noticeInstitute);
  const announcement = noticeInstitute?.announcement?.slice(0, 5);
  console.log(announcement);
  return (
    <article className="m-10 shadow-md border-[1px] brder-gray-200 rounded-md">
      <h1 className="text-center text-3xl text-primary font-bold my-4">
        Notices
      </h1>
      <div className="mt-10 flex flex-col items-center jusify-center mx-30 mb-10 px-20">
        <Carousel opts={{ align: "start" }} className="w-full ">
          <CarouselContent className="-ml-4">
            {announcement?.map((item: any) => (
              <CarouselItem
                key={item?._id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-background shadow-md m-4">
                  <CardHeader className="h-[120px] box-border mb-2">
                    <CardTitle className="text-center mb-1">
                      {item?.insAnnTitle}
                    </CardTitle>
                    <p className="text-center">
                      <strong>Date : </strong>
                      {formatDate(item?.createdAt)}
                    </p>
                  </CardHeader>
                  <CardContent className="h-[200px]">
                    {item?.insAnnDescription}
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Link href={`/notices?nid=${item?._id}`}>
                      <Button className="hover:opacity-95 hover:bg-primary">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Link
          href="/notices"
          className="self-end text-primary text-lg underline  flex items-center"
        >
          Read More
          <ArrowUpRight className="ml-1" />
        </Link>
      </div>
    </article>
  );
};

export default Notices;
