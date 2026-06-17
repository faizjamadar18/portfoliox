import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://countapi.mileshilliard.com/api/v1/hit/faizx-vercel-app-visitors")
      .then((r) => r.json())
      .then((data) => setCount(Number(data.value)))
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;

  return <span>{count.toLocaleString()} visitors</span>;
}
