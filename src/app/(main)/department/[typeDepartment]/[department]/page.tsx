"use client";

import { useAllDepartments, useDepartmentSiteInfo } from "@/api/api-hooks";
import { Menu } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import About from "./_ui/about";
import VisionMission from "./_ui/vision-mission";
import Projects from "./_ui/projects";
import InnovativePractices from "./_ui/innovative-practices";
import MouCollaboration from "./_ui/mou-collaboration";
import StudentAchievement from "./_ui/student-achievement";
import StudentAssociations from "./_ui/student-associations";
import Labrotory from "./_ui/labrotory";
import Syllabus from "./_ui/syllabus";
import Faculties from "./_ui/faculties";
import HodMessage from "./_ui/hod-message";
import PoPso from "./_ui/po-pso";
import { useStore } from "@/store";
import ActivitiesTable from "./_ui/activities";
import ContactCard from "./_ui/contact-us";
const Department = () => {
  const [selectedContent, setSelectedContent] = useState("About");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const id = useStore((state) => state.id);
  const param = useParams();
  const { department: did } = param;
  console.log(did);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleContentSelect = (item: any) => {
    setSelectedContent(item);
    setIsSidebarOpen(false);
  };
  const [currentDepartment, setCurrentDepartment] = useState();
  const { data: departmentSiteInfo } = useDepartmentSiteInfo(did);
  const { data: AllDepartment } = useAllDepartments(id);
  useEffect(() => {
    if (AllDepartment?.institute?.depart) {
      const department = AllDepartment?.institute?.depart.find((item: any) => {
        return did === item?._id;
      });
      setCurrentDepartment(department);
    }
  }, [AllDepartment]);
  console.log(departmentSiteInfo);
  return (
    <div className="flex flex-col md:flex-row border-t-1 border-back">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-4 bg-background text-primary"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-background p-4`}
      >
        <ul>
          {sidebar.map((item, index) => (
            <li key={index} className="mb-2">
              <button
                className={`w-full text-left p-4 hover:bg-primary hover:text-secondary focus:bg-primary focus:text-secondary transition-colors shadow-md bg-card rounded-sm ${
                  selectedContent === item ? "bg-primary text-secondary" : ""
                }`}
                onClick={() => handleContentSelect(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {selectedContent === "About" ? (
          <About data={departmentSiteInfo?.department_site?.about} />
        ) : selectedContent === "Vision Mission" ? (
          <VisionMission
            vision={departmentSiteInfo?.department_site?.department_vission}
            mission={departmentSiteInfo?.department_site?.department_mission}
          />
        ) : selectedContent === "PO and PSO" ? (
          <PoPso data={departmentSiteInfo?.department_site?.po_pso} />
        ) : selectedContent === "HOD Message" ? (
          <HodMessage
            message={
              departmentSiteInfo?.department_site?.department_hod_message
            }
            hodDetails={currentDepartment}
          />
        ) : selectedContent === "Faculties" ? (
          <Faculties did={did} />
        ) : selectedContent === "Syllabus" ? (
          <Syllabus syllabus={departmentSiteInfo?.department_site?.syllabus} />
        ) : selectedContent === "Labrotory" ? (
          <Labrotory />
        ) : selectedContent === "Student Associations" ? (
          <StudentAssociations
            data={departmentSiteInfo?.department_site?.student_associations}
          />
        ) : selectedContent === "Student Achievements" ? (
          <StudentAchievement
            data={departmentSiteInfo?.department_site?.student_achievements}
          />
        ) : selectedContent === "Mou/Collaboration" ? (
          <MouCollaboration did={did} />
        ) : selectedContent === "Activities" ? (
          <ActivitiesTable did={did} />
        ) : selectedContent === "Innovative Practices" ? (
          <InnovativePractices
            data={departmentSiteInfo?.department_site?.innovative_practices}
          />
        ) : selectedContent === "Projects" ? (
          <Projects projects={departmentSiteInfo?.department_site?.projects} />
        ) : selectedContent === "Contact Us" ? (
          <ContactCard
            contacts={departmentSiteInfo?.department_site?.department_contact}
          />
        ) : (
          <h1>Default</h1>
        )}
      </div>
    </div>
  );
};

export default Department;
const sidebar = [
  "About",
  "Vision Mission",
  "PO and PSO",
  "HOD Message",
  "Faculties",
  "Syllabus",
  "Labrotory",
  // "Professional Bodies",
  "Student Associations",
  "Student Achievements",
  "Mou/Collaboration",
  "Activities",
  // "Event and Activities",
  "Innovative Practices",
  "Projects",
  // "Internal Exam",
  "Contact Us",
];
