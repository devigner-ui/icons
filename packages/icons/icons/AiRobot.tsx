import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiRobot = forwardRef<SVGSVGElement, IconProps>(function IconAiRobot(
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

  /* In TwoTone the head is full and the antenna and side bars are the dimmed
     shapes; the antenna is clipped at the head's outer edge so its cap does
     not sit over it, as in AiHeadset. Bulk dims the whole outline and keeps the face full. */
  const clip = useId();
  const h = Number(strokeWidth) / 2;
  const outside = (
    <defs>
      <clipPath id={clip}>
        <rect x="0" y="0" width="24" height={7.5 - h} />
        <rect x="0" y="0" width={4 - h} height="24" />
        <rect x={20 + h} y="0" width={4 - h} height="24" />
      </clipPath>
    </defs>
  );

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
            d="M9.72 20H8a4 4 0 0 1-4-4v-4.5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4V16a4 4 0 0 1-4 4h-3.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.5v-3m-1.2-1.2a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 1 0-2.4 0ZM2 12.5V15m20-2.5V15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11.7c.16 1.19.61 1.64 1.8 1.8-1.19.16-1.64.61-1.8 1.8-.16-1.19-.61-1.64-1.8-1.8 1.19-.16 1.64-.61 1.8-1.8Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 11.7c.16 1.19.61 1.64 1.8 1.8-1.19.16-1.64.61-1.8 1.8-.16-1.19-.61-1.64-1.8-1.8 1.19-.16 1.64-.61 1.8-1.8Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
          {duotone && outside}
          <path
            d="M8 7.5h8a4 4 0 0 1 4 4V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4.5a4 4 0 0 1 4-4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M12 7.5v-3m-1.2-1.2a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 1 0-2.4 0ZM2 12.5V15m20-2.5V15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11.7c.16 1.19.61 1.64 1.8 1.8-1.19.16-1.64.61-1.8 1.8-.16-1.19-.61-1.64-1.8-1.8 1.19-.16 1.64-.61 1.8-1.8Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 11.7c.16 1.19.61 1.64 1.8 1.8-1.19.16-1.64.61-1.8 1.8-.16-1.19-.61-1.64-1.8-1.8 1.19-.16 1.64-.61 1.8-1.8Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M8 6.75h3.25V5.08q-.38-.15-.63-.4c-.31-.31-.57-.9-.57-1.38s.26-1.07.57-1.38.9-.57 1.38-.57c.49 0 1.07.26 1.38.57s.57.9.57 1.38c0 .49-.26 1.07-.57 1.38q-.25.25-.63.4v1.67H16a5 5 0 0 1 3.36 1.4 5 5 0 0 1 1.39 3.35V16a5 5 0 0 1-1.4 3.36A5 5 0 0 1 16 20.75H8a5 5 0 0 1-3.36-1.4A5 5 0 0 1 3.25 16v-4.5a5 5 0 0 1 1.4-3.36A5 5 0 0 1 8 6.75zm-6 5c.41 0 .75.34.75.75V15a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75zm20 0c.41 0 .75.34.75.75V15a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.4 11.3c.08.66.22 1.02.5 1.3s.64.42 1.3.5a.4.4 0 0 1 0 .8c-.66.08-1.02.22-1.3.5s-.42.64-.5 1.3a.4.4 0 0 1-.8 0c-.08-.66-.22-1.02-.5-1.3s-.64-.42-1.3-.5a.4.4 0 0 1 0-.8c.66-.08 1.02-.22 1.3-.5.28-.27.42-.64.5-1.3a.4.4 0 0 1 .8 0zm6 0c.08.66.22 1.02.5 1.3s.64.42 1.3.5a.4.4 0 0 1 0 .8c-.66.08-1.02.22-1.3.5s-.42.64-.5 1.3a.4.4 0 0 1-.8 0c-.08-.66-.22-1.02-.5-1.3s-.64-.42-1.3-.5a.4.4 0 0 1 0-.8c.66-.08 1.02-.22 1.3-.5.28-.27.42-.64.5-1.3a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M8 6.75h3.25V5.08q-.38-.15-.63-.4c-.31-.31-.57-.9-.57-1.38s.26-1.07.57-1.38.9-.57 1.38-.57c.49 0 1.07.26 1.38.57s.57.9.57 1.38c0 .49-.26 1.07-.57 1.38q-.25.25-.63.4v1.67H16a5 5 0 0 1 3.36 1.4 5 5 0 0 1 1.39 3.35V16a5 5 0 0 1-1.4 3.36A5 5 0 0 1 16 20.75H8a5 5 0 0 1-3.36-1.4A5 5 0 0 1 3.25 16v-4.5a5 5 0 0 1 1.4-3.36A5 5 0 0 1 8 6.75zm-6 5c.41 0 .75.34.75.75V15a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75zm20 0c.41 0 .75.34.75.75V15a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75zm-13-.8a.4.4 0 0 0-.4.35c-.08.66-.22 1.02-.5 1.3s-.64.42-1.3.5a.4.4 0 0 0 0 .8c.66.08 1.02.22 1.3.5s.42.64.5 1.3a.4.4 0 0 0 .8 0c.08-.66.22-1.02.5-1.3s.64-.42 1.3-.5a.4.4 0 0 0 0-.8c-.66-.08-1.02-.22-1.3-.5-.28-.27-.42-.64-.5-1.3a.4.4 0 0 0-.4-.35zm6 0a.4.4 0 0 0-.4.35c-.08.66-.22 1.02-.5 1.3s-.64.42-1.3.5a.4.4 0 0 0 0 .8c.66.08 1.02.22 1.3.5s.42.64.5 1.3a.4.4 0 0 0 .8 0c.08-.66.22-1.02.5-1.3s.64-.42 1.3-.5a.4.4 0 0 0 0-.8c-.66-.08-1.02-.22-1.3-.5-.28-.27-.42-.64-.5-1.3a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiRobot;
