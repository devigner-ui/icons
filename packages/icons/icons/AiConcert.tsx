import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiConcert = forwardRef<SVGSVGElement, IconProps>(function IconAiConcert(
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

  /* In TwoTone the stand is the dimmed shape and is clipped below the ring's
     outer edge, so its round cap does not sit over the ring. One tone skips
     the clip: there the cap hides inside the ring, and a clip would leave a
     hairline seam. */
  const clip = useId();

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
            d="M15.7 3.94a5.5 5.5 0 1 0 1.37 1.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13.5V21m-3.5 0h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5.2c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
          <defs>
            <clipPath id={clip}>
              <rect x="0" y={13.5 + Number(strokeWidth) / 2} width="24" height="24" />
            </clipPath>
          </defs>
          <path
            d="M6.5 8a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M12 13.5V21m-3.5 0h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5.2c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="M12 1.75c1.67 0 3.33.74 4.42 1.83A6.4 6.4 0 0 1 18.25 8c0 1.67-.74 3.33-1.83 4.42a6.5 6.5 0 0 1-3.67 1.78v6.05h2.75a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5h2.75V14.2a6.5 6.5 0 0 1-3.67-1.78A6.4 6.4 0 0 1 5.75 8c0-1.67.74-3.33 1.83-4.42A6.4 6.4 0 0 1 12 1.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 4.8c.13 1 .35 1.58.78 2.02s1.03.65 2.02.78a.4.4 0 0 1 0 .8c-1 .13-1.58.35-2.02.78s-.65 1.03-.78 2.02a.4.4 0 0 1-.8 0c-.13-1-.35-1.58-.78-2.02S9.79 8.53 8.8 8.4a.4.4 0 0 1 0-.8c1-.13 1.58-.35 2.02-.78s.65-1.03.78-2.02a.4.4 0 0 1 .8 0z"
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
            d="M12 1.75c1.67 0 3.33.74 4.42 1.83A6.4 6.4 0 0 1 18.25 8c0 1.67-.74 3.33-1.83 4.42a6.5 6.5 0 0 1-3.67 1.78v6.05h2.75a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5h2.75V14.2a6.5 6.5 0 0 1-3.67-1.78A6.4 6.4 0 0 1 5.75 8c0-1.67.74-3.33 1.83-4.42A6.4 6.4 0 0 1 12 1.75zm0 2.7a.4.4 0 0 0-.4.35c-.13 1-.35 1.58-.78 2.02s-1.03.65-2.02.78a.4.4 0 0 0 0 .8c1 .13 1.58.35 2.02.78s.65 1.03.78 2.02a.4.4 0 0 0 .8 0c.13-1 .35-1.58.78-2.02s1.03-.65 2.02-.78a.4.4 0 0 0 0-.8c-1-.13-1.58-.35-2.02-.78s-.65-1.03-.78-2.02a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiConcert;
