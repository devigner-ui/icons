import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiEraser = forwardRef<SVGSVGElement, IconProps>(function IconAiEraser(
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

  /* In TwoTone the divider is the dimmed shape and is clipped to the band
     between the eraser's long sides (x + y between a and b, inset by half the
     stroke along the diagonal), so its round caps do not sit over the body.
     One tone skips the clip: there the caps hide inside the sides, and a clip
     would leave a hairline seam. */
  const clip = useId();
  const inset = (Number(strokeWidth) / 2) * Math.SQRT2;
  const a = 19.05 + inset;
  const b = 28.95 - inset;

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
            d="m11.3 7.76 2.61-2.62a2.5 2.5 0 0 1 3.54 0l1.41 1.41a2.5 2.5 0 0 1 0 3.54l-7.77 7.77a2.5 2.5 0 0 1-3.54 0l-1.41-1.41a2.5 2.5 0 0 1 0-3.54L9.6 9.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m8.96 10.09 4.95 4.95M11 21h9.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 2.2c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="m17.45 5.14 1.41 1.41a2.5 2.5 0 0 1 0 3.54l-7.77 7.77a2.5 2.5 0 0 1-3.54 0l-1.41-1.41a2.5 2.5 0 0 1 0-3.54l7.77-7.77a2.5 2.5 0 0 1 3.54 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <clipPath id={clip}>
              <path d={`M-10 ${a + 10}L40 ${a - 40}L40 ${b - 40}L-10 ${b + 10}Z`} />
            </clipPath>
          </defs>
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="m8.96 10.09 4.95 4.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 21h9.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 2.2c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="m17.98 4.6 1.41 1.42c.58.62.96 1.53.96 2.3s-.38 1.68-.96 2.3l-7.77 7.77c-.62.58-1.53.96-2.3.96s-1.68-.38-2.3-.96l-1.41-1.41a3.6 3.6 0 0 1-.96-2.3c0-.77.38-1.68.96-2.3l7.77-7.77a3.6 3.6 0 0 1 2.3-.96c.78 0 1.68.38 2.3.96z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m8.97 9.03 6.01 6.01-1.06 1.06-6.01-6zM11 21.75h9.5a.75.75 0 0 0 0-1.5H11a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.4 1.8c.13 1 .35 1.58.78 2.02s1.03.65 2.02.78a.4.4 0 0 1 0 .8c-1 .13-1.58.35-2.02.78S5.53 7.21 5.4 8.2a.4.4 0 0 1-.8 0c-.13-1-.35-1.58-.78-2.02S2.79 5.53 1.8 5.4a.4.4 0 0 1 0-.8c1-.13 1.58-.35 2.02-.78s.65-1.03.78-2.02a.4.4 0 0 1 .8 0z"
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
            d="m17.98 4.6 1.41 1.42c.58.62.96 1.53.96 2.3s-.38 1.68-.96 2.3l-4.41 4.42-6.01-6.01 4.41-4.42a3.6 3.6 0 0 1 2.3-.96c.78 0 1.68.38 2.3.96zm-6.36 13.8c-.62.57-1.53.95-2.3.95-.78 0-1.68-.38-2.3-.96l-1.41-1.41a3.6 3.6 0 0 1-.96-2.3c0-.77.38-1.68.96-2.3l2.3-2.3 6 6.02zM10.25 21c0-.41.34-.75.75-.75h9.5a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.4 1.8c.13 1 .35 1.58.78 2.02s1.03.65 2.02.78a.4.4 0 0 1 0 .8c-1 .13-1.58.35-2.02.78S5.53 7.21 5.4 8.2a.4.4 0 0 1-.8 0c-.13-1-.35-1.58-.78-2.02S2.79 5.53 1.8 5.4a.4.4 0 0 1 0-.8c1-.13 1.58-.35 2.02-.78s.65-1.03.78-2.02a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiEraser;
