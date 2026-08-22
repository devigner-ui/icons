import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolderFavouriteBookmark = forwardRef<SVGSVGElement, IconProps>(
  function IconFolderFavouriteBookmark(
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
              d="M18 6v4.85c0 .3 0 .44-.1.5-.09.06-.22-.01-.48-.14l-1.24-.62q-.12-.06-.18-.07-.07 0-.18.07l-1.24.62c-.26.13-.39.2-.49.14s-.09-.2-.09-.5V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M2 6.95c0-.88 0-1.32.07-1.7a4 4 0 0 1 3.19-3.18C5.63 2 6.06 2 6.95 2c.39 0 .58 0 .77.02a4 4 0 0 1 2.18.9c.14.12.28.26.55.53L11 4a9 9 0 0 0 1.71 1.5 4 4 0 0 0 .85.35c.54.15 1.11.15 2.27.15h.37c2.63 0 3.95 0 4.8.77l.23.22c.77.86.77 2.18.77 4.8V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14z"
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
              d="M18 10.85V6h-4v4.85c0 .3 0 .44.1.5.09.06.22-.01.48-.14l1.24-.62q.12-.06.18-.07.07 0 .18.07l1.24.62c.26.13.39.2.49.14s.09-.2.09-.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 6.95c0-.88 0-1.32.07-1.7a4 4 0 0 1 3.19-3.18C5.63 2 6.06 2 6.95 2c.39 0 .58 0 .77.02a4 4 0 0 1 2.18.9c.14.12.28.26.55.53L11 4a9 9 0 0 0 1.71 1.5 4 4 0 0 0 .85.35c.54.15 1.11.15 2.27.15h.37c2.63 0 3.95 0 4.8.77l.23.22c.77.86.77 2.18.77 4.8V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14z"
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
              d="M14.75 5.75h2.5v4.87l-.7-.4h-.01l-.16-.08a1 1 0 0 0-.76 0l-.16.08-.71.4z"
              fill="currentColor"
            />
            <path
              d="M22 11.55v2.2c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-4c-3.77 0-5.66 0-6.83-1.17S2 17.52 2 13.75V6.7c0-.88 0-1.32.07-1.7a4 4 0 0 1 3.19-3.18c.37-.07.8-.07 1.69-.07.39 0 .58 0 .77.02a4 4 0 0 1 2.18.9c.14.12.28.26.55.53l.55.55a9 9 0 0 0 1.71 1.5 4 4 0 0 0 .54.24v5.71l.02.45a1 1 0 0 0 .4.7c.35.23.7.14.86.08q.22-.09.39-.19l.02-.01 1.06-.6 1.06.6.02.01q.16.1.39.2c.16.05.51.14.86-.1a1 1 0 0 0 .4-.7q.03-.21.02-.44V5.8c1.05.07 1.74.25 2.26.72l.22.22c.77.86.77 2.18.77 4.8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderFavouriteBookmark;
