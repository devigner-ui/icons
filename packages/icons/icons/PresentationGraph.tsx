import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPresentationGraph = forwardRef<SVGSVGElement, IconProps>(
  function IconPresentationGraph(
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
              d="M2 2h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m9 10.5 1.3-1.3c.33-.33.5-.5.7-.5s.37.17.7.5l.6.6c.33.33.5.5.7.5s.37-.17.7-.5L15 8.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 21v-4m0 4-2 1m2-1 2 1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M20 2v8.5c0 3.06 0 4.6-1 5.55s-2.62.95-5.86.95h-2.28C7.62 17 6 17 5 16.05s-1-2.49-1-5.55V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M4 10.5V2.75h16v7.75c0 3.06 0 4.6-1 5.55s-2.62.95-5.86.95h-2.29c-3.23 0-4.84 0-5.85-.95s-1-2.49-1-5.55"
              fill="currentColor"
            />
            <path
              d="M15.53 9.03a.75.75 0 0 0-1.06-1.06l-1.3 1.3-.17.17-.18-.18-.6-.6q-.22-.24-.46-.42a1.2 1.2 0 0 0-.76-.28c-.33 0-.59.14-.76.28q-.23.18-.45.41L8.47 9.97a.75.75 0 1 0 1.06 1.06l1.3-1.3.17-.17.18.18.6.6q.22.24.46.42c.17.14.43.28.76.28s.59-.14.76-.28q.23-.18.45-.41z"
              fill="currentColor"
            />
            <path
              d="M2 1.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M11.25 17v3.54l-1.59.79a.75.75 0 1 0 .68 1.34l1.66-.83 1.66.83a.75.75 0 1 0 .68-1.34l-1.59-.8V17z"
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
              d="M2 1.25a.75.75 0 0 0 0 1.5h2v7.75c0 3.06 0 4.6 1 5.55s2.62.95 5.86.95h.39v3.54l-1.59.79a.75.75 0 1 0 .68 1.34l1.66-.83 1.66.83a.75.75 0 1 0 .68-1.34l-1.59-.8V17h.4c3.23 0 4.84 0 5.85-.95s1-2.49 1-5.55V2.75h2a.75.75 0 0 0 0-1.5zm13.53 6.72c.3.3.3.77 0 1.06l-1.32 1.32q-.22.23-.45.41c-.17.14-.43.28-.76.28s-.59-.14-.76-.28q-.23-.18-.45-.41l-.61-.61-.18-.18-.18.18-1.29 1.29a.75.75 0 1 1-1.06-1.06l1.32-1.32q.22-.23.45-.41c.17-.14.43-.28.76-.28s.59.14.76.28q.23.18.45.41l.61.61.18.18.18-.18 1.29-1.29c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPresentationGraph;
