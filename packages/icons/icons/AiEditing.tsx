import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiEditing = forwardRef<SVGSVGElement, IconProps>(function IconAiEditing(
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
            d="m12.4 7.6 4.2-4.2a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L10.5 17.5 6 18l.5-4.5 4.2-4.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m14.5 5.5 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 2.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 16.7c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
            d="M16.6 3.4a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L10.5 17.5 6 18l.5-4.5zm-2.1 2.1 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 2.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 16.7c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
            d="M16.08 2.86A3 3 0 0 1 18 2.08c.64 0 1.41.32 1.93.79l1.2 1.2c.47.52.8 1.3.8 1.93 0 .64-.34 1.41-.8 1.93l-10.1 10.1a1 1 0 0 1-.45.21l-4.5.5a.75.75 0 0 1-.83-.82l.5-4.5q.03-.26.22-.45z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m13.97 6.03 4 4a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 1 0-1.06 1.06z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.9 2.1c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0zm11 14.2c.1.83.29 1.3.64 1.66s.83.54 1.66.64a.4.4 0 0 1 0 .8c-.83.1-1.3.29-1.66.64s-.54.83-.64 1.66a.4.4 0 0 1-.8 0c-.1-.83-.29-1.3-.64-1.66s-.83-.54-1.66-.64a.4.4 0 0 1 0-.8c.83-.1 1.3-.29 1.66-.64s.54-.83.64-1.66a.4.4 0 0 1 .8 0z"
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
            d="M16.08 2.86A3 3 0 0 1 18 2.08c.64 0 1.41.32 1.93.79l1.2 1.2c.47.52.8 1.3.8 1.93 0 .64-.34 1.41-.8 1.93L19.56 9.5 14.5 4.44zm-5.05 15.17a1 1 0 0 1-.45.22l-4.5.5a.75.75 0 0 1-.83-.83l.5-4.5q.03-.26.22-.45l7.47-7.47 5.06 5.06z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.9 2.1c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0zm11 14.2c.1.83.29 1.3.64 1.66s.83.54 1.66.64a.4.4 0 0 1 0 .8c-.83.1-1.3.29-1.66.64s-.54.83-.64 1.66a.4.4 0 0 1-.8 0c-.1-.83-.29-1.3-.64-1.66s-.83-.54-1.66-.64a.4.4 0 0 1 0-.8c.83-.1 1.3-.29 1.66-.64s.54-.83.64-1.66a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiEditing;
