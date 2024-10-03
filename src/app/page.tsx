"use client";
import { useWebsiteInfoByInstitute } from "@/api/api-hooks";
import { useStore } from "@/store";
import React from "react";
import CarouselComponent from "@/components/home/carousel-component";
import AboutIns from "@/components/home/about-ins";
import HomeDepartment from "@/components/home/home-department";
import EventAccrediationVisionMission from "@/components/home/events-accrediation-vimi";
import Testimonials from "@/components/home/alumini";
import AchievementsSection from "@/components/home/achivement";
import ImageLinks from "@/components/home/image-links";
const Home = () => {
  const id = useStore((state) => state.id);
  const { data: websiteInfoByInstitute } = useWebsiteInfoByInstitute(id);
  console.log;
  return (
    <div className="w-full flex flex-col gap-4">
      {websiteInfoByInstitute?.one_ins?.landing_control?.home_background_object
        ?.images.length > 0 && (
        <CarouselComponent
          images={
            websiteInfoByInstitute?.one_ins?.landing_control
              ?.home_background_object?.images
          }
        />
      )}
      {websiteInfoByInstitute?.one_ins?.landing_control
        ?.home_about_institute_object && (
        <AboutIns
          home_object={
            websiteInfoByInstitute?.one_ins?.landing_control
              ?.home_about_institute_object
          }
          quick_links={
            websiteInfoByInstitute?.one_ins?.landing_control
              ?.home_opener_quick_links
          }
        />
      )}
      {/* {websiteInfoByInstitute?.one_ins?.landing_control
        ?.about_society_dynamic && (
        <FounderMessage
          data={
            websiteInfoByInstitute?.one_ins?.landing_control
              ?.about_society_dynamic
          }
        />
      )} */}
      <HomeDepartment />
      <ImageLinks
        image_links={
          websiteInfoByInstitute?.one_ins?.landing_control
            ?.home_opener_background_object
        }
      />
      <EventAccrediationVisionMission
        iso_certificate={websiteInfoByInstitute?.one_ins?.iso_certificate.slice(
          0,
          4
        )}
        vision={
          websiteInfoByInstitute?.one_ins?.website_looks?.vision?.slice(0, 80) +
          "..."
        }
        mission={
          websiteInfoByInstitute?.one_ins?.website_looks?.mission?.slice(
            0,
            80
          ) + "..."
        }
      />
      {/* <AchievementsSection /> */}
      {websiteInfoByInstitute?.one_ins?.testimonials &&
      websiteInfoByInstitute?.one_ins?.testimonials.length > 0 ? (
        <Testimonials data={websiteInfoByInstitute?.one_ins?.testimonials} />
      ) : null}
    </div>
  );
};

export default Home;
