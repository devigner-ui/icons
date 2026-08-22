import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEyeClosed = forwardRef<SVGSVGElement, IconProps>(
  function IconEyeClosed(
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
              d="M2.69 6.7a.75.75 0 0 0-1.38.6zm12.9 6.63-.28-.7zm7.1-6.03a.75.75 0 0 0-1.38-.6zM19 11.13l-.51-.55zm-7 2.12A9.5 9.5 0 0 1 4.92 10 14 14 0 0 1 2.7 6.71l-1.4.59.01.03.15.3q.16.32.46.85c.41.69 1.04 1.6 1.9 2.53A11 11 0 0 0 12 14.75zm3.31-.62a9 9 0 0 1-3.31.62v1.5c1.44 0 2.72-.28 3.86-.72zM22 7l-.69-.3v.02l-.16.31q-.16.34-.51.91a13 13 0 0 1-2.15 2.64l1.02 1.1a15 15 0 0 0 3.16-4.35l.01-.02V7.3zm-3.51 3.58c-.86.8-1.92 1.55-3.18 2.05l.55 1.4a12 12 0 0 0 3.65-2.35z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.75 14a.75.75 0 1 0-1.5 0zm3.47-1.08a.75.75 0 1 0-1.26.82zm-7.18.82a.75.75 0 0 0-1.26-.82zm-2.67 1.35a.75.75 0 0 0 1.26.82zm13.16-4.5a.75.75 0 1 0-1.06 1.07zm.44 2.57a.75.75 0 1 0 1.06-1.06zm-8.72 3.34a.75.75 0 0 0 1.5 0zm5.12-.59a.75.75 0 1 0 1.26-.82zM5.53 11.66a.75.75 0 1 0-1.06-1.06zm-2.56.44a.75.75 0 1 0 1.06 1.06zm4.81.82-1.4 2.17 1.25.82 1.41-2.17zm10.69-1.26 1.5 1.5 1.06-1.06-1.5-1.5zM11.25 14v2.5h1.5V14zm3.7-.26 1.42 2.17 1.26-.82-1.41-2.17zM4.48 10.6l-1.5 1.5 1.06 1.06 1.5-1.5z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.92 6.6a1 1 0 0 0-1.84.8l.02.03.15.32q.15.31.47.86c.4.68 1.03 1.6 1.87 2.51l-.8.8a1 1 0 1 0 1.42 1.42l.84-.84q.85.68 1.9 1.25l-.79 1.2a1 1 0 0 0 1.68 1.1l.98-1.52q1.02.31 2.18.43v1.54a1 1 0 0 0 1 1V13a9 9 0 0 1-6.33-2.61l-.56-.57a13 13 0 0 1-2.19-3.2zm-1.84.8L2 7z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.22 12.4c-.94.37-2.01.6-3.22.6v4.5a1 1 0 0 0 1-1v-1.54q1.16-.11 2.18-.43l.98 1.52a1 1 0 0 0 1.68-1.1l-.78-1.2q1.05-.56 1.9-1.25l.83.84a1 1 0 0 0 1.42-1.42l-.8-.8a15 15 0 0 0 2.5-3.69V7.4a1 1 0 1 0-1.83-.8v.02l-.15.3q-.16.32-.5.9c-.47.73-1.16 1.69-2.11 2.58a10 10 0 0 1-3.1 2"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.6 6.08a1 1 0 0 1 1.32.53L2 7l.92-.4v.01l.12.24q.13.27.4.73a13 13 0 0 0 2.26 2.83 9.1 9.1 0 0 0 9.52 1.99 10 10 0 0 0 3.1-2 13 13 0 0 0 2.76-3.78V6.6a1 1 0 0 1 1.84.78L22 7l.92.4-.02.03-.19.4q-.2.4-.59 1.04c-.4.65-.97 1.45-1.71 2.25l.8.8a1 1 0 0 1-1.42 1.42l-.84-.84q-.84.69-1.9 1.25l.79 1.2a1 1 0 0 1-1.68 1.1l-.98-1.52q-1.02.32-2.18.43v1.54a1 1 0 1 1-2 0v-1.54q-1.16-.11-2.18-.43l-.98 1.52a1 1 0 0 1-1.68-1.1l.78-1.2q-1.05-.56-1.9-1.25l-.83.84a1 1 0 1 1-1.42-1.42l.8-.8a15 15 0 0 1-2.5-3.7V7.4L2 7l-.92.4a1 1 0 0 1 .53-1.32"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEyeClosed;
