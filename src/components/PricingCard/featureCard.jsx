import { CircleCheckBig } from "lucide-react";
import React from "react";

const FeatureCard = ({feature}) => {
    return (
        <p className="flex"> 
         <CircleCheckBig></CircleCheckBig> {feature}
        </p>
    )
}
export default FeatureCard;