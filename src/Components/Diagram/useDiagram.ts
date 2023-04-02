import { useState } from "react";

export default function useDiagram(
  payload: { color: string; quantity: number }[]
) {
  const [canvas, setCanvas] = useState<null | HTMLCanvasElement>(null);

  const canvasContext = canvas?.getContext("2d");

  if (canvas && canvasContext && payload) {
    const totalQuantity = payload.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
    const modifyArrayToRelativeValue = payload.map(
      ({ quantity, color }, index) => {
        const startCoordinate = payload
          .slice(0, index)
          .reduce((accum, item) => accum + item.quantity, 0);

        return {
          color,
          relativeWidth: (quantity / totalQuantity) * canvas.width,
          relativeStartCoordinate:
            (startCoordinate / totalQuantity) * canvas.width,
        };
      }
    );

    modifyArrayToRelativeValue.forEach(
      ({ relativeStartCoordinate, relativeWidth, color }) => {
        canvasContext.fillStyle = color;
        canvasContext.fillRect(
          relativeStartCoordinate,
          0,
          relativeWidth,
          canvas.height
        );
      }
    );
  }

  return { setCanvas };
}
