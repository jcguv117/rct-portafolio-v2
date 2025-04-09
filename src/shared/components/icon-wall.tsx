import { FC, ReactNode, useState } from "react"

interface IconItem {
  component: ReactNode
  altText: string
}

interface IconWallProps {
  items?: IconItem[]
  pauseOnHover?: boolean
  size?: string
  duration?: string
  textColor?: string
  bgColor?: string
  bgAccentColor?: string
  className?: string
}

const IconWall: FC<IconWallProps> = ({
  items = [],
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111",
}) => {
  const [isPaused, setIsPaused] = useState(false)

  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/14)]",
    "mx-auto",
    "max-w-full",
    "p-[20px_10px]",
  ]
    .filter(Boolean)
    .join(" ")

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ")

  const renderIcon = (item: IconItem, idx: number, prefix: string = "") => (
    <div
      key={`${prefix}${idx}`}
      className={[
        "bg-[var(--color-bg-accent)]",
        "rounded-md",
        "object-contain",
        "aspect-video",
        "w-[var(--size)]",
        "p-[calc(var(--size)/10)]",
        "flex items-center justify-center",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {item.component}
    </div>
  )

  return (
    <article
      className={wrapperClass}
      style={{
        ["--size" as any]: size,
        ["--duration" as any]: duration,
        ["--color-text" as any]: textColor,
        ["--color-bg" as any]: bgColor,
        ["--color-bg-accent" as any]: bgAccentColor,
        color: "var(--color-text)",
        backgroundColor: "transparent",
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => renderIcon(item, idx))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => renderIcon(item, idx, "dup1-"))}
        </div>
      </div>

      <div
        className={marqueeClass + " marquee--reverse"}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            "reverse-x",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => renderIcon(item, idx, "rev-"))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            "reverse-x",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => renderIcon(item, idx, "dup2-"))}
        </div>
      </div>
    </article>
  )
}

export default IconWall
