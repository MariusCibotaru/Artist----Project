import Award1 from '../images/awards/Award1.jpg'
import Award2 from '../images/awards/Award2.jpg'
import Award3 from '../images/awards/Award3.jpg'
import Award4 from '../images/awards/Award4.jpg'
import Award5 from '../images/awards/Award5.jpg'
import GalleryImage1 from '../images/landscape/landscape1.jpg';
import GalleryImage2 from '../images/landscape/landscape2.jpg';
import GalleryImage3 from '../images/landscape/landscape3.jpg';
import GalleryImage4 from '../images/landscape/landscape4.jpg';
import GalleryImage5 from '../images/landscape/landscape5.jpg';
import Home1 from '../images/home/Home1.jpg'
import Home2 from '../images/home/Home2.jpg'
import Home3 from '../images/home/Home3.jpg'


export interface GalleryImage {
  title: string;
  description: string;
  location: string;
  image: string;
}

export interface Gallery {
  name: string;
  images: GalleryImage[];
}

export const galleries: Gallery[] = [
  {
    name: "Landscape",
    images: [
      {
        title: "Mountain Sunrise",
        description: "A beautiful sunrise over the mountains.",
        location: "Rocky Mountains",
        image: GalleryImage1,
      },
      {
        title: "Japan",
        description: "Sunset in the vast desert.",
        location: "Japan",
        image: GalleryImage2,
      },
      {
        title: "Mountain",
        description: "Sunset in the vast desert.",
        location: "Himalaya",
        image: GalleryImage5,
      },
    ],
  },
  {
    name: "Wildlife",
    images: [
      {
        title: "Lion in the Wild",
        description: "A majestic lion roaming the savannah.",
        location: "Serengeti",
        image: GalleryImage3,
      },
      {
        title: "Elephant Herd",
        description: "A herd of elephants near a waterhole.",
        location: "Kruger National Park",
        image: GalleryImage4,
      },
    ],
  },
  {
    name: "Architectural",
    images: [
      {
        title: "Ancient Ruins",
        description: "The remains of an ancient civilization.",
        location: "Machu Picchu",
        image: GalleryImage5,
      },
      {
        title: "Modern Skyscraper",
        description: "A towering skyscraper in the city.",
        location: "New York City",
        image: GalleryImage1,
      },
    ],
  },
  {
    name: "Travel",
    images: [
      {
        title: "Beach Paradise",
        description: "A tropical beach with crystal clear water.",
        location: "Maldives",
        image: GalleryImage2,
      },
      {
        title: "Mountain Trek",
        description: "A challenging trek through rugged terrain.",
        location: "Himalayas",
        image: GalleryImage3,
      },
    ],
  },
  {
    name: "Portrait",
    images: [
      {
        title: "Smiling Child",
        description: "A child's infectious smile.",
        location: "Village in India",
        image: GalleryImage4,
      },
      {
        title: "Elderly Wisdom",
        description: "An elderly person with a lifetime of stories.",
        location: "Rural Japan",
        image: GalleryImage5,
      },
    ],
  },
];

export interface Award {
    year: number;
    title: string;
    image: string;
    description: string;
}

export const awards: Award[] = [
  {
    year: 2023,
    title: "Best Innovative Product",
    image: Award1,
    description: "Awarded for the most innovative product of the year.",
  },
  {
    year: 2022,
    title: "Excellence in Design",
    image: Award2,
    description: "Recognized for outstanding design and aesthetics.",
  },
  {
    year: 2021,
    title: "Top Customer Choice",
    image: Award3,
    description: "Voted as the top choice by customers worldwide.",
  },
  {
    year: 2020,
    title: "Sustainability Award",
    image: Award4,
    description: "Awarded for exceptional sustainability practices.",
  },
  {
    year: 2019,
    title: "Innovation in Technology",
    image: Award5,
    description: "Recognized for leading innovation in technology.",
  },
];
  
export interface HomePageImage {
  title: string;
  camera: string;
  image: string;
}

export const homePageImages: HomePageImage[] = [
  {
    title: "Living Room Elegance",
    camera: "Canon EOS R5",
    image: Home1,
  },
  {
    title: "Cozy Bedroom",
    camera: "Nikon D850",
    image: Home2,
  },
  {
    title: "Modern Kitchen",
    camera: "Sony A7 III",
    image: Home3,
  },
];