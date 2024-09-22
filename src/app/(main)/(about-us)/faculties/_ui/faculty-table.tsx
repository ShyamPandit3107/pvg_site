import { Card, CardContent } from "@/components/ui/card";
import ImageViewer from "@/components/ui/image-viewer";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { imageShowUrl } from "@/lib/BaseUrl";
import Image from "next/image";
import React from "react";

const FacultyTable = ({ data, name }: { data: any; name: string }) => {
  console.log(data);
  return (
    // <Table className="border-black/80 border-[1px]">
    //   <TableHeader className="bg-primary text-primary-foreground">
    //     <TableRow>
    //       <TableHead className="text-primary-foreground">Sr. No.</TableHead>
    //       <TableHead className="text-primary-foreground">Photo</TableHead>
    //       <TableHead className="text-primary-foreground">Staff Name</TableHead>
    //       <TableHead className="text-primary-foreground">Designation</TableHead>
    //       <TableHead className="text-primary-foreground">Department</TableHead>
    //     </TableRow>
    //   </TableHeader>
    //   <TableBody>
    //     {data?.map((item: any, index: number) => (
    //       <TableRow
    //         key={index}
    //         className={` ${index & 1 ? "bg-gray-100" : ""}`}
    //       >
    //         <TableHead>{index + 1}</TableHead>
    //         <TableHead>
    //           {item?.staffProfilePhoto && (
    //             <ImageViewer
    //               src={`${imageShowUrl}/${item?.staffProfilePhoto}`}
    //               alt="profile photo"
    //               width={50}
    //               height={50}
    //             />
    //           )}
    //         </TableHead>
    //         <TableHead>{`${item?.staffFirstName} ${item?.staffMiddleName} ${item?.staffLastName}`}</TableHead>
    //         <TableHead>{item?.current_designation}</TableHead>
    //         <TableHead>{item?.staff_department?.dName}</TableHead>
    //       </TableRow>
    //     ))}
    //   </TableBody>
    // </Table>
    <div className="grid grid-cols-1 gap-4 mx-4 my-4">
      {data?.map((item: any, index: any) => (
        <Card key={index} className="bg-gray-100 shadow-md w-2/3 m-auto">
          <CardContent className="w-full flex flex-col md:flex-row justify-center items-center gap-8 p-4">
            <div className="w-1/3 flex justify-center items-center ">
              <ImageViewer
                width={250}
                height={250}
                alt="/avtar.webp"
                className="rounded-md"
                src={`${
                  // item?.staffProfilePhoto
                  // ?
                  imageShowUrl + "/" + item?.staffProfilePhoto
                  // : "/avtar.webp"
                }`}
              />
            </div>
            <ul className="w-2/3 flex flex-col list-disc text-lg">
              <li>
                <strong>Name : </strong>
                {`${item?.staffFirstName} ${item?.staffMiddleName} ${item?.staffLastName}`}
              </li>
              <li>
                <strong>Designation : </strong>
                {item?.current_designation}
              </li>
              <li>
                <strong>Department : </strong>
                {item?.staff_department?.dName}
              </li>
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FacultyTable;
