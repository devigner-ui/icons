import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBeautify = forwardRef<SVGSVGElement, IconProps>(function IconAiBeautify(
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
            d="M10.5 15.3V20a1.5 1.5 0 0 0 3 0v-4.7m3.05-10.95a6.5 6.5 0 1 0 1.37 1.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            d="M5.5 9a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0Zm5 6.3V20a1.5 1.5 0 0 0 3 0v-4.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            d="M12 1.75c1.95 0 3.86.85 5.13 2.12A7.4 7.4 0 0 1 19.25 9c0 1.95-.85 3.86-2.12 5.13a7.4 7.4 0 0 1-2.88 1.75V20c-.03.57-.3 1.23-.66 1.6-.37.36-1.02.65-1.59.65s-1.23-.3-1.6-.66A2.6 2.6 0 0 1 9.76 20v-4.12a7.4 7.4 0 0 1-2.88-1.75A7.4 7.4 0 0 1 4.75 9c0-1.95.85-3.86 2.12-5.13A7.4 7.4 0 0 1 12 1.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 5.6c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.14-1.7.38-2.16.84-.46.47-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.46-1.1-.7-2.16-.84a.4.4 0 0 1 0-.8c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
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
            d="M12 1.75c1.95 0 3.86.85 5.13 2.12A7.4 7.4 0 0 1 19.25 9c0 1.95-.85 3.86-2.12 5.13a7.4 7.4 0 0 1-2.88 1.75V20c-.03.57-.3 1.23-.66 1.6-.37.36-1.02.65-1.59.65s-1.23-.3-1.6-.66A2.6 2.6 0 0 1 9.76 20v-4.12a7.4 7.4 0 0 1-2.88-1.75A7.4 7.4 0 0 1 4.75 9c0-1.95.85-3.86 2.12-5.13A7.4 7.4 0 0 1 12 1.75zm0 3.5a.4.4 0 0 0-.4.35c-.14 1.06-.38 1.7-.84 2.16-.47.46-1.1.7-2.16.84a.4.4 0 0 0 0 .8c1.06.14 1.7.38 2.16.84.46.47.7 1.1.84 2.16a.4.4 0 0 0 .8 0c.14-1.06.38-1.7.84-2.16.47-.46 1.1-.7 2.16-.84a.4.4 0 0 0 0-.8c-1.06-.14-1.7-.38-2.16-.84-.46-.47-.7-1.1-.84-2.16a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBeautify;
