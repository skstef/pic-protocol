import Logo from "../../static/img/logo.svg";

const IS_FOOTER_NAV_ENABLED = true;

const NAV_SECTIONS: (
  | {
      title: string;
      href?: string;
      links: {
        title: string;
        href: string;
      }[];
    }
  | {
      title: string;
      href?: string;
      links?: undefined;
    }
)[] = [
  {
    title: "Ontology",
    links: [
      {
        title: "Ontology",
        href: "/docs/ontology",
      },
      {
        title: "The PIC Manifesto",
        href: "/docs/ontology/manifest",
      },
      {
        title: "The Formal Model",
        href: "/docs/ontology/formal-model",
      },
    ],
  },
  {
    title: "Specification",
    links: [
      {
        title: "Spec",
        href: "/docs/specification",
      }
    ],
  },
  {
    title: "Protocol & Code",
    links: [
      {
        title: "Protocol",
        href: "/docs/protocol",
      },
      {
        title: "Code",
        href: "/docs/code",
      }
    ],
  },
  {
    title: "Useful Resources",
    links: [
      {
        title: "Blog",
        href: "/blog",
      }
    ],
  },
];

export const Footer = () => {
  return (
    <footer
      id="tw-scope"
      className="bg-[#FAFAFA] dark:bg-[#1A1A1C] flex  items-center justify-center w-full px-6 xl:px-30"
    >
      <div className="py-12 sm:py-30 max-w-7xl w-full flex flex-col items-center justify-center">
        {IS_FOOTER_NAV_ENABLED && (
          <nav className="w-full mb-30">
            <ul className="w-full grid grid-cols-12 gap-6 ">
              {NAV_SECTIONS.map((navSection) => (
                <li
                  key={navSection.title}
                  className="md:col-span-3 leading-none col-span-6 flex flex-col gap-y-4"
                >
                  {navSection.href ? (
                    <a
                      className="text-black dark:text-white text-[18px] font-semibold leading-[1.2] tracking-[-0.36px]"
                      href={navSection.href}
                    >
                      {navSection.title}
                    </a>
                  ) : (
                    <h3 className="text-black dark:text-white text-[18px] font-semibold leading-[1.2] tracking-[-0.36px]">
                      {navSection.title}
                    </h3>
                  )}

                  {navSection.links ? (
                    <nav>
                      <ul className="flex flex-col gap-y-4">
                        {navSection.links.map((nestedLink) => (
                          <li className="leading-none" key={nestedLink.title}>
                            <a
                              className="text-black dark:text-white text-[18px] font-normal leading-[1.2] tracking-[-0.36px]"
                              href={nestedLink.href}
                            >
                              {nestedLink.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="flex flex-col items-center justify-center sm:flex-row gap-y-3 gap-x-2.5  mb-4 sm:mb-6">
          <Logo className="text-[#00543D] w-12 h-auto" />
          <p className="text-2xl sm:text-[32px] font-semibold tracking-[-0.48px] sm:tracking-[-0.64px]">
            PIC
          </p>
        </div>
        <p className="text-black/50 dark:text-white/50 leading-[1.2] tracking-[-0.36px] text-[18px] text-center">
          Copyright © 2026 Provenance Identity Continuity Protocol
        </p>
      </div>
    </footer>
  );
};
