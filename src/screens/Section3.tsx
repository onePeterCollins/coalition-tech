import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABHEADER = [
  {
    name: "mountain1",
    title: "Mountain 1",
    content: [
      "25 Nov 2016    Vestibulum viverra",
      "28 Nov 2016    Vestibulum viverra",
      "18 Dec 2016    Vestibulum viverra",
    ],
  },
  {
    name: "mountain2",
    title: "Mountain 2",
    content: ["25 Nov 2016    New York"],
  },
];

const Section3 = () => {
  return (
    <section className="overflow-x-hidden" id="climb">
      <div className="min-h-[60vh]">
        <div className="container">
          <div className="flex items-center justify-center gap-1 md:gap-8 flex-col md:flex-row pb-4">
            <h1 className="numbered-heading">CLIMB</h1>
            <h4 className="max-w-screen-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              incidunt quisquam ducimus veritatis, maiores unde voluptates?
            </h4>
          </div>
        </div>
        <Tabs defaultValue={TABHEADER[0].name}>
          <div className="w-full bg-primary hidden md:block">
            <div className="container">
              <TabsList className="bg-transparent py-0">
                {TABHEADER.map((header, index: number) => (
                  <TabsTrigger
                    value={header.name}
                    key={index}
                    className="font-bold text-lg font-display rounded-none"
                  >
                    {header.title}
                  </TabsTrigger>
                ))}
                {/* <TabsTrigger value="password">Mountain 2</TabsTrigger> */}
              </TabsList>
            </div>
          </div>
          <div className="bg-[url('/images/photo-1417021423914-07097.png')] bg-cover bg-center">
            <div className="container">
              <div className=" min-h-[60vh] relative">
                <div className="max-w-[450px] py-24 m-auto md:m-0">
                  <Card className="opacity-70">
                    <CardContent className="hidden md:block">
                      <CardHeader>
                        <CardTitle className="uppercase font-bold text-primary">
                          Schedule
                        </CardTitle>
                      </CardHeader>
                      {TABHEADER.map((header, index: number) => (
                        <TabsContent value={header.name} key={index}>
                          <CardContent>
                            {header.content.map((text, index) => (
                              <p key={index} className="mb-2">
                                {text}
                              </p>
                            ))}
                          </CardContent>
                        </TabsContent>
                      ))}
                    </CardContent>
                    <CardContent className="block md:hidden">
                      <Accordion type="single" collapsible>
                        {TABHEADER.map((header, index: number) => (
                          <AccordionItem value={header.name} key={index}>
                            <AccordionTrigger>{header.title}</AccordionTrigger>
                            <AccordionContent>
                              {header.content.map((text, index) => (
                                <p key={index} className="mb-2">
                                  {text}
                                </p>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Section3;
