import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCloudServices = forwardRef<SVGSVGElement, IconProps>(function IconAiCloudServices(
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

  /* In TwoTone the cable is the dimmed shape and is clipped below the
     cloud's outer edge, so its round cap does not sit over the cloud. One
     tone skips the clip: there the cap hides inside the cloud, and a clip
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
            d="M15.6 15.5H17a4.01 4.01 0 0 0 .6-8A5.5 5.5 0 0 0 6.8 8.8a3.4 3.4 0 0 0 .2 6.7h6.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.44 12.4V9.88a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2M12 15.5v3M10.5 20a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0Z"
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
              <rect x="0" y={15.5 + Number(strokeWidth) / 2} width="24" height="24" />
            </clipPath>
          </defs>
          <path
            d="M7 15.5h10a4 4 0 0 0 .6-8A5.5 5.5 0 0 0 6.8 8.8a3.4 3.4 0 0 0 .2 6.7Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.44 12.4V9.88a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M12 15.5v3M10.5 20a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0Z"
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
            d="M3.32 12.26c-.02-.97.34-2 .9-2.7A4 4 0 0 1 6.1 8.22c.07-1.5.64-2.45 1.58-3.48a6.4 6.4 0 0 1 3.87-2 6.2 6.2 0 0 1 6.61 4.08c1.26.13 2 .69 2.75 1.57.76.87 1.23 2.2 1.14 3.46a5 5 0 0 1-1.64 3.25 5 5 0 0 1-3.42 1.14h-4.24v1.65q.51.19.84.51c.37.37.66 1.02.66 1.6 0 .56-.3 1.22-.66 1.58s-1.02.66-1.59.66-1.23-.3-1.6-.66A2.5 2.5 0 0 1 9.76 20c0-.57.3-1.22.66-1.59.2-.2.51-.4.84-.51v-1.65H6.9a4.5 4.5 0 0 1-2.52-1.35 4.4 4.4 0 0 1-1.06-2.64z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.69 12.4v-1.92c0-.68 0-1.32.38-1.91a2.45 2.45 0 0 1 4.26.3c.24.52.22 1.06.22 1.61v1.92a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zM12 9.62c-.23-.78-1.32-.9-1.7-.18q-.12.2-.13.45h1.88q-.01-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0V8.2c0-.41.34-.75.75-.75z"
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
            d="M3.32 12.26c-.02-.97.34-2 .9-2.7A4 4 0 0 1 6.1 8.22c.07-1.5.64-2.45 1.58-3.48a6.4 6.4 0 0 1 3.87-2 6.2 6.2 0 0 1 6.61 4.08c1.26.13 2 .69 2.75 1.57.76.87 1.23 2.2 1.14 3.46a5 5 0 0 1-1.64 3.25 5 5 0 0 1-3.42 1.14h-4.24v1.65q.51.19.84.51c.37.37.66 1.02.66 1.6 0 .56-.3 1.22-.66 1.58s-1.02.66-1.59.66-1.23-.3-1.6-.66A2.5 2.5 0 0 1 9.76 20c0-.57.3-1.22.66-1.59.2-.2.51-.4.84-.51v-1.65H6.9a4.5 4.5 0 0 1-2.52-1.35 4.4 4.4 0 0 1-1.06-2.64zm6.12.89c.41 0 .75-.34.75-.75v-1.01h1.86v1a.75.75 0 0 0 1.5 0v-1.91c0-.55.01-1.1-.22-1.61a2.45 2.45 0 0 0-4.26-.3c-.38.6-.38 1.23-.38 1.91v1.92c0 .41.33.75.75.75zm2.62-3.26h-1.88q.02-.25.12-.46c.39-.7 1.48-.6 1.71.19q.04.12.05.27zM13.8 8.2v4.2a.75.75 0 0 0 1.5 0V8.2a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCloudServices;
