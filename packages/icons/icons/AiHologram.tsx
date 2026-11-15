import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHologram = forwardRef<SVGSVGElement, IconProps>(function IconAiHologram(
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
            d="M7.87 11.69 7 11.2V5.3l5-2.8 5 2.8v5.9L12 14l-2.04-1.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m7 5.3 5 2.8 5-2.8m-5 2.8V14m-5 2.6c-2.7.5-4.5 1.4-4.5 2.4 0 1.4 4.3 2.5 9.5 2.5s9.5-1.1 9.5-2.5c0-1-1.8-1.9-4.5-2.4"
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
            d="m12 2.5 5 2.8v5.9L12 14l-5-2.8V5.3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m7 5.3 5 2.8 5-2.8m-5 2.8V14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 16.6c-2.7.5-4.5 1.4-4.5 2.4 0 1.4 4.3 2.5 9.5 2.5s9.5-1.1 9.5-2.5c0-1-1.8-1.9-4.5-2.4"
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
            d="m12 1.75 5.75 2.88L12 7.5 6.25 4.63z"
            fill="currentColor"
          />
          <path
            opacity="0.4"
            d="M6.25 4.63 12 7.5v6.75l-5.75-2.87z"
            fill="currentColor"
          />
          <path
            opacity="0.7"
            d="M17.75 4.63 12 7.5v6.75l5.75-2.87z"
            fill="currentColor"
          />
          <path
            d="M7.14 17.33c-.96.19-1.92.42-2.8.83q-.46.19-.84.5-.12.1-.2.21l-.05.12.02.04.07.08q.12.12.25.2.45.27.93.44c.96.36 1.98.55 3 .7 3.2.46 6.58.45 9.77-.13q1.22-.2 2.39-.65a4 4 0 0 0 .98-.56l.09-.11c-.03 0-.02-.06-.03-.09l-.16-.2a3 3 0 0 0-.8-.51c-.9-.44-1.91-.68-2.9-.86a.75.75 0 0 1 .28-1.48c1.47.28 3.19.66 4.35 1.67q.33.29.55.66c.53 1-.08 1.93-.94 2.45q-.64.38-1.35.6c-1.68.57-3.48.8-5.25.92a33 33 0 0 1-8.06-.37 10 10 0 0 1-3.67-1.23c-.53-.35-1-.86-1.02-1.54-.02-.76.53-1.36 1.11-1.76 1.17-.8 2.64-1.14 4-1.4a.75.75 0 0 1 .27 1.48z"
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
            d="M17.75 11.19a1 1 0 0 1-.1.39 1 1 0 0 1-.3.28l-4.6 2.58v-5.9l5-2.8zm-11.1.67-.08-.05a.8.8 0 0 1-.32-.62V5.74l5 2.8v5.9zm4.97-10 .07-.04a.8.8 0 0 1 .69.03L17 4.44l-5 2.8-5-2.8zM7.14 17.33c-.96.18-1.92.4-2.8.82q-.46.19-.84.5-.12.1-.2.21l-.05.12.02.04.07.08q.12.12.25.2.45.27.93.44c.96.36 1.98.55 3 .7 3.2.46 6.58.45 9.77-.13q1.22-.2 2.39-.65a4 4 0 0 0 .98-.56l.09-.11c-.03 0-.02-.06-.03-.09l-.16-.2a3 3 0 0 0-.8-.51c-.9-.44-1.91-.68-2.9-.86a.75.75 0 0 1 .28-1.48c1.47.28 3.19.66 4.35 1.67q.33.29.55.66c.53 1-.08 1.93-.94 2.45q-.64.38-1.35.6c-1.68.57-3.48.8-5.25.92a33 33 0 0 1-8.06-.37 10 10 0 0 1-3.67-1.23c-.53-.35-1-.86-1.02-1.54-.02-.76.53-1.36 1.11-1.76 1.17-.8 2.64-1.14 4-1.4a.75.75 0 0 1 .27 1.48z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiHologram;
