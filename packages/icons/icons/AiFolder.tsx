import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFolder = forwardRef<SVGSVGElement, IconProps>(function IconAiFolder(
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

  /* In TwoTone the divider is the dimmed shape and is clipped at the frame's
     inner edges, so its round caps do not sit over the frame. One tone skips
     the clip: there the caps hide inside the frame, and a clip would leave a
     hairline seam. */
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
            d="M14.62 20H5c-1.4 0-2.5-1.1-2.5-2.5v-10C2.5 6.1 3.6 5 5 5h3.4c.6 0 1.2.3 1.6.7l1.3 1.6c.4.5 1 .7 1.6.7H19c1.4 0 2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5h-1.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 10h19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.15c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M2.5 7.5C2.5 6.1 3.6 5 5 5h3.4c.6 0 1.2.3 1.6.7l1.3 1.6c.4.5 1 .7 1.6.7H19c1.4 0 2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5H5c-1.4 0-2.5-1.1-2.5-2.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <clipPath id={clip}>
              <rect x={2.5 + h} y="0" width={19 - 2 * h} height="24" />
            </clipPath>
          </defs>
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M2.5 10h19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.15c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M1.75 7.5c.03-.85.4-1.76.95-2.3A3.6 3.6 0 0 1 5 4.25h3.4a3.7 3.7 0 0 1 2.18.98l1.3 1.6c.23.38.54.44 1.02.42H19c.85.03 1.76.4 2.3.95.55.54.92 1.45.95 2.3v7a3.6 3.6 0 0 1-.94 2.3 3.6 3.6 0 0 1-2.31.95H5a3.6 3.6 0 0 1-2.3-.94 3.6 3.6 0 0 1-.95-2.31z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M1.75 9.25H22a3 3 0 0 1 .25 1.25v.25H1.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 11.75c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.33-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.33 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
            d="M1.75 7.5c.03-.85.4-1.76.95-2.3A3.6 3.6 0 0 1 5 4.25h3.4a3.7 3.7 0 0 1 2.18.98l1.3 1.6c.23.38.54.44 1.02.42H19c.85.03 1.76.4 2.3.95q.42.42.68 1.05H1.75zm20.5 10a3.6 3.6 0 0 1-.94 2.3 3.6 3.6 0 0 1-2.31.95H5a3.6 3.6 0 0 1-2.3-.94 3.6 3.6 0 0 1-.95-2.31v-6.75h20.5zM12 11.4a.4.4 0 0 0-.4.35c-.12.93-.33 1.47-.73 1.87s-.94.61-1.87.73a.4.4 0 0 0 0 .8c.93.12 1.47.33 1.87.73s.61.94.73 1.87a.4.4 0 0 0 .8 0c.12-.93.33-1.47.73-1.87s.94-.61 1.87-.73a.4.4 0 0 0 0-.8c-.93-.12-1.47-.33-1.87-.73s-.61-.94-.73-1.87a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiFolder;
