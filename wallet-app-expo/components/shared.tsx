// The first thing we will do is import styled-components and create a container based on view. 
// We will give it a flex of 1 to fill the entire screen, align the items in it to the center 
// and then import the color so we can use the white one for the background

// Also we want to fetch the simensions from our current screen, so that we use it for some styling.
// For this, the Dimensions components from react native will help us. 
// For the width of our screen, we will call the get method on dimensions,
// whch will take an argument of screen and then we can target the width property
// For the height, same but with height. 

import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "./colors";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${colors.white};
`

export const ScreenWidth = Dimensions.get("screen").width;

export const ScreenHeight = Dimensions. get("screen").height;

//Now to be able to access these components outside, we have to ensure that we export all 
// of them , so add export at the start of them. 