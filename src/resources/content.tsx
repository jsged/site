import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "James",
  lastName: "Edwards",
  name: `James Edwards`,
  role: "Nothing :)",
  avatar: "/images/avatar.jpg",
  email: "mail@jsged.com",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jsged",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "X (Twitter)",
    icon: "twitter",
    link: "https://x.com/TheRealJameez",
  },
  {
    name: "Google Play Developer",
    icon: "googleplay",
    link: "https://planned.jsged.com/",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://planned.jsged.com/",
  },
  {
    name: "Steam",
    icon: "steam",
    link: "https://planned.jsged.com/",
  },
  {
    name: "Spotify",
    icon: "spotify",
    link: "https://open.spotify.com/user/316ay2es2vpdrbwpto7ffe66jq2a?si=c0b249f89c7b4960",
  }
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm James, and i program applications and computer games and i also work in live events such as festivals and theatre shows.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Aurian Lighting",
        timeframe: "November 2025",
        role: "Set Construction, Rigging and Followspot Op.",
        achievements: [
          <>
            Set Constrcution role was completed with my dad, Paul Edwards on behalf of <i>Salt & Pepper Productions</i>.
          </>,
          <>
            Rigging and Followspot Op. was completed on behalf of Aurian Lighting at The Grange Theatre, Northwich.
          </>,
          <>
            Learnt the manual operation of the Chauvet Followspot 120S.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/gbbo/cover.jpeg",
            alt: "Great British Bake Off: The Musical @ The Grange Theatre, Northwich",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Bailey Audio Systems",
        timeframe: "July 2025",
        role: "Work Experience Technician",
        achievements: [
          <>
            Completed and Passed my Year 10 (High School) work experience.
          </>,
          <>
            Learnt how to use the FLX S24 (ZerOS) from Zero 88.
          </>,
          <>
            Did lighting desing on operation for Frozen Jr. (The Muscial) at Rudheath High School.
          </>,
          <>
            Images Soon to Come.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "None of Your Business...",
        description: <>Providing my current educational facility would be innapropriate.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/gbbo-1.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gbbo-3.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gbbo-2.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gbbo-4.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
