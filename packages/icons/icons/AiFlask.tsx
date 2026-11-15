import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFlask = forwardRef<SVGSVGElement, IconProps>(function IconAiFlask(
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

  /* In TwoTone the liquid line is the dimmed shape and is clipped at the
     inner edges of the flask's slanted sides (half the stroke, widened by the
     slope), so its round caps do not sit over the flask. One tone skips the
     clip: there the caps hide inside the sides, and a clip would leave a
     hairline seam. */
  const clip = useId();
  const k = (Number(strokeWidth) / 2) * 1.146;

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
            d="M9.5 2.5v6l-5.1 9.1c-.9 1.7.3 3.9 2.3 3.9h6.85m2.4 0h1.35c2 0 3.2-2.2 2.3-3.9l-5.1-9.1v-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2.5h8M6.6 14h10.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15.5c.2 1.45.75 2 2.2 2.2-1.45.2-2 .75-2.2 2.2-.2-1.45-.75-2-2.2-2.2 1.45-.2 2-.75 2.2-2.2Z"
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
            d="M9.5 2.5v6l-5.1 9.1c-.9 1.7.3 3.9 2.3 3.9h10.6c2 0 3.2-2.2 2.3-3.9l-5.1-9.1v-6M8 2.5h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <clipPath id={clip}>
              <path d={`M${9.5 + k} 8.5H${14.5 - k}L${19.6 - k} 17.6H${4.4 + k}Z`} />
            </clipPath>
          </defs>
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M6.6 14h10.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15.5c.2 1.45.75 2 2.2 2.2-1.45.2-2 .75-2.2 2.2-.2-1.45-.75-2-2.2-2.2 1.45-.2 2-.75 2.2-2.2Z"
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
            d="M15.25 2.5v5.8l5.01 8.95a3.8 3.8 0 0 1-.07 3.31 3.7 3.7 0 0 1-2.89 1.69H6.7a3.7 3.7 0 0 1-2.89-1.69 3.8 3.8 0 0 1-.06-3.33l5-8.92V2.5c0-.42.34-.76.75-.76h5c.41 0 .75.34.75.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.98 13.25h12.04l.84 1.5H5.14zM7.25 2.5c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 15.1c.1.8.27 1.25.61 1.59s.8.51 1.6.61a.4.4 0 0 1 0 .8c-.8.1-1.26.27-1.6.61s-.51.8-.61 1.6a.4.4 0 0 1-.8 0c-.1-.8-.27-1.26-.61-1.6s-.8-.51-1.6-.61a.4.4 0 0 1 0-.8c.8-.1 1.26-.27 1.6-.61s.51-.8.61-1.6a.4.4 0 0 1 .8 0z"
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
            d="m15.25 8.3 2.77 4.95H5.98L8.75 8.3V3.25H8a.75.75 0 0 1 0-1.5h1.5q0 0 0 0H16a.75.75 0 0 1 0 1.5h-.75zm5.01 8.95a3.8 3.8 0 0 1-.07 3.31 3.7 3.7 0 0 1-2.89 1.69H6.7a3.7 3.7 0 0 1-2.89-1.69 3.8 3.8 0 0 1-.06-3.33l1.39-2.48H12a.4.4 0 0 0-.4.35c-.1.8-.27 1.25-.61 1.59s-.8.51-1.6.61a.4.4 0 0 0 0 .8c.8.1 1.26.27 1.6.61s.51.8.61 1.6a.4.4 0 0 0 .8 0c.1-.8.27-1.26.61-1.6s.8-.51 1.6-.61a.4.4 0 0 0 0-.8c-.8-.1-1.26-.27-1.6-.61s-.51-.8-.61-1.6a.4.4 0 0 0-.4-.34h6.86z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiFlask;
