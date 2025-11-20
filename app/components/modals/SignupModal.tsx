'use client';

import Modal from "./Modal";
import { useState } from "react";
import useSignupnModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CutomButton";

const SignupModal = () => {
    const signupModal = useSignupnModal()

    const content = (
        <>
            <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in </h2>
            <form action="">
                <div className="space-y-4">
                    <input type="email" placeholder="Your Email address" className="w-full h-[54px] px-4 border-gray-100 rounded-xl" />
                    <input type="password" placeholder="Your Password" className="w-full h-[54px] px-4 border-gray-100 rounded-xl" />
                    <input type="password" placeholder="Repeat Your Password" className="w-full h-[54px] px-4 border-gray-100 rounded-xl" />

                    <div className="p-5 bg-[#ff385c] text-white rounded-xl opacity-80">
                        The error message
                    </div>
                    <CustomButton
                     label="Submit"
                     onClick={() => console.log('working')}
                    />
                </div>
           
            </form>
        </>
    )
    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default SignupModal;