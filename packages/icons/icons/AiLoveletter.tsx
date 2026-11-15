import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiLoveletter = forwardRef<SVGSVGElement, IconProps>(function IconAiLoveletter(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  /* The four drawings are two booleans: filled or stroked, and whether the
     secondary shapes drop to half tone. */
  const fill = variant === "Bold" || variant === "Bulk";
  const duotone = variant === "TwoTone" || variant === "Bulk";

  /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
  const labelled =
    rest["aria-label"] != null || rest["aria-labelledby"] != null;
  const a11y: SVGProps<SVGSVGElement> = labelled
    ? { role: "img" }
    : { "aria-hidden": true };

  return (
    <>
      {variant === "Broken" ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="M13.88 21H6.5c-1.7 0-3-1.3-3-3v-7.5L12 16l8.5-5.5V18c0 1.7-1.3 3-3 3h-1.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 12.5v-7c0-1.1.9-2 2-2h7q.52 0 .95.24m1.05 2.6v6.16m-5.5-1c-1.6-1-2.4-1.9-2.4-2.8 0-.8.6-1.3 1.3-1.3.5 0 .9.3 1.1.7.2-.4.6-.7 1.1-.7.7 0 1.3.5 1.3 1.3 0 .9-.8 1.8-2.4 2.8z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 2.3c.2 1.45.75 2 2.2 2.2-1.45.2-2 .75-2.2 2.2-.2-1.45-.75-2-2.2-2.2 1.45-.2 2-.75 2.2-2.2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.5 10.5 12 16l8.5-5.5V18c0 1.7-1.3 3-3 3h-11c-1.7 0-3-1.3-3-3zm3 2v-7c0-1.1.9-2 2-2h7q.52 0 .95.24m1.05 2.6v6.16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.5c-1.6-1-2.4-1.9-2.4-2.8 0-.8.6-1.3 1.3-1.3.5 0 .9.3 1.1.7.2-.4.6-.7 1.1-.7.7 0 1.3.5 1.3 1.3 0 .9-.8 1.8-2.4 2.8z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 2.3c.2 1.45.75 2 2.2 2.2-1.45.2-2 .75-2.2 2.2-.2-1.45-.75-2-2.2-2.2 1.45-.2 2-.75 2.2-2.2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.9 9.87 8.1 5.24 8.1-5.24a.75.75 0 0 1 1.15.63V18a4 4 0 0 1-1.08 2.67 4 4 0 0 1-2.67 1.08h-11a4 4 0 0 1-2.67-1.08A4 4 0 0 1 2.75 18v-7.5a.75.75 0 0 1 1.16-.63zm1.85 2.63V6.88c0-.98-.12-2 .44-2.86.41-.65 1.1-1.1 1.86-1.23.43-.08.88-.04 1.32-.04h4.9c.5 0 1.02-.04 1.52.02.58.06 1.13.3 1.56.7a1.4 1.4 0 0 0 .76 2.42l.15.01v6.6a.75.75 0 0 1-1.5 0V5.92c0-.39.01-.75-.2-1.09-.46-.71-1.31-.58-2.05-.58H9.5c-.74 0-1.58-.13-2.04.58-.22.34-.2.7-.2 1.09v6.58a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
          />
          <path
            d="M11.6 12.14c-1.68-1.07-2.75-2.3-2.75-3.44 0-.56.28-1.17.62-1.5a2.3 2.3 0 0 1 1.43-.55c.48 0 .86.2 1.1.47.24-.27.62-.47 1.1-.47a2.3 2.3 0 0 1 1.43.55c.34.33.62.94.62 1.5 0 1.14-1.07 2.37-2.75 3.44a.8.8 0 0 1-.8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M20.9 1.9c.1.8.27 1.25.61 1.59s.8.51 1.6.61a.4.4 0 0 1 0 .8c-.8.1-1.26.27-1.6.61s-.51.8-.61 1.6a.4.4 0 0 1-.8 0c-.1-.8-.27-1.26-.61-1.6s-.8-.51-1.6-.62a.4.4 0 0 1 0-.79c.8-.1 1.26-.27 1.6-.61s.51-.8.61-1.6a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="m3.9 9.87 1.85 1.2v-4.2c0-.97-.12-2 .44-2.85.41-.65 1.1-1.1 1.86-1.23.43-.08.88-.04 1.32-.04h4.9c.5 0 1.02-.04 1.52.01.58.07 1.13.32 1.56.71a1.4 1.4 0 0 0 .76 2.42l.15.01v5.16l1.83-1.19a.75.75 0 0 1 1.16.63V18a4 4 0 0 1-1.08 2.67 4 4 0 0 1-2.67 1.08h-11a4 4 0 0 1-2.67-1.08A4 4 0 0 1 2.75 18v-7.5a.75.75 0 0 1 1.16-.63zm8.1 5.24 4.75-3.08V5.92c0-.39.02-.75-.2-1.09-.45-.71-1.3-.58-2.04-.58H9.5c-.74 0-1.58-.13-2.04.58-.22.34-.2.7-.2 1.09v6.11zm-.4-2.97c-1.68-1.07-2.75-2.3-2.75-3.44 0-.56.28-1.17.62-1.5a2.3 2.3 0 0 1 1.43-.55c.48 0 .86.2 1.1.47.24-.27.62-.47 1.1-.47a2.3 2.3 0 0 1 1.43.55c.34.33.62.94.62 1.5 0 1.14-1.07 2.37-2.75 3.44a.8.8 0 0 1-.8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M20.9 1.9c.1.8.27 1.25.61 1.59s.8.51 1.6.61a.4.4 0 0 1 0 .8c-.8.1-1.26.27-1.6.61s-.51.8-.61 1.6a.4.4 0 0 1-.8 0c-.1-.8-.27-1.26-.61-1.6s-.8-.51-1.6-.62a.4.4 0 0 1 0-.79c.8-.1 1.26-.27 1.6-.61s.51-.8.61-1.6a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiLoveletter;
