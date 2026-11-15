import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAi3dSquare = forwardRef<SVGSVGElement, IconProps>(function IconAi3dSquare(
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
            d="M9 22h6c5 0 7-2 7-7V9q0-.66-.05-1.24m-5.71-5.71Q15.65 2 15 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m6.7 9.26 5.3 3.07 5.26-3.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.77v-5.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m10.76 6.29-3.2 1.78a2.8 2.8 0 0 0-1.32 2.24v3.39c0 .83.6 1.84 1.32 2.24l1.08.6m2.1 1.17.02.01c.68.38 1.8.38 2.5 0l3.2-1.78a2.8 2.8 0 0 0 1.31-2.24v-3.4c0-.83-.59-1.84-1.32-2.24l-3.2-1.78a2.8 2.8 0 0 0-2.49.01"
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
            d="M9 22h6c5 0 7-2 7-7V9q0-.66-.05-1.24m-5.71-5.71Q15.65 2 15 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m6.7 9.26 5.3 3.07 5.26-3.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 17.77v-5.45"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m10.76 6.29-3.2 1.78a2.8 2.8 0 0 0-1.32 2.24v3.39c0 .83.6 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.5 0l3.2-1.78a2.8 2.8 0 0 0 1.31-2.24v-3.4c0-.83-.59-1.84-1.32-2.24l-3.2-1.78a2.8 2.8 0 0 0-2.49.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M16.86 2C19.88 2.09 22 4.78 22 7.8v8.36l-.02.67-.08.63-.12.59-.17.55-.22.52-.27.48-.3.43-.36.4-.4.35-.43.31-.48.27-.51.21-.56.18-.6.12-.62.08-.67.02H7.82l-.66-.02-.63-.08-.6-.12-.55-.18-.52-.21-.48-.27-.43-.3-.4-.36-.35-.4-.31-.43-.26-.48-.22-.52-.17-.55-.13-.6-.07-.63-.03-.66V7.79l.03-.66.07-.63.13-.6.17-.55.22-.52.26-.48.3-.43.36-.4.4-.35.43-.31.48-.27.52-.21.55-.18.6-.12.63-.07.66-.03h8.37z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m16.4 7.86-3.76-2.03c-.4-.21-.87-.21-1.27 0L7.61 7.86a.9.9 0 0 0-.44.77c0 .33.17.62.44.77l3.76 2.03q.3.16.64.16t.64-.16l3.76-2.03a.9.9 0 0 0 .44-.77.9.9 0 0 0-.45-.77"
            fill="currentColor"
          />
          <path
            d="m10.74 12.12-3.5-1.75a.87.87 0 0 0-1.25.77v3.31c0 .57.32 1.09.83 1.34l3.5 1.75a.9.9 0 0 0 .84-.04.9.9 0 0 0 .41-.73v-3.31c0-.57-.31-1.08-.83-1.34"
            fill="currentColor"
          />
          <path
            d="M17.59 10.41a.9.9 0 0 0-.84-.04l-3.5 1.75a1.5 1.5 0 0 0-.83 1.34v3.31q.01.47.41.73.21.13.45.13.2 0 .39-.09l3.5-1.75c.51-.26.83-.77.83-1.34v-3.31q-.01-.47-.41-.73"
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
            d="M16.86 2c3.02.09 5.13 2.78 5.13 5.8v8.37l-.02.66-.08.63-.12.6-.17.55-.22.52-.27.48-.3.43-.36.4-.4.35-.43.31-.48.27-.51.21-.56.18-.6.12-.62.08-.67.02H7.81l-.66-.03-.63-.07-.6-.12-.55-.18-.52-.21-.47-.27-.44-.3-.4-.36-.34-.4-.31-.43-.27-.48-.21-.52-.17-.55-.13-.6-.07-.63-.03-.66V7.8l.03-.67.07-.63.13-.59.17-.56.21-.51.27-.48.3-.44.36-.4.4-.35.43-.3.47-.27.52-.22.56-.17.59-.13.63-.07.66-.03h8.38zm-5.29 14.77q0 .47-.4.73a1 1 0 0 1-.46.13 1 1 0 0 1-.39-.09l-3.5-1.75A1.5 1.5 0 0 1 6 14.45v-3.31q0-.47.41-.73a.9.9 0 0 1 .84-.04l3.5 1.75c.51.26.83.77.83 1.34zm-.2-5.35L7.59 9.39a.9.9 0 0 1-.44-.77c0-.32.17-.62.44-.77l3.76-2.03c.4-.21.87-.21 1.27 0l3.76 2.03c.27.15.44.44.44.77s-.17.62-.44.77l-3.76 2.03c-.4.22-.87.22-1.27 0m6.63 3.03c0 .57-.32 1.09-.83 1.34l-3.5 1.75a.9.9 0 0 1-.84-.04.9.9 0 0 1-.4-.73v-3.31c0-.57.31-1.09.82-1.34l3.5-1.75a.87.87 0 0 1 1.25.77z"
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

export default IconAi3dSquare;
