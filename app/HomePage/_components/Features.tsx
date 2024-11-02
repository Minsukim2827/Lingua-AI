import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Type, VolumeIcon, Languages } from "lucide-react";

const features = [
  {
    icon: <Mic className="h-10 w-10 text-primary" />,
    title: "Voice-to-Text",
    description: "Convert spoken words into written text across multiple languages.",
  },
  {
    icon: <Type className="h-10 w-10 text-primary" />,
    title: "Text-to-Voice",
    description: "Transform written content into natural-sounding speech.",
  },
  {
    icon: <Languages className="h-10 w-10 text-primary" />,
    title: "Text-to-Text",
    description: "Translate written content between hundreds of language pairs.",
  },
  {
    icon: <VolumeIcon className="h-10 w-10 text-primary" />,
    title: "Voice-to-Voice",
    description: "Real-time spoken language translation for seamless conversations.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Translation Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardHeader>
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
