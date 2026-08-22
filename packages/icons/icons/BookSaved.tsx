import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBookSaved = forwardRef<SVGSVGElement, IconProps>(
  function IconBookSaved(
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
              d="M22.67 4.67v12.07c0 .96-.78 1.86-1.74 1.98l-.33.04c-2.18.29-5.54 1.4-7.46 2.46-.26.15-.69.15-.96 0l-.04-.02a26 26 0 0 0-7.44-2.44l-.29-.04a2.05 2.05 0 0 1-1.74-1.98V4.66c0-1.19.97-2.09 2.16-1.99 2.1.17 5.28 1.23 7.06 2.34l.25.15c.29.18.77.18 1.06 0l.17-.11c.63-.39 1.43-.78 2.3-1.13a20 20 0 0 1 4.77-1.24h.06c1.19-.1 2.17.79 2.17 1.99"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 5.49v15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.67 2.78V8l-2-1.33-2 1.33V3.92c1.31-.52 2.77-.94 4-1.14"
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
              d="M12.67 5.3v16.03a1 1 0 0 0 .49-.11l.04-.02a26 26 0 0 1 7.44-2.44l.29-.04a2.05 2.05 0 0 0 1.74-1.98V4.66c0-1.19-.97-2.09-2.16-1.99-2.1.17-5.28 1.23-7.06 2.34l-.25.15q-.23.14-.53.14"
              fill="currentColor"
            />
            <path
              d="M2.67 4.67v12.07c0 .96.78 1.86 1.74 1.98l.33.04c2.18.29 5.54 1.4 7.46 2.46q.2.11.47.11V5.3q-.3 0-.53-.14l-.17-.11A19 19 0 0 0 4.9 2.68h-.06a1.97 1.97 0 0 0-2.17 1.99"
              fill="currentColor"
            />
            <path
              d="M19.67 2.78v4.29a.5.5 0 0 1-.78.42l-1.22-.81-1.22.81a.5.5 0 0 1-.78-.42V3.92c1.31-.52 2.77-.94 4-1.14"
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
              d="M11.92 6v13.91a1 1 0 0 1-1.37.93 26 26 0 0 0-5.81-1.68l-.31-.04a2.06 2.06 0 0 1-1.76-1.98V5.25c0-1.2.97-2.17 2.17-2.17h.07c1.88.16 4.65 1.04 6.48 2.03a1 1 0 0 1 .53.89"
              fill="currentColor"
            />
            <path
              d="M20.5 3.08h-.06q-.36.03-.77.1a20 20 0 0 0-5.71 1.93c-.33.18-.54.52-.54.89v13.91a1 1 0 0 0 1.37.93 26 26 0 0 1 5.81-1.68l.31-.04a2.06 2.06 0 0 0 1.76-1.98V5.25c0-1.2-.97-2.17-2.17-2.17m-.56 10.65c0 .39-.28.56-.62.37l-1.06-.59a.5.5 0 0 0-.41 0l-1.06.59c-.34.19-.62.02-.62-.37v-3.07c0-.46.38-.84.84-.84h2.1c.46 0 .84.38.84.84z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBookSaved;
