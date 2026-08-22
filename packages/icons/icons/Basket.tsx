import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBasket = forwardRef<SVGSVGElement, IconProps>(function IconBasket(
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.42 3.25c.28-.59.88-1 1.58-1h4c.7 0 1.3.41 1.58 1 .69 0 1.22.04 1.7.22q.86.35 1.42 1.1c.37.49.54 1.12.78 2l.74 2.71.28.84.02.03c.9 1.16.47 2.87-.38 6.3-.55 2.19-.82 3.28-1.64 3.92-.81.63-1.93.63-4.18.63H9.68c-2.25 0-3.37 0-4.18-.63-.82-.64-1.1-1.73-1.64-3.91-.85-3.44-1.28-5.15-.38-6.3l.02-.04.28-.84.74-2.72c.24-.87.41-1.5.78-2q.56-.74 1.43-1.09c.47-.18 1-.21 1.69-.22m0 1.5c-.66 0-.93.03-1.15.12q-.46.18-.77.59c-.17.23-.28.57-.57 1.63l-.57 2.1C6.38 9 7.78 9 9.68 9h4.64c1.9 0 3.3 0 4.32.18l-.57-2.09c-.3-1.06-.4-1.4-.57-1.63q-.31-.4-.77-.59a3 3 0 0 0-1.15-.12c-.28.6-.88 1-1.58 1h-4c-.7 0-1.3-.4-1.58-1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBasket;
