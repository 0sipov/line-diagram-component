import { useState } from "react";

export default function useDiagram(
  payload: { color: string; quantity: number }[]
) {
  const [canvas, setCanvas] = useState<null | HTMLCanvasElement>(null);

  if (canvas) {
    const totalQuantity = payload.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
    const canvasContext = canvas?.getContext("2d");
    if (canvasContext && payload)
      payload.forEach(({ color, quantity }, idx, quantities) => {
        const startOfQuantity = quantities.reduce(
          (accumulator, currentValue, index) => {
            if (index < idx) {
              return accumulator + currentValue.quantity;
            }
            return accumulator;
          },
          0
        );

        const percentOfCanvasWidth = (quantity / totalQuantity) * canvas.width;
        const endOfPreviousQuantity =
          (startOfQuantity / totalQuantity) * canvas.width;

        canvasContext.fillStyle = color;
        canvasContext?.fillRect(
          endOfPreviousQuantity,
          0,
          percentOfCanvasWidth,
          canvas.height
        );
      });
  }
  return { setCanvas };
}
