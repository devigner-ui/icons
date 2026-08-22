import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBoxRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconBoxRemove(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m3.84 7.44 8.83 5.11 8.77-5.08"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 21.61v-9.07"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.28 9.17v5.8a4 4 0 0 0-5.7 5.54l-1.84 1.01a4.7 4.7 0 0 1-4.14 0l-5.34-2.96a4.7 4.7 0 0 1-2.2-3.73V9.17c0-1.38 1-3.06 2.2-3.73l5.34-2.96a4.7 4.7 0 0 1 4.14 0l5.34 2.96a4.7 4.7 0 0 1 2.2 3.73"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M23.67 18a4 4 0 0 1-1.37 3 3.97 3.97 0 0 1-6.05-.94A3.97 3.97 0 0 1 19.67 14a4 4 0 0 1 4 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.74 19.04-2.12-2.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.72 16.96-2.12 2.11"
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
            <path
              d="M22.35 15.32a4.48 4.48 0 0 0-7.66 3.38v.05l.02.21.01.01V19a4.47 4.47 0 0 0 7.63 2.68 4.4 4.4 0 0 0 1.27-2.69l.01-.03.02-.22.01-.05a4.4 4.4 0 0 0-1.31-3.37m-1.45 4.89a.75.75 0 0 1-1.06 0l-.66-.66-.68.68c-.3.3-.77.3-1.06 0a.74.74 0 0 1 0-1.06l.68-.68-.66-.66a.75.75 0 0 1 1.07-1.06l.65.66.63-.64a.77.77 0 0 1 1.07 0c.29.3.29.77 0 1.07l-.64.63.66.65c.3.3.3.77 0 1.07"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.02 5.66-6.29-3.39a2.2 2.2 0 0 0-2.13 0L5.31 5.66c-.46.25-.74.74-.74 1.28s.28 1.03.74 1.28l6.29 3.39a2.2 2.2 0 0 0 2.12 0l6.29-3.39c.46-.25.74-.74.74-1.28a1.4 1.4 0 0 0-.73-1.28"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.57 12.79 4.72 9.86a1.43 1.43 0 0 0-2.08 1.28v5.53c0 .96.53 1.82 1.39 2.25l5.85 2.92a1.43 1.43 0 0 0 2.07-1.29v-5.53c.01-.94-.52-1.8-1.38-2.23"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.7 11.15v4.59l-.03-.04-.02-.03-.14-.17-.03-.04a4.5 4.5 0 0 0-7.16 5.36q.26.43.61.79l-.47.24a1.4 1.4 0 0 1-1.4-.07 1.4 1.4 0 0 1-.68-1.22v-5.52c0-.96.53-1.82 1.39-2.25l5.85-2.92a1.44 1.44 0 0 1 2.08 1.28"
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
              d="m18.27 5.31-5.65-3.04a2 2 0 0 0-1.9 0L5.06 5.31c-.4.23-.67.67-.67 1.15 0 .49.25.93.67 1.15l5.65 3.04a2 2 0 0 0 1.9 0l5.65-3.04a1.32 1.32 0 0 0 0-2.3"
              fill="currentColor"
            />
            <path
              d="M9.8 11.71 4.53 9.09a1.3 1.3 0 0 0-1.87 1.15v4.96c0 .86.48 1.63 1.25 2.02l5.25 2.62a1.3 1.3 0 0 0 1.26-.05c.38-.24.61-.65.61-1.1v-4.96a2.3 2.3 0 0 0-1.25-2.02"
              fill="currentColor"
            />
            <path
              d="M20.67 10.24v2.46q-.73-.2-1.5-.2a6 6 0 0 0-5.8 7.45q-.23-.03-.45-.17a1.3 1.3 0 0 1-.6-1.09v-4.96c0-.86.47-1.63 1.23-2.02l5.25-2.62a1.3 1.3 0 0 1 1.87 1.15"
              fill="currentColor"
            />
            <path
              d="M22.35 15.32a4.48 4.48 0 0 0-7.66 3.38v.05l.02.21.01.01V19a4.47 4.47 0 0 0 7.63 2.68 4.4 4.4 0 0 0 1.27-2.69l.01-.03.02-.22.01-.05a4.4 4.4 0 0 0-1.3-3.37m-1.45 4.89a.75.75 0 0 1-1.06 0l-.66-.66-.68.68c-.3.3-.77.3-1.06 0a.74.74 0 0 1 0-1.06l.68-.68-.66-.66a.75.75 0 0 1 1.07-1.06l.65.66.63-.64a.77.77 0 0 1 1.07 0c.3.3.3.77 0 1.07l-.64.63.66.65c.3.3.3.77 0 1.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBoxRemove;
