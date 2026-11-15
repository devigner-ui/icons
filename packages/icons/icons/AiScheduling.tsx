import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiScheduling = forwardRef<SVGSVGElement, IconProps>(function IconAiScheduling(
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
            d="M9.9 21.5H6.5A3.5 3.5 0 0 1 3 18V8a3.5 3.5 0 0 1 3.5-3.5h11A3.5 3.5 0 0 1 21 8v10a3.5 3.5 0 0 1-3.5 3.5h-5.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2.5v4m8-4v4m-13 3h18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.45c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="M6.5 4.5h11A3.5 3.5 0 0 1 21 8v10a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18V8a3.5 3.5 0 0 1 3.5-3.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2.5v4m8-4v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.75 9.5h16.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 12.45c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="M6.5 3.75h11a4.6 4.6 0 0 1 3 1.25 4.6 4.6 0 0 1 1.25 3v10a4.6 4.6 0 0 1-1.25 3 4.6 4.6 0 0 1-3 1.25h-11a4.6 4.6 0 0 1-3-1.25 4.6 4.6 0 0 1-1.25-3V8A4.6 4.6 0 0 1 3.5 5a4.6 4.6 0 0 1 3-1.25z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M2.25 8.75h19.5v1.5H2.25zm5.75-7c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zm8 0c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 12.05c.13 1 .35 1.58.78 2.02s1.03.65 2.02.78a.4.4 0 0 1 0 .8c-1 .13-1.58.35-2.02.78s-.65 1.03-.78 2.02a.4.4 0 0 1-.8 0c-.13-1-.35-1.58-.78-2.02s-1.03-.65-2.02-.78a.4.4 0 0 1 0-.8c1-.13 1.58-.35 2.02-.78s.65-1.03.78-2.02a.4.4 0 0 1 .8 0z"
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
            d="M6.5 3.75h.75V2.5a.75.75 0 0 1 1.5 0v1.25h6.5V2.5a.75.75 0 0 1 1.5 0v1.25h.75a4.6 4.6 0 0 1 3 1.25 4.6 4.6 0 0 1 1.25 3v.75H2.25V8A4.6 4.6 0 0 1 3.5 5a4.6 4.6 0 0 1 3-1.25zM21.75 18a4.6 4.6 0 0 1-1.25 3 4.6 4.6 0 0 1-3 1.25h-11a4.6 4.6 0 0 1-3-1.25 4.6 4.6 0 0 1-1.25-3v-7.75h19.5zM12 11.7a.4.4 0 0 0-.4.35c-.13 1-.35 1.58-.78 2.02s-1.03.65-2.02.78a.4.4 0 0 0 0 .8c1 .13 1.58.35 2.02.78s.65 1.03.78 2.02a.4.4 0 0 0 .8 0c.13-1 .35-1.58.78-2.02s1.03-.65 2.02-.78a.4.4 0 0 0 0-.8c-1-.13-1.58-.35-2.02-.78s-.65-1.03-.78-2.02a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiScheduling;
