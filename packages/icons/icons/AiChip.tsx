import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiChip = forwardRef<SVGSVGElement, IconProps>(function IconAiChip(
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

  /* In TwoTone the pins are the dimmed shapes and are clipped at the frame's
     outer edge, so their round caps do not sit over the frame. One tone
     skips the clip: there the caps hide inside the frame, and a clip would
     leave a hairline seam. */
  const clip = useId();
  const h = Number(strokeWidth) / 2;

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
            d="M9.83 18.5H8.5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-3.27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 2.5v3m0 13v3M2.5 9h3m13 0h3M12 2.5v3m0 13v3M2.5 12h3m13 0h3M15 2.5v3m0 13v3M2.5 15h3m13 0h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.8c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
              <rect x="0" y="0" width={5.5 - h} height="24" />
              <rect x={18.5 + h} y="0" width={5.5 - h} height="24" />
              <rect x="0" y="0" width="24" height={5.5 - h} />
              <rect x="0" y={18.5 + h} width="24" height={5.5 - h} />
            </clipPath>
          </defs>
          <path
            d="M8.5 5.5h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M9 2.5v3m0 13v3M2.5 9h3m13 0h3M12 2.5v3m0 13v3M2.5 12h3m13 0h3M15 2.5v3m0 13v3M2.5 15h3m13 0h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.8c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M18.15 5.85c.59.58 1 1.5 1.08 2.4h2.27a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.27a4 4 0 0 1-1.08 2.4c-.58.59-1.5 1-2.4 1.08v2.27a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.27c-.9-.09-1.82-.5-2.4-1.08s-1-1.5-1.08-2.4H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.27c.09-.9.5-1.82 1.08-2.4s1.5-1 2.4-1.08V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.27c.9.09 1.82.5 2.4 1.08z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 8.4c.15 1.13.4 1.8.9 2.3s1.18.76 2.3.9a.4.4 0 0 1 0 .8c-1.12.15-1.8.4-2.3.9s-.75 1.18-.9 2.3a.4.4 0 0 1-.8 0c-.15-1.12-.4-1.8-.9-2.3s-1.18-.75-2.3-.9a.4.4 0 0 1 0-.8c1.12-.14 1.8-.4 2.3-.9s.75-1.17.9-2.3a.4.4 0 0 1 .8 0z"
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
            d="M18.15 5.85c.59.58 1 1.5 1.08 2.4h2.27a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.25v1.5h2.25a.75.75 0 0 1 0 1.5h-2.27a4 4 0 0 1-1.08 2.4c-.58.59-1.5 1-2.4 1.08v2.27a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.25h-1.5v2.25a.75.75 0 0 1-1.5 0v-2.27c-.9-.09-1.82-.5-2.4-1.08s-1-1.5-1.08-2.4H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.25v-1.5H2.5a.75.75 0 0 1 0-1.5h2.27c.09-.9.5-1.82 1.08-2.4s1.5-1 2.4-1.08V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.25h1.5V2.5a.75.75 0 0 1 1.5 0v2.27c.9.09 1.82.5 2.4 1.08zM12 8.05a.4.4 0 0 0-.4.35c-.15 1.13-.4 1.8-.9 2.3s-1.18.76-2.3.9a.4.4 0 0 0 0 .8c1.12.15 1.8.4 2.3.9s.75 1.18.9 2.3a.4.4 0 0 0 .8 0c.15-1.12.4-1.8.9-2.3s1.18-.75 2.3-.9a.4.4 0 0 0 0-.8c-1.12-.14-1.8-.4-2.3-.9s-.75-1.17-.9-2.3a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiChip;
