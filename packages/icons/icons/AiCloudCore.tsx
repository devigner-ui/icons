import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCloudCore = forwardRef<SVGSVGElement, IconProps>(function IconAiCloudCore(
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
            d="M15.39 18.57h1.4a4.51 4.51 0 0 0 .6-9 6 6 0 0 0-11.7 1.4 3.84 3.84 0 1 0 1.1 7.6h6.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.79 9.57c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3z"
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
            d="M6.79 18.57h10a4.51 4.51 0 0 0 .6-9 6 6 0 0 0-11.7 1.4 3.84 3.84 0 0 0 1.1 7.6z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.79 9.57c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3z"
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
            d="M1.69 15.43c-.17-1.2.2-2.51.87-3.4a4.5 4.5 0 0 1 2.46-1.67 5.6 5.6 0 0 1 1.77-3.62 7 7 0 0 1 4.08-2.05 6.7 6.7 0 0 1 7.06 4.2 4.4 4.4 0 0 1 3.12 1.72 5.5 5.5 0 0 1 1.29 3.81 5.4 5.4 0 0 1-1.79 3.6 5.6 5.6 0 0 1-3.77 1.3H6.83a5 5 0 0 1-3.34-.87 4.8 4.8 0 0 1-1.8-3.02z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.19 9.17c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.14-1.7.38-2.16.84-.46.47-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.46-1.1-.7-2.16-.84a.4.4 0 0 1 0-.8c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
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
            d="M1.69 15.43c-.17-1.2.2-2.51.87-3.4a4.5 4.5 0 0 1 2.46-1.67 5.6 5.6 0 0 1 1.77-3.62 7 7 0 0 1 4.08-2.05 6.7 6.7 0 0 1 7.06 4.2 4.4 4.4 0 0 1 3.12 1.72 5.5 5.5 0 0 1 1.29 3.81 5.4 5.4 0 0 1-1.79 3.6 5.6 5.6 0 0 1-3.77 1.3H6.83a5 5 0 0 1-3.34-.87 4.8 4.8 0 0 1-1.8-3.02m10.1-6.61a.4.4 0 0 0-.4.35c-.14 1.06-.38 1.7-.84 2.16-.47.46-1.1.7-2.16.84a.4.4 0 0 0 0 .8c1.06.14 1.7.38 2.16.84.46.47.7 1.1.84 2.16a.4.4 0 0 0 .8 0c.14-1.06.38-1.7.84-2.16.47-.46 1.1-.7 2.16-.84a.4.4 0 0 0 0-.8c-1.06-.14-1.7-.38-2.16-.84-.46-.47-.7-1.1-.84-2.16a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCloudCore;
