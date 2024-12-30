import styled from "styled-components";
import { genUUid } from "@/utils/gen";
import { useState, useMemo, useEffect } from "react";

const imgs = Array(10)
  .fill(0)
  .map((_, index) => {
    const key = genUUid();
    return {
      key,
      index,
      src: `https://picsum.photos/300/400?${key}`,
    };
  });

const n = imgs.length;

const PicItem = styled.img<{ $index: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 400px;
  margin-left: -150px;
  margin-top: -200px;
  backface-visibility: hidden;
  cursor: pointer;
  transform: rotateY(${(props) => props.$index * (360 / n)}deg)
    translate3d(0, 0, -500px);
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
  transition: transform 0.3s linear;
`;

function RingPics() {
  const [cur, setCur] = useState(0);
  const [curIndex, setCurIndex] = useState(0); // 当前视角的图片索引

  // 计算容器的旋转角度
  const rotation = useMemo(() => `rotateY(${cur * (360 / n)}deg)`, [cur]);

  useEffect(() => {
    return () => {
      setCur(0);
      setCurIndex(0);
    };
  }, []);
  
  return (
    <section style={{ perspective: 1000 }}>
      <Container style={{ transform: rotation }}>
        {imgs.map(({ key, src, index }) => (
          <PicItem
            $index={index}
            src={src}
            title={`${index}-${key}`}
            key={key}
            onClick={() => {
              const order = index - curIndex;

              //  order === 0 点击当前不处理
              if (order === 0) {
                return;
              }

              // 非两端元素 顺着点
              // (+order) = (<=) = (向左) = (-cur)
              if (Math.abs(order) === 1) {
                setCur(order > 0 ? cur - 1 : cur + 1);
              } else {
                // 0->9 || 9->0
                setCur(order > 0 ? cur + 1 : cur - 1);
              }
              setCurIndex(index);
            }} // 点击图片时更新 cur
          />
        ))}
      </Container>
    </section>
  );
}

export default RingPics;
