import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPhone = forwardRef<SVGSVGElement, IconProps>(function IconPhone(
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
            d="m15.1 15.03.54.51v0zm.46-.48-.55-.52v0zm2.41-.34-.37.65h0zm1.91 1.1-.37.65zm.54 3.45.55.51h0zM19 20.26l-.54-.52zm-1.32.7.07.75zm-9.86-4.48.54-.52zM3.75 6.93a.75.75 0 1 0-1.5.08zM9.2 8.8l.54.51zm.29-.3.54.51zm.15-2.82.62-.43zM8.37 3.91l-.6.43v0zm-3.65-.82A.75.75 0 0 0 5.8 4.13zm6.34 9.97.55-.52zm-.4 6.75a.75.75 0 1 0 .8-1.27zm4.45.25a.75.75 0 0 0-.3 1.47zm.53-4.52.46-.48-1.09-1.03-.45.48zm1.96-.68 1.9 1.1.76-1.3-1.91-1.1zm2.28 3.38-1.42 1.5 1.09 1.03 1.42-1.5zM8.36 15.96c-3.88-4.08-4.53-7.52-4.6-9.03L2.25 7c.1 1.85.88 5.63 5.01 9.98zm1.37-6.64.3-.3-1.1-1.03-.28.3zm.52-4.06L8.99 3.48l-1.23.86 1.26 1.79zM9.19 8.81l-.54-.52q0 0 0 0t0 0l-.06.06-.07.1q-.08.13-.16.33-.17.4-.08 1.1c.13.88.71 2.08 2.24 3.7l1.09-1.04c-1.43-1.5-1.78-2.43-1.85-2.88a1 1 0 0 1 .01-.38l.01-.02-.03.04-.01.02zm1.33 4.76c1.52 1.6 2.67 2.24 3.55 2.38.45.07.81.01 1.1-.1a2 2 0 0 0 .45-.28l.01-.01v-.01h.01q0 0 0 0l-.54-.52-.54-.52q0 0 0 0t0 0v-.01l.05-.04q.01 0 0 0a1 1 0 0 1-.3 0c-.4-.06-1.27-.41-2.7-1.92zM8.99 3.47a2.75 2.75 0 0 0-4.27-.38L5.8 4.13c.52-.56 1.44-.51 1.95.21zm9.47 16.27q-.42.44-.86.48l.15 1.49a3 3 0 0 0 1.8-.94zM10.02 9.02a3 3 0 0 0 .23-3.76l-1.23.87c.42.6.36 1.39-.09 1.86zm9.49 6.94c.82.47.98 1.64.37 2.28l1.09 1.03a3 3 0 0 0-.71-4.6zm-3.41-.9c.39-.4.99-.5 1.5-.2l.75-1.3a2.7 2.7 0 0 0-3.34.47zm-4.64 3.48a16 16 0 0 1-3.1-2.58l-1.09 1.03a18 18 0 0 0 3.4 2.82zm6.14 1.68c-.54.05-1.4.06-2.49-.16l-.3 1.47c1.24.26 2.26.25 2.94.18z"
            fill="currentColor"
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
            d="m16.1 13.36.46-.45a2.04 2.04 0 0 1 2.41-.32l1.91 1.04c1.23.66 1.5 2.3.54 3.25L20 18.3c-.36.35-.8.62-1.32.67M4 5.75c-.03-.62.26-1.18.7-1.61l1.56-1.57a2.08 2.08 0 0 1 3.11.29l1.26 1.68c.62.83.55 1.95-.15 2.66l-.29.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.68 18.97c-1.63.15-5.62-.02-9.86-4.24-4-3.99-4.73-7.4-4.82-8.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.1 13.36s-1.08 1.08-4.04-1.86-1.87-4.02-1.87-4.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="m16.1 13.36.46-.45a2.04 2.04 0 0 1 2.41-.32l1.91 1.04c1.23.66 1.5 2.3.54 3.25L20 18.3c-.36.35-.8.62-1.32.67a11 11 0 0 1-6.54-1.65zm-5.9-5.88.28-.28c.7-.7.77-1.83.15-2.66L9.37 2.86a2.1 2.1 0 0 0-3.1-.29L4.68 4.14c-.43.43-.72.99-.69 1.6a12 12 0 0 0 2.15 5.78z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.06 11.5c-2.94-2.93-1.88-4.01-1.87-4.02l-4.04 4.04q1 1.51 2.66 3.2a17 17 0 0 0 3.33 2.6l3.96-3.96s-1.08 1.08-4.04-1.86"
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
            d="m16.56 12.9-.46.46s-1.08 1.08-4.04-1.86-1.87-4.02-1.87-4.02l.29-.28c.7-.7.77-1.83.15-2.66L9.37 2.86a2.1 2.1 0 0 0-3.1-.29L4.68 4.14c-.43.43-.72.99-.69 1.6.1 1.6.81 5 4.82 8.99 4.24 4.22 8.23 4.39 9.86 4.24.51-.05.96-.32 1.32-.67l1.42-1.42c.96-.95.69-2.59-.54-3.25l-1.9-1.04a2 2 0 0 0-2.42.32"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPhone;
