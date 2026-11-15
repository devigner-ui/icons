import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiDiscount = forwardRef<SVGSVGElement, IconProps>(function IconAiDiscount(
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

  /* Bold and Bulk cut the body around the sparkle with the same rounded
     shape as AiClipboard, so the gap matches across the AI icons. */
  const cut = useId();

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
            d="M9.01 2h6q.65 0 1.23.05m5.72 5.69q.05.6.05 1.26v6c0 5-2 7-7 7h-6c-5 0-7-2-7-7v-1.39m0-2.4V9c0-5 2-7 7-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m8.33 15.27 6.54-6.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.74 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.28 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M9.01 2h6q.65 0 1.23.05m5.72 5.69q.05.6.05 1.26v6c0 5-2 7-7 7h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.33 15.27 6.54-6.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.74 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.28 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.21 2c3.02 0 5.69 2.13 5.78 5.15l.02.66v8.37l-.02.67-.08.63-.12.59-.17.55-.22.52-.27.48-.3.44-.36.4-.4.34-.43.31-.48.27-.52.21-.55.18-.6.12-.62.08-.67.02H7.83l-.66-.02-.63-.08-.6-.12-.55-.18-.52-.21-.47-.27-.44-.3-.4-.36-.35-.4-.3-.43-.27-.48-.21-.52-.18-.55-.12-.6-.07-.62-.03-.67V7.81l.03-.66.07-.63.12-.6.18-.55.21-.52.27-.48.3-.43.36-.4.39-.35.44-.31.47-.27.52-.21.55-.18.6-.12.63-.07.66-.03z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.83 16.02a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l6.55-6.55a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06L9.36 15.8a.7.7 0 0 1-.53.22"
            fill="currentColor"
          />
          <path
            d="M9.24 7.66a1.48 1.48 0 0 0 0 2.96 1.48 1.48 0 0 0 0-2.96"
            fill="currentColor"
          />
          <path
            d="M15.78 13.39a1.48 1.48 0 0 0 0 2.96 1.48 1.48 0 0 0 0-2.96"
            fill="currentColor"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M16.2 2c3.02 0 5.7 2.13 5.79 5.15l.02.66v8.38l-.02.67-.08.63-.12.59-.18.56-.21.51-.27.48-.3.44-.36.4-.4.35-.43.3-.48.27-.52.22-.55.17-.6.12-.62.08-.67.02H7.83l-.66-.02-.63-.08-.6-.12-.55-.17-.52-.22-.47-.27-.44-.3-.4-.36-.35-.4-.3-.43-.27-.48-.22-.52-.17-.56-.12-.59-.07-.63-.03-.67V7.81l.03-.66.07-.63.12-.6.17-.55.22-.52.26-.48.31-.43.35-.4.4-.35.43-.31.48-.26.51-.22.56-.17.6-.13.62-.07.67-.03zM7.76 9.14a1.48 1.48 0 1 1 2.96 0 1.48 1.48 0 0 1-2.96 0m1.07 6.88a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l6.55-6.55c.3-.3.77-.3 1.06 0 .3.29.3.77 0 1.06L9.36 15.8a.7.7 0 0 1-.53.22m6.95.32a1.48 1.48 0 1 1 0-2.96 1.48 1.48 0 0 1 0 2.96"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiDiscount;
