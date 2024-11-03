import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import PDFViewer from "@/components/ui/PDFViewer";
import { ArrowUpRight, FileText } from "lucide-react";
import React, { useEffect, useState } from "react";
import ViewNestedOne from "./ViewNestedOne";

const IqacNaacContent = ({
  content,
  level = 1,
}: {
  content: any;
  level?: number;
}) => {
  const [active, setActive] = useState<any>(null);
  const [nested, setNested] = useState<boolean>(false);
  const [currentContent, setCurrentContent] = useState<any>(null);
  const handleClick = (item: any) => {
    setNested(true);
    setCurrentContent(item);
  };
  console.log(content);
  return (
    <div>
      {nested ? (
        <ViewNestedOne content={currentContent} back={setNested} />
      ) : active && !nested ? (
        <PDFViewer file={active} setActive={setActive} />
      ) : (
        <div>
          <Heading className="mb-2">{content?.name}</Heading>

          <div className="grid grid-cols-2 gap-4 mx-2">
            {content?.inner_card?.map((item: any) => {
              if (item.is_nested) {
                return (
                  <Card className="w-full" key={item?._id}>
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-10 w-10 text-blue-500" />
                        <div>
                          <p className="font-medium">{item?.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item?.description}
                          </p>
                        </div>
                      </div>
                      <Button
                        // onClick={() => setViewPdf(item?.attach)}
                        className="border-primary hover:border-primary hover:border-[2px]  hover:text-primary "
                        onClick={() => handleClick(item)}
                      >
                        View All
                      </Button>
                    </CardContent>
                  </Card>
                );
              } else {
                //   return <div key={item?._id}>not nested</div>;
                return (
                  <Card className="w-full" key={item?._id}>
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-10 w-10 text-blue-500" />
                        <div>
                          <p className="font-medium">{item?.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item?.description}
                          </p>
                        </div>
                      </div>
                      <Button
                        // onClick={() => setViewPdf(item?.attach)}
                        className="border-primary hover:border-primary hover:border-[2px]  hover:text-primary "
                        onClick={() => setActive(item?.pdf_key)}
                      >
                        View
                      </Button>
                    </CardContent>
                  </Card>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default IqacNaacContent;
