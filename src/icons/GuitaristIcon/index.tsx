import React, { FC } from 'react'

interface IGuitaristIcon {

}

const GuitaristIcon: FC<IGuitaristIcon> = () => {
    console.log('GuitaristIcon')

    return (
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M67.6038 68.0345C67.6038 68.0345 66.1657 66.5694 65.2718 64.4392C63.7559 60.815 66.2532 58.8584 66.0491 53.4028C65.9616 51.157 65.8742 48.7087 64.2418 46.4725C62.5802 44.1882 59.9469 43.0026 55.7007 41.0845C54.418 40.5061 53.3395 40.082 52.5913 39.8025C53.7767 38.9639 54.3792 38.029 54.661 37.4892C56.1088 34.7711 55.0691 31.8987 54.8261 31.2433C54.7873 31.1276 54.6221 30.6939 54.3306 30.1348C55.7395 28.93 56.4974 27.1757 57.2456 25.4311C57.9841 23.7058 59.053 20.525 58.8003 16.1875C60.2384 14.5779 60.8506 13.0067 61.1324 12.0814C61.521 10.7995 61.9486 9.35365 61.4919 8.12952C61.7154 7.73433 61.9389 7.33915 62.1624 6.9536C62.5316 6.86685 63.1438 6.66443 63.7171 6.18249C64.747 5.32464 65.4175 3.7728 65.0094 2.58723C64.3972 0.804061 61.5113 0.293207 59.5777 0.794423C57.3428 1.37275 55.6424 3.50292 55.1759 6.18249C55.4383 6.7801 55.6909 7.3777 55.9533 7.97531C53.2909 12.2935 50.6382 16.6116 47.9758 20.9298C47.8009 20.8141 47.6162 20.6888 47.4122 20.5539C45.8381 19.5129 43.7198 18.1153 41.4655 17.2189C38.7642 16.1393 36.4516 16.0044 34.9941 15.9369C31.2725 15.7538 28.2117 16.5153 26.2003 17.2189C25.695 17.296 24.7136 17.3731 23.6156 16.9586C22.8966 16.6984 22.3427 16.3032 21.9152 15.8984C21.7208 15.2526 21.4196 14.52 21.031 13.6236C19.039 9.03557 18.0382 6.74154 16.6292 5.15115C14.7344 3.01134 11.8485 -0.236926 7.83548 0.0136819C4.90099 0.206457 2.37461 2.19204 1.11142 4.38004C-1.62873 9.10304 1.16001 15.3875 4.47345 18.7514C8.34076 22.6744 14.9385 24.6889 18.9613 22.3467C19.1167 22.26 19.6706 21.9322 20.273 21.3828C20.2439 22.1154 20.1662 22.9636 19.9913 23.8889C19.622 25.7974 19.0584 26.7709 18.6989 27.995C18.3491 29.171 18.1839 30.4144 18.6989 35.1855C19.175 39.6676 19.4957 42.5399 20.1467 44.5448C18.8155 46.087 17.9118 47.1762 17.1539 49.2967C16.5612 50.9546 15.5021 53.9233 16.6389 56.9981C17.8147 60.1789 21.0504 62.6078 23.8877 63.6681C25.9477 64.4392 28.6587 64.8151 29.5818 66.4923C29.7081 66.7236 30.0773 67.3983 29.8441 68.0345C29.7858 68.1791 29.5915 68.6224 28.5518 69.0658C26.793 69.808 25.3355 69.3839 25.1898 69.8369C25.1412 69.9719 25.2092 70.1936 25.7048 70.608C27.5315 70.7912 29.0376 70.7237 30.1065 70.608C32.9924 70.3092 33.5365 69.6441 33.7309 69.3261C34.1098 68.7092 34.0224 68.0345 33.9932 67.7839C33.7795 66.2127 32.3414 65.326 30.3688 63.938C25.9088 60.7861 24.7136 59.3017 24.1598 58.5499C23.4213 57.5379 22.2456 55.88 22.8674 54.7041C23.1881 54.0872 23.8877 53.8077 24.4221 53.6727C25.3355 54.1643 26.5501 54.733 28.0465 55.2149C29.0959 55.5523 31.0782 56.1113 33.4782 56.2463C34.8677 56.3234 38.6087 56.4872 42.5343 54.7041C46.9361 52.6992 47.3636 50.1546 51.3281 49.5666C52.1054 49.4509 53.5629 49.2582 55.2051 49.8268C58.5574 50.9835 60.0538 54.4149 60.6368 55.7258C61.5891 57.8752 61.6765 59.668 63.2215 66.7622C63.3284 67.2634 63.5421 68.1887 64.2612 69.0755C64.8248 69.7791 65.0968 69.6441 67.8856 71.1285C69.0807 71.7647 69.8192 72.2081 70.4703 71.8996C70.5771 71.8514 70.9075 71.6876 70.9853 71.3888C71.1893 70.5406 69.2362 69.702 67.6038 68.0345ZM57.2554 21.5852C57.0027 22.607 56.0602 26.3372 53.116 28.3227C52.3775 27.4456 51.6099 26.848 51.0463 26.4528C53.1548 22.7515 55.2634 19.0599 57.372 15.3586C57.7898 16.4092 57.8869 19.0695 57.2554 21.5852ZM60.5882 10.7127C60.4619 12.3609 59.704 14.2983 59.0335 14.2791C58.8586 14.2694 58.6351 14.1345 58.3825 13.6043C59.121 12.3128 59.8595 11.0212 60.5979 9.72956C60.6174 10.0187 60.6174 10.3561 60.5882 10.7127ZM57.5177 3.87883C57.7703 3.36797 58.4019 2.1053 59.8498 1.56552C60.2676 1.4113 61.764 0.948643 62.9591 1.82577C63.1729 1.97999 64.0183 2.6547 63.9988 3.61858C63.9794 4.66921 62.93 5.71983 61.4142 5.93188C60.8992 6.87648 60.3745 7.81145 59.8595 8.75604C56.3225 14.7417 52.7856 20.737 49.2487 26.7227C43.6129 34.1156 40.5521 38.27 39.833 39.4555C39.1529 38.8965 38.152 38.3181 37.0929 38.5302C36.2864 38.6941 35.7811 39.2338 34.7609 40.323C33.5851 41.5857 33.5365 42.1255 32.9535 42.6363C32.1859 43.3014 30.6603 43.7641 27.2595 42.6363C27.1428 42.4628 26.3946 41.3833 26.2683 39.8989C27.3469 38.4049 28.2894 36.8916 29.1154 35.4458C29.4943 35.6675 30.0093 35.8795 30.6215 35.9566C33.3713 36.3133 35.6062 33.4795 36.8305 32.1108C37.8897 30.9252 38.9682 29.5565 39.1626 27.4938C39.3278 25.7492 38.7448 24.3419 38.3852 23.6479C39.3083 23.4937 39.8622 23.6961 40.1926 23.9082C40.5812 24.1588 40.6104 24.3805 41.4849 25.4504C41.9319 25.9902 42.272 26.3661 42.3983 26.501C42.6023 26.7227 42.8064 26.9155 42.9813 27.0986L39.1529 34.694C41.0477 32.2939 42.9522 29.9035 44.8469 27.5035L57.2651 8.25483C57.0804 7.69578 56.5557 5.79694 57.5177 3.87883ZM40.4355 44.1689C40.0177 45.4026 38.5699 46.5786 37.0735 46.2219C35.5479 45.8557 34.926 44.14 35.0038 42.8869C35.1009 41.3736 36.2767 39.8603 37.5885 39.8025C39.3181 39.735 41.1059 42.2122 40.4355 44.1689ZM17.4163 20.8141C15.4632 21.6238 13.5879 21.0648 11.9846 20.5539C10.8283 20.1876 6.49456 18.7514 3.96818 14.3947C3.51149 13.6043 2.60782 12.0236 2.41348 9.77775C2.29688 8.39941 2.13169 6.46202 3.33658 4.83307C5.00788 2.58723 8.31161 2.24988 10.5853 2.86676C11.7902 3.19448 12.7328 3.80172 13.7725 4.70776C17.941 8.33194 22.1484 15.4357 19.7483 19.0213C18.971 20.1683 17.7078 20.6888 17.4163 20.8141ZM20.5548 37.3157C20.1273 31.4553 19.9135 31.1276 20.1662 29.3155C20.4188 27.5227 20.6228 27.8504 20.9435 25.7492C21.3419 23.1371 21.2253 21.3636 21.3322 20.178C21.6528 19.696 21.9249 19.1466 22.0707 18.5105C22.7508 18.0382 23.2853 18.443 25.1217 18.5201C27.9882 18.6551 28.6587 17.7683 31.632 17.3635C32.8369 17.1996 36.0143 16.7948 39.5027 18.0382C41.825 18.8671 43.6226 20.178 44.6526 20.9298C45.566 21.5949 46.3045 22.231 46.868 22.7515C46.1101 23.9853 45.3425 25.2191 44.5846 26.4625C44.5749 26.4528 44.5652 26.4335 44.5554 26.4239C44.6137 26.3468 44.6623 26.2697 44.7206 26.1926C44.4971 25.9902 44.1668 25.6914 43.7587 25.3154C43.6226 25.1901 43.4963 25.0745 43.3797 24.9588C42.787 24.2937 42.0485 23.5612 41.2128 22.9443C40.6687 22.5009 40.0954 22.0865 39.4055 21.8455C39.1917 21.7684 38.7933 21.6527 38.2492 21.6142C37.8605 21.5563 37.4719 21.5467 37.0735 21.5949C36.8305 21.6238 36.6071 21.6913 36.6071 21.6913C36.4127 21.7395 36.2281 21.8069 36.0532 21.884C36.0629 21.8937 36.0629 21.9033 36.0726 21.913C35.8977 21.9708 35.7131 22.0383 35.5285 22.1154C35.9463 22.6744 37.8508 25.3347 37.0832 28.2746C36.7042 29.7396 35.8394 30.7421 34.4985 32.1204C33.0993 33.5566 32.4677 34.3566 31.3891 34.4337C30.7867 34.4723 30.2328 34.2891 29.7567 34.0193C29.1251 33.5566 28.5615 33.0168 28.0465 32.4192C28.0465 32.4289 28.0368 32.4385 28.0368 32.4481C26.5501 34.9253 25.8894 36.3422 25.1898 37.6531C25.2092 37.9904 25.2286 38.3278 25.2481 38.6651C25.1606 39.2917 25.1703 40.0531 25.3647 40.9881C25.3647 41.0266 25.3647 41.0748 25.3744 41.1134C25.3841 41.1038 25.3841 41.1038 25.3938 41.0941C25.559 41.8652 25.8505 42.7616 26.3072 43.793C27.1526 44.4388 28.4741 45.2291 30.1065 45.2195C31.9527 45.2099 33.0798 44.1592 33.7309 44.7087C34.3527 45.2291 34.1487 46.781 33.4685 47.7931C32.1956 49.6823 29.1056 49.9136 26.9971 49.3353C24.0918 48.5256 22.6731 46.0677 22.3427 45.4894C22.2456 45.3159 22.1775 45.181 22.1192 45.0556C21.8666 44.5352 21.6625 44.0243 21.4974 43.4942C21.4682 43.3689 21.4391 43.2436 21.4196 43.1183C21.4099 43.1279 21.4002 43.1375 21.3905 43.1472C20.8269 41.2387 20.7006 39.3109 20.5548 37.3157ZM23.878 60.0825C25.9088 62.4536 27.308 63.3211 27.24 63.4175C27.0748 63.6488 17.5815 59.7162 17.1539 53.9233C16.9887 51.745 18.1548 49.8365 19.2236 48.5352C19.4082 49.1136 19.8261 50.1449 20.7783 51.0992C21.4293 51.7642 22.1095 52.1498 22.5856 52.3811C22.129 53.0558 21.303 54.5016 21.5459 56.227C21.6042 56.6125 21.8083 57.6535 23.878 60.0825ZM41.9902 53.1522C40.2217 55.0992 37.0637 55.0221 33.9738 54.945C32.4677 54.9065 30.4369 54.839 28.0271 53.9137C25.5104 52.9498 20.7686 50.3762 20.7783 47.2436C20.7783 46.9063 20.8366 46.6075 20.9532 46.3376C20.9824 46.3858 21.0115 46.434 21.0407 46.4725C21.7889 47.6196 23.1589 49.7112 25.695 50.5787C30.6798 52.2847 35.5576 47.7256 35.7811 47.4943C36.2572 47.5906 37.8022 47.8316 39.4055 46.9834C39.8719 46.7328 41.2517 46.0002 41.7375 44.4195C42.3691 42.3568 40.931 40.5929 40.6978 40.3134C40.6395 40.2363 40.3675 39.9182 39.9691 39.5712C40.9602 38.617 44.3222 34.6747 50.2689 27.4842C50.609 27.6962 51.0754 28.0336 51.5613 28.5155C53.7962 30.7324 53.8836 33.6144 53.8933 33.9036C53.903 34.5012 53.903 36.4964 52.601 38.27C51.3086 40.0242 50.1232 39.6676 47.9466 41.3544C45.3911 43.3303 44.2542 45.9617 43.8072 47.0027C42.3011 50.4726 43.4186 51.5715 41.9902 53.1522ZM63.2021 58.5403C62.998 58.5403 62.8522 58.2608 61.9097 55.7161C60.5785 52.1305 60.6465 52.1016 60.355 51.61C58.9752 49.2485 56.5849 48.2654 55.9533 48.0147C53.8059 47.1665 51.8625 47.3111 50.7742 47.5039C47.1401 48.1401 45.0801 50.6847 44.5651 51.3498C44.4971 50.675 44.2251 47.3208 46.6348 44.4195C48.4325 42.2508 50.7062 41.5568 51.5516 41.3351C52.5232 41.6628 53.9613 42.1737 55.6909 42.8773C59.5485 44.4388 61.4919 45.2484 62.6773 46.7232C64.1057 48.516 64.3389 50.5112 64.4847 51.8606C64.8734 55.1571 63.9211 58.5403 63.2021 58.5403Z" fill="currentColor"/>
        </svg>


    )
}

export default GuitaristIcon;
