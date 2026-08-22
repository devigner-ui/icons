import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolderFavorite = forwardRef<SVGSVGElement, IconProps>(
  function IconFolderFavorite(
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
              d="m9.87 14.78 2.58 2.26c.12.11.31.11.43 0l2.58-2.26a1.66 1.66 0 0 0-2.09-2.58l-.7.54-.71-.53a1.65 1.65 0 0 0-2.09 2.57"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 11v6c0 4-1 5-5 5h-10c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M22.41 9.44H2.67V6.42A4.4 4.4 0 0 1 7.09 2h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79a5.3 5.3 0 0 1 5.08 3.71"
              fill="currentColor"
            />
            <path
              d="M22.66 10.84q-.03-.73-.25-1.4H2.67v7.21c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35v-5.58zm-7.45 5.13-2.15 1.88a.6.6 0 0 1-.78 0l-2.15-1.88a1.69 1.69 0 0 1 2.13-2.63l.4.3.4-.3a1.7 1.7 0 0 1 2.34.3c.58.71.49 1.73-.19 2.33"
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
              d="M21.69 8c.4.56-.08 1.25-.77 1.25H3.67a1 1 0 0 1-1-1V6.42A4.4 4.4 0 0 1 7.09 2h2.32c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.46.93.46h2.79c1.8 0 3.4.9 4.37 2.27"
              fill="currentColor"
            />
            <path
              d="M22.65 11.75a1 1 0 0 0-1-1H3.67a1 1 0 0 0-1 1v4.9c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35zm-7.44 5.22-2.15 1.88a.6.6 0 0 1-.78 0l-2.15-1.88a1.7 1.7 0 0 1-.2-2.33c.57-.72 1.6-.85 2.34-.3l.4.3.4-.3a1.7 1.7 0 0 1 2.34.3c.57.71.48 1.73-.2 2.33"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderFavorite;
