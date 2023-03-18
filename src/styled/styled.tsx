import styled from "styled-components";

const ButtonDefault = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
`

const WrapperDefault = styled.section`
  position: absolute;

  background: #FFFFFF;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

export const Input = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
  
  width: 232px;
  height: 52px;
  left: 80px;
  top: 110px;

  background: #F3F4F6;
  border-radius: 6px;
`
export const InputWrapper = styled(WrapperDefault)`
  width: 240px;
  height: 60px;
  left: 76px;
  top: 106px;
`
export const CommonWrapper = styled.section`
  position: relative;
  width: 695px;
  height: 640px;
  
  background: #FFFFFF;
`
export const ExpressionWrapper = styled(WrapperDefault)`
  width: 246px;
  height: 56px;
  left: 76px;
  top: 178px;
`
export const ExpressionContainer = styled.section`
  width: 232px;
  height: 48px;
  left: 80px;
  top: 182px;
  display: flex;
  justify-content: space-between;
`
export const ExpressionButton = styled(ButtonDefault)`
  padding: 24px 19px 25px;
  margin: 2px;
  gap: 10px;
  
  width: 46px;
  height: 48px;
  left: 200px;
  top: 182px;

  background: #FFFFFF;
  border: 1px solid #E2E3E5;
`
export const ButtonsWrapper = styled(WrapperDefault)`
  width: 245px;
  height: 224px;
  left: 76px;
  top: 246px;
`
export const ButtonsContainer = styled.section`
  width: 232px;
  height: 216px;
  left: 82px;
  top: 250px;
  padding: 2px 2mm 0px;
  display: flex;
  flex-wrap: wrap;
`
export const Button = styled(ButtonDefault)`
  padding: 24px 30px 25px;
  margin: 2px;

  width: ${props => props.theme.width} ;
  height: 48px;
  
  background: #FFFFFF;
  border: 1px solid #E2E3E5;
`
export const EqualWrapper = styled((WrapperDefault))`
  width: 245px;
  height: 72px;
  left: 76px;
  top: 482px;
`
export const EqualButton = styled(ButtonDefault)`
  padding: 24px 30px 25px;
  gap: 10px;
  margin: 5px;
  
  width: 232px;
  height: 64px;
  left: 80px;
  top: 486px;
  
  background: #5D5FEF;
`
export const ChangeModeWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px;

  position: absolute;
  width: 243px;
  height: 38px;
  left: 372px;
  top: 38px;

  background: #F3F4F6;
  border-radius: 6px;
`
export const RuntimeButton = styled(ButtonDefault)`
  padding: 8px 12px;
  gap: 10px;
  
  width: 108px;
  height: 36px;
  
  flex: none;
  order: 0;
  flex-grow: 0;
`
export const ConstructorButton = styled(ButtonDefault)`
  padding: 8px 12px;
  gap: 10px;

  width: 133px;
  height: 36px;

  background: #FFFFFF;
  border: 1px solid #E2E3E5;
  
  flex: none;
  order: 1;
  flex-grow: 0;
`
export const CanvasWrapper = styled.section`
  box-sizing: border-box;
  
  position: absolute;
  width: 243px;
  height: 448px;
  left: 372px;
  top: 106px;

  border: 2px dashed #C4C4C4;
  border-radius: 6px;
`
export const InstructionContainer = styled.section`
  position: absolute;
  width: 127px;
  height: 84px;
  left: calc(50% - 127px/2);
  top: calc(50% - 84px/2);
`
export const InstructionLabel = styled.section`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 53px;
  top: 1px;
`
export const TitleUp = styled.section`
  /* Перетащите сюда */
  position: absolute;
  width: 127px;
  height: 17px;
  left: 0px;
  top: 33px;

  //font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  /* Iris/100 */
  color: #5D5FEF;
`
export const TitleDown = styled.section`
  /* любой элемент из левой панели */
  position: absolute;
  width: 106px;
  height: 30px;
  left: 10px;
  top: 54px;

  //font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;

  color: #6B7280;
`
