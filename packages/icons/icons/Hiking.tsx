import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHiking = forwardRef<SVGSVGElement, IconProps>(function IconHiking(
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
          <circle
            cx={11.5}
            cy={4.5}
            r={2.5}
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            strokeLinecap="round"
            opacity={duotone ? "0.4" : "1"}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            d="M9 17.5 6 22"
          />
          <path
            fill="currentColor"
            d="m10.38 11.25.74.07zm-.17 1.62.75.07zm3.8-1.53-.49.57zm.07.06.48-.57zm3.84 0-.48-.57zm1.56-.32a.75.75 0 0 0-.96-1.16zm-5.25 8.98.75-.06zm-.58 2a.75.75 0 1 0 1.5-.13zm1.66-9.78-.25.7zm1.38 0 .25.7zm-4.6-2.04-.18.73zm.15.06L12 11zm1.24.62.43-.61zm-1.66 5.21.4-.63zm1.66 1.24-.58.47zm.4.65-.68.3zm-3.67-3.46-.72.22zm.26.55-.61.43zm.02-4.43.68.31zm.82-.58-.07-.74zm-1.68 1.07-.16 1.62 1.49.15.16-1.62zm3.9.74.07.07.96-1.15-.08-.07zm4.87.07 1.08-.9-.96-1.16-1.08.9zm-4.92 8.15.17 1.94 1.5-.14-.17-1.93zm.12-8.15c.56.46.98.82 1.46 1l.51-1.41a4 4 0 0 1-1-.74zm3.84-1.15c-.65.54-.84.68-1.01.74l.51 1.41c.48-.18.9-.54 1.46-1zm-2.38 2.15a2.8 2.8 0 0 0 1.88 0l-.51-1.41a1.3 1.3 0 0 1-.86 0zm-3.15-2.01-.03-.01-.13-.05a1 1 0 0 1-.3-.3.75.75 0 0 1 .39-1.07l-.22.13a.75.75 0 0 0-.12 1.02 1 1 0 0 0 .37.27l.13.05.49-1.42-.09-.03h.01l.08.05.15.11a.75.75 0 0 1-.23 1.2l-.04.03.03-.02q.03 0 .11-.06a.8.8 0 0 0 .34-.65.8.8 0 0 0-.44-.66l-.08-.03h-.03l-.02-.01zm2.57-.21c-.22-.19-.36-.3-.57-.45l-.86 1.23c.15.1.24.18.47.37zm-2.48.25c.3.1.8.35 1.05.53l.86-1.23a7 7 0 0 0-1.42-.72zm-.58 5.76c.94.59 1.26.8 1.48 1.07l1.16-.94c-.41-.52-1-.87-1.85-1.4zM14.98 20c-.1-1-.15-1.68-.42-2.29l-1.36.62a6 6 0 0 1 .28 1.8zm-2.08-2.16q.18.22.3.49l1.36-.62a4 4 0 0 0-.5-.8zM9.47 12.8c-.08.8-.16 1.42.02 2l1.43-.46c-.06-.2-.05-.45.04-1.39zm2.75 2.7c-.8-.49-1-.63-1.13-.81l-1.23.85c.34.5.88.81 1.56 1.24zm-2.73-.7q.12.39.37.75l1.23-.86a1 1 0 0 1-.17-.35zm1.63-3.47.03-.27.02-.06-1.37-.62c-.13.29-.15.56-.17.8zm1.15-1.8-.52-.13a2 2 0 0 0-.5-.04l.12 1.5.1.01.44.1zM11.17 11q0 .02.01 0l.18-.13q.04-.01.01-.01l-.13-1.5a2 2 0 0 0-.84.33c-.22.16-.46.4-.6.7z"
          />
          <path
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            d="M19 22V8"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            d="m8 10-1.67.56A1.9 1.9 0 0 0 5 12.4c0 .37.2.7.54.87L8 14.5"
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
            d="M14 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 7.25c.41 0 .75.34.75.75v14a.75.75 0 0 1-1.5 0v-9.9c-.48.4-.87.72-1.3.88q-.95.33-1.9 0a5 5 0 0 1-1.35-.92l-.1-.08-.08-.07c-.23-.19-.32-.27-.47-.37a5 5 0 0 0-1.18-.58h-.02l-.5-.1-.19.14v.05q-.02.06-.04.27l-.16 1.62c-.1.94-.1 1.19-.04 1.4q.06.18.17.34c.12.18.33.32 1.12.82l.11.07c.8.5 1.35.84 1.75 1.33q.3.38.5.81c.25.58.31 1.23.4 2.16V20l.18 1.93a.75.75 0 0 1-1.5.14l-.17-1.94a6 6 0 0 0-.28-1.8 2 2 0 0 0-.3-.49 6 6 0 0 0-1.48-1.07l-.11-.07a5 5 0 0 1-1.45-1.16 3 3 0 0 1-.37-.76 5 5 0 0 1-.02-1.99l.16-1.62v-.05c.03-.23.05-.48.17-.75.14-.3.38-.53.6-.68s.52-.3.84-.33q.29-.02.5.03l.52.12h.02l.02.01.03.01.08.03.02.01.05.02c.43.15 1.06.46 1.43.72.2.14.34.26.56.44l.01.01.08.07c.65.54.84.68 1.01.74q.43.15.86 0c.17-.06.36-.2 1-.74l.82-.68V8c0-.41.34-.75.75-.75m-7.17 2.3"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.71 9.76c.13.4-.08.82-.47.95l-1.67.56a1.2 1.2 0 0 0-.82 1.13q0 .13.12.2l2.47 1.23a.75.75 0 1 1-.68 1.34L5.2 13.94c-.58-.3-.95-.89-.95-1.54a2.7 2.7 0 0 1 1.84-2.55l1.67-.56c.4-.13.82.08.95.47"
              fill="currentColor"
            />
            <path
              d="M9.42 16.88c.34.23.43.7.2 1.04l-3 4.5a.75.75 0 1 1-1.24-.84l3-4.5a.75.75 0 0 1 1.04-.2"
              fill="currentColor"
            />
          </g>
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
            d="M14 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 7.25c.41 0 .75.34.75.75v14a.75.75 0 0 1-1.5 0v-9.9c-.48.4-.87.72-1.3.88q-.95.33-1.9 0a5 5 0 0 1-1.35-.92l-.1-.08-.08-.07c-.23-.19-.32-.27-.47-.37a5 5 0 0 0-1.18-.58h-.02l-.5-.1-.19.14v.05q-.02.06-.04.27l-.16 1.62c-.1.94-.1 1.19-.04 1.4q.06.18.17.34c.12.18.33.32 1.12.82l.11.07c.8.5 1.35.84 1.75 1.33q.3.38.5.81c.25.58.31 1.23.4 2.16V20l.18 1.93a.75.75 0 0 1-1.5.14l-.17-1.94a6 6 0 0 0-.28-1.8 2 2 0 0 0-.3-.49 6 6 0 0 0-1.48-1.07l-.11-.07a5 5 0 0 1-1.45-1.16 3 3 0 0 1-.37-.76 5 5 0 0 1-.02-1.99l.16-1.62v-.05c.03-.23.05-.48.17-.75.14-.3.38-.53.6-.68s.52-.3.84-.33q.29-.02.5.03l.52.12h.02l.02.01.03.01.08.03.02.01.05.02c.43.15 1.06.46 1.43.72.2.14.34.26.56.44l.01.01.08.07c.65.54.84.68 1.01.74q.43.15.86 0c.17-.06.36-.2 1-.74l.82-.68V8c0-.41.34-.75.75-.75M8.71 9.76c.13.4-.08.82-.47.95l-1.67.56a1.2 1.2 0 0 0-.82 1.13q0 .13.12.2l2.47 1.23a.75.75 0 1 1-.68 1.34L5.2 13.94c-.58-.3-.95-.89-.95-1.54a2.7 2.7 0 0 1 1.84-2.55l1.67-.56c.4-.13.82.08.95.47m.7 7.12c.35.23.44.7.21 1.04l-3 4.5a.75.75 0 1 1-1.24-.84l3-4.5a.75.75 0 0 1 1.04-.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHiking;
