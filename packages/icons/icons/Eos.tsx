import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEos = forwardRef<SVGSVGElement, IconProps>(function IconEos(
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
            d="M11.52 3.38 7.92 7.7a2 2 0 0 0-.32.67l-1.71 8.57c-.12.58.21 1.3.73 1.6l5.32 3.04a1.7 1.7 0 0 0 1.49 0l5.32-3.04c.52-.3.84-1.01.73-1.6l-1.71-8.57a2 2 0 0 0-.32-.67l-3.6-4.32c-.66-.76-1.7-.76-2.33 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.48 8.52-4.34 12.16a.5.5 0 0 1-.94 0L7.85 8.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
          <path d="M24.67 0h-24v24h24z" fill="none" />
          <path
            d="m17.65 8.09-.17.43-4.72 13.23h-.18L7.85 8.5l-.16-.4q.1-.23.22-.39l3.61-4.33a1.45 1.45 0 0 1 2.3 0l3.61 4.33q.12.15.22.38"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.58 21.75a1.4 1.4 0 0 1-.65-.18l-5.32-3.03a1.6 1.6 0 0 1-.73-1.6L7.6 8.37l.09-.27.16.4z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.73 18.54-5.32 3.03q-.28.16-.65.18l4.72-13.23.17-.43.09.28 1.72 8.57c.11.58-.21 1.3-.73 1.6"
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
            d="M9.95 20.31c.17.48-.35.92-.79.66l-3.15-1.79a1.8 1.8 0 0 1-.8-1.76l.94-4.67c.11-.55.87-.6 1.06-.08z"
            fill="currentColor"
          />
          <path
            d="m19.33 19.18-3.16 1.8a.55.55 0 0 1-.79-.66l2.75-7.71c.19-.52.95-.47 1.06.08l.95 4.73c.11.64-.24 1.43-.81 1.76"
            fill="currentColor"
          />
          <path
            d="M17.75 7.32c.24.3.31.7.18 1.06l-4.74 13.25a.54.54 0 0 1-1.03 0L7.42 8.39a1.1 1.1 0 0 1 .18-1.06l3.82-4.7a1.6 1.6 0 0 1 2.53 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEos;
