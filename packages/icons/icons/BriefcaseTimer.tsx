import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBriefcaseTimer = forwardRef<SVGSVGElement, IconProps>(
  function IconBriefcaseTimer(
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
            d="M16 14.2a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12.25 12.95v.93c0 .35-.18.68-.49.86l-.76.46"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.95 18.43C20.75 20.39 20.02 22 16 22H8c-4.02 0-4.74-1.61-4.95-3.57l-.75-8C2.03 7.99 2.73 6 7 6h10c4.27 0 4.97 1.99 4.7 4.43L21.37 14"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.65 11a16 16 0 0 1-5.64 2.64"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.62 11.27A16 16 0 0 0 8 13.68"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12.25 12.95v.93c0 .35-.18.68-.49.86l-.76.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.65 11a16 16 0 0 1-5.64 2.64"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.62 11.27A16 16 0 0 0 8 13.68"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
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
              d="M11.13 15.88a.8.8 0 0 1-.64-.36.75.75 0 0 1 .26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .26-.14.51-.36.64l-1.25.75a1 1 0 0 1-.4.11"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m21.85 11.41-.62 6.78c-.21 2-1.03 4.04-5.43 4.04H8.18c-4.4 0-5.22-2.04-5.42-4.03l-.61-6.51.04.03q.5.33 1.03.64l.44.25a17 17 0 0 0 5.12 1.8 3.25 3.25 0 0 0 6.45-.06v-.01a16 16 0 0 0 5.26-2.04q.69-.38 1.32-.84z"
              fill="currentColor"
            />
            <path
              d="M21.09 6.98c-.85-.94-2.26-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.08-3.76 3.76v.04h-.24q-3.09 0-4.33 1.41c-.99 1.11-.96 2.58-.86 3.59l.01.07.09 1.05.05.03q.5.34 1.03.64l.44.25q1.7.93 3.58 1.45a4.75 4.75 0 0 0 9.5-.06v-.04q1.9-.57 3.6-1.57l.15-.09q.69-.38 1.32-.84l.04-.05.04-.36.05-.47.02-.18c.08-1 .06-2.38-.88-3.42M8.91 5.53c0-1.7 0-2.34 2.33-2.34h1.52c2.33 0 2.33.64 2.33 2.34v.04H8.91zM12 17.25a3.25 3.25 0 1 1 3.23-2.91v.01a3.26 3.26 0 0 1-3.23 2.9"
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
              d="M11.13 16.03a.8.8 0 0 1-.64-.36.75.75 0 0 1 .26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .26-.14.51-.36.64l-1.25.75a1 1 0 0 1-.4.11"
              fill="currentColor"
            />
            <path
              d="M21.09 7.13c-.85-.94-2.26-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52C7.48 1.92 7.48 4 7.48 5.68v.04h-.24q-3.09 0-4.33 1.41c-.99 1.11-.96 2.58-.86 3.59l.01.07.07.8q.03.25.23.38.43.3.87.54l.44.25q1.7.93 3.58 1.45a4.75 4.75 0 0 0 9.5-.06v-.04q1.9-.57 3.6-1.57l.15-.09c.4-.21.8-.5 1.18-.76a.5.5 0 0 0 .2-.35l.02-.14.05-.47.02-.18c.08-1 .06-2.38-.88-3.42M8.91 5.68c0-1.7 0-2.34 2.33-2.34h1.52c2.33 0 2.33.64 2.33 2.34v.04H8.91zM12 17.4a3.25 3.25 0 1 1 3.23-2.91v.01A3.26 3.26 0 0 1 12 17.4"
              fill="currentColor"
            />
            <path
              d="M21.04 13.88c.25-.14.57.06.55.35l-.36 3.88c-.21 2-1.03 4.04-5.43 4.04H8.18c-4.4 0-5.22-2.04-5.42-4.03l-.35-3.7c-.02-.3.28-.48.54-.35q1.17.65 2.42 1.11a1 1 0 0 1 .62.69 6.25 6.25 0 0 0 12.05-.14 1 1 0 0 1 .61-.7q1.26-.5 2.39-1.15"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBriefcaseTimer;
