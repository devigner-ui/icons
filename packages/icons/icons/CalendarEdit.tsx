import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendarEdit = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendarEdit(
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
              d="M8.67 2v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.67 2v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.17 9.09h17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m19.88 15.77-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.37 16.28a3.2 3.2 0 0 0 2.22 2.22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22h-4c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 13.7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.96 13.7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.96 16.7"
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
              d="M17.42 3.56V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.5h-6.5V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25a.5.5 0 0 0 .5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.67 9.84a1 1 0 0 1 1 1V17c0 3-1.5 5-5 5h-8c-3.5 0-5-2-5-5v-6.16a1 1 0 0 1 1-1z"
              fill="currentColor"
            />
            <path
              d="m15.51 14.99-.5.51H15l-3.03 3.03c-.13.13-.4.27-.59.29l-1.35.2c-.49.07-.83-.28-.76-.76l.19-1.36c.03-.19.16-.45.29-.59l3.04-3.03.5-.51c.33-.33.7-.57 1.1-.57.34 0 .71.16 1.12.57.9.9.61 1.61 0 2.22"
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
              d="M17.42 3.56V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.5h-6.5V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25a.5.5 0 0 0 .5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25"
              fill="currentColor"
            />
            <path
              d="M20.67 9.84h-16a1 1 0 0 0-1 1V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-6.16a1 1 0 0 0-1-1m-5.16 5.15-.5.51H15l-3.03 3.03c-.13.13-.4.27-.59.29l-1.35.2c-.49.07-.83-.28-.76-.76l.19-1.36c.03-.19.16-.45.29-.59l3.04-3.03.5-.51c.33-.33.7-.57 1.1-.57.34 0 .71.16 1.12.57.9.9.61 1.61 0 2.22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendarEdit;
