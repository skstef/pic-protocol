export const HeroSection = () => {
  return (
    <div
      id="tw-scope"
      className="flex dark:bg-[#1a1a1c] -mt-37 pt-40 px-30 justify-center items-center max-h-242 overflow-hidden relative"
    >
      <div className="p-20.75 z-10 rounded-full bg-white/25 dark:bg-[#1A1A1C]/50 border border-[#EDEDED] dark:border-[#232323] circle-shadow backdrop-blur-sm">
        <div className="p-24.25 rounded-full bg-white/50 dark:bg-[#1A1A1C]/50 border border-[#EDEDED] dark:border-[#232323] circle-shadow backdrop-blur-sm">
          <div className="w-203 h-203 rounded-full border border-[#EDEDED] dark:border-[#232323] bg-white dark:bg-[#1A1A1C] circle-shadow flex flex-col items-center justify-center">
            <h1 className="text-[#00543D] dark:text-white tracking-widest text-center text-xs font-semibold uppercase leading-3">
              Lorem Heading
            </h1>
            <h2 className="text-black dark:text-white tracking-[-1.28px] font-[Clash_Grotesk]! text-center text-[64px] font-medium leading-16 mt-1 max-w-140">
              Provenance Identity Continuity
            </h2>
            <p className="text-black/50 dark:text-white/50 tracking-[-0.32px] text-center text-base font-normal leading-6 mt-4 max-w-137.5">
              Lorem ipsum dolor sit amet consectetur. Iaculis lacus aenean amet
              lectus tempus et id vulputate. At diam facilisis lorem ipsum augue
              pretium mi.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="pt-3.5 pb-3 leading-normal tracking-[-0.48px] cursor-pointer px-6 hover:bg-[#004130] bg-[#00543D] rounded-full text-white hover:text-white/90 text-base font-semibold"
              >
                Get Started
              </a>
              <a
                href="#"
                className="pt-3.5 pb-3 leading-normal dark:bg-white dark:hover:bg-white/80 dark:hover:text-black/80 dark:text-black tracking-[-0.48px] cursor-pointer px-6 border hover:border-[#EDEDED]/75 border-[#EDEDED] rounded-full text-black hover:text-black/60 text-base font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute left-[50%] transform translate-x-[-50%]  right-0 bottom-0 w-full max-w-[1440px]"
        src="./img/chain.png"
        alt=""
      />
    </div>
  );
};
