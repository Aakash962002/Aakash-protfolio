import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return ( <
        Typewriter options = {
            {
                strings: [
                    "Jr. Backend Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }
        }
        />
    );
}

export default Type;