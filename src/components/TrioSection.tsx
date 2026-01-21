const ITEMS = [
  {
    title: "Provenance",
    description:
      "The causal chain is always traceable and auditable. From Origin to end, unbroken. If it breaks, it stops.",
    imageURL: "/img/trio/provenance.webp",
  },
  {
    title: "Identity",
    description:
      "The origin identity is immutable. It generates authority. It cannot change throughout the chain.",
    imageURL: "/img/trio/identity.webp",
  },
  {
    title: "Continuity",
    description:
      "Continuity is proven at every step. Proof of Continuity replaces Proof of Possession. Authority can only shrink.",
    imageURL: "/img/trio/continuity.webp",
  },
];

export const TrioSection = () => {
  return (
    <div
      id="tw-scope"
      className="pt-12 lg:pt-30 px-6 xl:px-24 dark:bg-[#1F1F21]"
    >
      <div className="max-w-300 mx-auto grid gap-x-6 gap-y-6 md:gap-y-12 grid-cols-1 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex mx-auto w-full lg:mx-0 bg-[#FAFAFA] dark:bg-[#212123] max-w-120 lg:max-w-[384px] flex-col  rounded-4xl items-center text-center pt-2 pb-6 px-2"
          >
            <div className="bg-[#FFFFFF] dark:bg-[#1F1F21] w-full flex items-center justify-center rounded-3xl mb-10 aspect-square">
              <img
                src={item.imageURL}
                alt={item.title}
                className="h-full w-full lg:w-84 lg:h-84 object-contain"
              />
            </div>
            <h3 className="text-black dark:text-white tracking-[-0.64px] text-[32px] font-medium leading-none mb-4">
              {item.title}
            </h3>
            <p className="text-[#9C9C9C] px-4 dark:text-white/50 leading-normal tracking-[-0.36px] text-[18px] font-normal max-w-84">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
