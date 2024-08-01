"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";
import Link from "next/link";
import { useStore } from "@/store";
import { useIqacAuthority } from "@/api/api-hooks";
import { useRouter } from "next/router";
export function TopMenu() {
  const qid = useStore((state) => state.ids.iqacId);
  const { data: iqacAuthority } = useIqacAuthority(qid);
  const { setQid, setRndId } = useStore();
  const [uniqueCommittees, setUniqueCommittees] = useState<any>([]);

  useEffect(() => {
    if (iqacAuthority) {
      const newCommittees: { id: string; name: string; url: string }[] = [];
      iqacAuthority.iqac.authority.forEach((item: any) => {
        if (item.custom_head_name === "IQAC") {
          setQid(item._id);
        } else if (item.custom_head_name === "RND") {
          setRndId(item._id);
        } else {
          newCommittees.push({
            id: item._id,
            name: item.custom_head_name,
            url: `committee/${item._id}`,
          });
        }
      });
      const uniqueCommittees = newCommittees.filter(
        (committee, index, self) =>
          index === self.findIndex((c) => c.id === committee.id)
      );
      setUniqueCommittees(uniqueCommittees);
    }
  }, [iqacAuthority, setQid, setRndId]);

  return (
    <Menubar className="flex justify-end bg-primary text-primary-foreground border-none">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="">New Admission</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="">Notices</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="">Alumini</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="">Library</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="">Contact Us </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          IQAC{" "}
          {/* <ChevronDown className="text-primary-foreground hover:text-accent-foreground" /> */}
        </MenubarTrigger>

        <MenubarContent>
          <MenubarItem>
            <Link href="">Composition</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">Policy</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">Best Practices</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">Syllabus Feedback</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">Academic Calender</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Reports</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href="">IQAC Reports</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="">Annual Reports</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>SSR 2018</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href="">Documents</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="">Reports</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            <Link href="">Audit</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">Quality Initiatives</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          NAAC{" "}
          {/* <ChevronDown className="text-primary-foreground hover:text-accent-foreground" /> */}
        </MenubarTrigger>

        <MenubarContent className="bg-background">
          <MenubarItem>
            <Link href="/naac">Institute Perspective Planning</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">SSR-3 Cycle</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">SSR-4 Cycle</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">DVV</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">IIAQ</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">Certificate</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">Student Satisfactory Survey</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="">Undertakings</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          Committee{" "}
          {/* <ChevronDown className="text-primary-foreground hover:text-accent-foreground" /> */}
        </MenubarTrigger>
        <MenubarContent>
          {uniqueCommittees.map((committee: any, index: number) => (
            <MenubarItem key={index}>
              <Link href={committee.url}>{committee.name}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="">Login</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
