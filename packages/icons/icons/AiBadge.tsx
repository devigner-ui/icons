import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBadge = forwardRef<SVGSVGElement, IconProps>(function IconAiBadge(
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
            d="M19.9 13.12a7 7 0 0 1-.37 2h0c-.48 1.16.4 2.53-.4 3.65-.97 1.37-2.74.24-4.01.76-1.16.48-1.51 2.07-2.86 2.3-1.66.28-2.11-1.78-3.38-2.3s-3.04.61-4.01-.76c-.8-1.12.08-2.49-.4-3.65-.5-1.22-2.32-1.6-2.32-3.12s1.81-1.9 2.32-3.12-.51-2.77.57-3.85c1.07-1.07 2.62-.05 3.84-.56 1.22-.5 1.6-2.32 3.12-2.32 1.42 0 1.88 1.6 2.93 2.22 1.16.7 2.67-.33 3.84.5 1.37.97.23 2.75.76 4.01.17.42.29 1.09.35 1.85"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8c.36 2.64 1.36 3.64 4 4-2.64.36-3.64 1.36-4 4-.36-2.64-1.36-3.64-4-4 2.64-.36 3.64-1.36 4-4Z"
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
            d="M19.53 15.12c-.48 1.16.4 2.53-.4 3.65-.97 1.37-2.74.24-4.01.76-1.16.48-1.51 2.07-2.86 2.3-1.66.28-2.11-1.78-3.38-2.3s-3.04.61-4.01-.76c-.8-1.12.08-2.49-.4-3.65-.5-1.22-2.32-1.6-2.32-3.12s1.81-1.9 2.32-3.12-.51-2.77.57-3.85c1.07-1.07 2.62-.05 3.84-.56 1.22-.5 1.6-2.32 3.12-2.32 1.42 0 1.88 1.6 2.93 2.22 1.16.7 2.67-.33 3.84.5 1.37.97.23 2.75.76 4.01.53 1.27.55 4.9 0 6.24z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8c.36 2.64 1.36 3.64 4 4-2.64.36-3.64 1.36-4 4-.36-2.64-1.36-3.64-4-4 2.64-.36 3.64-1.36 4-4Z"
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
            d="M20.2 16.89c.06.65 0 1.52-.46 2.31a3.2 3.2 0 0 1-2.55 1.01c-.78-.05-1.37-.23-1.78.01-.43.12-.66.53-1.07 1.03a4 4 0 0 1-1.96 1.32c-1.13.05-2-.5-2.52-1.1-.51-.58-.83-1.07-1.27-1.25s-1-.06-1.78 0c-.78.04-1.8-.18-2.55-1.02a4 4 0 0 1-.45-2.31c.06-.65.18-1.1-.03-1.49-.12-.44-.6-.7-1.14-1.16-.55-.46-1.24-1.22-1.24-2.24s.69-1.78 1.24-2.25c.54-.46.96-.73 1.14-1.16s.07-.91.01-1.63 0-1.74.71-2.46c.73-.72 1.75-.77 2.47-.71.7.06 1.2.16 1.62-.01s.7-.6 1.17-1.15S10.98 1.4 12 1.4c.95 0 1.7.61 2.16 1.13s.74 1 1.15 1.2c.34.3.78.16 1.46.1.68-.08 1.6-.06 2.43.43a3.2 3.2 0 0 1 1.01 2.55c-.05.77-.23 1.37.01 1.78.56 1.41.59 5.33 0 6.81l-.04.1c-.16.36-.04.79.01 1.39z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 7.6c.18 1.39.5 2.25 1.13 2.87s1.48.95 2.87 1.13a.4.4 0 0 1 0 .8c-1.39.18-2.25.5-2.87 1.13S12.58 15 12.4 16.4a.4.4 0 0 1-.8 0c-.18-1.39-.5-2.25-1.13-2.87S9 12.58 7.6 12.4a.4.4 0 0 1 0-.8c1.39-.18 2.25-.5 2.87-1.13S11.42 9 11.6 7.6a.4.4 0 0 1 .8 0z"
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
            d="M20.2 16.89c.06.65 0 1.52-.46 2.31a3.2 3.2 0 0 1-2.55 1.01c-.78-.05-1.37-.23-1.78.01-.43.12-.66.53-1.07 1.03a4 4 0 0 1-1.96 1.32c-1.13.05-2-.5-2.52-1.1-.51-.58-.83-1.07-1.27-1.25s-1-.06-1.78 0c-.78.04-1.8-.18-2.55-1.02a4 4 0 0 1-.45-2.31c.06-.65.18-1.1-.03-1.49-.12-.44-.6-.7-1.14-1.16-.55-.46-1.24-1.22-1.24-2.24s.69-1.78 1.24-2.25c.54-.46.96-.73 1.14-1.16s.07-.91.01-1.63 0-1.74.71-2.46c.73-.72 1.75-.77 2.47-.71.7.06 1.2.16 1.62-.01s.7-.6 1.17-1.15S10.98 1.4 12 1.4c.95 0 1.7.61 2.16 1.13s.74 1 1.15 1.2c.34.3.78.16 1.46.1.68-.08 1.6-.06 2.43.43a3.2 3.2 0 0 1 1.01 2.55c-.05.77-.23 1.37.01 1.78.56 1.41.59 5.33 0 6.81l-.04.1c-.16.36-.04.79.01 1.39zM12 7.25a.4.4 0 0 0-.4.35c-.18 1.39-.5 2.25-1.13 2.87S9 11.42 7.6 11.6a.4.4 0 0 0 0 .8c1.39.18 2.25.5 2.87 1.13s.95 1.48 1.13 2.87a.4.4 0 0 0 .8 0c.18-1.39.5-2.25 1.13-2.87s1.48-.95 2.87-1.13a.4.4 0 0 0 0-.8c-1.39-.18-2.25-.5-2.87-1.13S12.58 9 12.4 7.6a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBadge;
