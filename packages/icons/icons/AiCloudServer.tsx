import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCloudServer = forwardRef<SVGSVGElement, IconProps>(function IconAiCloudServer(
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

  /* In TwoTone the cable and the light are the dimmed shapes. The cable is
     clipped between the cloud and the server box, so its round caps do not
     sit over either. One tone skips the clip: there the caps hide inside the
     outlines, and a clip would leave a hairline seam. */
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
            d="M8.21 15.61h7.4c1 0 1.8.8 1.8 1.8v1.4c0 1-.8 1.8-1.8 1.8h-7.4c-1 0-1.8-.8-1.8-1.8v-1.4c0-1 .8-1.8 1.8-1.8zm7.3-2.74a3.25 3.25 0 0 0 .43-6.48 4.32 4.32 0 0 0-8.42 1 2.76 2.76 0 0 0 .79 5.48h4.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.91 12.91v2.7m-3 2.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.91 6.31c.18 1.32.68 1.82 2 2-1.32.18-1.82.68-2 2-.18-1.32-.68-1.82-2-2 1.32-.18 1.82-.68 2-2Z"
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
              <rect x="0" y={12.87 + h} width="24" height={2.74 - 2 * h} />
              <rect x="0" y={15.61 + h} width="24" height="24" />
            </clipPath>
          </defs>
          <path
            d="M8.31 12.87h7.2a3.25 3.25 0 0 0 .43-6.48 4.32 4.32 0 0 0-8.42 1 2.76 2.76 0 0 0 .79 5.48zm-.1 2.74h7.4c1 0 1.8.8 1.8 1.8v1.4c0 1-.8 1.8-1.8 1.8h-7.4c-1 0-1.8-.8-1.8-1.8v-1.4c0-1 .8-1.8 1.8-1.8Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M11.91 12.91v2.7m-3 2.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.91 6.31c.18 1.32.68 1.82 2 2-1.32.18-1.82.68-2 2-.18-1.32-.68-1.82-2-2 1.32-.18 1.82-.68 2-2Z"
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
            d="M4.44 10.64c-.14-.91.15-1.94.66-2.61A3.4 3.4 0 0 1 6.85 6.8c.1-1.16.55-1.8 1.3-2.6a5.3 5.3 0 0 1 3.08-1.53 5 5 0 0 1 5.26 3.05c1.04.1 1.61.55 2.25 1.28a4.2 4.2 0 0 1 .98 2.9 4.2 4.2 0 0 1-1.36 2.74 4.2 4.2 0 0 1-2.85.98h-2.85v1.24h2.95c.65.03 1.38.33 1.8.75s.72 1.15.75 1.8v1.4a3 3 0 0 1-.75 1.8 3 3 0 0 1-1.8.75h-7.4a3 3 0 0 1-1.8-.75 3 3 0 0 1-.75-1.8v-1.4a3 3 0 0 1 .75-1.8 3 3 0 0 1 1.8-.75h2.95v-1.25H8.34a3.8 3.8 0 0 1-2.53-.67 3.7 3.7 0 0 1-1.37-2.31z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.16 18.11c0-.41.34-.75.75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.31 5.91c.1.73.25 1.14.56 1.45.3.3.71.46 1.44.55a.4.4 0 0 1 0 .8c-.73.1-1.14.25-1.45.56-.3.3-.46.71-.55 1.44a.4.4 0 0 1-.8 0c-.1-.73-.25-1.14-.56-1.44-.3-.31-.71-.47-1.44-.56a.4.4 0 0 1 0-.8c.73-.1 1.14-.25 1.45-.56.3-.3.46-.71.55-1.44a.4.4 0 0 1 .8 0"
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
            d="M4.44 10.64c-.14-.91.15-1.94.66-2.61A3.4 3.4 0 0 1 6.85 6.8c.1-1.16.55-1.8 1.3-2.6a5.3 5.3 0 0 1 3.08-1.53 5 5 0 0 1 5.26 3.05c1.04.1 1.61.55 2.25 1.28a4.2 4.2 0 0 1 .98 2.9 4.2 4.2 0 0 1-1.36 2.74 4.2 4.2 0 0 1-2.85.98h-2.85v1.24h2.95c.65.03 1.38.33 1.8.75s.72 1.15.75 1.8v1.4a3 3 0 0 1-.75 1.8 3 3 0 0 1-1.8.75h-7.4a3 3 0 0 1-1.8-.75 3 3 0 0 1-.75-1.8v-1.4a3 3 0 0 1 .75-1.8 3 3 0 0 1 1.8-.75h2.95v-1.25H8.34a3.8 3.8 0 0 1-2.53-.67 3.7 3.7 0 0 1-1.37-2.31zm4.47 8.22a.75.75 0 0 0 0-1.5.75.75 0 0 0 0 1.5m3-13.3a.4.4 0 0 0-.4.35c-.1.73-.25 1.14-.56 1.44-.3.31-.71.47-1.44.56a.4.4 0 0 0 0 .8c.73.1 1.14.25 1.45.56.3.3.46.71.55 1.44a.4.4 0 0 0 .8 0c.1-.73.25-1.14.56-1.45.3-.3.71-.46 1.44-.55a.4.4 0 0 0 0-.8c-.73-.1-1.14-.25-1.45-.56-.3-.3-.46-.71-.55-1.44a.4.4 0 0 0-.4-.35"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCloudServer;
