import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHearts = forwardRef<SVGSVGElement, IconProps>(function IconHearts(
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
            d="m14.83 20.17.45-.6zm1.67-7.01-.53.53c.3.3.76.3 1.06 0zm1.67 7.01-.45-.6zm2.98-7.25.54-.52zm-6.75 6.93-.44.6zm-2.65-4.79c0-.97.58-1.79 1.37-2.13.76-.33 1.81-.27 2.85.76l1.06-1.06c-1.44-1.42-3.13-1.68-4.5-1.08a3.8 3.8 0 0 0-2.28 3.51zm2.63 5.71c.28.2.6.45.93.63s.73.35 1.19.35v-1.5q-.14.01-.46-.16a7 7 0 0 1-.76-.52zm4.24 0c.76-.57 1.8-1.27 2.62-2.14a5 5 0 0 0 1.51-3.57h-1.5c0 1.02-.44 1.82-1.1 2.54-.7.75-1.57 1.33-2.43 1.97zm-.9-1.2q-.43.33-.76.52-.33.17-.46.16v1.5c.46 0 .86-.17 1.2-.35.32-.18.64-.42.92-.63zm5.03-4.51c0-1.03-.4-1.97-1.06-2.66l-1.09 1.04c.4.41.65.98.65 1.62zm-1.06-2.66a3.7 3.7 0 0 0-2.64-1.15c-1.05 0-2.12.43-3.08 1.38l1.06 1.06c.7-.7 1.41-.94 2.01-.94s1.16.26 1.56.69zm-6.41 7.17-.43-.32-.9 1.2.43.32zm-.43-.32c-1.63-1.2-3.1-2.3-3.1-4.19h-1.5c0 2.77 2.23 4.31 3.7 5.4z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.96 19.34.48-.58zM12 5.32l-.55.5a.75.75 0 0 0 1.1 0zM9.44 18.76c-3.06-2.52-6.69-4.99-6.69-9.64h-1.5c0 5.52 4.4 8.46 7.23 10.8zM2.75 9.12a5.4 5.4 0 0 1 2.89-4.96c1.6-.77 3.75-.57 5.8 1.67l1.11-1.02C10.11 2.16 7.27 1.7 5 2.8a6.9 6.9 0 0 0-3.74 6.3zm5.73 10.8c.52.42 1.07.87 1.62 1.21.56.34 1.2.62 1.9.62v-1.5q-.44.01-1.11-.4-.68-.43-1.45-1.09zm14.27-10.8c0-2.8-1.52-5.26-3.74-6.32-2.28-1.09-5.12-.64-7.56 2l1.1 1.03c2.06-2.24 4.22-2.44 5.81-1.67a5.4 5.4 0 0 1 2.89 4.96zm-.93 4.12a9.4 9.4 0 0 0 .93-4.12h-1.5c0 1.32-.3 2.46-.78 3.47zm-7.88 6.02c-.83.65-1.43.99-1.94.99v1.5c1.08 0 2.06-.68 2.86-1.3z"
            fill="currentColor"
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
            d="M2 9.14C2 14 6.02 16.59 8.96 18.9 10 19.73 11 20.5 12 20.5s2-.77 3.04-1.59C17.98 16.6 22 14 22 9.14 22 4.27 16.5.83 12 5.5 7.5.83 2 4.27 2 9.14"
            fill="currentColor"
          />
          <path
            d="M16.5 13.29c-2.47-2.72-5.5-.71-5.5 2.11 0 2.56 1.81 4.03 3.36 5.3l.04.03.43.35c.57.47 1.12.92 1.67.92s1.1-.45 1.67-.92C19.8 19.73 22 18.22 22 15.4c0-.93-.33-1.77-.85-2.38-1.08-1.25-2.99-1.56-4.65.27"
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
            d="M16.5 13.29c-2.47-2.72-5.5-.71-5.5 2.11 0 2.56 1.81 4.03 3.36 5.3l.04.03.43.35c.57.47 1.12.92 1.67.92s1.1-.45 1.67-.92C19.8 19.73 22 18.22 22 15.4c0-.93-.33-1.77-.85-2.38-1.08-1.25-2.99-1.56-4.65.27"
            fill="currentColor"
          />
          <path
            d="M8.1 18.25C5.3 16.08 2 13.55 2 9.14 2 4.27 7.5.83 12 5.5 16.5.83 22 4.27 22 9.14q0 1.25-.33 2.3a4.2 4.2 0 0 0-5.17-.13 4.3 4.3 0 0 0-4.33-.4A4.9 4.9 0 0 0 9.5 15.4c0 2.3 1.15 3.92 2.34 5.1-.95-.08-1.9-.81-2.88-1.59z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHearts;
