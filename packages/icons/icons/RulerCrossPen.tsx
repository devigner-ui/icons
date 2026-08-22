import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRulerCrossPen = forwardRef<SVGSVGElement, IconProps>(
  function IconRulerCrossPen(
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
              d="M13.25 19.42a.75.75 0 0 0-1.06 1.06zm5.26.53.53.54zM4.05 5.5l.53.53zm-.53 6.32a.75.75 0 1 0 1.06-1.06zm7.76-7.76.53.53a.75.75 0 0 0 0-1.06zm-5.79 0-.53-.53zm14.46 8.67.54-.53a.75.75 0 0 0-1.07 0zm0 5.79-.53-.53zM8.34 5.93A.75.75 0 0 0 9.4 6.99zM17 14.6a.75.75 0 0 0 1.06 1.06zM4.96 3.52 3.52 4.96l1.06 1.06 1.44-1.44zm14.08 16.97 1.45-1.45-1.07-1.06-1.44 1.44zm-6.85 0q.99 1.01 1.72 1.6c.51.39 1.05.66 1.7.66v-1.5c-.19 0-.41-.07-.8-.36-.39-.3-.86-.77-1.56-1.47zm5.79-1.07c-.7.7-1.17 1.17-1.57 1.47-.38.3-.6.36-.8.36v1.5c.66 0 1.2-.27 1.71-.67q.73-.57 1.72-1.6zM3.52 4.96c-.67.67-1.23 1.22-1.6 1.72a2.7 2.7 0 0 0-.67 1.7h1.5c0-.19.07-.41.36-.8.3-.4.77-.86 1.47-1.56zm1.06 5.79c-.7-.7-1.17-1.17-1.47-1.57-.3-.38-.36-.6-.36-.8h-1.5c0 .66.27 1.2.67 1.71q.57.73 1.6 1.72zm7.23-7.23q-.99-1.03-1.72-1.6a2.8 2.8 0 0 0-1.7-.67v1.5c.19 0 .41.07.8.36.39.3.86.77 1.56 1.47zM6.02 4.58c.7-.7 1.17-1.17 1.57-1.47.38-.3.6-.36.8-.36v-1.5c-.66 0-1.2.27-1.71.67q-.73.57-1.72 1.6zm13.4 8.67c.7.7 1.17 1.17 1.47 1.57.3.38.36.6.36.8h1.5c0-.66-.27-1.2-.67-1.71q-.57-.73-1.6-1.72zm1.06 5.79q1.02-.99 1.6-1.72c.4-.51.67-1.05.67-1.7h-1.5c0 .19-.07.41-.36.8-.3.4-.77.86-1.47 1.56zM10.76 3.52l-2.41 2.4L9.4 7l2.4-2.41zm8.67 8.67-2.4 2.41 1.05 1.06 2.41-2.4z"
              fill="currentColor"
            />
            <path
              d="m4.2 21.68.8-.27 2.48-.83A11 11 0 0 0 9 20.02q.65-.3 1.22-.74c.31-.25.6-.54 1.18-1.12l8.52-8.52.93-.93a3.93 3.93 0 0 0-5.56-5.56l-.93.93-8.52 8.52c-.58.58-.87.87-1.12 1.18q-.44.57-.74 1.21c-.18.37-.3.76-.56 1.53L2.59 19l-.27.8m1.88 1.88-.8.27a1.06 1.06 0 0 1-1.35-1.35l.27-.8m1.88 1.88L2.32 19.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.36 4.08s.12 1.97 1.85 3.7a6.3 6.3 0 0 0 3.71 1.86"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M20.85 8.71a3.93 3.93 0 0 0-5.56-5.56l-.89.89.04.11a8.8 8.8 0 0 0 5.52 5.45z"
              fill="currentColor"
            />
            <path
              d="m14.44 4-.04.04.04.11a8.8 8.8 0 0 0 5.52 5.45l-8.56 8.56c-.58.58-.87.87-1.18 1.11q-.57.45-1.22.75c-.36.18-.75.3-1.52.56L3.4 21.94a1.06 1.06 0 0 1-1.35-1.34l1.37-4.08c.25-.77.38-1.16.56-1.53q.3-.64.74-1.2c.25-.33.54-.61 1.12-1.2z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M5.5 4.05 4.04 5.49C2.68 6.86 2 7.54 2 8.4c0 .84.68 1.52 2.05 2.89l1.55 1.55.24-.23 7-7-1.56-1.55C9.9 2.68 9.23 2 8.38 2c-.84 0-1.52.68-2.89 2.05"
                fill="currentColor"
              />
              <path
                d="m18.4 11.16-7 7-.24.24 1.56 1.55c1.37 1.37 2.05 2.05 2.9 2.05.84 0 1.52-.68 2.89-2.05l1.44-1.44c1.37-1.37 2.05-2.05 2.05-2.9 0-.84-.68-1.52-2.05-2.89z"
                fill="currentColor"
              />
            </g>
            <path
              d="m20.1 12.88-1.16 1.17A.75.75 0 0 0 20 15.1l1.15-1.15a28 28 0 0 0-1.04-1.08"
              fill="currentColor"
            />
            <path
              d="M9.77 2.61 8.44 3.94A.75.75 0 1 0 9.5 5l1.37-1.37q-.64-.63-1.1-1.02"
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
              d="m4.05 5.5 1.44-1.45C6.86 2.68 7.54 2 8.4 2c.84 0 1.52.68 2.89 2.05l-2.41 2.4-4.82 4.83C2.68 9.9 2 9.23 2 8.38c0-.84.68-1.52 2.05-2.89"
              fill="currentColor"
            />
            <path
              d="m19.95 18.5-1.44 1.45C17.14 21.32 16.46 22 15.6 22c-.84 0-1.52-.68-2.89-2.05l4.82-4.82 2.41-2.4c1.37 1.36 2.05 2.04 2.05 2.89 0 .84-.68 1.52-2.05 2.89"
              fill="currentColor"
            />
            <path
              d="m11.4 18.16 7.4-7.4a10.3 10.3 0 0 1-5.57-5.56l-7.4 7.4c-.57.58-.86.87-1.1 1.18q-.45.57-.75 1.21c-.18.37-.3.76-.56 1.53L2.05 20.6a1.06 1.06 0 0 0 1.35 1.35l4.08-1.37A11 11 0 0 0 9 20.02q.65-.3 1.22-.74c.31-.25.6-.54 1.18-1.12"
              fill="currentColor"
            />
            <path
              d="M20.85 8.71a3.93 3.93 0 0 0-5.56-5.56l-.89.89a9 9 0 0 0 2.13 3.43 9 9 0 0 0 3.43 2.13z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRulerCrossPen;
