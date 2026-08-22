import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaintbucket = forwardRef<SVGSVGElement, IconProps>(
  function IconPaintbucket(
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
            <g clipPath="url(#clip0_12_78591)">
              <path
                d="m4.44 15.56 3.46 3.46c2.43 2.43 3.26 2.39 5.66 0l5.57-5.57c1.94-1.94 2.43-3.23 0-5.66l-3.46-3.46c-2.6-2.59-3.72-1.94-5.66 0L4.44 9.9c-2.39 2.4-2.59 3.07 0 5.66"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="m19.87 16.79-.66 1.09c-.93 1.55-.21 2.82 1.6 2.82s2.53-1.27 1.6-2.82l-.66-1.09c-.52-.86-1.37-.86-1.88 0"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M2.67 12.24a33.3 33.3 0 0 1 17-.13l.5.13"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath>
                <rect
                  width="24"
                  height="24"
                  fill="none"
                  transform="translate(0.669922)"
                />
              </clipPath>
            </defs>
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
              d="m19.78 7.47-3.52-3.52c-3.16-3.15-4.82-1.99-6.82 0L3.78 9.61C2.63 10.76 2 11.5 1.77 12.32l-.01.01v.05c-.41 1.46.67 2.7 2.02 4.05l3.53 3.51C8.57 21.21 9.59 22 10.72 22s2.1-.76 3.4-2.06l5.66-5.65q.72-.73 1.13-1.3v-.01h.01c1.28-1.79.94-3.44-1.14-5.51m.04 2.45c.43.73-.25 1.63-1.08 1.45l-.92-.19-.07-.01q-1.05-.2-2.13-.33h-.04q-1.08-.14-2.18-.2h-.08a31 31 0 0 0-4.63.06 33 33 0 0 0-4.29.59l-.16.03.62-.64 5.65-5.65c1.82-1.8 2.44-2.23 4.68 0l3.51 3.52q.8.79 1.12 1.37"
              fill="currentColor"
            />
            <path
              d="M19.82 9.92c.43.73-.25 1.63-1.08 1.45l-.92-.19-.07-.01q-1.05-.2-2.13-.33h-.04q-1.08-.14-2.18-.2h-.08a31 31 0 0 0-4.26.03l-.37.03a33 33 0 0 0-4.29.59l-.16.03.62-.64 5.65-5.65c1.82-1.8 2.44-2.23 4.68 0l3.51 3.52q.8.79 1.12 1.37"
              fill="currentColor"
            />
            <path
              d="M21.62 16.87c-.38-.47-.71-.87-1.45-.87s-1.07.4-1.44.87a4 4 0 0 0-1.03 3.11c.15 1.19 1.17 2.02 2.47 2.02s2.32-.83 2.47-2.03a4 4 0 0 0-1.02-3.1"
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
              d="m19.78 7.47-3.52-3.52c-3.16-3.15-4.82-1.99-6.82 0L3.78 9.61C2.63 10.76 2 11.5 1.77 12.32l-.01.01v.05c-.41 1.46.67 2.7 2.02 4.05l3.53 3.51C8.57 21.21 9.59 22 10.72 22s2.1-.76 3.4-2.06l5.66-5.65q.72-.73 1.13-1.3v-.01h.01c1.28-1.79.94-3.44-1.14-5.51m-1.03 3.9h-.01l-.92-.19-.07-.01q-1.05-.2-2.13-.33h-.04q-1.08-.14-2.18-.2h-.08a31 31 0 0 0-4.63.06 33 33 0 0 0-4.29.59l-.16.03.62-.64 5.65-5.65c1.82-1.8 2.44-2.23 4.68 0l3.51 3.52a7 7 0 0 1 1.13 1.38c.42.73-.26 1.6-1.08 1.44"
              fill="currentColor"
            />
            <path
              d="M21.62 16.87c-.38-.47-.71-.87-1.45-.87s-1.07.4-1.44.87a4 4 0 0 0-1.03 3.11c.15 1.19 1.17 2.02 2.47 2.02s2.32-.83 2.47-2.03a4 4 0 0 0-1.02-3.1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPaintbucket;
