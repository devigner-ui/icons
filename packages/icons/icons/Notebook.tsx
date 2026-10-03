import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotebook = forwardRef<SVGSVGElement, IconProps>(function IconNotebook(
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
            d="M12 5.85V21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m5 9 4 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m19 9-4 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m5 13 4 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m19 13-4 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m20.08 3.02.03.75zm-3.58.47-.22-.72v0zM13.67 4.8l-.37-.65h0zM3.98 3.07l-.04.75zM7 3.5l.2-.73v0zm3.28 1.39-.35.66zm3.35 15.19.35.66zM17 18.63l-.2-.72h0zm2.99-.4.04.74zm-9.62 1.84-.35.66h0zM7 18.63l.2-.72h0zm-2.99-.4-.04.74h0zm18.74-7.7a.75.75 0 0 0-1.5 0zM21.25 7a.75.75 0 0 0 1.5 0zm-20 3.57a.75.75 0 0 0 1.5 0zM2.75 14a.75.75 0 0 0-1.5 0zm17.3-11.73a16 16 0 0 0-3.77.5l.44 1.44c.94-.29 2.27-.4 3.39-.44zm-3.77.5c-.99.3-2.1.88-2.98 1.38l.75 1.3c.85-.49 1.84-1 2.67-1.24zM3.94 3.82c.96.06 2.06.18 2.87.4l.38-1.46a18 18 0 0 0-3.16-.43zm2.87.4c.96.25 2.14.8 3.12 1.32l.7-1.33c-1-.52-2.3-1.15-3.44-1.45zm7.17 16.51c1-.53 2.22-1.11 3.21-1.37l-.38-1.45c-1.17.3-2.53.96-3.54 1.5zm3.21-1.37c.8-.21 1.88-.33 2.84-.39l-.1-1.5c-.97.07-2.17.19-3.12.44zm-6.46.05a17 17 0 0 0-3.54-1.5l-.38 1.45c1 .26 2.22.84 3.21 1.37zm-3.54-1.5c-.95-.25-2.15-.37-3.13-.44l-.1 1.5c.97.06 2.05.18 2.85.39zm14.06-1.77c0 .69-.57 1.29-1.31 1.33l.1 1.5a2.87 2.87 0 0 0 2.71-2.83zm1.5-11.2a2.63 2.63 0 0 0-2.7-2.67l.06 1.5c.61-.02 1.14.48 1.14 1.16zm-21.5 11.2a2.87 2.87 0 0 0 2.72 2.83l.1-1.5a1.37 1.37 0 0 1-1.32-1.33zm12.02 3.27c-.79.42-1.75.42-2.54 0l-.71 1.32a4.2 4.2 0 0 0 3.96 0zm.03-15.26c-.82.48-1.84.5-2.67.06l-.7 1.33c1.3.68 2.86.64 4.12-.09zM2.75 5c0-.7.55-1.22 1.19-1.18l.09-1.5A2.64 2.64 0 0 0 1.25 5zm20 11.14v-5.6h-1.5v5.6zm0-9.14V4.93h-1.5V7zm-20 3.57V5h-1.5v5.57zm0 5.57V14h-1.5v2.14z"
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
            d="M19.65 15.54H4.35m15.3 0V8c0-1.89 0-2.83-.59-3.41C18.48 4 17.53 4 15.65 4h-7.3c-1.88 0-2.83 0-3.41.59-.59.58-.59 1.52-.59 3.41v7.54m15.3 0 1.74 1.8.09.09q.48.54.52 1.28v.42A2 2 0 0 1 19.84 21H3.87A2 2 0 0 1 2 19.13v-.42a2 2 0 0 1 .52-1.28l.09-.1 1.74-1.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 18.5h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.75 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
            fill="currentColor"
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
            d="M4.94 3.59c-.59.58-.59 1.52-.59 3.41v7h15.3V7c0-1.89 0-2.83-.59-3.41C18.48 3 17.53 3 15.65 3h-7.3c-1.88 0-2.83 0-3.41.59"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m21.4 16.34.08.09q.48.54.52 1.28v.42A2 2 0 0 1 19.84 20H3.87A2 2 0 0 1 2 18.13v-.42a2 2 0 0 1 .52-1.28l.09-.1L3.9 15h16.2zM8.74 18c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M12.75 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m21.4 16.34.08.09q.48.54.52 1.28v.42A2 2 0 0 1 19.84 20H3.87A2 2 0 0 1 2 18.13v-.42a2 2 0 0 1 .6-1.37L3.9 15h16.2zM8.74 18c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.35 7c0-1.89 0-2.83.59-3.41C5.52 3 6.47 3 8.35 3h7.3c1.88 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v7H4.35zM12 6.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0 1.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconNotebook;
