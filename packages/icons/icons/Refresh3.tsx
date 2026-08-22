import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefresh3 = forwardRef<SVGSVGElement, IconProps>(function IconRefresh3(
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
            d="M15.22 21.67A10 10 0 0 0 12.67 2c-6.67 0-10 5.56-10 5.56m0 0V3m0 4.56h4.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 12a10 10 0 0 0 10 10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 3"
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
            d="M15.22 22.42a.8.8 0 0 1-.73-.56c-.1-.4.13-.81.53-.92a9.26 9.26 0 0 0-2.36-18.2 11.3 11.3 0 0 0-8.5 4.06H7.1a.76.76 0 0 1 .01 1.51H2.68a.76.76 0 0 1-.76-.69V3c0-.41.34-.75.75-.75s.75.34.75.75v2.39a12.6 12.6 0 0 1 9.25-4.14 10.76 10.76 0 0 1 2.74 21.15z"
            fill="currentColor"
          />
          <path
            d="m11.96 22.73-.07-.01a11 11 0 0 1-3.12-.7.76.76 0 0 1-.43-.97.76.76 0 0 1 .97-.43q1.3.5 2.69.61h.01c.4.02.7.36.7.76v.04a.76.76 0 0 1-.75.7m-5.51-2.15a.7.7 0 0 1-.47-.16 11 11 0 0 1-2.18-2.35.73.73 0 0 1 .19-1.04.76.76 0 0 1 1.04.19 9 9 0 0 0 1.89 2.02q.27.22.28.58 0 .26-.16.48a.7.7 0 0 1-.59.28M3.11 15.7a.7.7 0 0 1-.71-.52A11 11 0 0 1 1.92 12c0-.41.34-.75.75-.75s.75.34.75.75q0 1.4.41 2.73.03.1.03.23c0 .33-.21.61-.52.71z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
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
            d="M15.22 22.42a.8.8 0 0 1-.73-.56c-.1-.4.13-.81.53-.92a9.26 9.26 0 0 0-2.36-18.2 11.3 11.3 0 0 0-8.5 4.06H7.1a.76.76 0 0 1 .01 1.51H2.68a.76.76 0 0 1-.76-.69V3c0-.41.34-.75.75-.75s.75.34.75.75v2.39a12.6 12.6 0 0 1 9.25-4.14 10.76 10.76 0 0 1 2.74 21.15z"
            fill="currentColor"
          />
          <path
            d="m11.96 22.73-.07-.01a11 11 0 0 1-3.12-.7.76.76 0 0 1-.43-.97.76.76 0 0 1 .97-.43q1.3.5 2.69.61h.01c.4.02.7.36.7.76v.04a.76.76 0 0 1-.75.7m-5.51-2.15a.7.7 0 0 1-.47-.16 11 11 0 0 1-2.18-2.35.73.73 0 0 1 .19-1.04.76.76 0 0 1 1.04.19 9 9 0 0 0 1.89 2.02q.27.22.28.58 0 .26-.16.48a.7.7 0 0 1-.59.28M3.11 15.7a.7.7 0 0 1-.71-.52A11 11 0 0 1 1.92 12c0-.41.34-.75.75-.75s.75.34.75.75q0 1.4.41 2.73.03.1.03.23c0 .33-.21.61-.52.71z"
            fill="currentColor"
          />
          <path d="M12.67 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" fill="currentColor" />
        </svg>
      )}
    </>
  );
});

export default IconRefresh3;
