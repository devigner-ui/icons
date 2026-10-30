import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVirus = forwardRef<SVGSVGElement, IconProps>(function IconVirus(
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
      {variant === "Broken" ? (
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
            d="M12.56 19a6.86 6.86 0 0 0 6.94-6.94A7.14 7.14 0 0 0 12.44 5a6.86 6.86 0 0 0-6.94 6.94A7.14 7.14 0 0 0 12.56 19Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m18.5 6-1.05 1.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m5.5 5 2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17.55 18.05 17 17.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6.5 19.05 7.55 18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13 13a2 2 0 1 0 2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M11.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="9.5"
            cy="13"
            r="1"
            fill="currentColor"
          />
          <path
            d="M21.06 5.56a1.5 1.5 0 1 1 0-2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2.5 3.5A1.5 1.5 0 1 0 4 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M20.55 19.55a1.5 1.5 0 1 0-1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M3.94 19.44a1.5 1.5 0 1 1 0 2.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M20 13.5a1.5 1.5 0 1 0-.5-2.91v2.82q.23.09.5.09Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M11.09 19a1.5 1.5 0 0 0 2.82 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </svg>
      ) : !fill ? (
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
            d="M12.56 19a6.86 6.86 0 0 0 6.94-6.94A7.14 7.14 0 0 0 12.44 5a6.86 6.86 0 0 0-6.94 6.94A7.14 7.14 0 0 0 12.56 19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.5 6-1.05 1.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.5 5 2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17.55 18.05 17 17.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.5 19.05 7.55 18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="9.5"
            cy="13"
            r="1"
            fill="currentColor"
          />
          <circle
            cx="20"
            cy="4.5"
            r="1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="1.5"
            cy="1.5"
            r="1.5"
            transform="translate(0.5 0) matrix(-1 0 0 1 5 2.00024)"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="1.5"
            cy="1.5"
            r="1.5"
            transform="translate(0.5 0) matrix(1 0 0 -1 17.0498 21.05)"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="4.5"
            cy="20.5002"
            r="1.5"
            transform="translate(0.5 0) rotate(180 4.5 20.5002)"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 13.5a1.5 1.5 0 1 0-.5-2.91v2.82q.23.09.5.09"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.09 19a1.5 1.5 0 0 0 2.82 0z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5 12.06A6.86 6.86 0 0 1 12.56 19a7.14 7.14 0 0 1-7.06-7.06A6.86 6.86 0 0 1 12.44 5a7.14 7.14 0 0 1 7.06 7.06M15 10.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.75 9a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m.75 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.75 13a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
            fill="currentColor"
          />
          <circle cx="20" cy="4.5" r="1.5" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.55 4.89-1.63 1.63-.06.07q.58.48 1.05 1.05l.07-.06 1.63-1.63a1.5 1.5 0 0 1-1.06-1.06"
            fill="currentColor"
          />
          <circle
            cx="1.5"
            cy="1.5"
            r="1.5"
            transform="translate(0.5 0) matrix(1 0 0 -1 17.0498 21.05)"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10.13 18.55.25.7a2.25 2.25 0 0 0 4.24 0l.22-.61a7 7 0 0 1-4.7-.09"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.61 10.63A1.5 1.5 0 0 0 3.5 12a1.5 1.5 0 0 0 2.15 1.35 7 7 0 0 1-.04-2.72"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.36 13.5a7 7 0 0 0-.04-2.99 1.5 1.5 0 1 1 .04 2.98"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.85 5.15q.15-.3.15-.65a1.5 1.5 0 1 0-2.87.61 7 7 0 0 1 2.72.04"
            fill="currentColor"
          />
          <path
            d="m17.6 19.16-1.25-1.25q.64-.41 1.17-.95l1.14 1.14a1.5 1.5 0 0 0-1.06 1.06"
            fill="currentColor"
          />
          <circle
            cx="2"
            cy="2"
            r="2"
            transform="translate(0.5 0) matrix(-1 0 0 1 6 2.00024)"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.28 5.84a2 2 0 0 0 1.06-1.06l1.69 1.69.04.04q-.6.47-1.06 1.06l-.04-.04z"
            fill="currentColor"
          />
          <circle
            cx="5"
            cy="20.0002"
            r="2"
            transform="translate(0.5 0) rotate(180 5 20.0002)"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6.32 18.17 1.26-1.27q.54.54 1.18.95l-1.4 1.4a2 2 0 0 0-1.04-1.08"
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
            d="M20.25 5.5a1.5 1.5 0 0 1-1.89 1.45l-.63.63-.07.06a7 7 0 0 1 1.4 2.87 1.5 1.5 0 1 1 .19 2.99h-.14a7 7 0 0 1-1.84 3.45l1.14 1.15a1.5 1.5 0 1 1-1.06 1.06l-1.13-1.13-.1-.13q-.72.45-1.53.74l-.22.61a2.25 2.25 0 0 1-4.24 0l-.25-.7a7 7 0 0 1-1.4-.71l-1.38 1.4A2 2 0 0 1 5.25 22a2 2 0 1 1 .81-3.83l1.26-1.29c-.8-.8-1.41-1.8-1.75-2.9A2 2 0 0 1 3.25 12a2 2 0 0 1 2.25-1.98q.4-1.37 1.26-2.45l-.73-.73A2 2 0 0 1 3.25 5a2 2 0 1 1 3.84.78l.73.73a7 7 0 0 1 3.68-1.48V4.8a1.5 1.5 0 1 1 1.5 0v.25c1.35.17 2.6.72 3.6 1.54l.07-.07.63-.63A1.5 1.5 0 0 1 18.75 4c.83 0 1.5.67 1.5 1.5M12 13a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-1.25-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-1.5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            d="M13.5 13a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconVirus;
