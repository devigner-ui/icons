import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicNote3 = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicNote3(
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
              d="M12 18V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m16.12 10.06-2.64-1.32c-.36-.18-.54-.27-.7-.39a2 2 0 0 1-.74-1.21c-.04-.19-.04-.39-.04-.8 0-.97 0-1.45.12-1.78a2 2 0 0 1 2.11-1.31c.35.04.78.26 1.65.7l2.64 1.3c.36.2.54.28.7.4a2 2 0 0 1 .74 1.21c.04.19.04.39.04.8 0 .97 0 1.46-.12 1.79a2 2 0 0 1-2.11 1.3 6 6 0 0 1-1.65-.7"
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
              d="M14.32 2.5a2.75 2.75 0 0 0-2.9 1.8 3 3 0 0 0-.15.87q-.03.34-.02.83v8.54a4.73 4.73 0 0 0-8 3.46 4.75 4.75 0 1 0 9.5 0V9.21l.34.18 2.71 1.35 1.04.5a3 3 0 0 0 .84.26c1.27.14 2.47-.6 2.9-1.8a3 3 0 0 0 .15-.87q.02-.45.02-1.15V7.6q.01-.5-.05-.88a2.8 2.8 0 0 0-1.03-1.67q-.3-.22-.76-.43L16.2 3.26q-.62-.31-1.04-.5a3 3 0 0 0-.84-.26"
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
              d="M14.32 2.5a2.75 2.75 0 0 0-2.9 1.8 3 3 0 0 0-.15.87q-.03.34-.02.83v8.54a4.73 4.73 0 0 0-8 3.46 4.75 4.75 0 1 0 9.5 0V9.21l.34.18 2.71 1.35 1.04.5a3 3 0 0 0 .84.26c1.27.14 2.47-.6 2.9-1.8a3 3 0 0 0 .15-.87q.02-.45.02-1.15V7.6q.01-.5-.05-.88a2.8 2.8 0 0 0-1.03-1.67q-.3-.22-.76-.43L16.2 3.26q-.62-.31-1.04-.5a3 3 0 0 0-.84-.26"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicNote3;
