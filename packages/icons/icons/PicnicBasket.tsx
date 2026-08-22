import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPicnicBasket = forwardRef<SVGSVGElement, IconProps>(
  function IconPicnicBasket(
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
              d="M4.5 18 12 9m7.5 9-7-8.5m-8 .5L12 21l7.5-11"
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
              d="M10.02 2a1.75 1.75 0 0 0 0 3.5h4a1.75 1.75 0 1 0 0-3.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.89 16.2c-.86-3.43-1.29-5.14-.39-6.3.9-1.15 2.67-1.15 6.2-1.15h4.64c3.54 0 5.3 0 6.2 1.15.9 1.16.48 2.87-.38 6.3-.55 2.19-.82 3.28-1.63 3.92-.82.63-1.94.63-4.2.63H9.72c-2.25 0-3.38 0-4.2-.63-.8-.64-1.08-1.73-1.62-3.91"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m4.65 9.12 2.85 4.1 3.73-4.47h1.54l3.73 4.47 2.86-4.11a2.4 2.4 0 0 1 1.23.85l-3.1 4.46 2.4 2.87q-.27 1.04-.55 1.7l-2.74-3.3-3.51 5.06H10.9L7.4 15.7l-2.71 3.25q-.29-.66-.54-1.7l2.36-2.83L3.43 10a2.3 2.3 0 0 1 1.22-.88M12 19.69 8.4 14.5l3.6-4.33 3.6 4.33z"
              fill="currentColor"
            />
            <path
              d="M15.6 4.5a1.7 1.7 0 0 0 0-1.5c.69 0 1.22.04 1.7.22q.87.35 1.42 1.1c.37.49.54 1.12.78 2l.05.16.5 2.97q-.6-.42-1.6-.55l-.37-2.1a5 5 0 0 0-.56-1.6q-.3-.4-.77-.58a3 3 0 0 0-1.15-.12"
              fill="currentColor"
            />
            <path
              d="M8.44 3a1.7 1.7 0 0 0 0 1.5c-.66.01-.92.03-1.14.12q-.48.18-.77.59a5 5 0 0 0-.56 1.6L5.6 8.9q-1.02.13-1.62.54l.51-2.96.05-.17c.23-.87.4-1.5.77-2q.57-.74 1.43-1.09c.48-.18 1-.21 1.7-.22"
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
              d="M8.42 3.25c.28-.59.88-1 1.58-1h4c.7 0 1.3.41 1.58 1 .69 0 1.22.04 1.7.22q.86.35 1.42 1.1c.37.49.54 1.12.78 2l.03.13.88 3.33.01-.02.12.14c.9 1.16.47 2.87-.38 6.3l-.22.88-2.48-2.97 1.83-2.69-.5-1.92-2.33 3.4L12.98 9h1.34c1.89 0 3.28 0 4.3.18l-.55-2.1a5 5 0 0 0-.57-1.62q-.31-.4-.77-.59a3 3 0 0 0-1.15-.12c-.28.6-.88 1-1.58 1h-4c-.7 0-1.3-.4-1.58-1-.66 0-.93.03-1.15.12q-.46.18-.77.59c-.17.23-.27.57-.57 1.63L5.4 9.18C6.4 9 7.79 9 9.69 9h1.33l-3.46 4.16-2.32-3.41-.5 1.92 1.82 2.69-2.48 2.97-.22-.87c-.85-3.44-1.28-5.15-.38-6.3L3.6 10l.01.02.88-3.33.03-.14c.24-.87.41-1.5.78-2q.56-.74 1.43-1.09c.47-.18 1-.21 1.69-.22"
              fill="currentColor"
            />
            <path
              d="M4.6 19.05c.23.6.5 1 .9 1.32.81.63 1.93.63 4.18.63h1.41l-3.65-5.36z"
              fill="currentColor"
            />
            <path
              d="M12.9 21h1.42c2.25 0 3.37 0 4.18-.63.4-.31.67-.73.9-1.32l-2.84-3.4z"
              fill="currentColor"
            />
            <path
              d="m12 19.67-3.56-5.22L12 10.17l3.56 4.28z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPicnicBasket;
