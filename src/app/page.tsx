"use client";
import { useStore } from "@/store";
import { useWebsiteInfoByInstitute } from "@/api/api-hooks";
import CarouselComponent from "@/components/home/carousel-component";
import AboutIns from "@/components/home/about-ins";
import FounderMessage from "@/components/home/founder-message";
import Event from "@/components/home/notices";
import Page from "./(main)/page";

export default function Home() {
  return <Page></Page>;
}
