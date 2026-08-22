export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  city: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  savings: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Marcus Thorne",
    location: "Downtown Bentonville, AR",
    city: "Bentonville",
    rating: 5,
    text: "Got tired of the high-pressure sales pitch from the national franchise company. David's team sent us an estimate from aerial measurements within an hour, showed up two days later, and finished the entire house in an afternoon. No mess left behind and great local service.",
    date: "3 weeks ago",
    verified: true,
    savings: "Honest local pricing"
  },
  {
    id: "rev-2",
    name: "Robert & Linda Keller",
    location: "Bella Vista, AR",
    city: "Bella Vista",
    rating: 5,
    text: "Living on a steep wooded lot in Bella Vista, our gutters were constantly jammed with pine needles. We had Ozark Gutter Guard put guards on all sides. After three heavy rainstorms, water flows directly into the downspouts with zero overflow.",
    date: "1 month ago",
    verified: true,
    savings: "No more ladder climbs"
  },
  {
    id: "rev-3",
    name: "David Harrison",
    location: "Shadow Valley, Rogers, AR",
    city: "Rogers",
    rating: 5,
    text: "Clean, polite crew who took the time to realign our front gutters and flush downspouts before installing the micro-mesh. Price was less than half of what the big corporate brand quoted us for the same stainless steel mesh.",
    date: "2 months ago",
    verified: true,
    savings: "Saved over 50%"
  },
  {
    id: "rev-4",
    name: "Sarah & Mark W.",
    location: "Mount Sequoyah, Fayetteville, AR",
    city: "Fayetteville",
    rating: 5,
    text: "Under the heavy oak trees on Mt. Sequoyah, we used to clean our gutters 4 times a year. The micro-mesh guards have held up perfectly through fall leaves and spring oak tassels. Highly recommend them to anyone in NWA.",
    date: "1 month ago",
    verified: true,
    savings: "Zero fall clogs"
  },
  {
    id: "rev-5",
    name: "Elena Rodriguez",
    location: "Har-Ber Meadows, Springdale, AR",
    city: "Springdale",
    rating: 5,
    text: "We booked the $149 cleanout first and decided to upgrade to guards when they showed us the condition of our upper gutters. They credited the full cleaning fee toward the install. Extremely fair and professional.",
    date: "3 weeks ago",
    verified: true,
    savings: "Cleaning fee credited"
  }
];

