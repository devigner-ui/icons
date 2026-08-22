import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartCar = forwardRef<SVGSVGElement, IconProps>(function IconSmartCar(
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
            d="M12.81 7.62H7.54c-1.86 0-2.28.93-2.51 2.08l-.85 4.05h12l-.85-4.05c-.25-1.15-.66-2.08-2.52-2.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.66 20.36c.08.88-.62 1.64-1.52 1.64h-1.41c-.81 0-.92-.35-1.07-.77l-.15-.45c-.21-.61-.35-1.03-1.43-1.03H8.24c-1.08 0-1.24.47-1.43 1.03l-.15.45c-.14.43-.25.77-1.07.77H4.18a1.5 1.5 0 0 1-1.52-1.64l.42-4.57c.11-1.13.32-2.05 2.29-2.05h9.57c1.97 0 2.18.92 2.29 2.05z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.17 11.5h-.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.92 11.5h-.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.67 16.75h2.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.42 16.75h2.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.38 8.74c.28-.65.18-1.53-.34-2.3a2.5 2.5 0 0 0-2-1.19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.49 9.73a6.1 6.1 0 0 0-.95-4.96A6.1 6.1 0 0 0 17.31 2"
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
            d="M19.38 9.49a1 1 0 0 1-.3-.06.76.76 0 0 1-.39-.99c.19-.43.08-1.06-.27-1.58-.35-.53-.88-.88-1.37-.86a.74.74 0 0 1-.76-.74c0-.42.33-.75.74-.76 1.03-.02 2 .57 2.63 1.52.64.96.79 2.11.4 3.01a.7.7 0 0 1-.68.46"
            fill="currentColor"
          />
          <path
            d="m22.49 10.48-.2-.03a.74.74 0 0 1-.52-.92 5.4 5.4 0 0 0-.85-4.34 5.4 5.4 0 0 0-3.7-2.44.74.74 0 0 1-.65-.83.74.74 0 0 1 .83-.65 7 7 0 0 1 4.76 3.1 7 7 0 0 1 1.05 5.58.75.75 0 0 1-.72.53"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.19 15.84c-.11-1.22-.44-2.53-2.82-2.53H5.9c-2.38 0-2.7 1.31-2.82 2.53l-.42 4.52a2.06 2.06 0 0 0 2.06 2.23h1.39c1.2 0 1.43-.69 1.58-1.14l.15-.44c.17-.51.21-.64.88-.64h3.8c.66 0 .69.07.88.64l.15.45c.15.45.38 1.14 1.58 1.14h1.39a2.05 2.05 0 0 0 2.06-2.23z"
            fill="currentColor"
          />
          <path
            d="M17.32 11.09h-.76l-.28-1.35c-.27-1.3-.82-2.49-3.03-2.49H8.04c-2.21 0-2.77 1.19-3.03 2.49l-.28 1.35h-.76a.56.56 0 1 0 0 1.12h.53l-.31 1.48q.59-.36 1.73-.37h9.47q1.14.01 1.73.37l-.31-1.48h.53c.31 0 .56-.25.56-.56a.6.6 0 0 0-.58-.56"
            fill="currentColor"
          />
          <path
            d="M8.42 17.39H6.19a.56.56 0 1 1 0-1.12h2.23c.31 0 .56.25.56.56a.57.57 0 0 1-.56.56"
            fill="currentColor"
          />
          <path
            d="M15.1 17.39h-2.23a.56.56 0 1 1 0-1.12h2.23c.31 0 .56.25.56.56a.57.57 0 0 1-.56.56"
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
            d="M19.38 9.49a1 1 0 0 1-.3-.06.76.76 0 0 1-.39-.99c.19-.43.08-1.06-.27-1.58-.35-.53-.88-.89-1.36-.86a.74.74 0 0 1-.76-.74c0-.42.33-.75.74-.76 1.03-.02 2 .57 2.63 1.52.64.96.79 2.11.4 3.01a.8.8 0 0 1-.69.46"
            fill="currentColor"
          />
          <path
            d="m22.49 10.48-.2-.03a.74.74 0 0 1-.52-.92 5.4 5.4 0 0 0-.85-4.34 5.4 5.4 0 0 0-3.7-2.44.74.74 0 0 1-.65-.83.74.74 0 0 1 .83-.65 7 7 0 0 1 4.76 3.1 7 7 0 0 1 1.05 5.58.75.75 0 0 1-.72.53"
            fill="currentColor"
          />
          <path
            d="M17.79 11.78c0 .3-.25.55-.55.55H4.1a.55.55 0 0 1-.55-.55c0-.3.25-.55.55-.55h.74l.28-1.32c.26-1.28.81-2.45 2.99-2.45h5.13c2.18 0 2.72 1.18 2.99 2.45l.28 1.32h.74c.29 0 .54.25.54.55"
            fill="currentColor"
          />
          <path
            d="M18.1 15.91c-.11-1.2-.43-2.49-2.77-2.49H6c-2.34 0-2.66 1.29-2.77 2.49l-.41 4.45a2 2 0 0 0 2.03 2.19h1.37c1.18 0 1.4-.68 1.56-1.12l.15-.44c.17-.5.2-.63.87-.63h3.74c.66 0 .68.07.87.63l.15.44c.15.45.37 1.12 1.56 1.12h1.37a2 2 0 0 0 2.03-2.19zm-9.62 1.52h-2.2a.55.55 0 0 1-.54-.55c0-.3.25-.55.55-.55h2.19c.3 0 .55.25.55.55s-.25.55-.55.55m6.57 0h-2.19a.55.55 0 0 1-.55-.55c0-.3.25-.55.55-.55h2.19c.3 0 .55.25.55.55s-.25.55-.55.55"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSmartCar;
