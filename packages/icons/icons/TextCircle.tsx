import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconTextCircle(
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11.25 17a.75.75 0 0 0 1.5 0zm4-7.25a.75.75 0 0 0 1.5 0zm-8 0a.75.75 0 0 0 1.5 0zm8.46-2.42.55-.5zM9.5 16.25a.75.75 0 0 0 0 1.5zm5.5 1.5a.75.75 0 0 0 0-1.5zm-5-10h2v-1.5h-2zm2 0h2v-1.5h-2zm.75 9.25V7h-1.5v10zm2.5-7.78v.53h1.5v-.53zm-8 0v.53h1.5v-.53zM14 7.75a8 8 0 0 1 1.14.07h.01l1.11-1c-.3-.33-.68-.47-1.05-.52q-.52-.06-1.21-.05zm2.75 1.47q.01-.76-.04-1.3a2 2 0 0 0-.45-1.1l-1.11 1 .02.05.05.22c.03.25.03.59.03 1.13zM10 6.25q-.69-.01-1.2.05c-.38.05-.76.19-1.06.52l1.11 1h.01l.15-.04c.2-.03.5-.03.99-.03zM8.75 9.22c0-.54 0-.88.03-1.13l.05-.22.02-.04-1.11-1c-.3.32-.4.71-.45 1.08q-.05.54-.04 1.31zm.75 8.53H15v-1.5H9.5z"
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
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0"
              fill="currentColor"
            />
            <path
              d="M9.95 6.25q-.65-.01-1.16.05c-.37.05-.75.19-1.05.52s-.4.72-.45 1.1q-.05.52-.04 1.26v.57a.75.75 0 0 0 1.5 0v-.53c0-.54 0-.88.03-1.13l.05-.22.02-.04.01-.01.15-.04c.2-.03.5-.03.99-.03h1.25v8.5H9.5a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5h-2.25v-8.5H14a8 8 0 0 1 1.14.07h.01l.02.05.05.22c.03.25.03.59.03 1.13v.53a.75.75 0 0 0 1.5 0v-.57q.01-.74-.04-1.27a2 2 0 0 0-.45-1.09c-.3-.33-.68-.47-1.05-.52q-.5-.06-1.16-.05z"
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
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M9.95 6.25q-.65-.01-1.16.05c-.37.05-.75.19-1.05.52s-.4.72-.45 1.1q-.05.52-.04 1.26v.57a.75.75 0 0 0 1.5 0v-.53c0-.54 0-.88.03-1.13l.05-.22.02-.04.01-.01.15-.04c.2-.03.5-.03.99-.03h1.25v8.5H9.5a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5h-2.25v-8.5H14a8 8 0 0 1 1.14.07h.01l.02.05.05.22c.03.25.03.59.03 1.13v.53a.75.75 0 0 0 1.5 0v-.57q.01-.74-.04-1.27a2 2 0 0 0-.45-1.09c-.3-.33-.68-.47-1.05-.52q-.5-.06-1.16-.05z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextCircle;
