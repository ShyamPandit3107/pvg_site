import Heading from "@/components/ui/heading";
import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { imageShowUrl } from "@/lib/BaseUrl";
import { useIqacComposition } from "@/api/api-hooks";
import { useStore } from "@/store";
import ImageViewer from "@/components/ui/image-viewer";
import Link from "next/link";
const Composition = () => {
  const qid = useStore((state) => state.qid);
  const { data: compostion } = useIqacComposition({
    qcid: qid as string,
    page: 1,
    limit: 1000,
  });
  console.log(compostion);
  return (
    <div>
      <Heading className="mb-2">Compositon</Heading>
      <Table className="border-black/80 border-[1px]">
        <TableHeader className="bg-primary text-primary-foreground">
          <TableRow>
            <TableHead className="text-primary-foreground">Sr. No.</TableHead>
            <TableHead className="text-primary-foreground">Photo</TableHead>
            <TableHead className="text-primary-foreground">
              Staff Name
            </TableHead>
            <TableHead className="text-primary-foreground">
              Designation
            </TableHead>
            <TableHead className="text-primary-foreground">Profile</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {compostion?.all_com?.map((item: any, index: number) => {
            if (item.student) {
              return (
                <TableRow
                  key={index}
                  className={` pointer-events-none ${
                    index & 1 ? "bg-gray-100" : ""
                  }`}
                >
                  <TableHead className="text-lg">{index + 1}</TableHead>
                  <TableHead className="text-lg">
                    {item?.student?.studentProfilePhoto && (
                      <ImageViewer
                        src={`${imageShowUrl}/${item?.student?.studentProfilePhoto}`}
                        alt="profile photo"
                        width={150}
                        height={150}
                        className="p-1"
                      />
                    )}
                  </TableHead>
                  <TableHead className="text-lg">{`${item?.student?.studentFirstName} ${item?.student?.studentMiddleName} ${item?.student?.studentLastName}`}</TableHead>
                  <TableHead className="text-lg">{item?.designation}</TableHead>
                  <TableHead className="text-lg">
                    <Link href="#">View</Link>
                  </TableHead>
                </TableRow>
              );
            } else {
              return (
                <TableRow
                  key={index}
                  className={` pointer-events-none ${
                    index & 1 ? "bg-gray-100" : ""
                  }`}
                >
                  <TableHead className="text-lg">{index + 1}</TableHead>
                  <TableHead className="text-lg">
                    {item?.staff?.staffProfilePhoto && (
                      <ImageViewer
                        src={`${imageShowUrl}/${item?.staff?.staffProfilePhoto}`}
                        alt="profile photo"
                        width={150}
                        height={150}
                        className="p-1"
                      />
                    )}
                  </TableHead>
                  <TableHead className="text-lg">{`${item?.staff?.staffFirstName} ${item?.staff?.staffMiddleName} ${item?.staff?.staffLastName}`}</TableHead>
                  <TableHead className="text-lg">{item?.designation}</TableHead>
                  <TableHead className="text-lg">
                    <Link href="#">View</Link>
                  </TableHead>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Composition;
