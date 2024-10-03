import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { useDepartmentSiteInfo } from "@/api/api-hooks";
import TruncateText from "../ui/truncate";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

const DepartmentComponent = ({ did, name }: { did: string; name: string }) => {
  const { data: departmentInfo } = useDepartmentSiteInfo(did);
  console.log(departmentInfo);
  return (
    <Card className="bg-background shadow-md m-2 sm:m-4">
      <CardHeader className=" mb-2 flex flex-col items-center justify-center">
        {/* <GraduationCap size={48} /> */}
        <div className="flex items-center justify-center rounded-full p-4 bg-gray-100">
          <Image src="/departmentLogo.png" alt="logo" width={38} height={38} />
        </div>
        {/* <CardTitle className="text-center text-xl mb-1">{name}</CardTitle> */}
      </CardHeader>
      <CardContent className="h-[150px] sm:h-[200px] flex flex-col items-center justify-center text-xs sm:text-sm relative">
        <h3 className="text-2xl font-medium top-0 absolute mb-10">{name}</h3>
        <p className="text-sm md:text-base line-clamp-5">
          {departmentInfo?.department_site?.department_hod_message && (
            <TruncateText
              text={departmentInfo?.department_site?.department_hod_message}
            ></TruncateText>
          )}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          provident praesentium, eveniet vitae dolore fugiat laudantium, animi
          placeat magni aliquam aspernatur consectetur quibusdam non molestias
          rerum accusantium itaque exercitationem, at reprehenderit earum
          commodi et natus libero nobis! Laboriosam, soluta molestiae magnam
          nesciunt sit cum perferendis. */}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end flex-shrink-0">
        <Link href={`department/redirect/${did}`}>
          <Button className="hover:opacity-95 hover:bg-primary text-xs md:text-sm lg:text-base">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DepartmentComponent;
