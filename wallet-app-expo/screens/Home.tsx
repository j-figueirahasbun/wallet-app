import React, { FunctionComponent } from "react";

import { Container } from "../components/shared";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { StatusBar } from "expo-status-bar";

import CardSection from "../components/Cards.tsx/CardSection";
import logo1 from "./../assets/cards/mc.png";
import logo2 from "./../assets/cards/visa_white.png";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex:1;

`;

import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.jpg";
import portrait3 from "./../assets/portraits/3.jpg";

import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
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
            id: 3,
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
    
    const sendMoneyData = [
        {
            id: 1,
            amount: "2450.56",
            name: "Cody Andoh",
            background: colors.tertiary,
            img: portrait1,
        },
        {
            id: 2,
            amount: "4450.56",
            name: "Harleen Scot",
            background: colors.primary,
            img: portrait2,
        },
        {
            id: 3,
            amount: "6250.56",
            name: "James Corbin",
            background: colors.accent,
            img: portrait3,
        },
    ];

    return(
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection data={cardsData}/>
            <TransactionSection data={transactionData}/>
            <SendMoneySection data={sendMoneyData}/>
        </HomeContainer>
    )
}

export default Home;