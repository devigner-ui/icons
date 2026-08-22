import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGroceryBasket = forwardRef<SVGSVGElement, IconProps>(
  function IconGroceryBasket(
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
            <path
              d="M3.86 16.46c-.85-3.44-1.28-5.15-.38-6.3C4.38 9 6.15 9 9.68 9h4.64c3.53 0 5.3 0 6.2 1.15.9 1.16.47 2.87-.38 6.3-.55 2.19-.82 3.28-1.64 3.92-.81.63-1.93.63-4.18.63H9.68c-2.25 0-3.37 0-4.18-.63-.82-.64-1.1-1.73-1.64-3.91"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19.5 9.5-.71-2.6a6 6 0 0 0-.7-1.89A2.5 2.5 0 0 0 17 4.17C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.6c.27-1 .41-1.51.7-1.89A2.5 2.5 0 0 1 7 4.17C7.44 4 7.96 4 9 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 13v4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 13v4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 13v4"
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
              d="M10 2a1.75 1.75 0 1 0 0 3.5h4A1.75 1.75 0 1 0 14 2z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.86 16.2c-.85-3.43-1.28-5.14-.38-6.3.9-1.15 2.67-1.15 6.2-1.15h4.63c3.54 0 5.31 0 6.21 1.15.9 1.16.47 2.87-.38 6.3-.55 2.19-.82 3.28-1.64 3.92-.81.63-1.94.63-4.19.63H9.68c-2.25 0-3.37 0-4.18-.63-.82-.64-1.1-1.73-1.64-3.91"
              fill="currentColor"
            />
            <path
              d="M15.58 4.5a1.7 1.7 0 0 0 0-1.5c.69 0 1.22.04 1.7.22q.86.35 1.42 1.1c.37.49.54 1.12.78 2l.04.16.52 2.97q-.6-.42-1.62-.55l-.36-2.1a5 5 0 0 0-.56-1.6q-.31-.4-.77-.58a3 3 0 0 0-1.15-.12"
              fill="currentColor"
            />
            <path
              d="M8.42 3a1.7 1.7 0 0 0 0 1.5c-.66 0-.93.03-1.15.12q-.46.18-.77.59a5 5 0 0 0-.56 1.6L5.58 8.9q-1 .13-1.62.54l.52-2.96.04-.17c.24-.87.41-1.5.78-2q.56-.74 1.43-1.09c.47-.18 1-.21 1.69-.22"
              fill="currentColor"
            />
            <path
              d="M8.75 12.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
            <path
              d="M16 12c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M12.75 12.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 2.25c-.7 0-1.3.41-1.58 1-.69 0-1.22.04-1.7.22-.56.23-1.06.6-1.42 1.1-.37.49-.54 1.12-.78 2l-.04.16-.52 2.97q-.27.18-.48.45c-.9 1.16-.47 2.87.38 6.3.55 2.19.82 3.28 1.64 3.92.81.63 1.93.63 4.18.63h4.64c2.25 0 3.37 0 4.18-.63.82-.64 1.09-1.73 1.64-3.91.85-3.44 1.28-5.15.38-6.3q-.21-.28-.48-.47l-.52-2.96-.04-.17c-.24-.87-.41-1.5-.78-2a3.3 3.3 0 0 0-1.43-1.09c-.47-.18-1-.21-1.69-.22-.28-.59-.88-1-1.58-1zm8.42 6.9-.36-2.1a5 5 0 0 0-.56-1.6q-.31-.4-.77-.58a3 3 0 0 0-1.15-.12c-.28.6-.88 1-1.58 1h-4c-.7 0-1.3-.4-1.58-1-.66 0-.93.03-1.15.12q-.46.18-.77.59a5 5 0 0 0-.56 1.6l-.36 2.09C6.58 9 7.91 9 9.68 9h4.64c1.77 0 3.1 0 4.1.15M8 12.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75m8.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM12 12.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGroceryBasket;
