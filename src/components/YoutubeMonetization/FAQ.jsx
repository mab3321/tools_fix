import React from 'react';
import Accordin from "./Accordin";

const FAQ = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Frequently
                        Asked Question</h1>
                </div>
                <div className="mx-0 xl:mx-24 lg:mx-24">
                   <Accordin
                       boxBorder="rounded-t-lg "
                       buttonBorder="rounded-t-[15px]"
                       question="How can I check my YouTube monetization status ?"
                       answer={["Sign in to your YouTube account.",
                       "Access the YouTube Studio for your channel.",
                       "Click on the Monetization tab in the left-hand menu.",
                       "If your channel is eligible for monetization, you will see the monetization option. If not, you will see the criteria you need to fulfill in order to monetize your videos."]}
                   />
                    <Accordin
                       question="What does YouTube consider for monetization ?"
                       ans="YouTube checks for the following criteria for monetization:"
                       answer={["Accumulated 4000 public watch hours within the last 365 days.",
                       "Residing in a country/region where the YouTube Partner Program is available.",
                       "No active Community Guidelines strikes on your channel.",
                       "A linked AdSense account.",
                       "The presence of copied content and copyright claims, which can impact YouTube's decision in some cases."]}
                    />
                   <Accordin
                       question="How long does it take to monetize on YouTube ?"
                       ans="It usually takes about one month or more for YouTube to review applications and make a decision regarding monetization."
                   />
                    <Accordin
                       question="How to apply for monetization on YouTube ?"
                       answer={["Sign in to your YouTube account.",
                       "Go to the YouTube Studio for your channel.",
                       "Select the Monetization tab from the left menu.",
                       ". If your channel meets the requirements of 4000 public watch hours and 1000 subscribers in the last 365 days, you can create an AdSense account and apply for the monetization program."]}
                   />
                    <Accordin
                       question="What are the rules to monetize on YouTube ?"
                       ans="To monetize your YouTube channel:"
                       answer={["Sign in to your YouTube account.",
                       "Go to the YouTube Studio for your channel",
                       "If your channel has achieved 4000 public watch hours and 1000 subscribers in the last 365 days, you can create an AdSense account and apply for the program.",
                       "Once you apply, your account will be reviewed, and you will receive a notification regarding acceptance or rejection. If accepted, you can start monetizing your account and continue earning revenue."]}
                   />
                    <Accordin
                        boxBorder="rounded-b-lg "
                        buttonBorder="rounded-b-[15px]"
                       question="How many times can you apply for YouTube monetization ?"
                       ans="If your application for monetization is rejected, you can apply again after 30 days. During this time, it's important to make improvements to your channel before reapplying."
                   />
                </div>
            </div>

        </section>
    );
};

export default FAQ;
