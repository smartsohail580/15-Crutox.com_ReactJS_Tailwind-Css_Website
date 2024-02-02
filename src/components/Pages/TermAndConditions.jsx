import React from 'react'

function TermAndConditions() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="py-5 text-center font-bold sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                        Terms & Conditions
                    </h1>
                </div>
                <div>
                    <hr className="py-5 w-40 border-[#178A9E]
                     sm:border-t-1 md:border-t-2 lg:border-t-3 xl:border-t-4 2xl:border-t-4" />
                </div>
                <div>
                    <h3 className="text-center text-[#178A9E] sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                        FREQUENTLY ASKED QUESTIONS
                    </h3>
                </div>
            </div>

            <div className="p-10   md:p-24">
                <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

               <p className="text-gray-400">
                    These Terms and Conditions of Use ("Terms") govern your access and use of the Crutox mobile mining app ("App") and the associated services offered therein. By accessing or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.
                </p>

                <h2 className="text-2xl font-bold py-4">Acceptance of Terms</h2>

               <p className="text-gray-400">
                    By using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms and any additional policies or guidelines that may be provided by Crutox from time to time.
                </p>

                <h2 className="text-2xl font-bold py-4">Eligibility</h2>

               <p className="text-gray-400">
                    You must be at least 18 years of age to use the App. By using the App, you represent and warrant that you are of legal age to form a binding contract with Crutox and meet all eligibility requirements.
                </p>

                <h2 className="text-2xl font-bold py-4">User Accounts</h2>

               <p className="text-gray-400">
                    To access certain features of the App, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.                </p>

                <h2 className="text-2xl font-bold py-4">Privacy</h2>

               <p className="text-gray-400"> Your use of the App is also governed by our Privacy Policy, which outlines how we collect, use, and disclose your personal information. By using the App, you consent to our collection and use of your personal data as outlined in the Privacy Policy.                </p>

                <h2 className="text-2xl font-bold py-4">Intellectual Property</h2>

               <p className="text-gray-400">The App, including all content, features, and functionality, is owned by Crutox and protected by intellectual property laws. You may not use the App or its content for any purpose without our express written consent.</p>


                <h2 className="text-2xl font-bold py-4">Prohibited Activities</h2>
               <p className="text-gray-400">You agree not to engage in any of the following activities:</p>
                <ul className="list-disc pl-4 text-gray-400 ">
                    <li>Violating any applicable laws or regulations.</li>
                    <li>Attempting to interfere with or disrupt the security, functionality, or availability of the App.</li>
                    <li>Impersonating any person or entity.</li>
                    <li>Collecting or storing personal data of other users without their consent.</li>
                    <li>Using the App for any illegal or unauthorized purpose.</li>
                </ul>


                <h2 className="text-2xl font-bold py-4">Termination</h2>

               <p className="text-gray-400">
                    Crutox reserves the right to terminate or suspend your account and access to the App for any reason, without prior notice or liability.
                </p>

                <h2 className="text-2xl font-bold py-4">Disclaimer of Warranties</h2>

               <p className="text-gray-400">
                    The App is provided "as is" and "as available" without any warranties, either expressed or implied. Crutox makes no representations or warranties regarding the accuracy, availability, or reliability of the App.
                </p>

                <h2 className="text-2xl font-bold py-4">Limitation of Liability</h2>

               <p className="text-gray-400">
                    Crutox and its affiliates will not be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of the App.
                </p>

                <h2 className="text-2xl font-bold py-4">Changes to Terms</h2>

               <p className="text-gray-400">
                    Crutox reserves the right to update or modify these Terms at any time without notice. It is your responsibility to review these Terms periodically. Your continued use of the App after any changes signifies your acceptance of the modified terms.                </p>

                <h2 className="text-2xl font-bold py-4">Governing Law</h2>

               <p className="text-gray-400">
                    These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
                </p>


                <h2 className="text-2xl font-bold py-4">Contact Information</h2>

               <p className="text-gray-400">
                    For any questions or concerns regarding these Terms, please contact us at <a href="mailto:support@crutox.com" className="text-blue-500">support@crutox.com</a>.
                </p>
            </div>
        </div>
    )
}

export default TermAndConditions
