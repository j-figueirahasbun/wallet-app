import React, { FunctionComponent } from "react";

import { Container } from "../components/shared";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { StatusBar } from "expo-status-bar";

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex:1;

`;

const Home: FunctionComponent = () => {
    return(
        <HomeContainer>
            <StatusBar>
                
            </StatusBar>
        </HomeContainer>
    )
}

export default Home;