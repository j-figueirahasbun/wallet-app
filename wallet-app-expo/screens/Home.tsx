import React, { FunctionComponent } from "react";

import { Container } from "../components/shared";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { StatusBar } from "expo-status-bar";

import CardSection from "../components/Cards.tsx/CardSection";
import logo1 from "./../assets/cards/mc.png";
import logo2 from "./../assets/cards/visa_white.png";
import TransactionSection from "../components/Transactions/TransactionSection";

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex:1;

`;

const Home: FunctionComponent = () => {
    const cardsData = [
        {
            id:1,
            accountNo: "32472938479",
            balance: 2348749.14,
            alias: "Work Debit",
            logo: logo1,
        },
        {
            id:2,
            accountNo: "2376482376",
            balance: 15000.14,
            alias: "Personal PrePaid",
            logo: logo2,
        },
        {
            id:3,
            accountNo: "92376487",
            balance: 300.14,
            alias: "School Prepaid",
            logo: logo1,
        },
    ]

    const transactionData = [
        {
            id: 1,
            amount: "-$86.00",
            date: "14 Sep 2021",
            title: "Taxi",
            subtitle: "Uber car",
            art: {
                background: colors.primary,
                icon: "car",
            },
        },
        {
            id: 2,
            amount: "-$286.00",
            date: "14 Sep 2021",
            title: "Shopping",
            subtitle: "SHEIN",
            art: {
                background: colors.tertiary,
                icon: "cart",
            },
        },
        {
            id: 1,
            amount: "-$586.00",
            date: "14 Aug 2021",
            title: "Travel",
            subtitle: "KLM",
            art: {
                background: colors.accent,
                icon: "airplane",
            },
        },
    ]
    
    return(
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection data={cardsData}/>
            <TransactionSection data={transactionData}/>
        </HomeContainer>
    )
}

export default Home;