import React from "react";
import {OperationTextStyle} from "./style";

export interface Props {
    OperationText: string | undefined;
}

const OrderText: React.FC<Props> = ({OperationText}) => {
    return <OperationTextStyle>{OperationText}</OperationTextStyle>
};

export default OrderText;