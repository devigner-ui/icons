import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPipette = forwardRef<SVGSVGElement, IconProps>(function IconPipette(
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
            d="m10.53 19.3-.53-.54zm.8-12.46.53-.53zm-1.09-1.09-.53.53zm2.18-2.18.54-.53zm1.1 1.1-.53.52a.75.75 0 0 0 1.06 0zm1.45-1.46-.53-.53zm4.37 7.27-.53-.53c-.3.3-.3.77 0 1.06zm1.09 1.1-.53.53zM4.71 13.47l-.53-.53zm-2.26 5.9.53.52zm.63-.63-.53-.53zm1.56 2.8.53.54zm.62-.62-.53-.53zm-1.48-4.17-.75.08zm-.05-.48.74-.08zm3.52 3.95-.08.75zm.48.05.08-.74zm-2.22.4.49.58zm1.4-.48.02-.75zm-3.03-5.76-.66-.36zm-.2.58-.74-.14zm-.36 3.48L2.75 18zm.49-1.4.75-.02zm5.76 3.03.36.66zm-.58.2.14.74zm5.51-5-.53-.53zm-2.64-9-1.09-1.1-1.06 1.06 1.1 1.1zm6.92 6.9-1.1-1.08-1.06 1.06 1.1 1.09zM11.89 4.1 13 5.2l1.06-1.07-1.1-1.1zm2.16 1.1 1.45-1.46-1.06-1.06L13 4.13zm6.21 3.3-1.45 1.45 1.06 1.06 1.45-1.45zM10.8 7.38l5.82 5.82 1.07-1.06-5.83-5.83zM5.24 14l6.62-6.62L10.8 6.3l-6.62 6.63zm-2.26 5.9.63-.63-1.06-1.06-.63.62zm2.19 2.18.62-.63-1.06-1.06-.62.63zm-.65-5.42-.05-.47-1.49.16.05.48zm2.65 4.3.48.06.16-1.5-.47-.04zm-1.38.49.21-.2-.97-1.14-.3.28zm1.55-1.97q-.24-.04-.41-.04l-.04 1.5c.04 0 .1 0 .28.03zM6 21.25q.38-.31.89-.31l.04-1.5a2.8 2.8 0 0 0-1.9.67zm-4.08.83c.9.9 2.35.9 3.25 0L4.1 21.02a.8.8 0 0 1-1.13 0zm2.26-9.14c-.42.42-.75.74-.96 1.13l1.32.7c.08-.14.21-.28.7-.77zm.3 3.25a4 4 0 0 1-.07-1.04l-1.47-.28a5 5 0 0 0 .04 1.48zm-1.26-2.12q-.2.38-.28.8l1.47.28q.04-.2.13-.37zM20.26 3.74a3.37 3.37 0 0 1 0 4.76l1.06 1.06a4.87 4.87 0 0 0 0-6.88zm-4.76 0a3.37 3.37 0 0 1 4.76 0l1.06-1.06a4.87 4.87 0 0 0-6.88 0zm4.4 9.49a.8.8 0 0 1-1.12 0l-1.06 1.06c.9.9 2.34.9 3.24 0zM3.61 19.27l.28-.3L2.75 18l-.2.2zm-.58-2.44.03.28 1.5-.04q0-.17-.04-.4zm.86 2.14c.45-.53.69-1.2.67-1.9l-1.5.04q.01.5-.31.89zM10.77 4.1a.8.8 0 0 1 1.12 0l1.06-1.06a2.3 2.3 0 0 0-3.24 0zM2.98 21.02a.8.8 0 0 1 0-1.13l-1.06-1.06c-.9.9-.9 2.35 0 3.25zm7.8-15.8a.8.8 0 0 1 0-1.12L9.7 3.04c-.9.9-.9 2.35 0 3.24zm10.18 9.07c.9-.9.9-2.35 0-3.24L19.9 12.1a.8.8 0 0 1 0 1.12zM10 18.76c-.49.49-.63.62-.78.7l.7 1.32c.4-.2.72-.54 1.14-.96zm-2.35 2.26c.6.07 1.04.12 1.48.04l-.28-1.47a4 4 0 0 1-1.04-.06zm1.57-1.56q-.17.09-.37.13l.28 1.47q.42-.08.8-.28zM18.81 11l1.09 1.1 1.06-1.06-1.1-1.1zm-7.75 8.81 3.97-3.97-1.06-1.06L10 18.76zm3.97-3.97 2.66-2.65-1.07-1.06-2.65 2.65z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14.5 15.32-1.85-1.85m-.15 3.85-1.85-1.85"
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
            d="m10.24 5.75 1.1 1.1 5.82 5.82 1.09 1.09a1.54 1.54 0 0 0 2.18-2.18l-1.1-1.1 1.46-1.45a4.12 4.12 0 1 0-5.82-5.82l-1.45 1.45-1.1-1.09a1.54 1.54 0 1 0-2.18 2.18"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.7 13.47c-.45.45-.68.68-.82.96q-.15.27-.2.58c-.06.3-.03.62.05 1.26l.05.48.03.34a2 2 0 0 1-.73 1.65l-.63.62a1.54 1.54 0 1 0 2.19 2.19l.62-.63.25-.24a2 2 0 0 1 1.74-.46l.48.05c.64.08.96.11 1.26.05q.3-.05.58-.2c.28-.14.5-.37.96-.83l1.44-1.44 1.06-1.06.94-.94 1.06-1.06 2.13-2.12-5.83-5.83z"
            fill="currentColor"
          />
          <path
            d="m12.12 14 1.85 1.85 1.06-1.06-1.85-1.85A.75.75 0 1 0 12.12 14"
            fill="currentColor"
          />
          <path
            d="m10.12 16 1.85 1.85 1.06-1.06-1.85-1.85A.75.75 0 1 0 10.12 16"
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
            d="m10.24 5.75 8 8a1.54 1.54 0 0 0 2.19-2.17l-1.1-1.1 1.46-1.45a4.12 4.12 0 1 0-5.82-5.82l-1.45 1.45-1.1-1.09a1.54 1.54 0 1 0-2.18 2.18"
            fill="currentColor"
          />
          <path
            d="m10.27 7.9-5.56 5.57c-.46.45-.69.68-.83.96q-.15.27-.2.58c-.06.3-.03.62.05 1.26l.05.48.03.34q.02.78-.49 1.4l-.24.25-.63.62a1.54 1.54 0 0 0 2.19 2.19l.62-.63.25-.24a2 2 0 0 1 1.74-.46l.48.05c.64.08.96.11 1.26.05q.3-.05.58-.2c.28-.14.5-.37.96-.83l1.44-1.44L10.12 16a.75.75 0 1 1 1.06-1.06l1.85 1.85.94-.94L12.12 14a.75.75 0 0 1 1.06-1.06l1.85 1.85 1.06-1.06z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPipette;
