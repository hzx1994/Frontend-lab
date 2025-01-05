import { useState } from "react";
import UiPages from "./ui";
import ReactPages from "./react";

export default function IndexPage() {
  const [index, setIndex] = useState<number | null>(null);
  const components = [...UiPages, ...ReactPages];

  return (
    <div>
      <div style={{ display: "flex", gap: 8, padding: 8 }}>
        {components.map((item, index) => {
          return (
            <button onClick={() => setIndex(index)} key={item.name}>
              {item.name}
            </button>
          );
        })}
        <button onClick={() => setIndex(null)}>reset</button>
      </div>
      {index !== null && components[index].component}
    </div>
  );
}
