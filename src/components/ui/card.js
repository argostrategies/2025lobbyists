
export function Card({ children }) {
  return <div className="rounded-lg shadow-md border bg-white">{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={"p-4 " + className}>{children}</div>;
}
