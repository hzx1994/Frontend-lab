import Basic from "@/components/basic";
import Layout from "@/components/layout";
import { useEffect, useRef, useState } from "react";

export default function EventListenerClosure() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    const setCountByRef = () => {
      console.log("setCountByRef", countRef.current);
      countRef.current += 1;
    };

    const setCountByState = () => {
      console.log("setCountByState", count);
      setCount(count + 1);
    };
    document
      .getElementById("myDiv1")
      ?.addEventListener("click", setCountByState);
    document.getElementById("myDiv2")?.addEventListener("click", setCountByRef);

    return () => {
      console.log("remove");
      document
        .getElementById("myDiv1")
        ?.removeEventListener("click", setCountByState);
      document
        .getElementById("myDiv2")
        ?.removeEventListener("click", setCountByRef);
    };
  }, []);

  return (
    <section>
      <h2>
        eventListener中注册时间只在初始化时执行一次，由于闭包所以每次获取到的都是初始state
      </h2>
      <Layout.Flex.Row>
        <Basic.Div.RandomColorDiv id="myDiv1">
          点击，state永远是0
        </Basic.Div.RandomColorDiv>
        <Basic.Div.RandomColorDiv id="myDiv2">
          点击查看console，ref获取到的是最新值
        </Basic.Div.RandomColorDiv>
      </Layout.Flex.Row>
    </section>
  );
}
