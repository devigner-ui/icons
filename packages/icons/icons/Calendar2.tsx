import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendar2 = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendar2(
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M8 2v3m8-3v3"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M3.5 9.09h17"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
            />
            <path
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.3 16.7"
              opacity={duotone ? "0.4" : "1"}
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
              d="M9.17 15a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21q-.13-.15-.21-.33a1 1 0 0 1-.08-.38 1 1 0 0 1 .08-.38q.07-.18.21-.33.15-.13.33-.21a1 1 0 0 1 .76 0q.18.07.33.21.13.15.21.33a1 1 0 0 1 .08.38 1 1 0 0 1-.08.38q-.07.18-.21.33-.15.13-.33.21a1 1 0 0 1-.38.08"
              fill="currentColor"
            />
            <path
              d="M12.67 15a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.29-.71q.01-.4.29-.71.15-.13.33-.21a1 1 0 0 1 .76 0q.18.07.33.21.28.3.29.71-.01.4-.29.71-.15.13-.33.21a1 1 0 0 1-.38.08"
              fill="currentColor"
            />
            <path
              d="M9.17 18.5a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.29-.71q.01-.4.29-.71.15-.14.33-.21a1 1 0 0 1 .76 0q.18.07.33.21.28.3.29.71-.01.4-.29.71-.15.14-.33.21a1 1 0 0 1-.38.08"
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
              d="M20.67 9.84h-16a1 1 0 0 0-1 1V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-6.16a1 1 0 0 0-1-1M9.88 18.21q-.15.14-.33.21a1 1 0 0 1-.38.08 1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.29-.71q.01-.4.29-.71.15-.14.33-.21a1 1 0 0 1 .76 0q.18.08.33.21.28.3.29.71-.01.4-.29.71m.21-3.83q-.07.18-.21.33-.15.13-.33.21a1 1 0 0 1-.38.08 1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21q-.13-.15-.21-.33a1 1 0 0 1-.08-.38 1 1 0 0 1 .08-.38q.07-.18.21-.33.15-.13.33-.21a1 1 0 0 1 .76 0q.18.07.33.21.13.15.21.33a1 1 0 0 1 .08.38 1 1 0 0 1-.08.38m3.29.33q-.15.13-.33.21a1 1 0 0 1-.38.08 1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.29-.71q.01-.4.29-.71.15-.13.33-.21a1 1 0 0 1 .76 0q.18.07.33.21.28.3.29.71-.01.4-.29.71"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendar2;
