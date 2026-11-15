import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiGenerative = forwardRef<SVGSVGElement, IconProps>(function IconAiGenerative(
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
            d="M9.36 21H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-4.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.8c.38 2.77 1.43 3.82 4.2 4.2-2.77.38-3.82 1.43-4.2 4.2-.38-2.77-1.43-3.82-4.2-4.2 2.77-.38 3.82-1.43 4.2-4.2Z"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.8c.38 2.77 1.43 3.82 4.2 4.2-2.77.38-3.82 1.43-4.2 4.2-.38-2.77-1.43-3.82-4.2-4.2 2.77-.38 3.82-1.43 4.2-4.2Z"
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
            d="M8 2.25h8c1.53.03 3.07.69 4.07 1.68 1 1 1.65 2.54 1.68 4.07v8a6 6 0 0 1-1.68 4.07c-1 1-2.54 1.65-4.07 1.68H8a6 6 0 0 1-4.07-1.68c-1-1-1.65-2.54-1.68-4.07V8a6 6 0 0 1 1.68-4.07c1-1 2.54-1.65 4.07-1.68z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 7.4c.19 1.45.53 2.36 1.19 3.01.65.66 1.56 1 3.01 1.2a.4.4 0 0 1 0 .79c-1.46.19-2.36.53-3.02 1.19-.65.65-.99 1.56-1.18 3.01a.4.4 0 0 1-.8 0c-.19-1.46-.53-2.36-1.19-3.02-.65-.65-1.56-.99-3.01-1.18a.4.4 0 0 1 0-.8c1.45-.19 2.36-.53 3.01-1.19.66-.65 1-1.56 1.2-3.01a.4.4 0 0 1 .79 0z"
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
            d="M8 2.25h8c1.53.03 3.07.69 4.07 1.68 1 1 1.65 2.54 1.68 4.07v8a6 6 0 0 1-1.68 4.07c-1 1-2.54 1.65-4.07 1.68H8a6 6 0 0 1-4.07-1.68c-1-1-1.65-2.54-1.68-4.07V8a6 6 0 0 1 1.68-4.07c1-1 2.54-1.65 4.07-1.68zm4 4.8a.4.4 0 0 0-.4.35c-.19 1.45-.53 2.36-1.19 3.01-.65.66-1.56 1-3.01 1.2a.4.4 0 0 0 0 .79c1.45.19 2.36.53 3.01 1.19.66.65 1 1.56 1.2 3.01a.4.4 0 0 0 .79 0c.19-1.46.53-2.36 1.19-3.02.65-.65 1.56-.99 3.01-1.18a.4.4 0 0 0 0-.8c-1.46-.19-2.36-.53-3.02-1.19-.65-.65-.99-1.56-1.18-3.01a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiGenerative;
