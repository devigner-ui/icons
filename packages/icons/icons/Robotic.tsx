import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRobotic = forwardRef<SVGSVGElement, IconProps>(function IconRobotic(
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
            d="M19 16v-2c0-2.83 0-4.24-.88-5.12S15.82 8 13 8h-2c-2.83 0-4.24 0-5.12.88S5 11.18 5 14v2c0 2.83 0 4.24.88 5.12S8.18 22 11 22h2c2.83 0 4.24 0 5.12-.88S19 18.82 19 16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M19 18c1.41 0 2.12 0 2.56-.44S22 16.41 22 15s0-2.12-.44-2.56S20.41 12 19 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M5 18c-1.41 0-2.12 0-2.56-.44S2 16.41 2 15s0-2.12.44-2.56S3.59 12 5 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 0v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 13v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 13v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 17.5s.67.5 2 .5 2-.5 2-.5"
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
            d="M9.75 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.05 7.25c1.37 0 2.47 0 3.34.12.9.12 1.66.38 2.26.98s.86 1.36.98 2.26c.12.87.12 1.97.12 3.34v2.1c0 1.37 0 2.47-.12 3.34-.12.9-.38 1.66-.98 2.26s-1.36.86-2.26.98c-.87.12-1.97.12-3.34.12h-2.1c-1.37 0-2.47 0-3.34-.12a3.7 3.7 0 0 1-2.26-.98c-.6-.6-.86-1.36-.98-2.26-.12-.87-.12-1.97-.12-3.34v-2.1c0-1.37 0-2.47.12-3.34.12-.9.38-1.66.98-2.26s1.36-.86 2.26-.98c.87-.12 1.97-.12 3.34-.12z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 12.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 12.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M9.4 17.05c.25-.33.7-.4 1.04-.16l.32.16c.26.1.67.2 1.24.2s.98-.1 1.24-.2l.32-.16a.75.75 0 0 1 .89 1.21l-.2.13q-.18.11-.49.22c-.4.16-1 .3-1.76.3a5 5 0 0 1-2.24-.52l-.21-.13a.75.75 0 0 1-.15-1.05"
            fill="currentColor"
          />
          <path
            d="M3.04 11.35c-.41.08-.8.23-1.13.56-.38.38-.53.85-.6 1.34-.06.46-.06 1.13-.06 1.8q-.02 1 .06 1.7c.07.49.22.96.6 1.34.33.33.72.48 1.13.56Q3 17.52 3 16.13v-2.26q-.01-1.39.04-2.52"
            fill="currentColor"
          />
          <path
            d="M20.96 18.65c.41-.08.8-.23 1.13-.56.38-.38.53-.85.6-1.34q.08-.7.06-1.7c0-.67 0-1.34-.06-1.8a2.3 2.3 0 0 0-.6-1.34 2 2 0 0 0-1.13-.56q.05 1.13.04 2.52v2.26q.01 1.39-.04 2.52"
            fill="currentColor"
          />
          <path d="M12.75 5a.75.75 0 0 0-1.5 0v2.25h1.5z" fill="currentColor" />
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
            d="M9.75 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V5c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.05 7.25h-2.1c-1.37 0-2.47 0-3.34.12-.9.12-1.66.38-2.26.98s-.86 1.36-.98 2.26c-.12.87-.12 1.97-.12 3.34v2.1c0 1.37 0 2.47.12 3.34.12.9.38 1.66.98 2.26s1.36.86 2.26.98c.87.12 1.97.12 3.34.12h2.1c1.37 0 2.47 0 3.34-.12.9-.12 1.66-.38 2.26-.98s.86-1.36.98-2.26c.12-.87.12-1.97.12-3.34v-2.1c0-1.37 0-2.47-.12-3.34a3.7 3.7 0 0 0-.98-2.26c-.6-.6-1.36-.86-2.26-.98-.87-.12-1.97-.12-3.34-.12M9.75 13a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm5.25-.75c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75m-4.56 4.64a.75.75 0 1 0-.87 1.22l.19.12q.16.11.48.22c.4.16 1 .3 1.76.3a5 5 0 0 0 2.24-.52l.2-.12.01-.01a.75.75 0 0 0-.89-1.2l-.32.15c-.26.1-.67.2-1.24.2s-.98-.1-1.24-.2z"
            fill="currentColor"
          />
          <path
            d="M3.04 11.35c-.41.08-.8.23-1.13.56-.38.38-.53.85-.6 1.34-.06.46-.06 1.13-.06 1.8q-.02 1 .06 1.7c.07.49.22.96.6 1.34.33.33.72.48 1.13.56Q3 17.52 3 16.13v-2.26q-.01-1.39.04-2.52"
            fill="currentColor"
          />
          <path
            d="M20.96 18.65c.41-.08.8-.23 1.13-.56.38-.38.53-.85.6-1.34q.08-.7.06-1.7c0-.67 0-1.34-.06-1.8a2.3 2.3 0 0 0-.6-1.34 2 2 0 0 0-1.13-.56q.05 1.13.04 2.52v2.26q.01 1.39-.04 2.52"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRobotic;
