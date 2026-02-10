import { cn } from "@/lib/utils";



interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  
  className,
  tagline = "Components made easy.",
  menuItems = [
    
    {
      title: "Resourses",
      links: [
        { text: "Tutors", url: "/tutors" },
        { text: "Sessions", url: "/sessions" },
        { text: "Dashboard", url: "/dashboard" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "https://x.com/" },
        { text: "Instagram", url: "https://www.instagram.com/" },
        { text: "LinkedIn", url: "https://www.linkedin.com/" },
      ],
    },
  ],
  copyright = "© 2026 skillbridge All rights reserved.",
}: Footer2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <footer >
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <h1>Skill bridge</h1>
              </div>
              
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
