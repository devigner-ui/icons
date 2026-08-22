import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDrawerOutbox = forwardRef<SVGSVGElement, IconProps>(
  function IconDrawerOutbox(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.67 8V2l-2 2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m12.67 2 2 2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M7.67 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a3 3 0 0 1-4.37 0L9.47 12.6c-.52-.39-.8-.6-1.8-.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.67 12v-2c0-2.01 0-3.67 3-3.96"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.67 12v-2c0-2.01 0-3.67-3-3.96"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M15.46 6H9.88c-4.42 0-4.42 2.35-4.42 4.42v1.79q0 .34.27.55.28.2.61.12a7 7 0 0 1 1.68-.18c.67 0 .81.08 1.21.38l.91.96a3.5 3.5 0 0 0 5.08 0l.91-.96c.4-.3.54-.38 1.21-.38q1 0 1.68.18a.7.7 0 0 0 .61-.12.7.7 0 0 0 .27-.55v-1.79C19.88 8.35 19.88 6 15.46 6"
              fill="currentColor"
            />
            <path
              d="M14.95 4.95a.7.7 0 0 1-.95 0l-.65-.65v4.77a.68.68 0 0 1-1.36 0V4.3l-.65.65a.7.7 0 0 1-.95 0 .7.7 0 0 1 0-.95l1.8-1.8.02-.01q.09-.08.2-.13l.26-.06.26.05q.13.04.22.15l1.8 1.8c.26.26.26.69 0 .95"
              fill="currentColor"
            />
            <path
              d="M19.36 11.53a8 8 0 0 0-2.04-.23c-1.11 0-1.52.27-2.09.7l-.09.08-.95 1.01c-.8.84-2.24.85-3.04-.01l-.95-1-.09-.08c-.57-.43-.98-.7-2.09-.7q-1.2 0-2.04.23c-2.38.64-2.38 2.53-2.38 4.19v.93c0 2.51 0 5.35 5.35 5.35h7.44q5.34-.01 5.35-5.35v-.93c0-1.66 0-3.55-2.38-4.19M15 18.4h-4.66a.7.7 0 0 1-.69-.7c0-.39.31-.7.69-.7H15a.7.7 0 0 1 .69.7.7.7 0 0 1-.69.7"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.69 17.7a.7.7 0 0 1-.69.7h-4.66a.7.7 0 0 1-.69-.7c0-.39.31-.7.69-.7H15a.7.7 0 0 1 .69.7"
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
              d="M19.36 11.53a8 8 0 0 0-2.04-.23c-1.11 0-1.52.27-2.09.7l-.09.08-.95 1.01c-.8.84-2.24.85-3.04-.01l-.95-1-.09-.08c-.57-.43-.98-.7-2.09-.7q-1.2 0-2.04.23c-2.38.64-2.38 2.53-2.38 4.19v.93c0 2.51 0 5.35 5.35 5.35h7.44q5.34-.01 5.35-5.35v-.93c0-1.66 0-3.55-2.38-4.19M15 18.4h-4.66a.7.7 0 0 1-.69-.7c0-.39.31-.7.69-.7H15a.7.7 0 0 1 .69.7.7.7 0 0 1-.69.7"
              fill="currentColor"
            />
            <path
              d="m13.34 4.3.65.65c.26.26.69.26.95 0a.7.7 0 0 0 0-.95l-1.8-1.8-.22-.15-.25-.05-.26.05q-.12.05-.2.13l-.02.01L10.39 4a.7.7 0 0 0 0 .95c.26.26.69.26.95 0l.65-.65V6h1.35z"
              fill="currentColor"
            />
            <path
              d="m19.88 10.12-.13-.04h-.01a9 9 0 0 0-2.42-.28 4.3 4.3 0 0 0-3.27 1.25l-.95 1.01q-.16.16-.43.16a.6.6 0 0 1-.43-.17l-.98-1.03A4.3 4.3 0 0 0 8.02 9.8q-1.37 0-2.43.28l-.13.04C5.47 8.13 5.67 6 9.88 6H12v3.08a.67.67 0 0 0 1.34 0V6h2.12c4.21 0 4.41 2.13 4.42 4.12"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDrawerOutbox;
