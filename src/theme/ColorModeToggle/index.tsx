import React, { JSX } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5Z"
        stroke="currentColor"
        strokeWidth="0.875"
      />
      <path
        d="M7.0013 1.16406V1.7474M7.0013 12.2474V12.8307M12.8346 6.9974H12.2513M1.7513 6.9974H1.16797M11.1255 2.87323L10.8968 3.10248M3.1058 10.8929L2.87655 11.1221M11.1255 11.1216L10.8968 10.8923M3.1058 3.1019L2.87655 2.87265"
        stroke="currentColor"
        strokeWidth="0.875"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <g clipPath="url(#clip0_1382_7852)">
        <path
          d="M12.3971 6.9974C12.3971 8.42846 11.8286 9.80091 10.8167 10.8128C9.80482 11.8247 8.43237 12.3932 7.0013 12.3932V13.2682C10.4646 13.2682 13.2721 10.4606 13.2721 6.9974H12.3971ZM7.0013 12.3932C5.57024 12.3932 4.19779 11.8247 3.18587 10.8128C2.17396 9.80091 1.60547 8.42846 1.60547 6.9974H0.730469C0.730469 10.4606 3.53805 13.2682 7.0013 13.2682V12.3932ZM1.60547 6.9974C1.60547 5.56633 2.17396 4.19388 3.18587 3.18197C4.19779 2.17005 5.57024 1.60156 7.0013 1.60156V0.726562C3.53805 0.726562 0.730469 3.53415 0.730469 6.9974H1.60547ZM9.04297 8.3099C8.15339 8.3099 7.30024 7.95651 6.67122 7.32748C6.04219 6.69845 5.6888 5.84531 5.6888 4.95573H4.8138C4.8138 6.07737 5.25937 7.15308 6.0525 7.9462C6.84562 8.73932 7.92132 9.1849 9.04297 9.1849V8.3099ZM11.9159 6.68765C11.6174 7.18269 11.196 7.59219 10.6927 7.87643C10.1893 8.16066 9.62104 8.30998 9.04297 8.3099V9.1849C9.77178 9.18511 10.4883 8.99698 11.123 8.63875C11.7577 8.28053 12.289 7.76436 12.6655 7.14031L11.9159 6.68765ZM5.6888 4.95573C5.68872 4.37766 5.83804 3.80938 6.12227 3.30602C6.40651 2.80266 6.81601 2.3813 7.31105 2.08281L6.85839 1.33381C6.23442 1.71023 5.71831 2.24148 5.36009 2.87606C5.00186 3.51064 4.81369 4.22702 4.8138 4.95573H5.6888ZM7.0013 1.60156C6.97199 1.601 6.94307 1.59462 6.91624 1.58281C6.8894 1.57099 6.86518 1.55397 6.84497 1.53273C6.82038 1.50803 6.80372 1.47654 6.79714 1.44231C6.7948 1.42423 6.79597 1.37173 6.85839 1.33381L7.31105 2.08281C7.60447 1.90548 7.69897 1.58056 7.66455 1.32506C7.62839 1.05965 7.41955 0.726562 7.0013 0.726562V1.60156ZM12.6655 7.14031C12.627 7.20273 12.5745 7.2039 12.5564 7.20156C12.5222 7.19498 12.4907 7.17832 12.466 7.15373C12.4447 7.13352 12.4277 7.10929 12.4159 7.08246C12.4041 7.05562 12.3977 7.02671 12.3971 6.9974H13.2721C13.2721 6.57915 12.9391 6.37031 12.6736 6.33415C12.4181 6.29973 12.0932 6.39423 11.9159 6.68765L12.6655 7.14031Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1382_7852">
          <rect width="14" height="14" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function ColorModeToggle(): JSX.Element {
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      onClick={() => setColorMode(isDark ? "light" : "dark")}
      id="tw-scope"
      className={clsx(
        `rounded-full flex bg-white dark:bg-[#262628] border border-[#EDEDED] dark:border-[#3C3C3E]`,
        `relative h-7.5 w-14.5 justify-between p-1`
      )}
    >
      {/* Sliding knob */}
      <span
        className={clsx(
          "absolute top-0.5 left-1 h-6 w-6 rounded-full bg-[#00543D] dark:bg-white transition-transform duration-300",
          isDark ? "translate-x-6.25" : "-translate-x-px"
        )}
      />

      {/* Sun */}
      <span
        className={clsx(
          "z-10 flex p-1 items-center justify-center text-[#9C9C9C]",
          isDark ? "text-[#9C9C9C]" : "text-white dark:text-black"
        )}
      >
        <SunIcon />
      </span>

      {/* Moon */}
      <span
        className={clsx(
          "z-10 flex p-1 items-center justify-center text-[#9C9C9C]",
          !isDark ? "text-[#9C9C9C]" : "text-white dark:text-black"
        )}
      >
        <MoonIcon />
      </span>
    </button>
  );
}
