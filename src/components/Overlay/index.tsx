import { Close, OverlayStyled } from "./overlay.styled";
import { Chart } from "../Charts";
import { XCircle } from "@phosphor-icons/react";


interface OverlayType {
  show: boolean
  handleSetShow: () => void
  data: object[] | any | undefined
}

function ObjToArrayOfNumbers(obj:object) {
 if(obj) {
  let values = Object.values(obj)
  let numbers = values.map(value => +value)
  return numbers
 }else {
    return [0, 0, 0, 0, 0, 0]
 }
}

export function Overlay({show, handleSetShow, data}:OverlayType) {

  const status = ObjToArrayOfNumbers( data ? data[0]?.powerstats : {})

  return (
    <OverlayStyled show={show}>
      <div className="grid">
        <div className="image">
          <img src={data ? data[0]?.image.url : ''}/>
        </div>
        <div className="info">
          <h1>{data ? data[0]?.name : ''}</h1>
          <span><strong>Name:</strong> {data ? data[0]?.biography?.['full-name'] : ''}</span>
          <span><strong>Place of birth: </strong>{data ? data[0]?.biography?.['place-of-birth'] : ''}</span>
          <span><strong>first-appearance: </strong> {data ? data[0]?.biography?.['first-appearance'] : ''}</span>
          <span><strong>Publisher:</strong> {data ? data[0]?.biography.publisher : ''}</span>
        </div>
        <div className="stats">
          <Chart  
            data={status}
            legends={
              ['🧠 intelligence',
               '💪 strength', 
               '⚡ speed', 
               '🛡️ durability',
               '👊 power',
               '🆚 combat']
            }
            barColor={'#2799d9'}
            barHeight={20}
          />
        </div>
      </div>
      <Close onClick={handleSetShow}>
        <XCircle className="icon" color={'#fff'} />
      </Close>
    </OverlayStyled>
  )
}