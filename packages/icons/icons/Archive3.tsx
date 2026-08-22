import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArchive3 = forwardRef<SVGSVGElement, IconProps>(function IconArchive3(
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
            d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M18.67 7.75v6.75a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2V7.75c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.67 15.75h-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.67 15.75h-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.67 14v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.67 14.5v1.25h-3.5a2.5 2.5 0 0 1-5 0h-3.5V14.5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M19.67 15h-.25V7.75A2.75 2.75 0 0 0 16.67 5h-8a2.75 2.75 0 0 0-2.75 2.75V15h-.25a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h3.84a3.26 3.26 0 0 0 3.16 2.5 3.26 3.26 0 0 0 3.16-2.5h3.84c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75m-2.21-3.12-.19-.06q-.3-.06-.61-.07h-8q-.31 0-.61.07l-.19.06q-.2.05-.38.14l-.08.03V11c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v1.05l-.08-.03q-.16-.09-.36-.14M8.67 6.5h8c.69 0 1.25.56 1.25 1.25v.81q-.57-.3-1.25-.31h-8q-.68.01-1.25.31v-.81c0-.69.56-1.25 1.25-1.25m6.5 8.5a.76.76 0 0 0-.75.75c0 .96-.79 1.75-1.75 1.75s-1.75-.79-1.75-1.75a.76.76 0 0 0-.75-.75H7.42v-.5c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v.5z"
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
            d="M16.67 9.75h-8c-.69 0-1.25.56-1.25 1.25v1.05l.08-.03q.18-.09.38-.14l.2-.06q.3-.06.6-.07h8q.31 0 .61.07l.2.06q.19.05.37.14l.08.03V11a1.3 1.3 0 0 0-1.27-1.25"
            fill="currentColor"
          />
          <path
            d="M16.67 13.25h-8c-.69 0-1.25.56-1.25 1.25v.5h2.75c.41 0 .75.34.75.75 0 .96.8 1.75 1.75 1.75.96 0 1.75-.79 1.75-1.75 0-.41.34-.75.75-.75h2.75v-.5c0-.69-.56-1.25-1.25-1.25"
            fill="currentColor"
          />
          <path
            d="M16.67 6.5h-8c-.69 0-1.25.56-1.25 1.25v.81q.57-.3 1.25-.31h8q.68.01 1.25.31v-.81c0-.69-.56-1.25-1.25-1.25"
            fill="currentColor"
          />
          <path
            d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m2.81 14.5h-3.84a3.26 3.26 0 0 1-3.16 2.5 3.26 3.26 0 0 1-3.16-2.5H5.67a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.25V7.75A2.75 2.75 0 0 1 8.67 5h8a2.75 2.75 0 0 1 2.75 2.75V15h.25c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconArchive3;
