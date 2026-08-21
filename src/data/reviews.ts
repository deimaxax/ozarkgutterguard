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
    text: "Saved over $3,800 compared to the LeafFilter corporate quote I was given. The satellite measurement was done within 15 minutes of my request, and installation took exactly 3.5 hours. Not a single oak tassel got through this spring!",
    date: "3 weeks ago",
    verified: true,
    savings: "Saved $3,800+"
  },
  {
    id: "rev-2",
    name: "Robert & Linda Keller",
    location: "Lake Loch Lomond, Bella Vista, AR",
    city: "Bella Vista",
    rating: 5,
    text: "We live on a steep hillside surrounded by 50-foot Loblolly pines. I was paying $250 every 3 months for dangerous gutter cleaning. Ozark Gutter Guard installed surgical stainless steel mesh in one afternoon. Two torrential storms later, gutters run crystal clear!",
    date: "1 month ago",
    verified: true,
    savings: "Eliminated $1,000/yr cleaning costs"
  },
  {
    id: "rev-3",
    name: "David Harrison",
    location: "Shadow Valley, Rogers, AR",
    city: "Rogers",
    rating: 5,
    text: "LeafFilter quoted me $6,400 for our two-story house. Ozark Gutter Guard came in at $1,520 with higher quality 316 surgical stainless steel mesh. Clean crew, zero pressure, done in 4 hours.",
    date: "2 months ago",
    verified: true,
    savings: "Saved $4,880"
  },
  {
    id: "rev-4",
    name: "Sarah Jenkins & Mark W.",
    location: "Mount Sequoyah, Fayetteville, AR",
    city: "Fayetteville",
    rating: 5,
    text: "Our house under Mount Sequoyah oaks used to clog literally every 2 weeks in October and November. This stainless micro-mesh has been 100% clog free through all fall storms. Outstanding local NWA company!",
    date: "1 month ago",
    verified: true,
    savings: "Saved $3,200"
  },
  {
    id: "rev-5",
    name: "Elena Rodriguez",
    location: "Har-Ber Meadows, Springdale, AR",
    city: "Springdale",
    rating: 5,
    text: "After our foundation started showing hairline cracks from overflowing gutters, we knew we needed permanent guards. Ozark Gutter Guard gave us an honest quote over text with roof measurements and finished the job in 4 hours. No mess left behind!",
    date: "3 weeks ago",
    verified: true,
    savings: "Protected foundation"
  }
];
