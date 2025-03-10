import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import RegularButton from "../Buttons/RegularButton";
import {Ionicons} from "@expo/vector-icons";
import { colors } from "../colors";

const ButtonSectionBackground =styled.View`
    width: 100%;
    align-items:center;

`;

const ButtonSection: FunctionComponent = () => {
    return(
        <ButtonSectionBackground>
            <RegularButton btnStyles={{width: "50%"}} onPress={() => {}}>
                Cancel<Ionicons
                    size={17} name="card" color={colors.white}
                />
            </RegularButton>
        </ButtonSectionBackground>
    )
}

export default ButtonSection; 