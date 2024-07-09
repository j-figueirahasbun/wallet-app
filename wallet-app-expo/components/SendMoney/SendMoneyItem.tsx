import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components/native";
import { SendMoneyProps } from "./types";
import { ScreenWidth } from "../shared";
import { colors } from "../colors";
import Profile from "../Header/Profile";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";

const SendMoneyItemContainer = styled.TouchableHighlight`
    height: 130px;
    width: ${ScreenWidth * 0.27}px;
    padding: 10px;
    border-radius: 15px;
    justify-content: space-around;
    margin: 0px 10px 0px 10px;
`;

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
    return(
        <SendMoneyItemContainer
            underlayColor={colors.secondary}
            style={{backgroundColor:props.background}}
            onPress={()=>{
                alert ("SendMoney!");
            }}
            >
            <>
            <Profile img={props.img} imgContainerStyle={{marginBottom: 10}}/>
            <SmallText
                textStyles={{
                    textAlign:"left",
                    color: colors.white,
                    fontSize: 12,
                }}>
                {props.name}
            </SmallText>
            <RegularText
                textStyles={{
                    color:colors.white,
                    textAlign: "left",
                    fontSize: 13,
                }}>
                {props.amount}
            </RegularText>
            </>    

        </SendMoneyItemContainer>
    );
}

export default SendMoneyItem;