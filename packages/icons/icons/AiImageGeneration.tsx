import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiImageGeneration = forwardRef<SVGSVGElement, IconProps>(function IconAiImageGeneration(
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
            d="M5.9 8a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 1 0-3.2 0Zm-2.4 9L8 12.5c.8-.8 2-.8 2.8 0l4.2 4 1.5-1.5c.8-.8 2-.8 2.8 0l1.7 1.7m-8.2-6.2V7.98a1.68 1.68 0 0 1 3.36 0v2.52M12.8 8.74h3.36m1.76-2.44v4.2"
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
            d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.9 8a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 1 0-3.2 0Zm-2.4 9L8 12.5c.8-.8 2-.8 2.8 0l4.2 4 1.5-1.5c.8-.8 2-.8 2.8 0l1.7 1.7m-8.2-6.2V7.98a1.68 1.68 0 0 1 3.36 0v2.52M12.8 8.74h3.36m1.76-2.44v4.2"
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
            d="M7.5 5.65c.6 0 1.28.3 1.66.69.39.38.69 1.07.69 1.66 0 .6-.3 1.28-.69 1.66-.38.39-1.07.69-1.66.69-.6 0-1.28-.3-1.66-.69A2.6 2.6 0 0 1 5.15 8c0-.6.3-1.28.69-1.66a2.6 2.6 0 0 1 1.66-.69M2.97 16.47l3.89-3.89c.75-.75 1.49-1.47 2.65-1.43 1.06.05 1.74.74 2.46 1.43L15 15.45l.58-.58c.3-.3.58-.6.94-.83q.36-.2.76-.31c1.87-.47 3.1 1.28 4.26 2.44l.09.1.1.1a6 6 0 0 1-.4 1.73l-.86-.87-1.34-1.35c-.47-.48-.99-.95-1.7-.63-.38.18-.67.56-.96.85l-.93.93a.8.8 0 0 1-.71.2l-.04-.01a1 1 0 0 1-.3-.18l-3.37-3.2c-.46-.45-.97-1.16-1.66-1.19-.74-.03-1.24.7-1.7 1.16l-3.72 3.72-.1.09-1.02 1.03a6 6 0 0 1-.55-1.58zm9.08-7.89c0-.68 0-1.32.39-1.91a2.45 2.45 0 0 1 4.25.3c.24.52.22 1.06.22 1.61v1.92a.75.75 0 0 1-1.5 0V9.49h-1.86v1a.75.75 0 0 1-1.5 0zm3.32-.86c-.23-.78-1.32-.9-1.7-.18a1 1 0 0 0-.12.45h1.87zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0V6.3c0-.41.34-.75.75-.75"
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
            d="M8 2.25h8c1.53.03 3.07.69 4.07 1.68 1 1 1.65 2.54 1.68 4.07v8l-.02.37-1.08-1.08c-.39-.39-.76-.84-1.22-1.15a2.7 2.7 0 0 0-2.66-.24c-.45.21-.78.55-1.13.9l-.65.65-2.94-2.8c-.71-.67-1.37-1.4-2.4-1.49-1.33-.12-2.14.76-2.99 1.61l-4.3 4.3a6 6 0 0 1-.1-1.07V8a6 6 0 0 1 1.68-4.07c1-1 2.53-1.65 4.07-1.68zm12.07 17.82c-1 1-2.54 1.65-4.07 1.68H8a6 6 0 0 1-4.07-1.68q-.6-.61-1.01-1.43l4.55-4.55.77-.76c.36-.36.71-.73 1.26-.67.67.06 1.15.74 1.6 1.16l3.54 3.34.14.06h.03a.8.8 0 0 0 .72-.2q.6-.57 1.17-1.16c.26-.26.5-.54.84-.65.7-.23 1.17.27 1.63.72l2.16 2.16q-.45 1.16-1.27 1.98zM5.84 6.34A2.6 2.6 0 0 0 5.15 8c0 .6.3 1.28.69 1.66.38.39 1.07.69 1.66.69.6 0 1.28-.3 1.66-.69.39-.38.69-1.07.69-1.66 0-.6-.3-1.28-.69-1.66a2.6 2.6 0 0 0-1.66-.69c-.6 0-1.28.3-1.66.69zm6.96 4.9c.41 0 .75-.33.75-.74V9.49h1.86v1a.75.75 0 0 0 1.5 0v-1.9c0-.55.02-1.1-.22-1.61a2.45 2.45 0 0 0-4.25-.3c-.39.6-.39 1.23-.39 1.91v1.92c0 .41.34.75.75.75zM15.42 8h-1.87q0-.25.11-.46c.4-.7 1.48-.6 1.71.19q.04.12.05.27zm1.75-1.69v4.2a.75.75 0 0 0 1.5 0V6.3a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiImageGeneration;
