import Content from "@/components/ui/content";
import SubHeading from "@/components/ui/sub-heading";
import React from "react";

const VisionMission = ({
  vision,
  mission,
}: {
  vision: string;
  mission: string;
}) => {
  return (
    <div className="flex flex-col ">
      <div className="my-2">
        <SubHeading className="text-2xl">Vision</SubHeading>
        <Content>{vision}</Content>
      </div>
      <div className="my-2">
        <SubHeading className="text-2xl">Mission</SubHeading>
        <Content>{mission}</Content>
      </div>
    </div>
  );
};

export default VisionMission;
