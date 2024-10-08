import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const InfoItem = ({ icon, title, content }: any) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-navy-800 p-3 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-sm text-card-foreground">{content}</p>
      </div>
    </div>
  );
};

const Footer = ({ instituteAbout }: any) => {
  return (
    <footer className="bg-white text-gray-700 text-left">
      <Card className="border-0 rounded-none">
        <CardContent className="p-4 md:p-8">
          <div className="container md:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-2">
              <InfoItem
                icon={<MapPin className="w-6 h-6" />}
                title="OFFICE ADDRESS"
                content={instituteAbout?.insAddress}
              />
              <InfoItem
                icon={<Phone className="w-6 h-6" />}
                title="CALL US"
                content={instituteAbout?.insPhoneNumber}
              />
              <InfoItem
                icon={<Mail className="w-6 h-6" />}
                title="EMAIL US"
                content={instituteAbout?.insEmail}
              />
            </div>
            <Separator />
            <div className="w-full">
              <div className="bg-card text-card-foreground py-6 md:py-10">
                <div className="container md:mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* How to Reach */}
                  <div className="text-left">
                    <h4 className="text-lg font-semibold mb-4">How to Reach</h4>
                    <p className="text-sm mb-2">
                      <strong>Nearest Railway Station:</strong>
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Nearest Airport:</strong>
                    </p>
                    <p className="text-sm">
                      <strong>Govt. Buses:</strong>
                    </p>
                  </div>

                  {/* Useful Links 1 */}
                  <div className="text-left">
                    <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
                    <ul className="text-sm space-y-2">
                      <li>
                        <Link href="#" className="hover:underline">
                          Information Brochure
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Mandatory Disclosure
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Fee Structure
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Audit Report
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="admission?tab=about"
                          className="hover:underline"
                        >
                          Admission
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Anti Ragging
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Placement
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Useful Links 2 */}
                  <div className="text-left">
                    <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
                    <ul className="text-sm space-y-2">
                      <li>
                        <Link href="#" className="hover:underline">
                          AICTE Approval Letters
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          AICTE
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          DTE
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Savitribai Phule Pune University
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          Virtual Lab
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          AICTE Students Feedback
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          AICTE Faculty Feedback
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="text-left">
                    <h3 className="font-bold mb-4">Social Links</h3>

                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="bg-card text-card-foreground"
                      >
                        <Link
                          href={
                            instituteAbout?.landing_control?.footer_links
                              ?.facebook_link ?? "https://www.facebook.com/"
                          }
                        >
                          <Facebook className="h-4 w-4 " />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-card text-card-foreground"
                        size="icon"
                        asChild
                      >
                        <Link
                          href={
                            instituteAbout?.landing_control?.footer_links
                              ?.twitter_link ?? "https://twitter.com/"
                          }
                        >
                          <Twitter className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-card text-card-foreground"
                        size="icon"
                        asChild
                      >
                        <Link
                          href={
                            instituteAbout?.landing_control?.footer_links
                              ?.linkedin_link ?? "https://www.linkedin.com/"
                          }
                        >
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-card text-card-foreground"
                        size="icon"
                        asChild
                      >
                        <Link
                          href={
                            instituteAbout?.landing_control?.footer_links
                              ?.youtube_link ?? "https://www.youtube.com/"
                          }
                        >
                          <Youtube className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-card text-card-foreground"
                        size="icon"
                        asChild
                      >
                        <Link
                          href={
                            instituteAbout?.landing_control?.footer_links
                              ?.instagram_link ?? "https://www.instagram.com/"
                          }
                        >
                          <Instagram className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Separator />
      <div className="py-4 bg-primary text-secondary flex items-center justify-center text-center md:text-left">
        <p>
          Copyright ©2024 All Rights Reserved | By Software Development Cell
          Qviple, Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
