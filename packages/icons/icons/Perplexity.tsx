import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPerplexity = forwardRef<SVGSVGElement, IconProps>(function IconPerplexity(
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
            d="M13.8 17H3.5a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-4.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2v20M5 2.5v5m14-5v5m-14-5 7 5 7-5m-7 5L5.5 14v7.5l6.5-6m0-8 6.5 6.5v7.5l-6.5-6"
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
            opacity={duotone ? "0.4" : "1"}
            d="M3.5 7.5h17a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2v20M5 2.5v5m14-5v5m-14-5 7 5 7-5m-7 5L5.5 14v7.5l6.5-6m0-8 6.5 6.5v7.5l-6.5-6"
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
            d="M3.5 6.75h17c.43.03.96.24 1.24.51.27.28.48.81.51 1.24V16a2.2 2.2 0 0 1-.51 1.24 2.2 2.2 0 0 1-1.24.51h-17a2 2 0 0 1-1.24-.51A2.2 2.2 0 0 1 1.75 16V8.5c.03-.43.24-.96.51-1.24a2.2 2.2 0 0 1 1.24-.51zm-.18 1.57c-.08.09-.1.06-.07.18V16c-.03.12-.01.09.07.18s.06.1.18.07h17c.12.03.09.01.18-.07s.1-.06.07-.18V8.5c.03-.12.01-.09-.07-.18s-.06-.1-.18-.07h-17c-.12-.03-.09-.01-.18.07z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12 1.25c.41 0 .75.34.75.75v4.04l5.8-4.14a.75.75 0 0 1 1.03.13 1 1 0 0 1 .17.48v5a.75.75 0 0 1-1.5 0V3.95l-5.1 3.64 5.88 5.87a.8.8 0 0 1 .22.53v7.54a1 1 0 0 1-.17.44l-.04.04a.8.8 0 0 1-.53.23h-.05a1 1 0 0 1-.47-.2l-5.24-4.84V22a.75.75 0 0 1-1.5 0v-4.8l-5.24 4.84-.03.03a1 1 0 0 1-.44.17H5.5a.7.7 0 0 1-.53-.23l-.04-.04a1 1 0 0 1-.17-.44V14a.7.7 0 0 1 .22-.53l5.87-5.87-5.09-3.64V7.5a.75.75 0 0 1-1.5 0V2.51a.8.8 0 0 1 .4-.68.8.8 0 0 1 .58-.04q.12.03.21.1l5.81 4.15V2c0-.41.34-.75.75-.75zM6.25 14.31v5.48l5-4.62V9.31zm11.5 5.48V14.3l-5-5v5.86z"
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
            d="M3.5 6.75h.75V2.51a.8.8 0 0 1 .4-.68.8.8 0 0 1 .58-.05q.12.05.21.11l5.81 4.15V2a.75.75 0 0 1 1.5 0v4.04l5.8-4.15a.75.75 0 0 1 1.03.14 1 1 0 0 1 .17.48v4.24h.75c.43.03.96.24 1.24.51.27.28.48.81.51 1.24V16a2.2 2.2 0 0 1-.51 1.24 2.2 2.2 0 0 1-1.24.51h-1.25v3.79a1 1 0 0 1-.17.44l-.04.04a.8.8 0 0 1-.53.23h-.05a1 1 0 0 1-.47-.2l-4.66-4.3h-.58V22a.75.75 0 0 1-1.5 0v-4.25h-.58L6 22.05l-.03.03a1 1 0 0 1-.44.17H5.5a.7.7 0 0 1-.53-.23l-.04-.04a1 1 0 0 1-.17-.44v-3.79H3.5a2 2 0 0 1-1.24-.51A2.2 2.2 0 0 1 1.75 16V8.5c.03-.43.24-.96.51-1.24a2.2 2.2 0 0 1 1.24-.51zm-.18 1.57c-.08.09-.1.06-.07.18V16c-.03.12-.01.09.07.18s.06.1.18.07h1.25V14a.7.7 0 0 1 .22-.53l5.22-5.22H3.5c-.12-.03-.09-.01-.18.07zm17.18 7.93c.12.03.09.01.18-.07s.1-.06.07-.18V8.5c.03-.12.01-.09-.07-.18s-.06-.1-.18-.07h-6.69l5.22 5.22a.8.8 0 0 1 .22.53v2.25zm-2.25-12.3-3.91 2.8h3.91zm-12.5 0v2.8h3.91zm.5 10.36v1.94h3.83l1.17-1.08V9.31zm0 5.48 2.2-2.04h-2.2zm11.5 0v-2.04h-2.2zm0-5.48-5-5v5.86l1.17 1.08h3.83z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconPerplexity;
