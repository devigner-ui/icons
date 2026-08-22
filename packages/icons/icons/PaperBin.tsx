import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaperBin = forwardRef<SVGSVGElement, IconProps>(function IconPaperBin(
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
            d="M3.03 8.89c-.48-3.2-.72-4.8.18-5.85S5.73 2 8.97 2h6.06c3.24 0 4.86 0 5.76 1.04s.66 2.65.18 5.85l-1.2 8c-.37 2.44-.55 3.66-1.4 4.38-.84.73-2.07.73-4.54.73h-3.66c-2.47 0-3.7 0-4.54-.73-.85-.72-1.03-1.94-1.4-4.38z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M21 6H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8 6-4.5 5 7.5 8m3-13L4 16M20 6 7 19m6 0 7.5-8L16 6m-6 0 10 10M4 6l13 13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M19 19H5"
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
            opacity={duotone ? "0.4" : "1"}
            d="M3.03 8.89c-.48-3.2-.72-4.8.18-5.85S5.73 2 8.97 2h6.06c3.24 0 4.86 0 5.76 1.04s.66 2.65.18 5.85l-1.2 8c-.37 2.44-.55 3.66-1.4 4.38-.84.73-2.07.73-4.54.73h-3.66c-2.47 0-3.7 0-4.54-.73-.85-.72-1.03-1.94-1.4-4.38z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m3.52 12.12-.3-1.94 1.85-2.05L3.7 6.75h-.96a15 15 0 0 1-.12-1.5H21.4q0 .65-.12 1.5h-.96l-1.38 1.38 1.84 2.05-.29 1.93-1.6 1.71L20.05 15l-.28 1.85-1.91-1.92-1.88 2 1.33 1.33h2.25q-.14.88-.32 1.5H4.76q-.17-.62-.32-1.5H6.7l1.33-1.33-1.88-2-1.91 1.92L3.96 15l1.17-1.17zm2.56-5.1-.27-.27h.5zm1.06 1.06 1.2-1.33h1.35L10.94 8 9 9.94zM12 6.94l-.19-.19h.38zM13.06 8l1.25-1.25h1.36l1.2 1.33L15 9.94zm4.86-.98-.24-.27h.5zM16.06 11l1.8-1.8 1.62 1.79-1.66 1.77zM15 12.06l1.8 1.8-1.88 2L13.06 14zm-3 3 1.9 1.9-1.22 1.29h-1.36l-1.21-1.3zm3.19 3.19h-.46l.22-.24zm-6.14-.24.22.24H8.8zM10.94 14l-1.86 1.86-1.87-2L9 12.06zm-3-3-1.76 1.76L4.52 11l1.61-1.8zM12 12.94 10.06 11 12 9.06 13.94 11z"
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
            d="M3.21 3.04c-.46.54-.62 1.23-.6 2.21h18.78c.02-.98-.14-1.67-.6-2.2C19.89 2 18.27 2 15.03 2H8.97C5.73 2 4.1 2 3.2 3.04"
            fill="currentColor"
          />
          <path
            d="m3.03 8.89-.3-2.14h.96L4.94 8 3.17 9.77z"
            fill="currentColor"
          />
          <path d="m3.6 12.66.35 2.33.99-.99z" fill="currentColor" />
          <path
            d="M4.23 16.84v.05l.21 1.36H6.7L7.94 17 6 15.06z"
            fill="currentColor"
          />
          <path
            d="M11.31 18.25h1.38L13.94 17 12 15.06 10.06 17z"
            fill="currentColor"
          />
          <path
            d="M17.31 18.25h2.25l.2-1.36.01-.05L18 15.06 16.06 17z"
            fill="currentColor"
          />
          <path d="m20.05 15 .35-2.34L19.06 14z" fill="currentColor" />
          <path
            d="m20.83 9.77.14-.88.3-2.14h-.96L19.06 8z"
            fill="currentColor"
          />
          <path
            d="M15.69 6.75H14.3L13.06 8 15 9.94 16.94 8z"
            fill="currentColor"
          />
          <path d="M9.69 6.75H8.3L7.06 8 9 9.94 10.94 8z" fill="currentColor" />
          <path
            d="M4.76 19.75c.2.69.45 1.16.87 1.52.84.73 2.07.73 4.54.73h3.66c2.47 0 3.7 0 4.54-.73.42-.36.68-.83.87-1.52z"
            fill="currentColor"
          />
          <path d="M4.06 11 6 9.06 7.94 11 6 12.94z" fill="currentColor" />
          <path d="M7.06 14 9 12.06 10.94 14 9 15.94z" fill="currentColor" />
          <path d="M15 15.94 13.06 14 15 12.06 16.94 14z" fill="currentColor" />
          <path d="M12 12.94 13.94 11 12 9.06 10.06 11z" fill="currentColor" />
          <path d="M18 12.94 16.06 11 18 9.06 19.94 11z" fill="currentColor" />
        </svg>
      )}
    </>
  );
});

export default IconPaperBin;
