import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLightbulbBolt = forwardRef<SVGSVGElement, IconProps>(
  function IconLightbulbBolt(
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
              d="M4.5 9.5A7.5 7.5 0 1 1 17 15.09a24 24 0 0 0-1.83 1.7c-.49.6-.5.64-.63 1.4-.04.24-.04.6-.04 1.31 0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75 0-.71 0-1.07-.04-1.3-.12-.77-.14-.82-.63-1.42-.15-.19-.71-.69-1.83-1.7A7.5 7.5 0 0 1 4.5 9.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.5 19.5h-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12.79 8.5-2.15 3h3l-2.14 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              opacity={duotone ? "0.4" : "1"}
              d="M4 9.67A7.6 7.6 0 0 1 11.5 2 7.6 7.6 0 0 1 19 9.67c0 2.28-.97 4.32-2.5 5.72l-1.58 1.49c-.25.3-.3.38-.33.45s-.05.16-.11.54c-.02.15-.03.4-.03 1.1v.04q0 .6-.02 1.05t-.25.9q-.28.48-.75.76-.42.23-.87.25-.43.04-1.03.03h-.06q-.6 0-1.03-.03-.46-.02-.87-.25a2 2 0 0 1-.75-.77 2 2 0 0 1-.25-.9q-.03-.42-.02-1.04v-.03c0-.7 0-.96-.03-1.1a2 2 0 0 0-.11-.55 2 2 0 0 0-.32-.44v-.01l-.03-.03-.1-.1-.3-.29-1.16-1.07A7.7 7.7 0 0 1 4 9.67"
              fill="currentColor"
            />
            <path
              d="M13.09 19.67H9.92v.26c.03.21.06.29.08.33q.1.16.25.25c.04.02.11.06.32.07q.3.03.93.03c.44 0 .72 0 .93-.03q.28-.03.32-.07.15-.1.25-.25a1 1 0 0 0 .07-.33z"
              fill="currentColor"
            />
            <path
              d="M12.61 8.18c.3.22.38.66.16.97l-1.18 1.69H13c.26 0 .5.14.61.38.12.23.1.5-.05.72l-1.95 2.8a.67.67 0 0 1-.95.15.7.7 0 0 1-.16-.97l1.18-1.69h-1.4a.7.7 0 0 1-.61-.38.7.7 0 0 1 .05-.72l1.95-2.8a.67.67 0 0 1 .95-.15"
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
              d="M11.5 2A7.6 7.6 0 0 0 4 9.67c0 2.28.97 4.32 2.5 5.72l1.59 1.5c.24.3.29.37.32.44s.05.16.1.54c.03.15.04.4.04 1.1v.04q0 .6.02 1.05t.25.9q.28.48.75.76.42.23.87.25a12 12 0 0 0 1.03.03h.06q.6 0 1.03-.03.46-.02.87-.25.47-.28.75-.77.22-.43.25-.9.02-.42.02-1.04v-.03c0-.7 0-.96.03-1.1.06-.39.08-.48.11-.55s.08-.14.32-.44v-.01l.12-.12.31-.3 1.16-1.07A7.7 7.7 0 0 0 19 9.67 7.6 7.6 0 0 0 11.5 2m1.59 17.67H9.9l.02.26c.02.21.05.29.07.33q.1.16.25.25c.04.02.11.06.32.07q.3.02.93.02c.44 0 .72 0 .93-.02q.28-.03.32-.07.15-.1.25-.25a1 1 0 0 0 .07-.33zm-.48-11.5c.3.23.38.67.16.98l-1.18 1.69H13c.26 0 .5.14.61.38.12.23.1.5-.05.72l-1.95 2.8a.67.67 0 0 1-.95.15.7.7 0 0 1-.16-.97l1.18-1.69h-1.4a.7.7 0 0 1-.61-.38.7.7 0 0 1 .05-.72l1.95-2.8a.67.67 0 0 1 .95-.15"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLightbulbBolt;
