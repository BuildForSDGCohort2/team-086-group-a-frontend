import React from "react";
import Notification from "./Notification";
import Report from "./Report";
import styled from "styled-components";

export default class NotificationReportGroup extends React.Component {
  render() {
    return (
      <SectionStyle className="row mt-5">
        <Notification />
        <Report />
      </SectionStyle>
    );
  }
}

const SectionStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
`;



