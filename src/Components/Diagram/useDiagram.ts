import { useState } from "react";

export default function useDiagram(
  payload: { color: string; quantity: number }[]
) {
  const [canvas, setCanvas] = useState<null | HTMLCanvasElement>(null);

  if (canvas) {
    const totalQuantity = payload.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
    const canvasContext = canvas?.getContext("2d"); //we didnt need optional chaining operator because we checked it upper

    // wright very similar but in my opinion some easy for understanding
    // const modifyArrayToRelativeValue = payload.map(({quantity, color}, index) => {
    //   const startCoordinate = payload
    //       .slice(0, index)
    //       .reduce((accum, item) => accum + item.quantity, 0)
    //
    //   return {
    //     color,
    //     relativeWidth: quantity / totalQuantity * canvas.width,
    //     relativeStartCoordinate: startCoordinate / totalQuantity * canvas.width
    //   }
    // })
    //
    // modifyArrayToRelativeValue.forEach(({relativeStartCoordinate, relativeWidth, color}) => {
    //   canvasContext.fillStyle = color;
    //     canvasContext.fillRect(
    //         relativeStartCoordinate,
    //     0,
    //       relativeWidth,
    //       canvas.height
    //     )
    // })


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
        ); // do u like optional operator? %)
      });
  }
  return { setCanvas };
}
