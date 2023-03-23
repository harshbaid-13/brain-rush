import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-screen-xl text-logoYellow mx-auto px-5 bg-background min-h-sceen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-8xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-white text-xl mt-3">
          Frequenty asked questions
        </p>
      </div>
      <div className="grid mb-6 lg:mb-16 md:grid-cols-1 divide-y divide-neutral-200 max-w-6xl mx-auto mt-8">
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Is there a registration fee for the event?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600  text-white mt-3 group-open:animate-fadeIn">
              Yes , The registration fee is ₹75 per team.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                Can I register for the event as an individual if I don&apos;t
                have a team?
              </span>
              <span className="transition">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 text-white mt-3 group-open:animate-fadeIn">
              No, you cannot register as an individual.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>Who can be my teammates?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 text-white mt-3 group-open:animate-fadeIn">
            Teams can be formed from the same department and same year , no Cross-Department registration is allowed.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                {" "}
                Will there be any breaks during the event?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 text-white mt-3 group-open:animate-fadeIn">
            Yes, there will be scheduled breaks during the event to give you a chance to rest and recharge.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Will refreshments be provided?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 text-white mt-3 group-open:animate-fadeIn">
            Yes the teams which qualify the first round will be given refreshments during the lunch break.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> How will the winners be announced?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 text-white mt-3 group-open:animate-fadeIn">
            The winners will be announced on the day of the event itself.
            </p>
          </details>
        </div>
        {/* <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Can I participate if I am not a college student?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 text-white mt-3 group-open:animate-fadeIn">
              Unfortunately, this event is only open to college students at this
              time. However, we may offer other events that are open to the
              public in the future.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                {" "}
                Can I use Google or other search engines to answer the
                questions?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 text-white mt-3 group-open:animate-fadeIn">
              No, the use of any external resources is strictly prohibited. The
              questions are designed to be answered using your own knowledge and
              skills.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> How will the winners be announced?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 text-white mt-3 group-open:animate-fadeIn">
              The winners will be announced on the website and social media
              channels after the event. Make sure to follow our channels to find
              out who won!
            </p>
          </details>
  </div> */}
        <div className="py-5"> 
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                What should I do if I have technical difficulties during the
                event?
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height={24}
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 text-white mt-3 group-open:animate-fadeIn">
              If you experience any technical difficulties during the event,
              please contact the event organizers immediately through the event
              platform or through the contact form on the website. We will do
              our best to assist you and ensure a smooth experience for all
              participants.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
