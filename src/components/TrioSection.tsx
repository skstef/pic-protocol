const ITEMS = [
  {
    title: "Provenance",
    description:
      "The causal chain is always traceable and auditable. From Origin to end, unbroken. If it breaks, it stops.",
    imageURL: "/img/trio/provenance.png",
  },
  {
    title: "Identity",
    description:
      "The origin identity is immutable. It generates authority. It cannot change throughout the chain.",
    imageURL: "/img/trio/identity.png",
  },
  {
    title: "Continuity",
    description:
      "Continuity is proven at every step. Proof of Continuity replaces Proof of Possession. Authority can only shrink.",
    imageURL: "/img/trio/continuity.png",
  },
];

export const TrioSection = () => {
  return (
    <div id="tw-scope" className="grid grid-cols-3 py-40 px-24">
      {ITEMS.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center text-center px-6.5"
        >
          <div className="bg-[#00543D]/5 rounded-full mb-14 aspect-square flex items-center justify-center">
            <img
              src={item.imageURL}
              alt={item.title}
              className="w-70 h-70 mb-6"
            />
          </div>
          <h3 className="text-black  font-[Clash_Grotesk]! tracking-[-0.32px] text-2xl font-medium leading-6 mb-4">
            {item.title}
          </h3>
          <p className="text-[#9C9C9C] tracking-[-0.32px] text-base font-normal leading-6">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
