import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSkirt = forwardRef<SVGSVGElement, IconProps>(function IconSkirt(
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
            d="M18.16 5.5h-.75v.11l.03.1zm-12.32 0 .72.22.03-.1V5.5zM2.08 17.95l-.72-.21zm19.84 0 .72-.21zM2.73 19.83l.39-.64zm18.54 0-.39-.64zM7.89 2.75h8.22v-1.5H7.89zM17.41 4v1.5h1.5V4zM6.6 5.5V4H5.1v1.5zm9.52-2.75a9 9 0 0 1 1.2.07l.03.01 1.04-1.07c-.3-.31-.69-.42-1.05-.47q-.52-.05-1.22-.04zM18.9 4q.01-.68-.04-1.2a1.7 1.7 0 0 0-.49-1.04l-1.04 1.07v.01q.02.02.04.17c.03.2.03.5.03.99zm-11-2.75q-.7-.01-1.22.04c-.36.05-.74.16-1.05.47l1.04 1.07.02-.01.18-.04c.22-.03.53-.03 1.03-.03zM6.6 4a8 8 0 0 1 .07-1.17L5.62 1.76c-.32.3-.44.68-.49 1.04q-.05.52-.04 1.2zM5.12 5.28 1.36 17.74l1.44.43L6.56 5.72zm17.52 12.46L18.88 5.28l-1.44.44 3.76 12.45zm-20.3 2.73C3.89 21.4 7 22.75 12 22.75v-1.5c-4.72 0-7.57-1.28-8.88-2.06zM12 22.75c5 0 8.12-1.36 9.65-2.28l-.77-1.28c-1.31.78-4.16 2.06-8.88 2.06zm9.2-4.58c.14.45-.02.83-.32 1.02l.77 1.28c1-.6 1.28-1.75.99-2.73zm-19.84-.43c-.3.98-.01 2.13.99 2.73l.77-1.28c-.3-.19-.46-.57-.32-1.02z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.57 6.1a.75.75 0 1 0-1.5-.2zM7.15 21.4a.75.75 0 0 0 1.49.2zm7.77-15.5a.75.75 0 0 0-1.49.2zm.44 15.7a.75.75 0 0 0 1.5-.2zM9.08 5.9 7.15 21.4l1.49.2 1.93-15.5zm4.35.2 1.93 15.5 1.5-.2-1.94-15.5zm4.73-1.35H5.84v1.5h12.32z"
            fill="currentColor"
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
            d="M10 5.5h4l1.96 16.18q-1.72.31-3.96.32-2.24-.01-3.96-.32z"
            fill="currentColor"
          />
          <path
            fill="currentColor"
            d="M10 5.5h4l1.96 16.18A23 23 0 0 1 12 22q-2.24-.01-3.96-.32z"
            opacity={duotone ? "0.6" : "1"}
          />
          <path
            fill="currentColor"
            d="M5.84 5.5 2.08 17.95c-.22.72 0 1.49.65 1.88.99.59 2.72 1.4 5.3 1.85L10 5.5z"
            opacity={duotone ? "0.4" : "1"}
          />
          <path
            fill="currentColor"
            d="M21.27 19.83c.65-.4.87-1.16.65-1.88L18.16 5.5H14l1.96 16.18a15 15 0 0 0 5.3-1.85"
            opacity={duotone ? "0.7" : "1"}
          />
          <path
            fill="currentColor"
            d="M16.1 2H7.9c-.98 0-1.46 0-1.76.3s-.3.76-.3 1.7v1.5h12.32V4c0-.94 0-1.41-.3-1.7s-.78-.3-1.75-.3"
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
            d="M16.1 2H7.9c-.98 0-1.46 0-1.76.3-.3.29-.3.76-.3 1.7v.75h12.32V4c0-.94 0-1.41-.3-1.7s-.78-.3-1.75-.3"
            fill="currentColor"
          />
          <path
            d="m2.08 17.95 3.53-11.7h3.42L7.15 21.41v.1a15 15 0 0 1-4.42-1.68c-.65-.4-.87-1.16-.65-1.88"
            fill="currentColor"
          />
          <path
            d="M8.6 21.77a24 24 0 0 0 6.8 0l-.04-.18-1.9-15.34h-2.91L8.64 21.59z"
            fill="currentColor"
          />
          <path
            d="m14.97 6.25 1.88 15.16v.1a15 15 0 0 0 4.42-1.68c.65-.4.87-1.16.65-1.88l-3.53-11.7z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSkirt;
