import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiGlobal = forwardRef<SVGSVGElement, IconProps>(function IconAiGlobal(
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
            d="M2 12h20m-6 0q0 1.98-.3 3.83-.3 1.83-.87 3.24-.46 1.2-1.3 2.17-.74.75-1.53.76-.8 0-1.53-.76-.85-.97-1.3-2.17-.55-1.41-.87-3.24a24 24 0 0 1 0-7.66q.3-1.83.87-3.24a7 7 0 0 1 1.3-2.17Q11.21 2.01 12 2q.8 0 1.53.76a7 7 0 0 1 1.3 2.17q.57 1.41.87 3.24A24 24 0 0 1 16 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.42 8.65Q22 10.23 22 12m0 0a10 10 0 0 1-16.24 7.81m-1.68-1.7A10 10 0 0 1 15.35 2.58"
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
            d="M2 12h20m-6 0q0 1.98-.3 3.83-.3 1.83-.87 3.24-.46 1.2-1.3 2.17-.74.75-1.53.76-.8 0-1.53-.76-.85-.97-1.3-2.17-.55-1.41-.87-3.24a24 24 0 0 1 0-7.66q.3-1.83.87-3.24a7 7 0 0 1 1.3-2.17Q11.21 2.01 12 2q.8 0 1.53.76a7 7 0 0 1 1.3 2.17q.57 1.41.87 3.24A24 24 0 0 1 16 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 12a10 10 0 1 1-6.65-9.42m6.07 6.07Q22 10.23 22 12"
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
            d="M2.03 11.25A10 10 0 0 1 12 2c-.83 0-1.57.36-2.18.92A7 7 0 0 0 8.3 5.16q-.63 1.4-.96 3.17-.26 1.4-.32 2.92zm0 1.5H7q.06 1.51.32 2.92.33 1.77.96 3.17.62 1.38 1.53 2.24c.61.56 1.35.92 2.18.92a10 10 0 0 1-9.97-9.25"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.27 2.55c.39.13-.38 1.13-.66.83l-.43-.46-.23-.2-.25-.18-.26-.16-.27-.13-.28-.1-.29-.08-.3-.05L12 2l.49.01.48.04.48.06.46.08.47.1.45.12zm.99 4.1c-.55-2.03 4.37-.17 5.09 1.81l.16.44.13.45.12.47.09.47.07.47.05.49h-4.98l-.04-.75-.07-.74-.1-.72-.11-.71-.19-.86z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.67 15.67a14 14 0 0 1-.96 3.17 7 7 0 0 1-1.53 2.24A3.2 3.2 0 0 1 12 22a10 10 0 0 0 9.97-9.25H17q-.06 1.51-.32 2.92"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 3.4c-.27 0-.63.11-1.04.5a6 6 0 0 0-1.2 1.78Q9.2 6.9 8.89 8.55a19 19 0 0 0-.3 2.7h6.82q-.06-1.4-.3-2.7-.3-1.64-.87-2.87a6 6 0 0 0-1.2-1.79c-.4-.38-.76-.5-1.04-.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.89 15.45q.3 1.65.87 2.87a6 6 0 0 0 1.2 1.79c.41.38.77.5 1.04.5.28 0 .63-.12 1.04-.5a6 6 0 0 0 1.2-1.8q.56-1.21.87-2.86.24-1.3.3-2.7H8.59q.06 1.4.3 2.7"
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
            d="M2.03 11.25A10 10 0 0 1 12 2c-.83 0-1.57.36-2.18.92A7 7 0 0 0 8.3 5.16q-.63 1.4-.96 3.17-.26 1.4-.32 2.92zm0 1.5H7q.06 1.51.32 2.92.33 1.77.96 3.17.62 1.38 1.53 2.24c.61.56 1.35.92 2.18.92a10 10 0 0 1-9.97-9.25"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12 3.4c-.27 0-.63.11-1.04.5a6 6 0 0 0-1.2 1.78Q9.2 6.9 8.89 8.55a19 19 0 0 0-.3 2.7h6.82a19 19 0 0 0-.3-2.7q-.3-1.64-.87-2.87a6 6 0 0 0-1.2-1.79c-.41-.38-.76-.5-1.04-.5"
            fill="currentColor"
          />
          <path
            d="M8.89 15.45q.3 1.65.87 2.87a6 6 0 0 0 1.2 1.79c.41.38.77.5 1.04.5.28 0 .63-.12 1.04-.5a6 6 0 0 0 1.2-1.8q.56-1.21.87-2.86.24-1.3.3-2.7H8.59q.06 1.4.3 2.7"
            fill="currentColor"
          />
          <path
            d="M15.27 2.55c.39.13-.38 1.13-.66.83l-.43-.46-.23-.2-.25-.18-.26-.16-.27-.13-.28-.1-.29-.08-.3-.05L12 2l.49.01.48.04.48.06.46.08.47.1.45.12zm.99 4.1c-.55-2.03 4.37-.17 5.09 1.81l.16.44.13.45.12.47.09.47.07.47.05.49h-4.98l-.04-.75-.07-.74-.1-.72-.11-.71-.19-.86z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.67 15.67a14 14 0 0 1-.96 3.17 7 7 0 0 1-1.53 2.24A3.2 3.2 0 0 1 12 22a10 10 0 0 0 9.97-9.25H17q-.06 1.51-.32 2.92"
            fill="currentColor"
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

export default IconAiGlobal;
