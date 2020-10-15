import React from "react";
import RoundRainbow from "../../../Asset/rainbow_ring.png";
import styled from "styled-components";

export default class Report2 extends React.Component {
  render() {
    return (
      <Div>
        <Payment>
          <span>Payment Method</span>
          <Span>
            <i className="fas fa-sync"></i>
          </Span>
        </Payment>

        <div>
          <div>
            <Image src={RoundRainbow} alt="round ring" />
          </div>

          <DivFlex>
            <Method>
              <div>
                <i className="fas fa-university"></i>
              </div>
              <div>Bank</div>
              <BankVal>68%</BankVal>
            </Method>

            <Method>
              <div>
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <div>Cash</div>
              <CashVal>10%</CashVal>
            </Method>

            <Method>
              <div>
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div>Mobile</div>
              <MobileVal>22%</MobileVal>
            </Method>
          </DivFlex>
        </div>

        <Last>
          <span>
            Last 7 days <i className="fas fa-caret-right"></i>
          </span>
          <SpanBottom>
            List <i className="fas fa-caret-right"></i>
          </SpanBottom>
        </Last>
      </Div>
    );
  }
}

const Image = styled.img`
  width: 100%;
`;

const Div = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 0;
  margin-top: 60px;
`;

const Payment = styled.div`
  border-bottom: 2px solid #ccc;
  line-height: 80px;
  text-align: left;
  font-size: 2rem;
  padding: 20px;
  margin: 0;
`;

const Last = styled.div`
  border-top: 2px solid #ccc;
  line-height: 50px;
  text-align: left;
  font-size: 1rem;
  padding: 20px;
  margin: 0;
`;

const Span = styled.span`
  float: right;
  font-size: 2rem;
`;

const SpanBottom = styled.span`
  float: right;
`;

const DivFlex = styled.div`
  margin: 30px 0 70px;
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Method = styled.div`
  margin: 20px;
  text-align: center;
`;

const BankVal = styled.div`
  color: #6202ee;
  font-weight: bolder;
`;

const CashVal = styled.div`
  color: #f7d154;
  font-weight: bolder;
`;

const MobileVal = styled.div`
  color: #ec4c47;
  font-weight: bolder;
`;


