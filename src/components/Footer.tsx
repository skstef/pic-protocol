import Logo from "../../static/img/logo.svg";

export const Footer = () => {
  return (
    <div
      id="tw-scope"
      className="bg-[#FAFAFA] dark:bg-[#1A1A1C] py-30 flex flex-col gap-y-4 sm:gap-y-6 items-center justify-center px-6 xl:px-30"
    >
      <div className="flex flex-col sm:flex-row gap-y-3 gap-x-2.5">
        <Logo className="text-[#00543D] w-10 h-auto" />
        <p className="text-2xl sm:text-[32px] font-semibold tracking-[-0.48px] sm:tracking-[-0.64px]">
          PIC
        </p>
      </div>
      <p className="text-black/50 dark:text-white/50 leading-[1.2] tracking-[-0.36px] text-[18px] text-center">
        Copyright © 2026 Provenance Identity Continuity Protocol
      </p>
    </div>
  );
};
