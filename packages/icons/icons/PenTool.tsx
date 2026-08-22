import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPenTool = forwardRef<SVGSVGElement, IconProps>(function IconPenTool(
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
      {!fill ? (
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M11.42 22.5h2.52c.96 0 1.58-.68 1.4-1.51l-.41-1.81h-4.5l-.41 1.81c-.18.78.5 1.51 1.4 1.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m14.93 19.17 1.73-1.54c.97-.86 1.01-1.46.24-2.43l-3.05-3.87c-.64-.81-1.69-.81-2.33 0L8.47 15.2c-.77.97-.77 1.6.24 2.43l1.73 1.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.68 11.12v2.53"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="m11.82 5.19-.78-.78a1.2 1.2 0 0 1 0-1.7l.78-.78a1.2 1.2 0 0 1 1.7 0l.78.78a1.2 1.2 0 0 1 0 1.7l-.78.78a1.2 1.2 0 0 1-1.7 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.12 9.81h1.1c.66 0 1.2.54 1.2 1.2v1.1c0 .66-.54 1.2-1.2 1.2h-1.1a1.2 1.2 0 0 1-1.2-1.2v-1.1c0-.66.54-1.2 1.2-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.22 9.81h-1.1c-.66 0-1.2.54-1.2 1.2v1.1c0 .66.54 1.2 1.2 1.2h1.1c.66 0 1.2-.54 1.2-1.2v-1.1c0-.66-.54-1.2-1.2-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m19.21 10.1-5.3-5.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m6.13 10.1 5.3-5.3"
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
            d="m11.82 5.19-.78-.78a1.2 1.2 0 0 1 0-1.7l.78-.78a1.2 1.2 0 0 1 1.7 0l.78.78a1.2 1.2 0 0 1 0 1.7l-.78.78a1.2 1.2 0 0 1-1.7 0"
            fill="currentColor"
          />
          <path
            d="M12.67 5.91c-.4 0-.81-.15-1.11-.46l-.78-.78a1.6 1.6 0 0 1 0-2.23l.78-.78c.59-.6 1.63-.59 2.23 0l.78.78c.61.61.61 1.61 0 2.23l-.78.78c-.31.31-.72.46-1.12.46m0-3.95a.8.8 0 0 0-.58.24l-.78.78a.83.83 0 0 0 0 1.17l.78.78c.32.32.84.32 1.17 0l.78-.78a.83.83 0 0 0 0-1.17l-.78-.78a1 1 0 0 0-.59-.24"
            fill="currentColor"
          />
          <path
            d="M20.12 9.81h1.1c.66 0 1.2.54 1.2 1.2v1.1c0 .66-.54 1.2-1.2 1.2h-1.1a1.2 1.2 0 0 1-1.2-1.2v-1.1c0-.66.54-1.2 1.2-1.2"
            fill="currentColor"
          />
          <path
            d="M21.22 13.69h-1.1c-.87 0-1.58-.71-1.58-1.58v-1.1c0-.87.71-1.58 1.58-1.58h1.1c.87 0 1.58.71 1.58 1.58v1.1a1.6 1.6 0 0 1-1.58 1.58m-1.1-3.5a.83.83 0 0 0-.83.83v1.1c0 .46.37.83.83.83h1.1c.46 0 .83-.37.83-.83v-1.1a.83.83 0 0 0-.83-.83z"
            fill="currentColor"
          />
          <path
            d="M5.22 9.81h-1.1c-.66 0-1.2.54-1.2 1.2v1.1c0 .66.54 1.2 1.2 1.2h1.1c.66 0 1.2-.54 1.2-1.2v-1.1c0-.66-.54-1.2-1.2-1.2"
            fill="currentColor"
          />
          <path
            d="M5.22 13.69h-1.1c-.87 0-1.58-.71-1.58-1.58v-1.1c0-.87.71-1.58 1.58-1.58h1.1c.87 0 1.58.71 1.58 1.58v1.1a1.6 1.6 0 0 1-1.58 1.58m-1.1-3.5a.83.83 0 0 0-.83.83v1.1c0 .46.37.83.83.83h1.1c.46 0 .83-.37.83-.83v-1.1a.83.83 0 0 0-.83-.83z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.38 4.27c.3-.3.77-.3 1.06 0l5.3 5.3a.75.75 0 1 1-1.06 1.06l-5.3-5.3a.75.75 0 0 1 0-1.06"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.96 4.27c.3.3.3.77 0 1.06l-5.3 5.3A.75.75 0 1 1 5.6 9.57l5.3-5.3c.3-.3.77-.3 1.06 0"
            fill="currentColor"
          />
          <path
            d="M13.93 22.01h-2.56c-.92 0-1.6-.74-1.43-1.54l.42-1.85h4.59l.42 1.85c.19.85-.46 1.54-1.44 1.54"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m16.7 17.05-1.76 1.57h-4.59l-1.77-1.57c-1.03-.84-1.03-1.49-.25-2.48l3.12-3.94q.33-.41.74-.55.45-.15.9 0 .4.15.74.55l3.12 3.94c.79.99.75 1.61-.24 2.48"
            fill="currentColor"
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
            d="M21.22 9.44h-1.1q-.23 0-.44.07l-4.99-4.99c.48-.62.44-1.51-.13-2.07l-.78-.78a1.63 1.63 0 0 0-2.23 0l-.78.78c-.56.56-.6 1.45-.12 2.07L5.66 9.51a2 2 0 0 0-.44-.07h-1.1c-.87 0-1.58.71-1.58 1.58v1.1c0 .87.71 1.58 1.58 1.58h1.1c.87 0 1.58-.71 1.58-1.58v-1.1q0-.23-.07-.44l4.99-4.99a1.55 1.55 0 0 0 1.91-.01l4.99 4.99q-.06.21-.07.44v1.1c0 .87.71 1.58 1.58 1.58h1.1c.87 0 1.58-.71 1.58-1.58v-1.1a1.6 1.6 0 0 0-1.59-1.57"
            fill="currentColor"
          />
          <path
            d="M16.42 16.55 14.78 18h-4.26l-1.64-1.45c-.95-.78-.95-1.38-.23-2.3l2.89-3.66q.3-.37.69-.51.41-.13.84 0 .38.13.69.51l2.89 3.66c.72.91.69 1.48-.23 2.3"
            fill="currentColor"
          />
          <path
            d="M13.96 22h-2.59c-.92 0-1.61-.75-1.43-1.55l.31-1.39a.6.6 0 0 1 .59-.47h3.65a.6.6 0 0 1 .59.47l.31 1.39c.2.85-.45 1.55-1.43 1.55"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPenTool;
