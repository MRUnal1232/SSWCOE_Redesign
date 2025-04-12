interface NewsTickerProps {
  items: string[]
}

export default function NewsTicker({ items }: NewsTickerProps) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block ticker-animation">
        {items.map((item, index) => (
          <span key={index} className="inline-block px-4">
            {item} <span className="mx-2">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
