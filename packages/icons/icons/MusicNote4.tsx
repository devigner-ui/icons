import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicNote4 = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicNote4(
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
              d="M12 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 18V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m16.12 3.94-2.64 1.32c-.36.18-.54.27-.7.39a2 2 0 0 0-.74 1.21c-.04.19-.04.39-.04.8 0 .97 0 1.46.12 1.79a2 2 0 0 0 2.11 1.3c.35-.04.78-.26 1.65-.7l2.64-1.3c.36-.2.54-.28.7-.4a2 2 0 0 0 .74-1.21c.04-.19.04-.39.04-.8 0-.97 0-1.45-.12-1.78a2 2 0 0 0-2.11-1.31c-.35.04-.78.26-1.65.7"
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
              d="M19.85 4.7a2.5 2.5 0 0 0-2.66-1.68 3 3 0 0 0-.77.24q-.37.17-.95.47L13 5q-.42.2-.7.4c-.49.39-.82.95-.94 1.57q-.06.35-.05.82v6.51a4.3 4.3 0 0 0-2.97-1.2A4.4 4.4 0 0 0 4 17.54 4.4 4.4 0 0 0 8.34 22c2.4 0 4.35-2 4.35-4.45v-6.37q.65.35 1.43.27.38-.06.77-.24l.95-.47 2.48-1.27q.41-.2.7-.41c.48-.39.82-.94.94-1.56.04-.25.04-.5.04-.83V6.6l-.01-1.08a3 3 0 0 0-.14-.82"
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
              d="M19.85 4.7a2.5 2.5 0 0 0-2.66-1.68 3 3 0 0 0-.77.24q-.37.17-.95.47L13 5q-.42.2-.7.4c-.49.39-.82.95-.94 1.57q-.06.35-.05.82v6.51a4.3 4.3 0 0 0-2.97-1.2A4.4 4.4 0 0 0 4 17.54 4.4 4.4 0 0 0 8.34 22c2.4 0 4.35-2 4.35-4.45v-6.37q.65.35 1.43.27.38-.06.77-.24l.95-.47 2.48-1.27q.41-.2.7-.41c.48-.39.82-.94.94-1.56.04-.25.04-.5.04-.83V6.6l-.01-1.08a3 3 0 0 0-.14-.82"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicNote4;
