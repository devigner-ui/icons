import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMetrics = forwardRef<SVGSVGElement, IconProps>(function IconAiMetrics(
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
            d="M10.11 11.15H7.46c-.63 0-1.14.51-1.14 1.14v5.12h3.79z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M12.76 6.6h-1.52c-.63 0-1.14.51-1.14 1.14v9.66h3.79V7.74c0-.63-.5-1.14-1.13-1.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M16.55 12.85H13.9v4.55h3.79v-3.41a1.15 1.15 0 0 0-1.14-1.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M9 22h6c5 0 7-2 7-7V9q0-.66-.05-1.24m-5.71-5.71Q15.65 2 15 2H9C4 2 2 4 2 9v2.19m0 2.4V15c0 5 2 7 7 7"
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
            opacity={duotone ? "0.4" : "1"}
            d="M10.11 11.15H7.46c-.63 0-1.14.51-1.14 1.14v5.12h3.79zm2.65-4.55h-1.52c-.63 0-1.14.51-1.14 1.14v9.66h3.79V7.74c0-.63-.5-1.14-1.13-1.14m3.79 6.25H13.9v4.55h3.79v-3.41a1.15 1.15 0 0 0-1.14-1.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M9 22h6c5 0 7-2 7-7V9q0-.66-.05-1.24m-5.71-5.71Q15.65 2 15 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
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
            d="M16.86 2.03a5.3 5.3 0 0 1 5.12 5.12l.02.66v8.37l-.02.67-.08.63-.12.59-.17.56-.22.51-.27.48-.3.44-.36.4-.4.34-.43.31-.48.27-.51.22-.56.17-.6.12-.62.08-.67.02H7.82l-.66-.02-.63-.08-.6-.12-.55-.17-.52-.22-.48-.27-.43-.3-.4-.36-.35-.4-.31-.43-.26-.48-.22-.51-.17-.56-.13-.6-.07-.62-.03-.67V7.81l.03-.66.07-.63.13-.6.17-.55.22-.52.26-.48.3-.43.36-.4.4-.35.43-.31.48-.26.52-.22.55-.17.6-.13.63-.07.66-.03h8.37z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M10.11 11.15H7.46c-.63 0-1.14.51-1.14 1.14v5.12h3.79z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.76 6.6h-1.52c-.63 0-1.14.51-1.14 1.14v9.66h3.79V7.74c0-.63-.5-1.14-1.13-1.14"
            fill="currentColor"
          />
          <path
            d="M16.55 12.85H13.9v4.55h3.79v-3.41a1.15 1.15 0 0 0-1.14-1.14"
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
            d="M16.86 2.03c3.01.13 5.13 2.77 5.13 5.78v8.38l-.02.67-.08.63-.12.59-.17.56-.22.51-.26.48-.31.44-.36.4-.4.35-.43.3-.48.27-.51.22-.56.17-.6.12-.62.08-.67.02H7.81l-.66-.02-.63-.08-.6-.12-.55-.17-.51-.22-.48-.27-.44-.3-.4-.36-.34-.4-.31-.43-.26-.48-.22-.52-.17-.56-.13-.59-.07-.63-.03-.67V7.81l.03-.66.07-.63.13-.6.17-.55.22-.52.26-.48.3-.43.36-.4.4-.35.43-.31.48-.26.51-.22.56-.17.59-.13.63-.07L7.8 2h8.38zM9.1 16.9a.5.5 0 0 1-.5.5H5.83a.5.5 0 0 1-.5-.5v-4.62c0-.63.51-1.14 1.14-1.14h2.15c.28 0 .5.22.5.5zm4.78 0a.5.5 0 0 1-.5.5H10.6a.5.5 0 0 1-.5-.5V7.74c0-.63.51-1.14 1.14-1.14h1.52c.63 0 1.14.51 1.14 1.14zm4.8 0a.5.5 0 0 1-.5.5h-2.8a.5.5 0 0 1-.5-.5v-3.55c0-.28.22-.5.5-.5h2.15c.63 0 1.14.51 1.14 1.14z"
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

export default IconAiMetrics;
