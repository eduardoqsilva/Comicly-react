import { Close, OverlayStyled } from "./overlay.styled";
import { Chart } from "../Charts";
import { XCircle } from "@phosphor-icons/react";


interface OverlayType {
  show: boolean
  handleSetShow: () => void
  data: object
}

export function Overlay({show, handleSetShow, data}:OverlayType) {
  return (
    <OverlayStyled show={show}>
      <div className="grid">
        <div className="image">
          <img src={"https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"}/>
        </div>
        <div className="info">
          <h1>Batman</h1>
          <span><strong>Name:</strong> Terry McGinnis</span>
          <span><strong>Place of birth:</strong> Gotham City, 25th Century</span>
          <span><strong>first-appearance:</strong> Batman Beyond #1</span>
          <span><strong>Publisher:</strong> DC Comics</span>
        </div>
        <div className="stats">
          <Chart  
            data={[81, 40 , 29, 55, 63, 30]}
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