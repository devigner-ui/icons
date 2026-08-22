import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAtom = forwardRef<SVGSVGElement, IconProps>(function IconAtom(
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
            d="M20.94 3.06c2.47 2.47.47 8.47-4.47 13.41S5.53 23.41 3.06 20.94s-.47-8.47 4.47-13.41S18.47.59 20.94 3.06m-17.88 0c-2.47 2.47-.47 8.47 4.47 13.41s10.94 6.94 13.41 4.47.47-8.47-4.47-13.41S5.53.59 3.06 3.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M16.47 16.47c4.94-4.94 6.94-10.94 4.47-13.41s-8.47-.47-13.41 4.47S.59 18.47 3.06 20.94s8.47.47 13.41-4.47"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.53 16.47C2.59 11.53.59 5.53 3.06 3.06s8.47-.47 13.41 4.47 6.94 10.94 4.47 13.41-8.47.47-13.41-4.47"
            fill="currentColor"
          />
          <path
            d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
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
            d="M17 7a25 25 0 0 0-3.54-2.95q2.09-1.06 3.82-1.26c1.42-.16 2.48.14 3.13.8.66.65.96 1.7.8 3.13a12 12 0 0 1-1.26 3.82Q18.72 8.73 17 7"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.94 8.06A23 23 0 0 1 19.12 12a23 23 0 0 1-3.18 3.94A23 23 0 0 1 12 19.12a23 23 0 0 1-3.94-3.18A23 23 0 0 1 4.88 12a23 23 0 0 1 3.18-3.94A23 23 0 0 1 12 4.88a23 23 0 0 1 3.94 3.18M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            fill="currentColor"
          />
          <path
            d="M13.46 19.95a25 25 0 0 0 6.5-6.49c.7 1.38 1.12 2.68 1.25 3.81.16 1.43-.14 2.49-.8 3.14-.65.66-1.7.96-3.13.8a12 12 0 0 1-3.82-1.26"
            fill="currentColor"
          />
          <path
            d="M7 17a25 25 0 0 0 3.54 2.95c-1.38.7-2.68 1.12-3.81 1.26-1.43.16-2.49-.14-3.14-.8-.66-.65-.96-1.7-.8-3.14a12 12 0 0 1 1.26-3.8Q5.29 15.28 7 17"
            fill="currentColor"
          />
          <path
            d="M4.05 10.54a25 25 0 0 1 6.49-6.5A12 12 0 0 0 6.73 2.8c-1.43-.16-2.49.14-3.14.8-.66.65-.96 1.7-.8 3.13q.2 1.73 1.26 3.82"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAtom;
