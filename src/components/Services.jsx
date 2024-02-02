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
          <h1 className="py-5 text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          What Makes Crutox Unique?
          </h1>
        </div>
        <div>
          <hr className="my-4 w-40 border-gray-500
          sm:border-t-1 md:border-t-2 lg:border-t-3 xl:border-t-4 2xl:border-t-4" />
        </div>
        <div>
          <h3 className="text-center text-teal-500 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Our Services
          </h3>
        </div>

        <div className="lg:flex lg:mt-4 w-full lg:mb-18 py-8">
          {/* <!-- Column 1 --> */}
          <div className="w-full lg:w-1/2 px-7">
            <p className="">
              Crutox isn't just another cryptocurrency app. Here's what sets us apart:          </p>

            {/* Additional content starts here */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Mobile Mining:</h2>
              <p>
                Our app lets you mine cryptocurrency effortlessly. No expensive equipment or technical expertise required. Simply use your mobile device and start earning.
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">User-Focused:</h2>
              <p>
                We put our users at the forefront. Our intuitive app design, regular updates, and responsive support team ensure you have the best experience.
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">Innovation:</h2>
              <p>
                Crutox is at the forefront of blockchain technology, bringing you the latest advancements in the crypto world.
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">Security:</h2>
              <p>
                Your security is our priority. We employ robust security measures to keep your earnings safe.
              </p>
            </div>
            {/* Additional content ends here */}
          </div>


          {/* <!-- Column 2 --> */}
          <div className="w-full lg:w-1/2 px-7">
            {/* <div className="lg:w-5/12 h-72 lg:absolute lg:top-1372 lg:left-764 lg:rounded-lg lg:border lg:border-gray-600"> */}
            <div className="max-h-130 border-1 border-t-teal-50 border-b-teal-500 border-r-teal-500 border-l-teal-500 rounded-xl  overflow-y-auto shadow-md shadow-teal-500">

              <ul className=" text-lg ml-4  leading-10 p-3 ">
                {faqList.map((faq, index) => (
                  <li key={index} className="mb-4">
                    <button
                      onClick={() => toggleFaq(index)}
                      className={`w-full flex focus:outline-none justify-between ${selectedFaqIndex === index ? 'text-teal-500' : 'text-black'}`}
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
      </div>
      </>
    );
  }

  export default Services;
