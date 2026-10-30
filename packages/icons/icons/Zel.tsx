import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconZel = forwardRef<SVGSVGElement, IconProps>(function IconZel(
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
            d="M10.5 11.46v2.85L8 15.75l-2.5-1.44v-2.85L8 10.02l1.25.72z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.5 11.46v2.85L16 15.75l-2.5-1.44v-2.85l1.25-.72 1.25-.72z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.75 9.33v1.41l-1.25.72v1.73l-1.5.86-1.5-.86v-1.73l-1.25-.72V9.33L12 7.75z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M4 6a10 10 0 1 0 3.97-3.15"
            strokeWidth={strokeWidth}
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M10.5 11.46v2.85L8 15.75l-2.5-1.44v-2.85L8 10.02l1.25.72z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 11.46v2.85L16 15.75l-2.5-1.44v-2.85l1.25-.72 1.25-.72z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M14.75 9.33v1.41l-1.25.72v1.73l-1.5.86-1.5-.86v-1.73l-1.25-.72V9.33L12 7.75z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M24 0H0v24h24z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M10.5 11.46v2.57a.5.5 0 0 1-.25.43l-2 1.15a.5.5 0 0 1-.5 0l-2-1.15a.5.5 0 0 1-.25-.43v-2.28q.01-.28.25-.43l2-1.15a.5.5 0 0 1 .5 0l1 .58z"
            fill="currentColor"
          />
          <path
            d="M18.5 11.75v2.28a.5.5 0 0 1-.25.43l-2 1.15a.5.5 0 0 1-.5 0l-2-1.15a.5.5 0 0 1-.25-.43v-2.57l1.25-.71 1-.58a.5.5 0 0 1 .5 0l2 1.15a.5.5 0 0 1 .25.43"
            fill="currentColor"
          />
          <path
            d="M14.75 9.62v1.13l-1.25.71v1.73l-1.25.72a.5.5 0 0 1-.5 0l-1.25-.72v-1.73l-1.25-.71V9.62q.01-.28.25-.43l2.25-1.29a.5.5 0 0 1 .5 0l2.25 1.29a.5.5 0 0 1 .25.43"
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
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m6.5 12.02a.5.5 0 0 1-.25.43l-2 1.15a.5.5 0 0 1-.5 0l-2-1.15a.5.5 0 0 1-.25-.43v-.83l-1.25.72a.5.5 0 0 1-.5 0l-1.25-.72v.83a.5.5 0 0 1-.25.43l-2 1.15a.5.5 0 0 1-.5 0l-2-1.15a.5.5 0 0 1-.25-.43v-2.28q.01-.28.25-.43l2-1.15a.5.5 0 0 1 .5 0l1 .58V9.61q.01-.28.25-.43l2.25-1.29a.5.5 0 0 1 .5 0l2.25 1.29q.25.15.25.43v1.13l1-.58a.5.5 0 0 1 .5 0l2 1.15q.25.15.25.43z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconZel;
