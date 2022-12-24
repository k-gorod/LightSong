import React, { FC } from 'react'
import styles from './songIcon.module.scss'

export const SongIcon: FC = () => (
    <svg className={styles['songIcon']} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.9735 46.0318C26.4903 46.0318 27.9541 45.873 29.3827 45.5732C29.4532 45.5379 29.5062 45.485 29.5767 45.4497C30.2645 44.9206 30.5996 44.2857 30.7055 44.0564C32.4515 40.6526 35.1146 38.6773 36.5608 33.4215C37.0017 31.8166 37.4603 29.4004 37.3192 26.3492C37.3016 26.0494 37.2839 25.8201 37.2839 25.6437C37.1958 24.3915 36.8959 20.6173 35.3439 16.5609C33.8801 12.769 32.2928 11.2699 32.8748 10.6702C33.1922 10.3351 33.933 10.4586 36.067 11.3404C37.9718 12.1164 40.5114 13.3157 43.4215 15.1146C43.298 14.8325 43.157 14.4974 42.9806 14.1623C42.2928 13.0335 41.5167 11.9753 40.6349 10.9877C40.6349 10.9877 40.6349 10.9877 40.6525 10.9877C40.0882 10.3704 39.4885 9.78837 38.8712 9.24163C37.5132 8.23634 35.2381 6.79013 32.1164 5.89066C30.7936 5.50265 25.5732 3.9859 24.6384 5.53793C23.8095 6.91359 27.231 9.24163 31.2522 16.1376C33.1217 19.3298 34.5502 22.0282 35.0441 25.5908C35.6437 29.9471 34.3033 33.351 33.9682 34.1975C32.7337 37.1605 30.8465 39.0476 29.7178 40.0353C29.1887 37.6896 27.6014 32.2575 22.6455 28.1658C20.7407 26.6138 16.1199 22.8042 10.7936 24.0741C10.1058 24.2505 7.07229 24.9736 5.69663 27.3016C4.95589 28.5891 4.77952 30.2293 5.14989 32.0811C8.02467 40.1764 15.8201 46.0318 24.9735 46.0318Z" fill="currentColor"/>
        <path d="M24.9912 0.705566C11.5873 0.705566 0.705444 11.5874 0.705444 24.9913C0.705444 38.3952 11.5873 49.2946 25.0088 49.2946C38.4303 49.2946 49.3121 38.4128 49.3121 24.9913C49.3121 11.5698 38.4127 0.705566 24.9912 0.705566ZM24.9912 47.6015C24.9735 47.6015 24.9735 47.6015 24.9912 47.6015C24.9735 47.6015 24.9735 47.6015 24.9912 47.6015C12.5044 47.6015 2.38093 37.4781 2.38093 24.9913C2.38093 16.1024 7.51321 8.43043 14.9735 4.72673C15.0441 4.69146 15.1146 4.65618 15.2028 4.62091C15.2028 4.62091 15.2028 4.62091 15.2204 4.62091C18.1834 3.19234 21.4991 2.39869 25.0088 2.39869C25.0441 2.39869 25.0793 2.39869 25.1323 2.39869C25.291 2.39869 25.4497 2.39869 25.6084 2.39869C25.7143 2.39869 25.8201 2.39869 25.9259 2.41632C26.0141 2.41632 26.1023 2.41632 26.2081 2.43396C26.3315 2.43396 26.4374 2.4516 26.5608 2.4516C26.649 2.4516 26.7196 2.46923 26.8077 2.46923C26.9312 2.48687 27.037 2.48687 27.1605 2.50451C27.231 2.50451 27.3192 2.52215 27.3897 2.52215C27.5132 2.53978 27.6367 2.55742 27.7425 2.55742C27.813 2.57506 27.9012 2.57505 27.9718 2.59269C28.0952 2.61033 28.201 2.62797 28.3245 2.6456C28.395 2.66324 28.4832 2.66324 28.5538 2.68088C28.6772 2.69851 28.783 2.71615 28.9065 2.73379C28.977 2.75142 29.0652 2.76906 29.1358 2.76906C29.2416 2.7867 29.3651 2.80433 29.4709 2.83961C29.5591 2.85724 29.6296 2.87488 29.7178 2.89252C29.8236 2.91015 29.9294 2.94543 30.0353 2.96306C30.1234 2.9807 30.2116 2.99834 30.2822 3.01597C30.388 3.03361 30.4938 3.06888 30.582 3.08652C30.6702 3.10416 30.7584 3.13943 30.8465 3.15707C30.9347 3.1747 31.0405 3.20998 31.1287 3.22761C31.2345 3.26289 31.3227 3.28052 31.4285 3.3158C31.5167 3.33343 31.5873 3.36871 31.6755 3.38634C31.7989 3.42162 31.9047 3.45689 32.0282 3.49216C32.0987 3.5098 32.1517 3.52744 32.2222 3.54507C32.3809 3.59798 32.5397 3.65089 32.6984 3.72144C32.716 3.72144 32.7337 3.73908 32.7513 3.73908C33.298 3.93308 33.8448 4.16236 34.3915 4.40927C34.5679 4.49745 34.7442 4.568 34.9206 4.65618C34.9383 4.65618 34.9382 4.67382 34.9559 4.67382C35.1146 4.762 35.2733 4.83255 35.4497 4.92073C35.4674 4.92073 35.485 4.93837 35.5026 4.93837C35.6614 5.02655 35.8201 5.0971 35.9612 5.18528C35.9788 5.20292 35.9965 5.20292 36.0141 5.22056C36.1552 5.30874 36.3139 5.39692 36.455 5.46747C36.4726 5.48511 36.4903 5.48511 36.5079 5.50274C36.649 5.59093 36.7901 5.67911 36.9312 5.7673C36.9488 5.78493 36.9841 5.80257 37.0017 5.80257C37.1428 5.89075 37.2839 5.97894 37.425 6.06712C37.4427 6.08476 37.4779 6.10239 37.4956 6.12003C37.6367 6.20821 37.7601 6.2964 37.9012 6.38458C37.9365 6.40222 37.9541 6.41985 37.9894 6.43749C38.1129 6.52567 38.2363 6.61386 38.3598 6.70204C38.395 6.71968 38.4303 6.75495 38.4656 6.77259C38.5714 6.86077 38.6949 6.94895 38.8007 7.03714C38.836 7.07241 38.8889 7.10768 38.9241 7.12532C39.03 7.19587 39.1181 7.28405 39.2063 7.3546C39.2592 7.40751 39.3121 7.44278 39.3651 7.49569C39.4356 7.5486 39.4885 7.60151 39.5591 7.65442C40.3703 8.34225 41.1464 9.08299 41.8518 9.87664C41.8518 9.87664 41.8518 9.87664 41.8342 9.87664C45.1146 13.5274 47.2134 18.2541 47.5661 23.4745C47.5661 23.4922 47.5661 23.5098 47.5661 23.5274C47.5838 23.7391 47.5838 23.9684 47.6014 24.18C47.6014 24.2153 47.6014 24.2329 47.6014 24.2682C47.6014 24.4975 47.619 24.7267 47.619 24.9736V24.9913C47.619 24.9913 47.619 24.9913 47.619 25.0089C47.6014 37.4781 37.4779 47.6015 24.9912 47.6015Z" fill="currentColor"/>
    </svg>

)
