import React from 'react';


function Roadmap() {
    return (
        <>
            <div className=''>
                <div className='text-center font-bold 
            sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
            '>Roadmap</div>
                <div>
                    <hr className="my-4  w-40 mx-auto border-teal-600 sm:border-t-1 md:border-t-2 lg:border-t-3 xl:border-t-4 2xl:border-t-4" />
                </div>
                {/* RoadMap  */}
                <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-slate-300">

                    {/* <!-- Item #1 --> */}
                    <div class="relative flex justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* <!-- Icon --> */}
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#178A9E] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        {/* <!-- Card --> */}
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  ">
                            <div className='w-[140px] p-4  rounded border border-slate-200 shadow bg-[#178A9E]'>
                                <div class="flex items-center justify-between space-x-2 ">
                                    <div class="font-bold text-white ">Q4 2023</div>
                                </div>
                            </div>
                            <div className='bg-[#DBFAFF] p-4 md:w-[400px] rounded border border-slate-200 shadow mt-5'>
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-slate-900">Social Media Setup and App Launch</div>
                                </div>
                                {/* <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div> */}
                                <div className="text-slate-500">
                                    <ul className="list-disc mx-3">
                                        <li>Establish a strong presence on social media platforms, including Twitter, Facebook, Discord, and others relevant to our audience.</li>
                                        <li>Develop a robust content strategy for social media, keeping our community updated on project progress and sharing Crutox insights.</li>
                                        <li>Launch the Crutox mobile mining app, designed to enable users to mine Crutox on their mobile devices efficiently.</li>
                                        <li>Promote the mobile mining app through our social media channels to attract users to our platform.</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* <!-- Item #2 --> */}
                    <div class="relative flex justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* <!-- Icon --> */}
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#178A9E] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        {/* <!-- Card --> */}
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  ">
                            <div className=' w-[140px] p-4  md:ml-auto rounded border border-slate-200 shadow bg-[#178A9E] '>
                                <div class="flex items-center justify-between space-x-2 ">
                                    <div class="font-bold text-white  ">Q1 2024</div>
                                </div>
                            </div>
                            <div className='bg-[#DBFAFF] p-4 md:w-[400px] ml-auto rounded border border-slate-200 shadow mt-5'>
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-slate-900">Blockchain Development and Mainnet Preparation</div>
                                </div>
                                {/* <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div> */}
                                <div className="text-slate-500">
                                    <ul className="list-disc mx-3">
                                        <li>Continue the development of the Crutox blockchain, focusing on coding, consensus mechanisms, and technical aspects.</li>
                                        <li>Finalize the design and technical details of the blockchain, ensuring alignment with our project objectives and robust security.</li>
                                        <li>Prepare for the mainnet launch, including initial testing, security audits, and vulnerability resolution.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Item #3 --> */}
                    <div class="relative flex justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* <!-- Icon --> */}
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#178A9E] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        {/* <!-- Card --> */}
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]   ">
                            <div className='bg-[#178A9E] w-[140px] p-4  rounded border border-slate-200 shadow '>
                                <div class="flex items-center justify-between space-x-2 ">
                                    <div class="font-bold text-white ">Q4 2024</div>
                                </div>
                            </div>
                            <div className='bg-[#DBFAFF] p-4 md:w-[400px] rounded border border-slate-200 shadow mt-5'>
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-slate-900">Wallet and Exchange Development</div>
                                </div>
                                <div className="text-slate-500">
                                    <ul className="list-disc mx-3">
                                        <li>Concentrate on the development of the Crutox crypto wallet, emphasizing user-friendliness and robust security for Crutox and other cryptocurrencies.</li>
                                        <li>Continue developing the Crutox exchange platform, enabling users to trade Crutox and potentially other cryptocurrencies with lowest fees ever.</li>
                                    </ul>
                                </div>
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-slate-900">Mainnet Launch and Exchange Setup</div>
                                </div>
                                <div className="text-slate-500">
                                    <ul className="list-disc mx-3">
                                        <li>Launch the Crutox mainnet, allowing users to transfer and mine the coin.</li>
                                        <li>Prepare the exchange for launch, addressing legal and technical requirements to ensure a secure and compliant platform.</li>
                                    </ul>
                                </div>

                            </div>



                        </div>
                    </div>

                    {/* <!-- Item #4 --> */}
                    <div class="relative flex justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* <!-- Icon --> */}
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#178A9E] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        {/* <!-- Card --> */}
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  ">
                            <div className='bg-[#178A9E] w-[140px] p-4  md:ml-auto rounded border border-slate-200 shadow  '>
                                <div class="flex items-center justify-between space-x-2 ">
                                    <div class="font-bold text-white ">Q3 2024</div>
                                </div>
                            </div>
                            <div className='bg-[#DBFAFF] p-4 md:w-[400px] ml-auto rounded border border-slate-200 shadow mt-5'>
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-slate-900">Exchange Launch and Marketing</div>
                                </div>
                                <div className="text-slate-500">
                                    <ul className="list-disc mx-3">
                                        <li>Launch the Crutox exchange, enabling users to start trading the cryptocurrency.</li>
                                        <li>Implement our marketing strategy to promote the exchange, attract traders, and build awareness within the cryptocurrency community.</li>
                                    </ul>
                                </div>
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-slate-900">Post-Launch Activities and Community Building</div>
                                </div>
                                <div className="text-slate-500">
                                    <ul className="list-disc mx-3">
                                        <li>Continue building and engaging with the Crutox community on social media and other platforms.</li>
                                        <li>Provide ongoing support, updates, and improvements to the exchange and wallet to maintain user satisfaction.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Item #5 --> */}
                    <div class="relative flex justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* <!-- Icon --> */}
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#178A9E] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        {/* <!-- Card --> */}
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]   ">
                            <div className='bg-[#178A9E] w-[140px] p-4  rounded border border-slate-200 shadow '>
                                <div class="flex items-center justify-between space-x-2 ">
                                    <div class="font-bold text-white ">Q4 2024</div>
                                </div>
                            </div>
                            <div className='bg-[#DBFAFF] p-4 md:w-[400px] rounded border border-slate-200 shadow mt-5'>
                                <div class="flex items-center justify-between space-x-2 mb-1">
                                    <div class="font-bold text-slate-900">Legal Compliance and Expansion</div>
                                </div>
                                {/* <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div> */}
                                <div className="text-slate-500">
                                    <ul className="list-disc mx-3">
                                        <li>Ensure ongoing compliance with cryptocurrency regulations and adapt as necessary to changing legal requirements.</li>
                                        <li>Explore expansion opportunities, such as forming partnerships, introducing additional features, and expanding into new markets.</li>
                                        <li>This roadmap outlines our strategic approach for the next year, showcasing our dedication to the Crutox project and our commitment to delivering value to our community.</li>
                                        <li>Stay tuned for updates and milestones as we continue to develop and grow Crutox!</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Roadmap;
