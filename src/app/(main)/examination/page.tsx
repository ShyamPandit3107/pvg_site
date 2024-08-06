"use client";
import { useExaminationDetails } from "@/api/api-hooks";
import { useStore } from "@/store";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import ExamComponent from "./_ui/exam-component";

const Examination = () => {
  const [selectedContent, setSelectedContent] = useState("Manual");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContentSelect = (item: any) => {
    setSelectedContent(item);
    setIsSidebarOpen(false);
  };
  const examId = useStore((state) => state.ids.examId);
  const { data: examinationDetails } = useExaminationDetails(examId);
  console.log(examinationDetails);
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
        {selectedContent === "Manual" ? (
          <ExamComponent
            name="Manual"
            data={examinationDetails?.landing?.manual_examination}
          />
        ) : selectedContent === "Schedule" ? (
          <ExamComponent
            name="Schedule"
            data={examinationDetails?.landing?.examination_schedule}
          />
        ) : selectedContent === "Time Table" ? (
          <ExamComponent
            name="Time Table"
            data={examinationDetails?.landing?.examination_timetable}
          />
        ) : selectedContent === "Notifications" ? (
          <ExamComponent
            name="Notifications"
            data={examinationDetails?.landing?.examination_notification}
          />
        ) : selectedContent === "Hall Ticket" ? (
          <ExamComponent
            name="Hall Ticket"
            data={examinationDetails?.landing?.hall_ticket}
          />
        ) : (
          <h1>Defualt</h1>
        )}
      </div>
    </div>
  );
};

export default Examination;
const sidebar = [
  "Manual",
  "Schedule",
  "Time Table",
  "Notifications",
  "Hall Ticket",
];
