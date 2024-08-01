"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useStore } from "@/store";
import { useWebsiteInfoByInstitute } from "@/api/api-hooks";
import Image from "next/image";
import { imageShowUrl } from "@/lib/BaseUrl";
import PinDepartment from "./department/pin-department";
import { ListItem } from "../ui/list-item";
import Link from "next/link";

const MainMenu = ({ academicCourse }: { academicCourse: any }) => {
  const id = useStore((state) => state.id);
  const { data: websiteInfoByInstitute } = useWebsiteInfoByInstitute(id);
  return (
    <div className=" hidden md:flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      <div className="flex items-center mr-8">
        <Image
          src={`${imageShowUrl}/${websiteInfoByInstitute?.one_ins?.website_looks?.logo}`}
          alt="Logo"
          width={75}
          height={75}
        />
      </div>
      <div className="flex">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem>
              <Link className={navigationMenuTriggerStyle()} href="/">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/society" title="About Society">
                    Learn more about our society
                  </ListItem>
                  <ListItem href="/institute" title="Institute Profile">
                    Overview of our educational institute
                  </ListItem>
                  <ListItem href="/administration" title="Administration">
                    Meet our administrative team
                  </ListItem>
                  <ListItem href="/accrediation" title="Accreditation">
                    Our accreditations and certifications
                  </ListItem>
                  <ListItem href="/faculties" title="Faculties">
                    Our faculties and departments
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Academic Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {academicCourse?.map((item: any) => (
                    <ListItem
                      key={item._id}
                      title={item.head_name}
                      href={`/academic-course/${item._id}`}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Department</NavigationMenuTrigger>
              <NavigationMenuContent>
                <PinDepartment />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Admission</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[230px] p-2 grid grid-cols-1">
                  <ListItem
                    href="/admission/about"
                    title="Admission Department"
                  ></ListItem>
                  <ListItem
                    href="/admission/new-admission"
                    title="New Admission"
                  ></ListItem>
                  <ListItem
                    href="/admission/admission-enquiry"
                    title="Admission Enquiry"
                  ></ListItem>
                  <ListItem
                    href="/admission/admission-process"
                    title="Admission Process"
                  ></ListItem>
                  <ListItem
                    href="/admission/document-checklist"
                    title="Document Checklist"
                  ></ListItem>
                  <ListItem
                    href="/admission/contact-us"
                    title="Contact Us"
                  ></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger>R&D</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[230px] p-2 grid grid-cols-1">
                  <ListItem
                    href="/r&d/r&d-department"
                    title="R&D Department"
                  ></ListItem>
                  <ListItem href="/r&d/MOU" title="MOU"></ListItem>
                  <ListItem
                    href="/r&d/research-paper"
                    title="Research Paper"
                  ></ListItem>
                  <ListItem
                    href="/r&d/Activities"
                    title="Activities"
                  ></ListItem>
                  <ListItem href="/r&d/Projects" title="Projects"></ListItem>
                  <ListItem href="/r&d/Meetings" title="Meetings"></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/examination"
              >
                Examination
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Add more NavigationMenuItems for other top-level categories */}
    </div>
  );
};

export default MainMenu;
