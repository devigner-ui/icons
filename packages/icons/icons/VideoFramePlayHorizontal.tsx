import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoFramePlayHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoFramePlayHorizontal(
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
              d="M12 2c4.71 0 7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.5 17h-19m19-10h-19M12 17v5m0-20v5m5-4.5V7m0 10v4.5M7 17v4.5m0-19V7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14 12c0-.53-.53-.88-1.59-1.6-1.07-.72-1.6-1.08-2.01-.81-.4.26-.4.98-.4 2.41s0 2.15.4 2.41.94-.1 2.01-.81S14 12.53 14 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path
              d="M14 12c0-.53-.53-.88-1.59-1.6-1.07-.72-1.6-1.08-2.01-.81-.4.26-.4.98-.4 2.41s0 2.15.4 2.41.94-.1 2.01-.81S14 12.53 14 12"
              fill="currentColor"
            />
            <path d="M11.25 2q-2.04-.01-3.5.07v4.18h3.5z" fill="currentColor" />
            <path
              d="M6.25 2.22c-1.22.2-2.1.56-2.79 1.24a4.8 4.8 0 0 0-1.24 2.79h4.03z"
              fill="currentColor"
            />
            <path
              d="M21.78 6.25a4.8 4.8 0 0 0-1.24-2.79 4.8 4.8 0 0 0-2.79-1.24v4.03z"
              fill="currentColor"
            />
            <path d="M12.75 2q2.04-.01 3.5.07v4.18h-3.5z" fill="currentColor" />
            <path
              d="M21.78 17.75h-4.03v4.03c1.22-.2 2.1-.56 2.79-1.24a4.8 4.8 0 0 0 1.24-2.79"
              fill="currentColor"
            />
            <path
              d="M16.25 17.75v4.18q-1.46.08-3.5.07v-4.25z"
              fill="currentColor"
            />
            <path
              d="M11.25 22v-4.25h-3.5v4.18q1.46.08 3.5.07"
              fill="currentColor"
            />
            <path
              d="M6.25 17.75v4.03a4.8 4.8 0 0 1-2.79-1.24 4.8 4.8 0 0 1-1.24-2.79z"
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
            <path d="M11.25 2q-2.04-.01-3.5.07v4.18h3.5z" fill="currentColor" />
            <path
              d="M6.25 2.22c-1.22.2-2.1.56-2.79 1.24a4.8 4.8 0 0 0-1.24 2.79h4.03z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12q-.02-2.54.07-4.25h19.86q.09 1.72.07 4.25.02 2.54-.07 4.25H2.07Q1.98 14.53 2 12m10.41-1.6c1.06.72 1.59 1.07 1.59 1.6s-.53.88-1.59 1.6c-1.07.72-1.6 1.08-2.01.81-.4-.26-.4-.98-.4-2.41s0-2.15.4-2.41.94.1 2.01.81"
              fill="currentColor"
            />
            <path
              d="M21.78 6.25a4.8 4.8 0 0 0-1.24-2.79 4.8 4.8 0 0 0-2.79-1.24v4.03z"
              fill="currentColor"
            />
            <path d="M12.75 2q2.04-.01 3.5.07v4.18h-3.5z" fill="currentColor" />
            <path
              d="M21.78 17.75h-4.03v4.03c1.22-.2 2.1-.56 2.79-1.24a4.8 4.8 0 0 0 1.24-2.79"
              fill="currentColor"
            />
            <path
              d="M16.25 17.75v4.18q-1.46.08-3.5.07v-4.25z"
              fill="currentColor"
            />
            <path
              d="M11.25 22v-4.25h-3.5v4.18q1.46.08 3.5.07"
              fill="currentColor"
            />
            <path
              d="M6.25 17.75v4.03a4.8 4.8 0 0 1-2.79-1.24 4.8 4.8 0 0 1-1.24-2.79z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoFramePlayHorizontal;
