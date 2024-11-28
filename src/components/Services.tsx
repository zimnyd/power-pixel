import {
  AtSign,
  BadgeInfo,
  BookOpen,
  ChartSpline,
  Laptop,
  Paintbrush,
  SquarePen,
  ThumbsUp,
} from "lucide-react";

const services = [
  {
    _id: 1,
    name: "Website Design",
    description: "Creating responsive and visually appealing websites.",
    price: "$1500",
    delivery_time: "4 weeks",
    icon: <Laptop width="1em" height="1em" />,
  },
  {
    _id: 2,
    name: "Digital Marketing",
    description:
      "Comprehensive marketing campaigns on social media and search engines.",
    price: "$1000 per month",
    delivery_time: "Ongoing",
    icon: <BadgeInfo width="1em" height="1em" />,
  },
  {
    _id: 3,
    name: "SEO Optimization",
    description: "Improving website visibility in search engine results.",
    price: "$1200",
    delivery_time: "2 weeks",
    icon: <BookOpen width="1em" height="1em" />,
  },
  {
    _id: 4,
    name: "Content Creation",
    description:
      "Professional writing of articles, blogs, and website content.",
    price: "$30 per article",
    delivery_time: "3 days",
    icon: <SquarePen width="1em" height="1em" />,
  },
  {
    _id: 5,
    name: "Graphic Design",
    description: "Designing logos, brochures, and other marketing materials.",
    price: "$500",
    delivery_time: "1 week",
    icon: <Paintbrush width="1em" height="1em" />,
  },
  {
    _id: 6,
    name: "Social Media Management",
    description: "Managing social media accounts and engagement.",
    price: "$800 per month",
    delivery_time: "Ongoing",
    icon: <ThumbsUp width="1em" height="1em" />,
  },
  {
    _id: 7,
    name: "Email Marketing",
    description: "Creating and managing effective email campaigns.",
    price: "$600 per month",
    delivery_time: "Ongoing",
    icon: <AtSign width="1em" height="1em" />,
  },
  {
    _id: 8,
    name: "Consulting",
    description: "Providing expert advice and strategies for business growth.",
    price: "$100 per hour",
    delivery_time: "As needed",
    icon: <ChartSpline width="1em" height="1em" />,
  },
];

const Services = () => {
  return (
    <section className="bg-neutral-100 py-8 dark:bg-neutral-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
          {services.map(({ _id, name, description, icon }) => (
            <div
              key={_id}
              className="space-y-1 rounded-lg border-2 border-neutral-50 bg-neutral-50 p-8 shadow-sm hover:border-neutral-300 hover:bg-neutral-100 focus:shadow-none dark:border-neutral-800 dark:bg-neutral-800 dark:hover:border-neutral-500 dark:hover:bg-neutral-700"
            >
              <div className="flex justify-between">
                <span className="text-5xl text-blue-500">{icon}</span>
                <span className="text-6xl text-gray-400/30">
                  {_id < 10 ? "0" + _id : _id}
                </span>
              </div>
              <h3 className="text-2xl font-bold">{name}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
