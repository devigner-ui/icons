import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiWandSparkles = forwardRef<SVGSVGElement, IconProps>(function IconAiWandSparkles(
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
            d="m3.5 20.5 5.8-5.8M11 13l3.5-3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 3.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 2.4c.14 1.06.54 1.46 1.6 1.6-1.06.14-1.46.54-1.6 1.6-.14-1.06-.54-1.46-1.6-1.6 1.06-.14 1.46-.54 1.6-1.6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 11.4c.14 1.06.54 1.46 1.6 1.6-1.06.14-1.46.54-1.6 1.6-.14-1.06-.54-1.46-1.6-1.6 1.06-.14 1.46-.54 1.6-1.6Z"
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
            d="m3.5 20.5 11-11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 3.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 2.4c.14 1.06.54 1.46 1.6 1.6-1.06.14-1.46.54-1.6 1.6-.14-1.06-.54-1.46-1.6-1.6 1.06-.14 1.46-.54 1.6-1.6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 11.4c.14 1.06.54 1.46 1.6 1.6-1.06.14-1.46.54-1.6 1.6-.14-1.06-.54-1.46-1.6-1.6 1.06-.14 1.46-.54 1.6-1.6Z"
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
            d="M2.97 21.03a.75.75 0 0 1 0-1.06l11-11a.75.75 0 1 1 1.06 1.06l-11 11c-.3.3-.77.3-1.06 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17.9 3.1c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0zM11.4 2c.07.6.2.91.44 1.16.25.24.56.37 1.16.44a.4.4 0 0 1 0 .8c-.6.07-.91.2-1.16.44-.24.25-.37.56-.44 1.16a.4.4 0 0 1-.8 0c-.07-.6-.2-.91-.44-1.16C9.9 4.6 9.6 4.47 9 4.4a.4.4 0 0 1 0-.8c.6-.07.91-.2 1.16-.44.24-.25.37-.56.44-1.16a.4.4 0 0 1 .8 0zm9 9c.07.6.2.91.44 1.16.25.25.56.37 1.16.44a.4.4 0 0 1 0 .8c-.6.07-.91.2-1.16.44-.24.25-.37.56-.44 1.16a.4.4 0 0 1-.8 0c-.07-.6-.2-.91-.44-1.16-.25-.24-.56-.37-1.16-.44a.4.4 0 0 1 0-.8c.6-.07.91-.2 1.16-.44.24-.25.37-.56.44-1.16a.4.4 0 0 1 .8 0z"
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
          <path
            d="M2.97 21.03a.75.75 0 0 1 0-1.06l11-11a.75.75 0 1 1 1.06 1.06l-11 11c-.3.3-.77.3-1.06 0zM17.9 3.1c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0zM11.4 2c.07.6.2.91.44 1.16.25.24.56.37 1.16.44a.4.4 0 0 1 0 .8c-.6.07-.91.2-1.16.44-.24.25-.37.56-.44 1.16a.4.4 0 0 1-.8 0c-.07-.6-.2-.91-.44-1.16C9.9 4.6 9.6 4.47 9 4.4a.4.4 0 0 1 0-.8c.6-.07.91-.2 1.16-.44.24-.25.37-.56.44-1.16a.4.4 0 0 1 .8 0zm9 9c.07.6.2.91.44 1.16.25.25.56.37 1.16.44a.4.4 0 0 1 0 .8c-.6.07-.91.2-1.16.44-.24.25-.37.56-.44 1.16a.4.4 0 0 1-.8 0c-.07-.6-.2-.91-.44-1.16-.25-.24-.56-.37-1.16-.44a.4.4 0 0 1 0-.8c.6-.07.91-.2 1.16-.44.24-.25.37-.56.44-1.16a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiWandSparkles;
