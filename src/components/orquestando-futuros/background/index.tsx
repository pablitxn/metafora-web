import React, { FunctionComponent } from "react"
import { 
    BackgroundContainer, 
    Canvas,
    GradientRec,
    Photo
} from "./styles"

const Background: FunctionComponent = () => {
    return (
        <BackgroundContainer>
            <Canvas>
                <Photo src='/images/photo-1.png' alt='photo' />
                <GradientRec src='/images/rectangle-47.png' alt='logo' />
            </Canvas>
        </BackgroundContainer>
    )
}

export default Background
