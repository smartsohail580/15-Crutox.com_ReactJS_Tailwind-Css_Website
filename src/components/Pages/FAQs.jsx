import React, { useState } from 'react';


function Services() {
    const [faqList, setFaqList] = useState([
        {
            question: 'What is Crutox?',
            answer: 'Crutox is a crypto mining application designed to help users mine our crypto coin efficiently. It offers a user-friendly interface and powerful features to streamline the mining process.',
        },
        {
            question: 'How do I mine more Crutox coins?',
            answer: 'Crutox Network’s mining mechanism is simple and meritocratic: The more you contribute to the network in diverse ways, the higher your mining rate is. In addition to mining everyday, you can boost your individual mining rate by doing one or more of the activities below. Keep in mind that the mining stops along with all types of mining rewards when a mining session is no longer active (that is, after the end of a 12-hour mining session and before you start another mining session on the app). Therefore, it’s best to set an app notification to remind you when it is time to start a new mining session.',
        },
        {
            question: 'What is the utility of Crutox?',
            answer: 'Crutox utility will be backed by the time, attention, goods, and services offered by other members of the network in exchange for Crutox. By pooling our attention, goods and services around a common currency, Crutox members are building the network together. Because this is a network supported by blockchain technology, the network can help its members reduce their costs and prevent slippage that typically goes to banks, technology giants (e.g., Facebook, Amazon) and other intermediaries. Today, we are laying the infrastructure for this digital currency and for a utilities-driven app ecosystem by distributing the currency, building the community, developing the technology to ensure its security and designing new types of online social experience.',
        },
        {
            question: 'How can I use my Crutox on the Mainnet?',
            answer: 'Crutox Network is building a peer-to-peer ecosystem including marketplaces where our members will be able to directly spend Crutox to buy goods and services. Once users are able to pass KYC verification and migrate their mobile Crutox balance to Mainnet, this option will be available. When Crutox apps transition from Testnet to Mainnet, this option will be scaled and diversified across the ecosystem.',
        },
        {
            question: 'How can the mining of Crutox crypto be free? Are you using my phone resources?',
            answer: 'Allowing users to mine crutox coin for free is a conscious network choice in service of ensuring accessibility to cryptocurrency to people regardless of their financial background. Crutox Network does NOT use your phone’s resources – hardware, network, or anything else. The main Crutox app uses as much phone battery just as any other regular app. Please refer to the next answer to understand why Crutox mining does not consume your phone resources.',
        },
        {
            question: 'How can Crutox be mined on mobile phones without energy consumption typically known in “crypto mining”?',
            answer: 'Crutox achieves this by using a different type of consensus algorithm in its blockchain, rather than the widely known Proof of Work (POW) algorithm that consumes a lot of energy. Crutox consensus algorithm is adapted from the Stellar Consensus Protocol (SCP) and an algorithm called Federated Byzantine Agreement (FBA), which do not require energy consumption to reach consensus in order to secure a ledger. This type of consensus algorithm requires the nodes to form quorums and exchange messages with each other based on a trust graph composed of individual quorum slices to come to a “consensus” on what the next block should be. Mining is making contributions to the consensus algorithm to secure the ledger in blockchain for rewards. While POW mining requires nodes to “work” to solve mathematical puzzles to help the algorithm reach consensus and incidentally consume a lot of energy, Crutox mining requires a distributed trust graph. The security circles of each individual mobile miners will aggregate into a global trust graph that will feed the consensus algorithm of the Crutox blockchain. Therefore, each mobile miner is mining Crutox by contributing to the intersectionality, security and feasibility of the consensus algorithm of the Crutox blockchain in order to secure the Crutox ledger. While POW miners’ contribution to those blockchains is the energy, Crutox mobile miners’ contribution to Crutox Blockchain is their trust relationships and the active confirming of such relationships. The heavy lifting of running the consensus algorithm based on the trust graph that the mobile phones are creating is still falling into computer nodes. In fact, the Crutox Testnet already has more than 10K such computer nodes that will be soon migrated to the Crutox Mainnet, placing Crutox into a good path into creating a very decentralized blockchain network.',
        },
        {
            question: 'Do I need to leave the app open to mine? Does the app drain my battery or data?',
            answer: 'You do not need to leave the app open to mine. Crutox does not affect your phone’s performance, drain your battery, nor use your network data any more than other regular apps. Once you hit the Start button that initiates a new mining session and confirms your security circle, you can even close the app and you will continue to mine Crutox. However, making diverse contributions to the network, such as using Crutox apps, running computer nodes or inviting friends, will boost your mining rate. Any mobile usage of Crutox apps will not consume more energy or resources than other regular mobile apps.',
        },
        {
            question: 'How does the Crutox app work?',
            answer: 'The Crutox app allows you to mine Crutox Coin by making diverse contributions to the network. The more you contribute, the more Crutox you mine. The app is also the home for your Crutox account where you can stay tuned on the network updates of the Crutox community. To start mining Crutox, check in every 12 hours and hit the lightning button. Once you are mining, you can boost your hourly rate by inviting trusted friends and family to join the community.',
        },
    ]);

    const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        if (selectedFaqIndex === index) {
            setSelectedFaqIndex(null);
        } else {
            setSelectedFaqIndex(index);
        }
    };

    return (
        <>

            <div className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="py-5 text-center font-bold sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                        FAQS
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



                {/* <!-- Column 2 --> */}
                <div className="w-full py-16  md:px-20  ">
                    {/* <div className="lg:w-5/12 h-72 lg:absolute lg:top-1372 lg:left-764 lg:rounded-lg lg:border lg:border-gray-600"> */}
                    <div className="max-h-130 border-1  sm:w-auto border-t-teal-50 border-b-teal-500 border-r-teal-500 border-l-teal-500 rounded-xl  overflow-y-auto shadow-md shadow-teal-500">

                        <ul className=" text-lg ml-4  leading-10 p-3 ">
                            {faqList.map((faq, index) => (
                                <li key={index} className="mb-4">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className={`w-full flex focus:outline-none justify-between ${selectedFaqIndex === index ? 'text-teal-500' : 'text-[#89898D]'}`}
                                    >
                                        <div>
                                            {faq.question}
                                        </div>
                                        <div>
                                            <span className="">{selectedFaqIndex === index ? '▲' : '▼'}</span>
                                        </div>
                                    </button>
                                    {selectedFaqIndex === index && (
                                        <div className="ml-4 text-gray-700">
                                            {faq.answer}
                                        </div>
                                    )}
                                    {index < faqList.length - 1 && (
                                        <hr className="my-1 custom-line" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Services;
