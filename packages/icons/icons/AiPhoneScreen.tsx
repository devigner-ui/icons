import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiPhoneScreen = forwardRef<SVGSVGElement, IconProps>(function IconAiPhoneScreen(
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
            d="M10.4 21.5H9A3.5 3.5 0 0 1 5.5 18V6A3.5 3.5 0 0 1 9 2.5h6A3.5 3.5 0 0 1 18.5 6v12a3.5 3.5 0 0 1-3.5 3.5h-2.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 18.5h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            d="M9 2.5h6A3.5 3.5 0 0 1 18.5 6v12a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 18V6A3.5 3.5 0 0 1 9 2.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 18.5h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            d="M9 1.75h6A4.6 4.6 0 0 1 18 3a4.6 4.6 0 0 1 1.25 3v12A4.6 4.6 0 0 1 18 21a4.6 4.6 0 0 1-3 1.25H9A4.6 4.6 0 0 1 6 21a4.6 4.6 0 0 1-1.25-3V6A4.6 4.6 0 0 1 6 3a4.6 4.6 0 0 1 3-1.25z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M10.25 18.5c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 7.1c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.14-1.7.38-2.16.84-.46.47-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.46-1.1-.7-2.16-.84a.4.4 0 0 1 0-.8c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
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
            d="M9 1.75h6A4.6 4.6 0 0 1 18 3a4.6 4.6 0 0 1 1.25 3v12A4.6 4.6 0 0 1 18 21a4.6 4.6 0 0 1-3 1.25H9A4.6 4.6 0 0 1 6 21a4.6 4.6 0 0 1-1.25-3V6A4.6 4.6 0 0 1 6 3a4.6 4.6 0 0 1 3-1.25zm2 17.5h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm1-12.5a.4.4 0 0 0-.4.35c-.14 1.06-.38 1.7-.84 2.16-.47.46-1.1.7-2.16.84a.4.4 0 0 0 0 .8c1.06.14 1.7.38 2.16.84.46.47.7 1.1.84 2.16a.4.4 0 0 0 .8 0c.14-1.06.38-1.7.84-2.16.47-.46 1.1-.7 2.16-.84a.4.4 0 0 0 0-.8c-1.06-.14-1.7-.38-2.16-.84-.46-.47-.7-1.1-.84-2.16a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiPhoneScreen;
