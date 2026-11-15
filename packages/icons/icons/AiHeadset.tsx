import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHeadset = forwardRef<SVGSVGElement, IconProps>(function IconAiHeadset(
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

  /* In TwoTone the connectors are the dimmed shapes and are clipped at the
     frame's outer edge, so their round caps do not sit over the frame. One
     tone skips the clip: there the caps hide inside the frame, and a clip
     would leave a hairline seam. */
  const clip = useId();
  const h = Number(strokeWidth) / 2;
  const outside = (
    <defs>
      <clipPath id={clip}>
        <rect x="0" y="0" width={5 - h} height="24" />
        <rect x={18 + h} y="0" width={6 - h} height="24" />
        <rect x="0" y="0" width="24" height={7.5 - h} />
      </clipPath>
    </defs>
  );

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
            d="M9.83 16.5H8a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-2.77"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 10h1.5c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H18M5 12H3m6-4.5V5m5 2.5V5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 9.8c.2 1.45.75 2 2.2 2.2-1.45.2-2 .75-2.2 2.2-.2-1.45-.75-2-2.2-2.2 1.45-.2 2-.75 2.2-2.2Z"
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
          {outside}
          <path
            d="M8 7.5h7a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M18 10h1.5c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H18M5 12H3m6-4.5V5m5 2.5V5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 9.8c.2 1.45.75 2 2.2 2.2-1.45.2-2 .75-2.2 2.2-.2-1.45-.75-2-2.2-2.2 1.45-.2 2-.75 2.2-2.2Z"
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
            d="M8 6.75h.25V5a.75.75 0 0 1 1.5 0v1.75h3.5V5a.75.75 0 0 1 1.5 0v1.75H15a4 4 0 0 1 2.65 1.1q.55.56.85 1.39c.7-.03 1.47-.07 2.03.31q.46.32.63.86c.12.38.09.78.09 1.18 0 .63.1 1.4-.09 2q-.14.43-.46.72c-.57.52-1.43.48-2.2.45q-.3.83-.85 1.4a4 4 0 0 1-2.65 1.1H8a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.66v-.75H3a.75.75 0 0 1 0-1.5h1.25v-.75a4 4 0 0 1 1.1-2.65A4 4 0 0 1 8 6.75zm11.19 6.5c.14 0 .36.05.49-.04.1-.06.07-.23.07-.32v-1.66c0-.11.04-.34-.06-.43-.11-.1-.37-.05-.5-.05h-.44v2.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.9 9.4c.1.8.27 1.25.61 1.59s.8.51 1.6.61a.4.4 0 0 1 0 .8c-.8.1-1.26.27-1.6.61s-.51.8-.61 1.6a.4.4 0 0 1-.8 0c-.1-.8-.27-1.26-.61-1.6s-.8-.51-1.6-.61a.4.4 0 0 1 0-.8c.8-.1 1.26-.27 1.6-.61s.51-.8.61-1.6a.4.4 0 0 1 .8 0z"
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
            d="M8 6.75h.25V5a.75.75 0 0 1 1.5 0v1.75h3.5V5a.75.75 0 0 1 1.5 0v1.75H15a4 4 0 0 1 2.65 1.1q.55.56.85 1.39c.7-.03 1.47-.07 2.03.31q.46.32.63.86c.12.38.09.78.09 1.18 0 .63.1 1.4-.09 2q-.14.43-.46.72c-.57.52-1.43.48-2.2.45q-.3.83-.85 1.4a4 4 0 0 1-2.65 1.1H8a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.66v-.75H3a.75.75 0 0 1 0-1.5h1.25v-.75a4 4 0 0 1 1.1-2.65A4 4 0 0 1 8 6.75zm11.19 6.5c.14 0 .36.05.49-.04.1-.06.07-.23.07-.32v-1.66c0-.11.04-.34-.06-.43-.11-.1-.37-.05-.5-.05h-.44v2.5zm-7.69-4.2a.4.4 0 0 0-.4.35c-.1.8-.27 1.25-.61 1.59s-.8.51-1.6.61a.4.4 0 0 0 0 .8c.8.1 1.26.27 1.6.61s.51.8.61 1.6a.4.4 0 0 0 .8 0c.1-.8.27-1.26.61-1.6s.8-.51 1.6-.61a.4.4 0 0 0 0-.8c-.8-.1-1.26-.27-1.6-.61s-.51-.8-.61-1.6a.4.4 0 0 0-.4-.34z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiHeadset;
