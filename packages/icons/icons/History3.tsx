import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHistory3 = forwardRef<SVGSVGElement, IconProps>(function IconHistory3(
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
            opacity={duotone ? "0.4" : "1"}
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray="0.5 3.5"
          />
          <path
            d="M22 12A10 10 0 0 0 12 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 9v4h4"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.75c5.1 0 9.25 4.14 9.25 9.25a.75.75 0 0 0 1.5 0c0-5.94-4.81-10.75-10.75-10.75a.75.75 0 0 0 0 1.5"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 8.25c.41 0 .75.34.75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.1 2.4a.75.75 0 0 1-.43.97l-.42.17a.75.75 0 1 1-.6-1.37l.48-.2c.39-.15.82.04.97.43M5.65 4.24c.28.3.27.78-.03 1.06l-.32.32A.75.75 0 1 1 4.21 4.6l.38-.38a.75.75 0 0 1 1.06.03M3.16 7.26c.38.17.55.61.38 1l-.17.41a.75.75 0 0 1-1.4-.54l.2-.49a.75.75 0 0 1 .99-.38M2.02 11c.42.01.74.36.73.77v.46a.75.75 0 1 1-1.5.03v-.52a.75.75 0 0 1 .77-.74m19.58 3.9c.39.15.58.58.43.97l-.2.49a.75.75 0 1 1-1.37-.61l.17-.42a.75.75 0 0 1 .97-.43m-19.2 0c.38-.15.82.04.97.43l.17.42a.75.75 0 1 1-1.37.6l-.2-.48a.75.75 0 0 1 .43-.97m17.36 3.45c.3.29.31.76.03 1.06l-.38.38a.75.75 0 1 1-1.03-1.09l.32-.32a.75.75 0 0 1 1.06-.03m-15.52 0a.75.75 0 0 1 1.06.03l.32.32a.75.75 0 0 1-1.03 1.09l-.38-.38a.75.75 0 0 1 .03-1.06m3.02 2.5a.75.75 0 0 1 1-.4q.2.1.41.18a.75.75 0 0 1-.54 1.4l-.49-.2a.75.75 0 0 1-.38-.99m9.48 0c.17.37 0 .81-.38.98l-.49.2a.75.75 0 0 1-.54-1.4q.21-.07.42-.17c.38-.17.82 0 .99.38M11 21.97a.75.75 0 0 1 .77-.73h.46a.75.75 0 0 1 .03 1.5h-.52a.75.75 0 0 1-.74-.77"
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
            d="M9.1 2.4a.75.75 0 0 1-.43.97l-.42.17a.75.75 0 1 1-.6-1.37l.48-.2c.39-.15.82.04.97.43M5.65 4.24c.28.3.27.78-.03 1.06l-.32.32A.75.75 0 0 1 4.21 4.6l.38-.38a.75.75 0 0 1 1.06.03M3.16 7.26c.38.17.55.61.38 1l-.17.41a.75.75 0 0 1-1.4-.54l.2-.49a.75.75 0 0 1 .99-.38M2.02 11c.42.01.74.36.73.77v.46a.75.75 0 0 1-1.5.03v-.52a.75.75 0 0 1 .77-.74m19.58 3.9c.39.15.58.58.43.97l-.2.49a.75.75 0 1 1-1.37-.61l.17-.42a.75.75 0 0 1 .97-.43m-19.2 0c.38-.15.82.04.97.43l.17.42a.75.75 0 1 1-1.37.6l-.2-.48a.75.75 0 0 1 .43-.97m17.36 3.45c.3.29.31.76.03 1.06l-.38.38a.75.75 0 1 1-1.03-1.09l.32-.32a.75.75 0 0 1 1.06-.03m-15.52 0a.75.75 0 0 1 1.06.03l.32.32a.75.75 0 1 1-1.03 1.09l-.38-.38a.75.75 0 0 1 .03-1.06m3.02 2.49a.75.75 0 0 1 1-.38l.41.17a.75.75 0 1 1-.54 1.4l-.49-.2a.75.75 0 0 1-.38-.99m9.48 0c.17.38 0 .82-.38.99l-.49.2a.75.75 0 1 1-.54-1.4q.21-.07.42-.17c.38-.17.82 0 .99.38M11 21.98a.75.75 0 0 1 .77-.73h.46a.75.75 0 0 1 .03 1.5h-.52a.75.75 0 0 1-.74-.77"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.75c5.1 0 9.25 4.14 9.25 9.25a.75.75 0 0 0 1.5 0c0-5.94-4.81-10.75-10.75-10.75a.75.75 0 0 0 0 1.5"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 8.25c.41 0 .75.34.75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHistory3;
