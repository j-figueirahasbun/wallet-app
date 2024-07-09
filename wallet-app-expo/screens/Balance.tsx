import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import { StatusBar } from "expo-status-bar";
import BalanceCardSection from "../components/Balance/BalanceCardSection";

const BalanceContainer = styled(Container)`
    background-color:${colors.graylight};
    width: 100%;
    padding:25px;
    flex:1;
`;

import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import AmountSection from "../components/Balance/AmountSection";
import ButtonSection from "../components/Balance/ButtonSection";

type Props = StackScreenProps<RootStackParamList, "Balance">;

const Balance: FunctionComponent<Props> = ({route}) => {
    return (
        <BalanceContainer>
            <StatusBar 
                style="dark"
            />
            <AmountSection balance={route?.params?.balance}/>
            <BalanceCardSection {...route?.params}/>
            <ButtonSection/>
        </BalanceContainer>
    )
}

export default Balance;