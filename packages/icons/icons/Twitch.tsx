import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTwitch = forwardRef<SVGSVGElement, IconProps>(function IconTwitch(
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
      {!fill ? (
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.17 2h17v12l-5 5h-5l-2 3h-3v-3h-4V5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.67 7h-2v6h2z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 7h-2v6h2z"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.71 2h15.46a1 1 0 0 1 1 1v10.59q-.01.41-.29.71l-4.41 4.41a1 1 0 0 1-.71.29h-4.05a1 1 0 0 0-.83.45l-1.41 2.11a1 1 0 0 1-.83.45H8.18a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V5.31q0-.3.17-.55l1.54-2.3A1 1 0 0 1 5.71 2"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.17 7.14v5.71c0 .32.26.57.57.57h1.14c.32 0 .57-.26.57-.57V7.14a.57.57 0 0 0-.57-.57H9.74a.6.6 0 0 0-.57.57"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.88 7.14v5.71c0 .32.26.57.57.57h1.14c.32 0 .57-.26.57-.57V7.14a.57.57 0 0 0-.57-.57h-1.14a.6.6 0 0 0-.57.57"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.17 2H5.71a1 1 0 0 0-.83.45l-1.54 2.3a1 1 0 0 0-.17.55V18a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1.46a1 1 0 0 0 .83-.45l1.41-2.11a1 1 0 0 1 .83-.45h4.05q.41-.01.71-.29l4.41-4.41a1 1 0 0 0 .29-.71V3a1 1 0 0 0-.99-1m-9.71 10.86c0 .32-.26.57-.57.57H9.75a.57.57 0 0 1-.57-.57V7.15c0-.32.26-.57.57-.57h1.14c.32 0 .57.26.57.57zm5.71 0c0 .32-.26.57-.57.57h-1.14a.57.57 0 0 1-.57-.57V7.15c0-.32.26-.57.57-.57h1.14c.32 0 .57.26.57.57z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTwitch;
