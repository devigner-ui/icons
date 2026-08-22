import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPython = forwardRef<SVGSVGElement, IconProps>(function IconPython(
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
            opacity={duotone ? "0.4" : "1"}
            d="M8.23 7.56V3.89c0-.83.61-1.52 1.42-1.65 2-.31 4.04-.31 6.04 0 .82.13 1.42.83 1.42 1.65v5.89c0 1.23-.99 2.22-2.22 2.22h-4.44c-1.23 0-2.22.99-2.22 2.22v5.89c0 .83.61 1.52 1.42 1.65q3.02.46 6.04 0a1.7 1.7 0 0 0 1.42-1.65v-3.67"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.11 7.56h3.67c.83 0 1.52.61 1.65 1.42q.46 3.02 0 6.04a1.7 1.7 0 0 1-1.65 1.42h-8.11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 7.56H4.55c-.83 0-1.52.61-1.65 1.42q-.47 3.02 0 6.04c.13.82.83 1.42 1.65 1.42h3.67"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.67 4.85"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.67 19.15"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            d="M15.69 2.23c-2-.31-4.04-.31-6.04 0-.82.13-1.42.83-1.42 1.65v3.68H4.55c-.82 0-1.52.6-1.65 1.42-.31 2-.31 4.04 0 6.04.13.82.83 1.42 1.65 1.42h3.68v-2.22c0-1.23.99-2.22 2.22-2.22h4.44c1.23 0 2.22-1 2.22-2.22v-5.9c0-.82-.6-1.52-1.42-1.65M11 5.58a.86.86 0 0 1-.81-.81c0-.42.39-.8.81-.8a1 1 0 0 1 .56.22c.15.14.25.38.25.58 0 .42-.39.81-.81.81"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.44 8.98a1.7 1.7 0 0 0-1.65-1.42h-3.68v2.22c0 1.22-.99 2.22-2.22 2.22h-4.44c-1.23 0-2.22.99-2.22 2.22v5.9c0 .82.6 1.52 1.42 1.65 2 .31 4.04.31 6.04 0a1.7 1.7 0 0 0 1.42-1.65v-3.68h3.68c.82 0 1.52-.6 1.65-1.42q.46-3.02 0-6.04m-8.1 11.05a.86.86 0 0 1-.81-.81c0-.42.39-.81.81-.81a1 1 0 0 1 .56.22c.15.14.25.38.25.58-.01.43-.4.82-.81.82"
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
            d="M15.69 2.23c-2-.31-4.04-.31-6.04 0-.82.13-1.42.83-1.42 1.65v3.68H4.55c-.82 0-1.52.6-1.65 1.42-.31 2-.31 4.04 0 6.04.13.82.83 1.42 1.65 1.42h1.68a.5.5 0 0 0 .5-.5v-1.72a3.73 3.73 0 0 1 3.72-3.72h4.44c.4 0 .72-.32.72-.72V6.56c0-.28.22-.5.5-.5h.5a.5.5 0 0 0 .5-.5V3.88c0-.82-.6-1.52-1.42-1.65M11 5.58a.84.84 0 0 1-.8-.8c0-.42.39-.81.8-.81.2 0 .42.09.56.23s.25.37.25.58c0 .41-.39.8-.81.8"
            fill="currentColor"
          />
          <path
            d="M22.44 8.98a1.7 1.7 0 0 0-1.65-1.42h-3.18a.5.5 0 0 0-.5.5v1.72c0 1.22-.99 2.22-2.22 2.22h-4.44c-1.23 0-2.22.99-2.22 2.22v5.9c0 .82.6 1.52 1.42 1.65 2 .31 4.04.31 6.04 0a1.7 1.7 0 0 0 1.42-1.65v-3.68h3.68c.82 0 1.52-.6 1.65-1.42.31-2 .31-4.04 0-6.04m-8.1 11.05a.86.86 0 0 1-.81-.81c0-.42.39-.81.81-.81a1 1 0 0 1 .56.22c.15.14.25.38.25.58-.01.43-.4.82-.81.82"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPython;
