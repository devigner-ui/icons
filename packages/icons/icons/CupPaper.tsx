import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCupPaper = forwardRef<SVGSVGElement, IconProps>(function IconCupPaper(
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
            d="m20.17 5.86.71-.24zm.04.1-.71.25zm-16.42 0 .71.25zm.04-.1-.71-.24zM7 18.58l-.74.1zm10 0 .74.1zM3.48 7.76l.68-.31zm.22.3.52-.54zm16.82-.3.68.32zm-.22.3-.52-.54zm-2-5.62.39-.63zm.35.26-.48.58zM7.92 21.51l-.49.57zM5.71 2.44l-.4-.63zm-.36.26.48.58zm3.84.05h5.62v-1.5H9.2zM19.46 6.1l.04.1 1.42-.47-.04-.1zM4.5 6.2l.04-.1-1.42-.48-.04.11zm6.46 16.55h2.08v-1.5h-2.08zM18.5 7.59h-13v1.5h13zm-13.74.86 1.5 10.24 1.48-.22-1.5-10.24zm12.98 10.24 1.5-10.24-1.48-.22-1.5 10.24zm-4.7 4.06q1.2.02 2.02-.07a2.7 2.7 0 0 0 1.51-.6l-.98-1.13c-.13.1-.31.2-.72.25-.42.05-.98.05-1.83.05zm3.22-4.28c-.12.84-.2 1.4-.32 1.8s-.22.57-.35.68l.98 1.13c.44-.38.66-.86.81-1.4q.21-.8.36-2zM3.08 5.73c-.15.46-.3.87-.36 1.2-.07.35-.1.75.08 1.15l1.36-.63c.02.03-.02.01.03-.21.05-.23.15-.54.31-1.03zM5.5 7.6c-.52 0-.85 0-1.08-.03-.22-.03-.23-.07-.2-.04L3.18 8.61c.32.3.71.4 1.06.44q.53.05 1.26.04zm-2.7.49q.15.3.38.53l1.04-1.09-.06-.07zM19.5 6.2c.16.5.26.8.31 1.03s.01.24.03.2l1.36.64c.18-.4.15-.8.08-1.14q-.11-.52-.36-1.2zm-1 2.88q.73.01 1.26-.04c.35-.04.74-.14 1.06-.44l-1.04-1.09c.03-.03.02.01-.2.04-.23.03-.56.03-1.08.03zm1.34-1.64-.06.07 1.04 1.09q.24-.23.38-.53zm-5.03-4.7c.94 0 1.58 0 2.09.05.48.05.77.14 1 .28l.79-1.27a4 4 0 0 0-1.64-.5q-.89-.08-2.24-.06zm6.07 2.87q-.4-1.27-.76-2.1a4 4 0 0 0-.99-1.4l-.96 1.16c.2.17.38.41.58.86.21.46.42 1.07.71 1.96zM17.9 3.08l.27.2.96-1.15-.44-.32zm-6.94 18.17c-.85 0-1.41 0-1.83-.05-.4-.06-.6-.14-.72-.25l-.98 1.13c.44.38.95.53 1.5.6q.82.09 2.03.07zm-4.7-2.56q.15 1.2.36 1.99c.15.54.37 1.02.81 1.4l.98-1.13c-.13-.11-.24-.28-.35-.68s-.2-.96-.32-1.8zM9.19 1.25q-1.35-.02-2.24.06a4 4 0 0 0-1.64.5l.79 1.27a2 2 0 0 1 1-.28c.5-.05 1.15-.05 2.09-.05zM4.54 6.1c.3-.89.5-1.5.7-1.96s.39-.7.6-.86l-.97-1.15a4 4 0 0 0-1 1.4q-.34.81-.75 2.1zm.77-4.3q-.23.14-.44.33l.96 1.15.27-.2z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.5 12h11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 17h10"
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
            d="M14.81 2H9.2c-1.84 0-2.76 0-3.48.44l-.36.26c-.65.55-.94 1.42-1.52 3.16l-.04.1c-.32.96-.48 1.44-.3 1.8a1 1 0 0 0 .21.3c.29.28.8.28 1.8.28h13c1 0 1.51 0 1.8-.27a1 1 0 0 0 .22-.3c.17-.37 0-.85-.31-1.8l-.04-.1c-.58-1.75-.87-2.62-1.52-3.17l-.36-.26C17.57 2 16.65 2 14.81 2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.96 22h2.08c1.65 0 2.48 0 3.04-.49.56-.48.68-1.3.92-2.93l1.5-10.24h-13L7 18.58c.24 1.63.36 2.45.92 2.93.56.49 1.39.49 3.04.49"
            fill="currentColor"
          />
          <path d="M6.77 17h10.46l.73-5H6.05z" fill="currentColor" />
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
            d="M9.19 2h5.62c1.84 0 2.76 0 3.48.44l.36.26c.65.55.94 1.42 1.52 3.16l.04.1c.32.96.48 1.44.3 1.8a1 1 0 0 1-.21.3c-.29.28-.8.28-1.8.28l-.43 2.91H5.93L5.5 8.34c-1 0-1.51 0-1.8-.27a1 1 0 0 1-.22-.3c-.17-.37 0-.85.31-1.8l.04-.1c.58-1.75.87-2.62 1.52-3.17l.36-.26C6.43 2 7.35 2 9.19 2"
            fill="currentColor"
          />
          <path d="M17.34 16.25H6.66l-.51-3.5h11.7z" fill="currentColor" />
          <path
            d="M13.04 22h-2.08c-1.65 0-2.48 0-3.04-.49-.56-.48-.68-1.3-.92-2.93l-.12-.83h10.24l-.12.83c-.24 1.63-.36 2.45-.92 2.93-.56.49-1.39.49-3.04.49"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCupPaper;
