import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMedicalKit = forwardRef<SVGSVGElement, IconProps>(
  function IconMedicalKit(
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
              d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 6c0-1.89 0-2.83-.59-3.41C14.83 2 13.9 2 12 2s-2.83 0-3.41.59C8 3.17 8 4.1 8 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13.5 14h-3m1.5-1.5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="14.0002"
              r="4"
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
              d="M12.05 1.25h-.1c-.9 0-1.65 0-2.24.08-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.08.6-.08 1.34-.08 2.24v.08Q7.94 6 8.75 6c0-.96 0-1.61.07-2.1.06-.46.17-.65.3-.78s.32-.24.79-.3c.48-.07 1.13-.07 2.09-.07s1.61 0 2.1.07c.46.06.65.17.78.3s.24.32.3.79c.07.48.07 1.13.07 2.09q.81 0 1.5.03v-.08q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14m10.75-1.5a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 1 0 1.5 0v-.75h.75a.75.75 0 1 0 0-1.5h-.75z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8m.75-5.5a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 1 0 1.5 0v-.75h.75a.75.75 0 1 0 0-1.5h-.75z"
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
              d="M12 11.75c.41 0 .75.34.75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 1 1-1.5 0v-.75h-.75a.75.75 0 1 1 0-1.5h.75v-.75c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.95 1.25c-.9 0-1.65 0-2.24.08-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.08.6-.08 1.34-.08 2.24v.08c-2.02.06-3.23.3-4.08 1.14C2 8.34 2 10.23 2 14s0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14s0-5.66-1.17-6.83c-.85-.84-2.06-1.08-4.08-1.14v-.08q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08zM15.25 6c0-.96 0-1.61-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07s-1.61 0-2.1.07c-.46.06-.65.17-.78.3s-.24.32-.3.79c-.07.48-.07 1.13-.07 2.09zm.75 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMedicalKit;
