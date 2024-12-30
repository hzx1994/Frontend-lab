import { useState } from "react";
import UiPages from "./ui";
import ReactPages from "./react";

export default function IndexPage() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, padding: 8 }}>
        {[...UiPages, ...ReactPages].map((item, index) => {
          return (
            <button onClick={() => setIndex(index)} key={item.name}>
              {item.name}
            </button>
          );
        })}
        <button onClick={() => setIndex(null)}>reset</button>
      </div>
      {index !== null && UiPages[index].component}
    </div>
  );
}
