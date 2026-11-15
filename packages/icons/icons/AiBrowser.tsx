import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBrowser = forwardRef<SVGSVGElement, IconProps>(function IconAiBrowser(
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

  /* In TwoTone the divider and dots are the dimmed shapes; the divider is
     clipped at the frame's inner edges so its round caps do not sit over
     the frame. One tone skips the clip: there the caps hide inside the
     frame, and a clip would leave a hairline seam. */
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
            d="M10.15 20.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5h-5.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 8.5h19M6 6zm2.8 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.3c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
              <rect x={2.5 + h} y="0" width={19 - 2 * h} height="24" />
            </clipPath>
          </defs>
          <path
            d="M6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M2.5 8.5h19M6 6zm2.8 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.3c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M6 2.75h12A4.6 4.6 0 0 1 21 4a4.6 4.6 0 0 1 1.25 3v10A4.6 4.6 0 0 1 21 20a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 20a4.6 4.6 0 0 1-1.25-3V7A4.6 4.6 0 0 1 3 4a4.6 4.6 0 0 1 3-1.25z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M1.75 7.75h20.5v1.5H1.75zM5.25 6c0-.41.34-.75.75-.75h.01a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6zm2.8 0c0-.41.34-.75.75-.75h.01a.75.75 0 0 1 0 1.5H8.8A.75.75 0 0 1 8.05 6z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 10.9c.15 1.13.4 1.8.9 2.3s1.18.76 2.3.9a.4.4 0 0 1 0 .8c-1.12.15-1.8.4-2.3.9s-.75 1.18-.9 2.3a.4.4 0 0 1-.8 0c-.15-1.12-.4-1.8-.9-2.3s-1.18-.75-2.3-.9a.4.4 0 0 1 0-.8c1.12-.14 1.8-.4 2.3-.9s.75-1.17.9-2.3a.4.4 0 0 1 .8 0z"
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
            d="M6 2.75h12A4.6 4.6 0 0 1 21 4a4.6 4.6 0 0 1 1.25 3v.75H1.75V7A4.6 4.6 0 0 1 3 4a4.6 4.6 0 0 1 3-1.25zM22.25 17A4.6 4.6 0 0 1 21 20a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 20a4.6 4.6 0 0 1-1.25-3V9.25h20.5zM6 6.75za.75.75 0 0 0 0-1.5h0a.75.75 0 0 0 0 1.5zm2.8 0za.75.75 0 0 0 0-1.5h0a.75.75 0 0 0 0 1.5zm3.2 3.8a.4.4 0 0 0-.4.35c-.15 1.13-.4 1.8-.9 2.3s-1.18.76-2.3.9a.4.4 0 0 0 0 .8c1.12.15 1.8.4 2.3.9s.75 1.18.9 2.3a.4.4 0 0 0 .8 0c.15-1.12.4-1.8.9-2.3s1.18-.75 2.3-.9a.4.4 0 0 0 0-.8c-1.12-.14-1.8-.4-2.3-.9s-.75-1.17-.9-2.3a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBrowser;
