"use client";

import Image from "next/image";
import {CustomButtonProps} from "@/types";

// @ts-ignore
const CustomButton = ({ title, containerStyles, handleClick, btnType }): CustomButtonProps => {
    // @ts-ignore
    return (
        <button
         disabled={false}
         type={btnType || "button"}
         className={`custom-btn ${containerStyles}`}
         onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton;
