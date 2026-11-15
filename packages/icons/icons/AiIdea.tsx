import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiIdea = forwardRef<SVGSVGElement, IconProps>(function IconAiIdea(
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
            d="M17.67 11.88A6.5 6.5 0 1 0 8.1 13.9c.7.6 1.1 1.5 1.1 2.4v1.2h5.6v-1.2c0-.9.4-1.8 1.1-2.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 20.5h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.7c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="M9.2 17.5h5.6v-1.2c0-.9.4-1.8 1.1-2.4a6.5 6.5 0 1 0-7.8 0c.7.6 1.1 1.5 1.1 2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 20.5h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.7c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="M8.45 16.3a2 2 0 0 0-.8-1.8 7.6 7.6 0 0 1-2.57-3.64 7.4 7.4 0 0 1 .04-4.45 7.4 7.4 0 0 1 2.64-3.6A7.4 7.4 0 0 1 12 1.46c1.52 0 3.07.53 4.24 1.37a7.4 7.4 0 0 1 2.64 3.59c.48 1.44.47 3.08.04 4.45a7.4 7.4 0 0 1-2.53 3.61q-.9.7-.84 1.83v1.2c0 .42-.34.75-.75.75H9.2a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.75 20.5c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 6.3c.13 1 .35 1.58.78 2.02s1.03.65 2.02.78a.4.4 0 0 1 0 .8c-1 .13-1.58.35-2.02.78s-.65 1.03-.78 2.02a.4.4 0 0 1-.8 0c-.13-1-.35-1.58-.78-2.02s-1.03-.65-2.02-.78a.4.4 0 0 1 0-.8c1-.13 1.58-.35 2.02-.78s.65-1.03.78-2.02a.4.4 0 0 1 .8 0z"
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
            d="M8.45 16.3a2 2 0 0 0-.8-1.8 7.6 7.6 0 0 1-2.57-3.64 7.4 7.4 0 0 1 .04-4.45 7.4 7.4 0 0 1 2.64-3.6A7.4 7.4 0 0 1 12 1.46c1.52 0 3.07.53 4.24 1.37a7.4 7.4 0 0 1 2.64 3.59c.48 1.44.47 3.08.04 4.45a7.4 7.4 0 0 1-2.53 3.61q-.9.7-.84 1.83v1.2c0 .42-.34.75-.75.75H9.2a.75.75 0 0 1-.75-.75zm.3 4.2c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75zM12 5.95a.4.4 0 0 0-.4.35c-.13 1-.35 1.58-.78 2.02s-1.03.65-2.02.78a.4.4 0 0 0 0 .8c1 .13 1.58.35 2.02.78s.65 1.03.78 2.02a.4.4 0 0 0 .8 0c.13-1 .35-1.58.78-2.02s1.03-.65 2.02-.78a.4.4 0 0 0 0-.8c-1-.13-1.58-.35-2.02-.78s-.65-1.03-.78-2.02a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiIdea;
