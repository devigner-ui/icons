import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiRobotFace = forwardRef<SVGSVGElement, IconProps>(function IconAiRobotFace(
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

  /* In TwoTone the head is full and the ears and antenna are the dimmed
     shapes, clipped at the head's outer edge so their caps do not sit over
     it, as in AiHeadset. Bulk dims the whole outline and keeps the face full. */
  const clip = useId();
  const h = Number(strokeWidth) / 2;
  const outside = (
    <defs>
      <clipPath id={clip}>
        <rect x="0" y="0" width={5 - h} height="24" />
        <rect x={19 + h} y="0" width={5 - h} height="24" />
        <rect x="0" y="0" width="24" height={6 - h} />
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
            d="M9.9 19H8.5A3.5 3.5 0 0 1 5 15.5v-6A3.5 3.5 0 0 1 8.5 6h7A3.5 3.5 0 0 1 19 9.5v6a3.5 3.5 0 0 1-3.5 3.5h-3.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 10.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm17 0h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM12 6V3m-4.1 8a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Zm6 0a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Zm-3.6 3.5h3.4c.44 0 .8.36.8.8v.6a.8.8 0 0 1-.8.8h-3.4a.8.8 0 0 1-.8-.8v-.6c0-.44.36-.8.8-.8Z"
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
            d="M8.5 6h7A3.5 3.5 0 0 1 19 9.5v6a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 15.5v-6A3.5 3.5 0 0 1 8.5 6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="M3 10.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm17 0h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM12 6V3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.9 11a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Zm6 0a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Zm-3.6 3.5h3.4c.44 0 .8.36.8.8v.6a.8.8 0 0 1-.8.8h-3.4a.8.8 0 0 1-.8-.8v-.6c0-.44.36-.8.8-.8Z"
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
            d="M8.5 5.25h2.75V3a.75.75 0 0 1 1.5 0v2.25h2.75a4.6 4.6 0 0 1 3 1.25 4.6 4.6 0 0 1 1.25 3v.29l.25-.04h1c.43.03.96.24 1.24.51.27.28.48.81.51 1.24v2a2.2 2.2 0 0 1-.51 1.24 2.2 2.2 0 0 1-1.24.51h-1q-.12 0-.25-.04v.29a4.6 4.6 0 0 1-1.25 3 4.6 4.6 0 0 1-3 1.25h-7a4.6 4.6 0 0 1-3-1.25 4.6 4.6 0 0 1-1.25-3v-.29l-.25.04H3a2 2 0 0 1-1.24-.51 2.2 2.2 0 0 1-.51-1.24v-2c.03-.43.24-.96.51-1.24A2.2 2.2 0 0 1 3 9.75h1q.13 0 .25.04V9.5a4.6 4.6 0 0 1 1.25-3 4.6 4.6 0 0 1 3-1.25z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9 9.15c.46 0 1.01.25 1.3.54s.55.85.55 1.31-.25 1.01-.54 1.3-.85.55-1.31.55-1.01-.25-1.3-.54-.55-.85-.55-1.31.25-1.01.54-1.3.85-.55 1.31-.55zm6 0c.46 0 1.01.25 1.3.54s.55.85.55 1.31-.25 1.01-.54 1.3-.85.55-1.31.55-1.01-.25-1.3-.54-.55-.85-.55-1.31.25-1.01.54-1.3.85-.55 1.31-.55zm-4.7 4.6h3.4c.37.03.86.22 1.1.45s.42.73.45 1.1v.6c-.03.37-.21.86-.45 1.1s-.73.42-1.1.45h-3.4A2 2 0 0 1 9.2 17a2 2 0 0 1-.45-1.1v-.6c.03-.37.22-.86.45-1.1.24-.23.73-.42 1.1-.45z"
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
            d="M8.5 5.25h2.75V3a.75.75 0 0 1 1.5 0v2.25h2.75a4.6 4.6 0 0 1 3 1.25 4.6 4.6 0 0 1 1.25 3v.29l.25-.04h1c.43.03.96.24 1.24.51.27.28.48.81.51 1.24v2a2.2 2.2 0 0 1-.51 1.24 2.2 2.2 0 0 1-1.24.51h-1q-.12 0-.25-.04v.29a4.6 4.6 0 0 1-1.25 3 4.6 4.6 0 0 1-3 1.25h-7a4.6 4.6 0 0 1-3-1.25 4.6 4.6 0 0 1-1.25-3v-.29l-.25.04H3a2 2 0 0 1-1.24-.51 2.2 2.2 0 0 1-.51-1.24v-2c.03-.43.24-.96.51-1.24A2.2 2.2 0 0 1 3 9.75h1q.13 0 .25.04V9.5a4.6 4.6 0 0 1 1.25-3 4.6 4.6 0 0 1 3-1.25zm-.8 4.44c-.3.3-.55.85-.55 1.31s.25 1.01.54 1.3.85.55 1.31.55 1.01-.25 1.3-.54.55-.85.55-1.31-.25-1.01-.54-1.3-.85-.55-1.31-.55-1.01.25-1.3.54zm6 0c-.3.3-.55.85-.55 1.31s.25 1.01.54 1.3.85.55 1.31.55 1.01-.25 1.3-.54.55-.85.55-1.31-.25-1.01-.54-1.3-.85-.55-1.31-.55-1.01.25-1.3.54zM9.2 14.2c-.23.24-.42.73-.45 1.1v.6c.03.37.22.86.45 1.1s.73.42 1.1.45h3.4c.37-.03.86-.21 1.1-.45s.42-.73.45-1.1v-.6a2 2 0 0 0-.45-1.1 2 2 0 0 0-1.1-.45h-3.4c-.37.03-.86.22-1.1.45z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiRobotFace;
