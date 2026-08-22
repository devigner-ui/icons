import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMasks = forwardRef<SVGSVGElement, IconProps>(function IconMasks(
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
            d="m16.76 12.68-.85-3.3c-.44-1.72-.66-2.58-1.23-3.01q-.3-.22-.64-.32c-.68-.2-1.46.17-3.02.9-1.15.54-1.72.8-2.32 1l-.63.18c-.62.14-1.24.21-2.5.35-1.7.18-2.54.27-3.04.8q-.24.26-.4.6c-.29.68-.07 1.54.37 3.26l.85 3.3c.99 3.87 4.3 5.09 6.51 5.47.68.11 1.02.17 2.05-.12a4 4 0 0 0 1.82-.97c1.74-1.48 4.02-4.27 3.03-8.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5 17.22a6.9 6.9 0 0 0 4.15-4.79l.85-3.3c.44-1.71.66-2.57.37-3.25q-.16-.34-.4-.6c-.5-.53-1.35-.62-3.04-.8-1.26-.14-1.88-.2-2.5-.35l-.63-.18c-.6-.2-1.17-.46-2.32-1-1.56-.73-2.34-1.1-3.02-.9q-.34.1-.64.32c-.57.43-.8 1.29-1.23 3l-.7 2.74"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M5.26 13.3c.06-.62.52-1.18 1.19-1.36s1.34.07 1.7.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.18 8.94a1.6 1.6 0 0 0-1.19-1.36 1.6 1.6 0 0 0-1.7.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M11.05 11.74c.06-.62.53-1.17 1.2-1.35s1.34.07 1.7.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.1 7.04a.75.75 0 0 1-1.22-.87zm.9-.29a.8.8 0 0 0-.9.3l-1.22-.88a2.3 2.3 0 0 1 2.5-.87zm.48.32a1 1 0 0 0-.48-.32l.39-1.45c.52.14.96.45 1.27.85z"
            fill="currentColor"
          />
          <path
            d="M13.2 16.23s-1.02-.76-2.81-.28-2.3 1.65-2.3 1.65"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m15.91 9.38.85 3.3c1 3.87-1.29 6.66-3.03 8.14-.53.46-.8.68-1.82.97-1.03.29-1.37.23-2.05.12-2.22-.38-5.52-1.6-6.51-5.48l-.85-3.3c-.44-1.71-.66-2.57-.37-3.25q.15-.34.4-.6c.5-.53 1.35-.62 3.04-.8 1.26-.14 1.88-.2 2.5-.35l.63-.18c.6-.2 1.17-.46 2.32-1 1.56-.73 2.34-1.1 3.02-.9q.34.1.64.32c.57.43.8 1.29 1.23 3m-9.9 3.99c.02-.3.25-.6.63-.7s.73.04.9.29a.75.75 0 0 0 1.23-.88 2.3 2.3 0 0 0-2.52-.86 2.3 2.3 0 0 0-1.74 2 .75.75 0 0 0 1.5.15m6.43-2.26c-.38.1-.61.4-.64.7a.75.75 0 0 1-1.5-.14c.1-.94.8-1.75 1.75-2 .96-.26 1.96.09 2.51.86a.75.75 0 1 1-1.22.87.8.8 0 0 0-.9-.29m.76 5.12.45-.6a.75.75 0 0 1-.89 1.21l-.09-.05q-.12-.07-.4-.16a3 3 0 0 0-1.69.04 3 3 0 0 0-1.48.81 2 2 0 0 0-.32.42.75.75 0 0 1-1.37-.6l.68.3-.68-.3v-.01l.01-.03.15-.26q.14-.24.47-.57a4.7 4.7 0 0 1 2.15-1.2 4.7 4.7 0 0 1 2.47-.04 4 4 0 0 1 .95.41l.02.02h.01z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.65 12.43.85-3.3c.44-1.71.66-2.57.37-3.25q-.16-.34-.4-.6c-.5-.53-1.35-.62-3.04-.8-1.26-.14-1.89-.2-2.5-.35l-.63-.18c-.6-.2-1.17-.46-2.33-1-1.55-.73-2.33-1.1-3.01-.9q-.34.1-.64.32c-.57.43-.8 1.29-1.23 3l-.7 2.74-.05.16a8 8 0 0 0 1.36-.32c.6-.2 1.17-.46 2.32-1 1.56-.73 2.34-1.1 3.02-.9q.34.1.64.32c.57.43.8 1.29 1.23 3l.85 3.3a7 7 0 0 1-.3 4.54l.04.01a6.9 6.9 0 0 0 4.15-4.79"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.73 8.67a.75.75 0 0 0 1.16-.07c.18-.25.53-.4.9-.3.38.1.61.41.64.7a.75.75 0 1 0 1.5-.14 2.3 2.3 0 0 0-1.75-2c-.96-.26-1.96.1-2.5.86a1 1 0 0 0-.13.29z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10.24 7.31.78-.36c1.2-.56 1.94-.9 2.52-.95a2.4 2.4 0 0 0-3.66.17.75.75 0 0 0 .36 1.14"
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
            d="m21.54 9.14-.85 3.3a6.8 6.8 0 0 1-2.34 3.68 9 9 0 0 0-.14-3.82l-.86-3.37-.15-.58q.26-.12.6-.04c.37.1.6.4.63.7a.75.75 0 1 0 1.5-.15 2.3 2.3 0 0 0-1.75-2 2.4 2.4 0 0 0-1.41.05l-.02-.05a3.6 3.6 0 0 0-1.17-1.69 4 4 0 0 0-1.13-.56 3.4 3.4 0 0 0-2.07.12c-.55.19-1.2.5-1.92.83l-.07.03c-1.19.56-1.66.77-2.15.93l-.44.13.33-1.27c.44-1.72.66-2.58 1.23-3.01q.3-.22.64-.32c.68-.2 1.46.17 3.01.9 1.15.54 1.73.8 2.33 1l.63.18c.61.14 1.24.21 2.5.35 1.69.18 2.54.27 3.04.8q.25.26.4.6c.29.68.07 1.54-.37 3.26"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m16.76 12.68-.85-3.3c-.44-1.72-.66-2.58-1.23-3.01q-.3-.22-.64-.32c-.68-.2-1.46.17-3.02.9-1.15.54-1.72.8-2.32 1l-.63.18c-.62.14-1.24.21-2.5.35-1.7.18-2.54.27-3.04.8q-.24.26-.4.6c-.29.68-.07 1.54.37 3.26l.85 3.3c.99 3.87 4.3 5.09 6.51 5.47.68.11 1.02.17 2.05-.12a4 4 0 0 0 1.82-.97c1.74-1.48 4.02-4.27 3.03-8.14M6 13.37c.02-.3.25-.6.63-.7s.73.04.9.29a.75.75 0 0 0 1.23-.88 2.3 2.3 0 0 0-2.52-.86 2.3 2.3 0 0 0-1.74 2 .75.75 0 0 0 1.5.15m5.8-1.56c.02-.3.25-.6.63-.7s.73.05.9.3a.75.75 0 1 0 1.22-.88 2.3 2.3 0 0 0-2.5-.87 2.3 2.3 0 0 0-1.75 2.01.75.75 0 0 0 1.5.14m1.84 3.82a.75.75 0 0 1-.89 1.21l-.1-.05q-.1-.07-.4-.16a3 3 0 0 0-1.68.04 3 3 0 0 0-1.48.81 2 2 0 0 0-.32.42.75.75 0 0 1-1.37-.6l.68.3-.68-.3v-.01l.01-.03.15-.26q.15-.24.47-.57a4.7 4.7 0 0 1 2.15-1.2 4.7 4.7 0 0 1 2.47-.04 4 4 0 0 1 .95.41l.02.02z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMasks;
