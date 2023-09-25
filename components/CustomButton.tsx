"use client";

import Image from "next/image";
import {CustomButtonProps} from "@/types";

// @ts-ignore
const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }): CustomButtonProps => {
    // @ts-ignore
    return (
        <button
         disabled={false}
         type={btnType || "button"}
         className={`custom-btn ${containerStyles}`}
         onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>

            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image src={rightIcon} alt="right icon" fill className="object-contain" />
                </div>
            )}
        </button>
    )
}

export default CustomButton;
