import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCivicCvc = forwardRef<SVGSVGElement, IconProps>(function IconCivicCvc(
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
            d="M12.89 8.47a2.38 2.38 0 0 1 .6 4.3v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.4 2.4 0 0 1-1.13-2.02"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.8 9.03a10 10 0 1 0-.01 5.98"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M14.52 10.13a2.4 2.4 0 0 1-1.05 2.64v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.37 2.37 0 0 1 1.89-4.3c.8.21 1.45.86 1.66 1.66"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            d="M21.77 9.03a10 10 0 1 0-.01 5.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M24.22 0h-24v24h24z"
            fill="none"
          />
          <path
            d="M14.52 10.13a2.4 2.4 0 0 1-1.05 2.64v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.37 2.37 0 0 1 1.89-4.3c.8.21 1.45.86 1.66 1.66"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.22 22.75A10.76 10.76 0 1 1 22.49 8.8c.12.4-.1.82-.49.94a.75.75 0 0 1-.94-.49 9.26 9.26 0 1 0-8.83 12 9.2 9.2 0 0 0 8.82-6.47c.12-.4.54-.61.94-.49s.61.55.49.94a10.7 10.7 0 0 1-10.26 7.52"
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
            d="M14.52 10.13a2.4 2.4 0 0 1-1.05 2.64v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.37 2.37 0 0 1 1.89-4.3c.8.21 1.45.86 1.66 1.66"
            fill="currentColor"
          />
          <path
            d="M12.22 22.75A10.76 10.76 0 1 1 22.49 8.8c.12.4-.1.82-.49.94a.75.75 0 0 1-.94-.49 9.26 9.26 0 1 0-8.83 12 9.2 9.2 0 0 0 8.82-6.47c.12-.4.54-.61.94-.49s.61.55.49.94a10.7 10.7 0 0 1-10.26 7.52"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCivicCvc;
