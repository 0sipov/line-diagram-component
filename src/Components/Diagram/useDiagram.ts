import { useState } from "react";

interface modifyArrayToRelativeValueI {
  id: string;
  color: string;
  relativeWidth: number;
  relativeStartCoordinate: number;
  percent: number;
}

export default function useDiagram(
  payload: { id: string; color: string; quantity: number }[]
) {
  const [canvas, setCanvas] = useState<null | HTMLCanvasElement>(null);
  let diagramInfo: null | modifyArrayToRelativeValueI[] = null;

  const canvasContext = canvas?.getContext("2d");

  if (canvas && canvasContext && payload) {
    const totalQuantity = payload.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);

    const modifyArrayToRelativeValue: modifyArrayToRelativeValueI[] =
      payload.map((el, index) => {
        const { quantity } = el;
        const startCoordinate = payload
          .slice(0, index)
          .reduce((accum, item) => accum + item.quantity, 0);

        return {
          ...el,
          relativeWidth: totalQuantity
            ? (quantity / totalQuantity) * canvas.width
            : canvas.width,
          relativeStartCoordinate: totalQuantity
            ? (startCoordinate / totalQuantity) * canvas.width
            : 0,
          percent: totalQuantity
            ? Math.round((quantity / totalQuantity) * 100)
            : 100,
        };
      });
    diagramInfo = modifyArrayToRelativeValue;

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
  return { setCanvas, diagramInfo };
}
