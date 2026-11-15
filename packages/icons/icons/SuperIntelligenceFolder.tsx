import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceFolder = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceFolder(
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
            d="M14.62 20H5c-1.4 0-2.5-1.1-2.5-2.5v-10C2.5 6.1 3.6 5 5 5h3.4c.6 0 1.2.3 1.6.7l1.3 1.6c.4.5 1 .7 1.6.7H19c1.4 0 2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5h-1.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 13.2c-.6-.8-2.69-.8-2.99.34-.23.8 3 .97 3 2.12-.3 1.14-2.4 1.14-3 .35m4.98-3.61v4.4"
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
            d="M2.5 7.5C2.5 6.1 3.6 5 5 5h3.4c.6 0 1.2.3 1.6.7l1.3 1.6c.4.5 1 .7 1.6.7H19c1.4 0 2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5H5c-1.4 0-2.5-1.1-2.5-2.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 13.2c-.6-.8-2.69-.8-2.99.34-.23.8 3 .97 3 2.12-.3 1.14-2.4 1.14-3 .35m4.98-3.61v4.4"
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
            d="M1.75 7.5c.03-.85.4-1.76.95-2.3A3.6 3.6 0 0 1 5 4.25h3.4a3.7 3.7 0 0 1 2.18.98l1.3 1.6c.23.38.54.44 1.02.42H19c.85.03 1.76.4 2.3.95.55.54.92 1.45.95 2.3v7a3.6 3.6 0 0 1-.94 2.3 3.6 3.6 0 0 1-2.31.95H5a3.6 3.6 0 0 1-2.3-.94 3.6 3.6 0 0 1-.95-2.31z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.9 13.64c-.26-.3-.86-.3-1.21-.21l-.18.06.39.17c.8.3 1.89.6 2.25 1.47.07.18.08.25.1.4a1 1 0 0 1-.06.44c-.65 1.65-3.18 1.76-4.27.5a.75.75 0 0 1 1.2-.91c.27.31.9.3 1.26.2q.15-.04.28-.13l-.09-.06q-.36-.2-.75-.34c-.65-.25-1.75-.48-2-1.24-.26-.79.36-1.54 1.04-1.85 1.05-.49 2.48-.3 3.25.6a.75.75 0 0 1-1.2.9zm2.59-1.99c.41 0 .75.34.75.75v4.4a.75.75 0 0 1-1.5 0v-4.4c0-.41.33-.75.75-.75z"
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
            d="M1.75 7.5c.03-.85.4-1.76.95-2.3A3.6 3.6 0 0 1 5 4.25h3.4a3.7 3.7 0 0 1 2.18.98l1.3 1.6c.23.38.54.44 1.02.42H19c.85.03 1.76.4 2.3.95.55.54.92 1.45.95 2.3v7a3.6 3.6 0 0 1-.94 2.3 3.6 3.6 0 0 1-2.31.95H5a3.6 3.6 0 0 1-2.3-.94 3.6 3.6 0 0 1-.95-2.31zm11.2 6.29c.34-.25.4-.72.15-1.05-.77-.9-2.19-1.1-3.24-.6-.68.3-1.3 1.06-1.04 1.85.25.76 1.34 1 2 1.24a5 5 0 0 1 .83.4 1 1 0 0 1-.27.13c-.36.1-1 .1-1.27-.2a.75.75 0 0 0-1.2.9c1.1 1.27 3.62 1.16 4.28-.5a1 1 0 0 0 .05-.44 1 1 0 0 0-.1-.4c-.35-.86-1.44-1.17-2.25-1.46l-.38-.18.18-.05c.35-.09.95-.1 1.21.21.25.33.72.4 1.06.15zm.79-1.39v4.4a.75.75 0 0 0 1.5 0v-4.4a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceFolder;
