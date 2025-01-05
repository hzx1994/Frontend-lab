import { RandomColorDiv } from "@/components/basic/Div";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";

export default function UpdateClosureEveryRender() {
  const [count, setCount] = useState(0);
  const [_count, _setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      _setCount(_count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [_count]);

  return (
    <section>
      <h2>计时器中常遇到state不更新问题</h2>

      <Layout.Flex.Row>
        <div>
          <h3>计数器只变化一次</h3>
          <RandomColorDiv>{count}</RandomColorDiv>
        </div>
        <div>
          <h3>每次更新count，同时更新循环方法</h3>
          <RandomColorDiv>{_count}</RandomColorDiv>
        </div>
      </Layout.Flex.Row>
    </section>
  );
}
