import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
 return (
  <Svg width={32.2} height={15.588} viewBox="0 0 12.2 12.588" {...props}>
   <Path
    d="M12.2 14.441a5.8 5.8 0 01-6 6.147A6.295 6.295 0 016.2 8a5.914 5.914 0 014.158 1.647L8.67 11.294c-2.208-2.162-6.313-.538-6.313 3A3.915 3.915 0 006.2 18.269a3.367 3.367 0 003.52-2.713H6.2v-2.165h5.9a5.6 5.6 0 01.1 1.051z"
    transform="translate(0 -8)"
    fill="#007aff"
   />
  </Svg>
 );
}

export default SvgComponent;
