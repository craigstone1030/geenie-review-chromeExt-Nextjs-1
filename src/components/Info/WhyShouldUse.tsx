const WhyShouldUse: React.FC = () => {
  return (
    <div className="mt-32 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold text-white">
        Why should I use Reviewsify?
      </h1>
      <div className="mx-4 flex items-center justify-center gap-2 sm:gap-8">
        {Why.map((why, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-2 text-center"
            >
              <why.svg />
              <h1 className="text-lg font-medium text-white sm:text-xl">
                {why.title}
              </h1>
              <p className="text-sm font-normal text-white sm:text-lg">
                {<why.desc />}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyShouldUse;

const Why = [
  {
    svg: () => (
      <svg
        className="h-16 w-16 sm:h-24 sm:w-24"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52 33.875C54.3965 33.875 56.6521 34.2998 58.7667 35.1494C60.8813 35.999 62.724 37.1696 64.2948 38.6611C65.8656 40.1527 67.1042 41.8802 68.0104 43.8438C68.9167 45.8073 69.3799 47.9219 69.4 50.1875C69.4 51.377 69.3194 52.4909 69.1583 53.5293C68.9972 54.5677 68.7455 55.5589 68.4031 56.5029C68.0608 57.4469 67.6177 58.3815 67.074 59.3066C66.5302 60.2318 65.8858 61.1758 65.1406 62.1387C64.5566 62.8939 64.0431 63.5736 63.6 64.1777C63.1569 64.7819 62.7944 65.3861 62.5125 65.9902C62.2306 66.5944 62.0191 67.2552 61.8781 67.9727C61.7372 68.6901 61.6667 69.5303 61.6667 70.4932V75.5625C61.6667 76.3177 61.5156 77.0257 61.2135 77.6865C60.9115 78.3473 60.4986 78.9232 59.975 79.4141C59.4514 79.9049 58.8372 80.292 58.1323 80.5752C57.4274 80.8584 56.6722 81 55.8667 81H48.1333C47.3278 81 46.5726 80.8584 45.8677 80.5752C45.1628 80.292 44.5486 79.9049 44.025 79.4141C43.5014 78.9232 43.0885 78.3473 42.7865 77.6865C42.4844 77.0257 42.3333 76.3177 42.3333 75.5625V70.4648C42.3333 69.502 42.2628 68.6712 42.1219 67.9727C41.9809 67.2741 41.7694 66.6227 41.4875 66.0186C41.2056 65.4144 40.8431 64.8008 40.4 64.1777C39.9569 63.5547 39.4434 62.875 38.8594 62.1387C38.1142 61.1758 37.4799 60.2412 36.9563 59.335C36.4326 58.4287 35.9896 57.4941 35.6271 56.5312C35.2646 55.5684 35.0028 54.5677 34.8417 53.5293C34.6806 52.4909 34.6 51.377 34.6 50.1875C34.6 47.9408 35.0531 45.8262 35.9594 43.8438C36.8656 41.8613 38.1142 40.1338 39.7052 38.6611C41.2962 37.1885 43.1389 36.0273 45.2333 35.1777C47.3278 34.3281 49.5833 33.8939 52 33.875ZM57.8 75.5625V73.75H46.2V75.5625C46.2 76.0534 46.3913 76.4782 46.774 76.8369C47.1566 77.1956 47.6097 77.375 48.1333 77.375H55.8667C56.3903 77.375 56.8434 77.1956 57.226 76.8369C57.6087 76.4782 57.8 76.0534 57.8 75.5625ZM65.5333 50.1875C65.5333 48.4316 65.1809 46.7891 64.476 45.2598C63.7712 43.7305 62.8045 42.3805 61.576 41.21C60.3476 40.0394 58.9177 39.1331 57.2865 38.4912C55.6552 37.8493 53.8931 37.5189 52 37.5C50.1271 37.5 48.375 37.8304 46.7438 38.4912C45.1125 39.152 43.6726 40.0583 42.424 41.21C41.1753 42.3617 40.2087 43.7021 39.524 45.2314C38.8392 46.7607 38.4868 48.4128 38.4667 50.1875C38.4667 51.8678 38.6479 53.3122 39.0104 54.5205C39.3729 55.7288 39.8462 56.805 40.4302 57.749C41.0142 58.693 41.6285 59.5804 42.2729 60.4111C42.9174 61.2419 43.5316 62.1104 44.1156 63.0166C44.6997 63.9229 45.183 64.9424 45.5656 66.0752C45.9483 67.208 46.1597 68.5579 46.2 70.125H57.8C57.8201 68.5579 58.0215 67.2174 58.4042 66.1035C58.7868 64.9896 59.2701 63.9701 59.8542 63.0449C60.4382 62.1198 61.0524 61.2513 61.6969 60.4395C62.3413 59.6276 62.9556 58.7402 63.5396 57.7773C64.1236 56.8145 64.5969 55.7288 64.9594 54.5205C65.3219 53.3122 65.5132 51.8678 65.5333 50.1875ZM52 30.25C51.4764 30.25 51.0233 30.0706 50.6406 29.7119C50.258 29.3532 50.0667 28.9284 50.0667 28.4375V24.8125C50.0667 24.3216 50.258 23.8968 50.6406 23.5381C51.0233 23.1794 51.4764 23 52 23C52.5236 23 52.9767 23.1794 53.3594 23.5381C53.742 23.8968 53.9333 24.3216 53.9333 24.8125V28.4375C53.9333 28.9284 53.742 29.3532 53.3594 29.7119C52.9767 30.0706 52.5236 30.25 52 30.25ZM28.8 49.2812H24.9333C24.4097 49.2812 23.9566 49.1019 23.574 48.7432C23.1913 48.3844 23 47.9596 23 47.4688C23 46.9779 23.1913 46.5531 23.574 46.1943C23.9566 45.8356 24.4097 45.6562 24.9333 45.6562H28.8C29.3236 45.6562 29.7767 45.8356 30.1594 46.1943C30.542 46.5531 30.7333 46.9779 30.7333 47.4688C30.7333 47.9596 30.542 48.3844 30.1594 48.7432C29.7767 49.1019 29.3236 49.2812 28.8 49.2812ZM30.401 56.6729C30.9247 56.6729 31.3778 56.8522 31.7604 57.2109C32.1431 57.5697 32.3344 58.0039 32.3344 58.5137C32.3344 58.8913 32.2236 59.2217 32.0021 59.5049C31.7806 59.7881 31.4785 60.0146 31.0958 60.1846C30.8743 60.279 30.5722 60.4017 30.1896 60.5527C29.8069 60.7038 29.3941 60.8643 28.951 61.0342C28.508 61.2041 28.1052 61.3457 27.7427 61.459C27.3802 61.5723 27.058 61.6383 26.776 61.6572C26.2524 61.6572 25.7993 61.4779 25.4167 61.1191C25.034 60.7604 24.8427 60.3262 24.8427 59.8164C24.8427 59.4388 24.9535 59.1084 25.175 58.8252C25.3965 58.542 25.6986 58.3154 26.0813 58.1455C26.3028 58.07 26.6049 57.9473 26.9875 57.7773C27.3701 57.6074 27.783 57.4469 28.226 57.2959C28.6691 57.1449 29.0719 57.0033 29.4344 56.8711C29.7969 56.7389 30.1191 56.6729 30.401 56.6729ZM34.9927 38.4063C34.9927 38.8971 34.8014 39.3219 34.4188 39.6807C34.0361 40.0394 33.583 40.2188 33.0594 40.2188C32.6969 40.2188 32.3646 40.1338 32.0625 39.9639L28.7698 38.0664C28.4878 37.8965 28.2663 37.6794 28.1052 37.415C27.9441 37.1507 27.8535 36.8486 27.8333 36.5088C27.8333 36.0179 28.0247 35.5931 28.4073 35.2344C28.7899 34.8757 29.2431 34.6963 29.7667 34.6963C30.0889 34.6963 30.4212 34.7907 30.7635 34.9795L34.0865 36.8486C34.3684 36.9997 34.5899 37.2168 34.751 37.5C34.9122 37.7832 34.9927 38.0853 34.9927 38.4063ZM37.5 27.9844C37.5 27.4935 37.6913 27.0687 38.074 26.71C38.4566 26.3512 38.9097 26.1719 39.4333 26.1719C39.7757 26.1719 40.0979 26.2568 40.4 26.4268C40.7021 26.5967 40.9438 26.8232 41.125 27.1064L42.9979 30.2783C43.159 30.5426 43.2396 30.8258 43.2396 31.1279C43.2396 31.6377 43.0483 32.0719 42.6656 32.4307C42.283 32.7894 41.8299 32.9688 41.3063 32.9688C40.9639 32.9688 40.6417 32.8838 40.3396 32.7139C40.0375 32.5439 39.7958 32.3174 39.6146 32.0342L37.7417 28.8623C37.5806 28.598 37.5 28.3053 37.5 27.9844ZM79.0667 45.6562C79.5903 45.6562 80.0434 45.8356 80.426 46.1943C80.8087 46.5531 81 46.9779 81 47.4688C81 47.9596 80.8087 48.3844 80.426 48.7432C80.0434 49.1019 79.5903 49.2812 79.0667 49.2812H75.2C74.6764 49.2812 74.2233 49.1019 73.8406 48.7432C73.458 48.3844 73.2667 47.9596 73.2667 47.4688C73.2667 46.9779 73.458 46.5531 73.8406 46.1943C74.2233 45.8356 74.6764 45.6562 75.2 45.6562H79.0667ZM79.1271 59.8447C79.1271 60.3356 78.9358 60.7604 78.5531 61.1191C78.1705 61.4779 77.7174 61.6572 77.1938 61.6572C76.9722 61.6572 76.6701 61.6006 76.2875 61.4873C75.9049 61.374 75.492 61.223 75.049 61.0342C74.6059 60.8454 74.2031 60.6849 73.8406 60.5527C73.4781 60.4206 73.166 60.2884 72.9042 60.1562C72.5417 60.0052 72.2497 59.7786 72.0281 59.4766C71.8066 59.1745 71.6858 58.8346 71.6656 58.457C71.6656 57.9473 71.8569 57.5225 72.2396 57.1826C72.6222 56.8428 73.0854 56.6634 73.6292 56.6445C73.8708 56.6445 74.183 56.7106 74.5656 56.8428C74.9483 56.9749 75.351 57.126 75.774 57.2959C76.1969 57.4658 76.5997 57.6357 76.9823 57.8057C77.3649 57.9756 77.6771 58.0983 77.9188 58.1738C78.2812 58.3249 78.5733 58.542 78.7948 58.8252C79.0163 59.1084 79.1271 59.4482 79.1271 59.8447ZM70.9406 40.2188C70.417 40.2188 69.9639 40.0394 69.5813 39.6807C69.1986 39.3219 69.0073 38.8971 69.0073 38.4063C69.0073 38.0853 69.0878 37.7832 69.249 37.5C69.4101 37.2168 69.6316 36.9997 69.9135 36.8486L73.2365 34.9795C73.5788 34.7907 73.9111 34.6963 74.2333 34.6963C74.7569 34.6963 75.2101 34.8757 75.5927 35.2344C75.9753 35.5931 76.1667 36.0179 76.1667 36.5088C76.1667 36.8298 76.0861 37.1224 75.925 37.3867C75.7639 37.651 75.5323 37.8776 75.2302 38.0664L71.9375 39.9639C71.6354 40.1338 71.3031 40.2188 70.9406 40.2188ZM60.7604 31.1279C60.7604 30.8258 60.841 30.5426 61.0021 30.2783L62.875 27.1064C63.0361 26.8232 63.2677 26.5967 63.5698 26.4268C63.8719 26.2568 64.2042 26.1719 64.5667 26.1719C65.0903 26.1719 65.5434 26.3512 65.926 26.71C66.3087 27.0687 66.5 27.4935 66.5 27.9844C66.5 28.3053 66.4194 28.598 66.2583 28.8623L64.3854 32.0342C64.2243 32.3174 63.9927 32.5439 63.6906 32.7139C63.3885 32.8838 63.0563 32.9688 62.6938 32.9688C62.1701 32.9688 61.717 32.7894 61.3344 32.4307C60.9517 32.0719 60.7604 31.6377 60.7604 31.1279Z"
          fill="#F9A400"
        />
        <path
          d="M52 2C79.6142 2 102 24.3858 102 52C102 79.6142 79.6142 102 52 102C24.3858 102 2 79.6142 2 52C2 24.3858 24.3858 2 52 2Z"
          stroke="#FF9900"
          strokeWidth="4"
        />
      </svg>
    ),
    title: "Gain Market Insight",
    desc: () => (
      <>
        Stay ahead with competitive <br /> insight
      </>
    ),
  },
  {
    svg: () => (
      <svg
        className="h-16 w-16 sm:h-24 sm:w-24"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52 2C79.6142 2 102 24.3858 102 52C102 79.6142 79.6142 102 52 102C24.3858 102 2 79.6142 2 52C2 24.3858 24.3858 2 52 2Z"
          stroke="#FF9900"
          strokeWidth="4"
        />
        <path
          d="M46.2 66.1574V48.632L26.8667 39.3007V64.9618L43.3 72.9226L42.3635 76.6259L23 67.2946V35.1016L48.1333 23L73.2667 35.1016V42.9749C71.8569 43.1887 70.5681 43.6261 69.4 44.2871V39.3007L50.0667 48.632V62.4248L46.2 66.1574ZM41.9104 30.1443L59.5521 39.8839L67.0135 36.268L48.1333 27.1408L41.9104 30.1443ZM48.1333 45.3952L55.3833 41.8959L37.7417 32.1564L29.2531 36.268L48.1333 45.3952ZM74.9583 47.4656C75.8042 47.4656 76.5896 47.6114 77.3146 47.903C78.0396 48.1946 78.684 48.5931 79.2479 49.0985C79.8118 49.604 80.2347 50.2164 80.5167 50.9356C80.7986 51.6549 80.9597 52.4228 81 53.2393C81 53.9975 80.849 54.7362 80.5469 55.4555C80.2448 56.1748 79.8118 56.8066 79.2479 57.3509L57.5885 78.2589L46.2 81L49.0396 70.0065L70.699 49.1277C71.283 48.5639 71.9375 48.146 72.6625 47.8738C73.3875 47.6016 74.1528 47.4656 74.9583 47.4656ZM76.499 54.7265C76.9219 54.3183 77.1333 53.8225 77.1333 53.2393C77.1333 52.6367 76.9319 52.1507 76.5292 51.7813C76.1264 51.4119 75.6028 51.2175 74.9583 51.1981C74.6764 51.1981 74.4045 51.237 74.1427 51.3147C73.8809 51.3925 73.6493 51.5383 73.4479 51.7521L52.5437 71.9311L51.5167 75.8678L55.5948 74.8763L76.499 54.7265Z"
          fill="#F9A400"
        />
      </svg>
    ),
    title: "Enhance Product Quality",
    desc: () => (
      <>
        Improve customer satisfaction by <br /> optimizing products
      </>
    ),
  },
  {
    svg: () => (
      <svg
        className="h-16 w-16 sm:h-24 sm:w-24"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52 2C79.6142 2 102 24.3858 102 52C102 79.6142 79.6142 102 52 102C24.3858 102 2 79.6142 2 52C2 24.3858 24.3858 2 52 2Z"
          stroke="#FF9900"
          strokeWidth="4"
        />
        <path
          d="M64.9715 23H78.8724L79.1777 23.0406L79.4799 23.1218L79.663 23.1972C79.9072 23.2958 80.13 23.4437 80.3315 23.6322L80.4536 23.7598L80.5879 23.9251L80.7528 24.1861L80.8718 24.4471L80.9298 24.6327L80.9725 24.8183L81 25.0938V38.2366C80.9998 38.7877 80.7795 39.3181 80.3835 39.7208C79.9875 40.1235 79.4454 40.3683 78.8667 40.4059C78.288 40.4434 77.7159 40.2709 77.2659 39.9231C76.816 39.5754 76.5217 39.0783 76.4427 38.5324L76.4213 38.2366V30.4211L56.7635 49.0971C56.3758 49.4655 55.8619 49.6894 55.3152 49.7283C54.7685 49.7671 54.2252 49.6183 53.7843 49.3088L53.5278 49.1L44.2789 40.661L26.9104 57.1591C26.5019 57.5483 25.9535 57.7761 25.3754 57.7967C24.7973 57.8174 24.2324 57.6293 23.7943 57.2704C23.3562 56.9115 23.0774 56.4083 23.0138 55.862C22.9503 55.3158 23.1069 54.7669 23.4519 54.3258L23.6748 54.0822L42.6611 36.0442C43.0491 35.6763 43.5632 35.4529 44.1099 35.4145C44.6566 35.3762 45.1996 35.5256 45.6403 35.8354L45.8967 36.0442L55.1456 44.4832L73.1796 27.35H64.9685C64.4158 27.3493 63.882 27.1586 63.4657 26.8132C63.0494 26.4678 62.7787 25.991 62.7035 25.4708L62.6822 25.175C62.6822 24.6494 62.8825 24.1416 63.2462 23.7455C63.6098 23.3494 64.1121 23.0918 64.6602 23.0203L64.9715 23ZM25.2926 66.5C25.8998 66.5 26.4821 66.7292 26.9114 67.137C27.3407 67.5449 27.5819 68.0982 27.5819 68.675V78.825C27.5819 79.4018 27.3407 79.9551 26.9114 80.363C26.4821 80.7709 25.8998 81 25.2926 81C24.6854 81 24.1031 80.7709 23.6738 80.363C23.2444 79.9551 23.0032 79.4018 23.0032 78.825V68.675C23.0032 68.0982 23.2444 67.5449 23.6738 67.137C24.1031 66.7292 24.6854 66.5 25.2926 66.5ZM42.8442 57.075C42.8442 56.4982 42.603 55.9449 42.1737 55.537C41.7444 55.1292 41.1621 54.9 40.5549 54.9C39.9477 54.9 39.3654 55.1292 38.9361 55.537C38.5067 55.9449 38.2655 56.4982 38.2655 57.075V78.825C38.2655 79.4018 38.5067 79.9551 38.9361 80.363C39.3654 80.7709 39.9477 81 40.5549 81C41.1621 81 41.7444 80.7709 42.1737 80.363C42.603 79.9551 42.8442 79.4018 42.8442 78.825V57.075ZM55.8172 60.7C56.4244 60.7 57.0067 60.9292 57.436 61.337C57.8653 61.7449 58.1065 62.2982 58.1065 62.875V78.825C58.1065 79.4018 57.8653 79.9551 57.436 80.363C57.0067 80.7709 56.4244 81 55.8172 81C55.21 81 54.6277 80.7709 54.1984 80.363C53.769 79.9551 53.5278 79.4018 53.5278 78.825V62.875C53.5278 62.2982 53.769 61.7449 54.1984 61.337C54.6277 60.9292 55.21 60.7 55.8172 60.7ZM73.3688 48.375C73.3688 47.7982 73.1277 47.2449 72.6983 46.837C72.269 46.4292 71.6867 46.2 71.0795 46.2C70.4723 46.2 69.89 46.4292 69.4607 46.837C69.0313 47.2449 68.7901 47.7982 68.7901 48.375V78.825C68.7901 79.4018 69.0313 79.9551 69.4607 80.363C69.89 80.7709 70.4723 81 71.0795 81C71.6867 81 72.269 80.7709 72.6983 80.363C73.1277 79.9551 73.3688 79.4018 73.3688 78.825V48.375Z"
          fill="#F9A400"
        />
      </svg>
    ),
    title: "Make Informed Decisions",
    desc: () => (
      <>
        Receive data-driven insights for <br /> better business results
      </>
    ),
  },
] as const;