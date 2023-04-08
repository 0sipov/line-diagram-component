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
  //it not necessary, but i checked it when try use undefined for quantity and won't delete^^
    //so I decide try change all quantity value ti number in calculating. We can before start  calculate  mapping array and change all quantity to number
    //i think it will better because we will change quantity to number in one place
    //it will your home work :)
    //otherwise we cant simply use input type text and didnt thinking about changing type of quantity^ but we lose it very pretty default arrow ^(
  const filteredPayload = payload.filter(item => item.quantity)

  if (canvas && canvasContext &&  filteredPayload) {
    const totalQuantity =  filteredPayload.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.quantity);
    }, 0);

    const modifyArrayToRelativeValue: modifyArrayToRelativeValueI[] = filteredPayload.map((el, index) => {
        let { quantity } = el;
        quantity = Number(quantity)
        const startCoordinate =  filteredPayload
          .slice(0, index)
          .reduce((accum, item) => accum + Number(item.quantity), 0);

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
            : 0,
        };
      });
    diagramInfo = modifyArrayToRelativeValue;

      console.log('hih',modifyArrayToRelativeValue)
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
