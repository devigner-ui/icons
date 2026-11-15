import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiWriting = forwardRef<SVGSVGElement, IconProps>(function IconAiWriting(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  /* Outline and TwoTone share a drawing, split by `duotone`; Bulk and Bold
     each have their own, as in every icon (scripts/artwork-check.mjs). */
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

  /* Bold and Bulk cut the body around the sparkle with the same rounded
     shape as AiClipboard, so the gap matches across the AI icons. */
  const cut = useId();

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
            d="M22 10.5V12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22h-1.22m-2.4-.04c-2.41-.09-3.89-.4-4.92-1.42C2 19.07 2 16.7 2 12V8.33M8.33 2h5.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m17.3 2.8-.65.66-5.96 5.96c-.4.4-.6.6-.78.83q-.3.4-.53.85c-.12.25-.2.52-.39 1.06l-.58 1.74-.37 1.12a.74.74 0 0 0 .94.94l1.12-.37 1.74-.58c.54-.18.8-.27 1.06-.4q.46-.2.85-.52c.22-.17.43-.37.83-.78l5.96-5.96.65-.65a2.75 2.75 0 0 0-3.89-3.9m-.65.66s.08 1.37 1.3 2.6a4.5 4.5 0 0 0 2.6 1.29M10.1 15.59 8.41 13.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M22 10.5V12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12V8.33M8.33 2h5.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m17.3 2.8-.65.66-5.96 5.96c-.4.4-.6.6-.78.83q-.3.4-.53.85c-.12.25-.2.52-.39 1.06l-.58 1.74-.37 1.12a.74.74 0 0 0 .94.94l1.12-.37 1.74-.58c.54-.18.8-.27 1.06-.4q.46-.2.85-.52c.22-.17.43-.37.83-.78l5.96-5.96.65-.65a2.75 2.75 0 0 0-3.89-3.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.65 3.46s.08 1.37 1.3 2.6a4.5 4.5 0 0 0 2.6 1.29M10.1 15.59 8.41 13.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M21.2 2.8a2.75 2.75 0 0 1 0 3.9l-.5.5-.53-.16A5.2 5.2 0 0 1 16.8 3.3l.5-.5a2.75 2.75 0 0 1 3.88 0"
            fill="currentColor"
          />
          <path
            d="M14.58 13.31c-.4.4-.6.6-.83.78q-.4.3-.85.53c-.25.12-.52.2-1.06.39l-2.86.95a.74.74 0 0 1-.94-.94l.95-2.86c.18-.54.27-.8.4-1.06q.2-.46.52-.85c.17-.22.37-.43.78-.83L15.6 4.5a6.7 6.7 0 0 0 3.9 3.9z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity="0.4"
            d="M20.54 20.54C22 19.07 22 16.7 22 12q.01-2.31-.05-3.93l-6.36 6.36c-.36.35-.62.61-.92.85a6 6 0 0 1-2.29 1.13l-2.93.98a2.24 2.24 0 0 1-2.83-2.84l.97-2.93c.16-.47.28-.83.44-1.17a6 6 0 0 1 1.54-2.04l6.36-6.36Q14.31 2 12 2C7.3 2 4.93 2 3.46 3.46S2 7.3 2 12c0 4.71 0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M21.2 2.8a2.75 2.75 0 0 1 0 3.9l-.5.5-.53-.16A5.2 5.2 0 0 1 16.8 3.3l.5-.5a2.75 2.75 0 0 1 3.88 0"
            fill="currentColor"
          />
          <path
            d="M14.58 13.31c-.4.4-.6.6-.83.78q-.4.3-.85.53c-.25.12-.52.2-1.06.39l-2.86.95a.74.74 0 0 1-.94-.94l.95-2.86c.18-.54.27-.8.4-1.06q.2-.46.52-.85c.17-.22.37-.43.78-.83L15.6 4.5a6.7 6.7 0 0 0 3.9 3.9z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M20.54 20.54C22 19.07 22 16.7 22 12q.01-2.31-.05-3.93l-6.36 6.36c-.36.35-.62.61-.92.85a6 6 0 0 1-2.29 1.13l-2.93.98a2.24 2.24 0 0 1-2.83-2.84l.97-2.93c.16-.47.28-.83.44-1.17a6 6 0 0 1 1.54-2.04l6.36-6.36Q14.31 2 12 2C7.3 2 4.93 2 3.46 3.46S2 7.3 2 12c0 4.71 0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiWriting;
