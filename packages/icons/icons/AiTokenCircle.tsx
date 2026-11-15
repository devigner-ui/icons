import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTokenCircle = forwardRef<SVGSVGElement, IconProps>(function IconAiTokenCircle(
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
            d="M18.87 5.43a9.5 9.5 0 1 0 1.42 1.92"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.7 12a6.3 6.3 0 1 0 12.6 0 6.3 6.3 0 1 0-12.6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9.2c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="M2.5 12a9.5 9.5 0 1 0 19 0 9.5 9.5 0 1 0-19 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.7 12a6.3 6.3 0 1 0 12.6 0 6.3 6.3 0 1 0-12.6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9.2c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="M12 1.75c2.78 0 5.43 1.19 7.25 3 1.81 1.82 3 4.47 3 7.25s-1.19 5.43-3 7.25c-1.82 1.81-4.47 3-7.25 3s-5.43-1.19-7.25-3c-1.81-1.82-3-4.47-3-7.25s1.19-5.43 3-7.25c1.82-1.81 4.47-3 7.25-3z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12 4.95c1.9 0 3.75.83 4.99 2.07A7.2 7.2 0 0 1 19.04 12c0 1.9-.83 3.75-2.06 4.99A7.2 7.2 0 0 1 12 19.04c-1.9 0-3.75-.83-4.99-2.06A7.2 7.2 0 0 1 4.96 12c0-1.9.83-3.75 2.06-4.99A7.2 7.2 0 0 1 12 4.96zm0 3.5a.4.4 0 0 0-.4.35c-.13 1-.35 1.58-.78 2.02s-1.03.65-2.02.78a.4.4 0 0 0 0 .8c1 .13 1.58.35 2.02.78s.65 1.03.78 2.02a.4.4 0 0 0 .8 0c.13-1 .35-1.58.78-2.02s1.03-.65 2.02-.78a.4.4 0 0 0 0-.8c-1-.13-1.58-.35-2.02-.78s-.65-1.03-.78-2.02a.4.4 0 0 0-.4-.35z"
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
            d="M12 1.75c2.78 0 5.43 1.19 7.25 3 1.81 1.82 3 4.47 3 7.25s-1.19 5.43-3 7.25c-1.82 1.81-4.47 3-7.25 3s-5.43-1.19-7.25-3c-1.81-1.82-3-4.47-3-7.25s1.19-5.43 3-7.25c1.82-1.81 4.47-3 7.25-3zM7.01 7.02A7.2 7.2 0 0 0 4.96 12c0 1.9.83 3.75 2.06 4.99A7.2 7.2 0 0 0 12 19.04c1.9 0 3.75-.83 4.99-2.06A7.2 7.2 0 0 0 19.04 12c0-1.9-.83-3.75-2.06-4.99A7.2 7.2 0 0 0 12 4.96c-1.9 0-3.75.83-4.99 2.06zM12.4 8.8c.13 1 .35 1.58.78 2.02s1.03.65 2.02.78a.4.4 0 0 1 0 .8c-1 .13-1.58.35-2.02.78s-.65 1.03-.78 2.02a.4.4 0 0 1-.8 0c-.13-1-.35-1.58-.78-2.02s-1.03-.65-2.02-.78a.4.4 0 0 1 0-.8c1-.13 1.58-.35 2.02-.78s.65-1.03.78-2.02a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiTokenCircle;
