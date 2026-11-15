import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiNetworkDollar = forwardRef<SVGSVGElement, IconProps>(function IconAiNetworkDollar(
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
            d="M8.66 20.36a9 9 0 0 1 5.43-17.12m6.67 6.67A9 9 0 0 1 12 21q-.51 0-1.02-.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 9.5C14.2 8.5 13.2 8 12 8c-1.4 0-2.5.8-2.5 1.9 0 2.6 5 1.3 5 4.2 0 1.1-1.1 1.9-2.5 1.9-1.2 0-2.2-.6-2.5-1.5m2.5-8V8m0 8v1.5"
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
            d="M14.56 3.37a9 9 0 1 0 6.07 6.07"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 9.5C14.2 8.5 13.2 8 12 8c-1.4 0-2.5.8-2.5 1.9 0 2.6 5 1.3 5 4.2 0 1.1-1.1 1.9-2.5 1.9-1.2 0-2.2-.6-2.5-1.5m2.5-8V8m0 8v1.5"
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
            d="M15.62 2.96a8.8 8.8 0 0 1 5.42 5.42q.7 1.71.71 3.62a10 10 0 0 1-2.86 6.9A10 10 0 0 1 12 21.75a10 10 0 0 1-6.9-2.86A10 10 0 0 1 2.26 12a10 10 0 0 1 2.86-6.9A10 10 0 0 1 12 2.26v-.01q1.9.02 3.62.71"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M14.72 10.22c.4-.12.62-.54.5-.94a3 3 0 0 0-2.47-1.97V6.5a.75.75 0 0 0-1.5 0v.81l-.38.1c-1 .28-1.9 1.02-2.08 2.08a2.5 2.5 0 0 0 .1 1.2c.45 1.3 1.91 1.62 3.08 1.97.61.18 1.59.4 1.75 1.14.14.66-.31 1.12-.9 1.32q-.36.12-.77.13h-.1c-.73 0-1.48-.3-1.74-.99a.75.75 0 0 0-1.42.48 3.2 3.2 0 0 0 2.46 1.94v.82a.75.75 0 0 0 1.5 0v-.81l.4-.1c1-.3 1.9-1.05 2.07-2.11q.06-.42 0-.83c-.25-1.56-1.73-2.11-3.06-2.5-.47-.13-.98-.26-1.41-.5-.23-.13-.44-.3-.49-.57-.1-.61.4-1.03.94-1.2a3 3 0 0 1 .9-.14c.72.02 1.45.3 1.68.98.12.4.54.62.93.5z"
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
            d="M15.62 2.96a8.8 8.8 0 0 1 5.42 5.42q.7 1.71.71 3.62a10 10 0 0 1-2.86 6.9A10 10 0 0 1 12 21.75a10 10 0 0 1-6.9-2.86A10 10 0 0 1 2.26 12a10 10 0 0 1 2.86-6.9A10 10 0 0 1 12 2.26v-.01q1.9.02 3.62.71m-.9 7.26c.4-.12.62-.54.5-.94a3 3 0 0 0-2.47-1.97V6.5a.75.75 0 0 0-1.5 0v.81l-.38.1c-1 .28-1.9 1.02-2.08 2.08a2.5 2.5 0 0 0 .1 1.2c.45 1.3 1.91 1.62 3.08 1.97.61.18 1.59.4 1.75 1.14.14.66-.31 1.12-.9 1.32q-.36.12-.77.13h-.1c-.73 0-1.48-.3-1.74-.99a.75.75 0 0 0-1.42.48 3.2 3.2 0 0 0 2.46 1.94v.82a.75.75 0 0 0 1.5 0v-.81l.4-.1c1-.3 1.9-1.05 2.07-2.11q.06-.42 0-.83c-.25-1.56-1.73-2.11-3.06-2.5-.47-.13-.98-.26-1.41-.5-.23-.13-.44-.3-.49-.57-.1-.61.4-1.03.94-1.2a3 3 0 0 1 .9-.14c.72.02 1.45.3 1.68.98.12.4.54.62.93.5z"
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

export default IconAiNetworkDollar;
