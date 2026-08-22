import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBluetoothSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconBluetoothSquare(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m11 12 2.93-2.2c.5-.37.74-.55.74-.8s-.25-.43-.74-.8l-1.33-1c-.7-.52-1.05-.79-1.32-.65C11 6.7 11 7.13 11 8zm0 0v4c0 .87 0 1.3.28 1.45.27.14.62-.13 1.32-.65l1.33-1c.5-.37.74-.55.74-.8s-.25-.43-.74-.8zm0 0L8 9.5m3 2.5-3 2.5"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path d="M12.45 16.77" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.79 6.2c.25.13.54.35.85.57l1.38 1.02q.33.23.59.47c.18.18.39.46.39.85 0 .4-.21.68-.4.85q-.24.24-.58.48L12.9 12l2.12 1.56q.33.24.59.48c.18.17.39.45.39.85s-.21.67-.4.85q-.24.24-.58.47l-1.38 1.02c-.3.22-.6.44-.85.57-.26.14-.7.32-1.17.09-.48-.23-.6-.69-.64-.97q-.05-.44-.04-1.02v-2.36L9.2 14.96a.74.74 0 0 1-1.04-.1.7.7 0 0 1 .1-1L10.52 12l-2.27-1.85a.7.7 0 0 1-.09-1.02.74.74 0 0 1 1.04-.09l1.73 1.42V8.1q-.01-.58.04-1.02c.04-.28.16-.74.64-.97.47-.23.91-.05 1.17.09m-.38 9.65v-2.4l1.7 1.24.25.2-.25.19-1.31.96-.39.29zm0-7.7v2.4l1.7-1.24.25-.2-.25-.19-1.31-.96-.39-.29z"
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
              d="M11.75 16v-2.5l1.73 1.3.27.2-.27.2-1.33 1-.4.3z"
              fill="currentColor"
            />
            <path d="M11.8 16.96" fill="currentColor" />
            <path
              d="M11.75 8v2.5l1.73-1.3.27-.2-.27-.2-1.33-1-.4-.3z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m9.55 3.11q-.47-.37-.87-.6c-.27-.14-.72-.33-1.2-.09s-.6.71-.65 1.01q-.05.46-.04 1.06v2.45L8.48 8.92a.75.75 0 1 0-.96 1.16L9.82 12l-2.3 1.92a.75.75 0 0 0 .96 1.16l1.77-1.48v2.45q-.01.61.04 1.06c.05.3.17.77.65 1 .48.25.93.06 1.2-.08q.4-.23.87-.6l1.4-1.05q.34-.25.6-.5c.19-.18.4-.47.4-.88s-.21-.7-.4-.88a6 6 0 0 0-.6-.5L12.26 12l2.17-1.62q.33-.25.6-.5c.18-.18.4-.47.4-.88s-.22-.7-.4-.88a6 6 0 0 0-.6-.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBluetoothSquare;
