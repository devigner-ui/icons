import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiComputer = forwardRef<SVGSVGElement, IconProps>(function IconAiComputer(
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

  /* In TwoTone the stand is the dimmed shape and is clipped below the
     screen's outer edge, so its round cap does not sit over the screen. One
     tone skips the clip: there the cap hides inside the screen, and a clip
     would leave a hairline seam. */
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
            d="M15.33 16.5H5.5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-.77"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16.5v4m-4 0h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.8c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
              <rect x="0" y={16.5 + Number(strokeWidth) / 2} width="24" height="24" />
            </clipPath>
          </defs>
          <path
            d="M5.5 3.5h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M12 16.5v4m-4 0h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.8c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M5.5 2.75h13a4 4 0 0 1 2.65 1.1 4 4 0 0 1 1.1 2.65v7a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-5.75v2.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-2.5H5.5a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.65v-7a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 6.4c.15 1.12.4 1.8.9 2.3s1.18.76 2.3.9a.4.4 0 0 1 0 .8c-1.12.15-1.8.4-2.3.9s-.75 1.18-.9 2.3a.4.4 0 0 1-.8 0c-.15-1.12-.4-1.8-.9-2.3s-1.18-.75-2.3-.9a.4.4 0 0 1 0-.8c1.12-.14 1.8-.4 2.3-.9s.75-1.17.9-2.3a.4.4 0 0 1 .8 0z"
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
            d="M5.5 2.75h13a4 4 0 0 1 2.65 1.1 4 4 0 0 1 1.1 2.65v7a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-5.75v2.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-2.5H5.5a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.65v-7a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1zm6.5 3.3a.4.4 0 0 0-.4.35c-.15 1.12-.4 1.8-.9 2.3s-1.18.76-2.3.9a.4.4 0 0 0 0 .8c1.12.15 1.8.4 2.3.9s.75 1.18.9 2.3a.4.4 0 0 0 .8 0c.15-1.12.4-1.8.9-2.3s1.18-.75 2.3-.9a.4.4 0 0 0 0-.8c-1.12-.14-1.8-.4-2.3-.9s-.75-1.17-.9-2.3a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiComputer;
