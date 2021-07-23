import React from 'react'

const SvgFewClouds = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' {...props}>
      <defs>
        <linearGradient
          id='prefix__a'
          x1={16.5}
          y1={19.67}
          x2={21.5}
          y2={28.33}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopColor='#fbbf24' />
          <stop offset={0.45} stopColor='#fbbf24' />
          <stop offset={1} stopColor='#f59e0b' />
        </linearGradient>
        <linearGradient
          id='prefix__b'
          x1={40.76}
          y1={23}
          x2={50.83}
          y2={40.46}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopColor='#9ca3af' />
          <stop offset={0.45} stopColor='#9ca3af' />
          <stop offset={1} stopColor='#6b7280' />
        </linearGradient>
        <linearGradient
          id='prefix__c'
          x1={22.56}
          y1={21.96}
          x2={39.2}
          y2={50.8}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopColor='#f3f7fe' />
          <stop offset={0.45} stopColor='#f3f7fe' />
          <stop offset={1} stopColor='#deeafb' />
        </linearGradient>
      </defs>
      <circle
        cx={19}
        cy={24}
        r={5}
        stroke='#f8af18'
        strokeMiterlimit={10}
        strokeWidth={0.5}
        fill='url(#prefix__a)'
      />
      <path
        d='M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17'
        fill='none'
        stroke='#fbbf24'
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          values='0 19 24; 360 19 24'
          dur='45s'
          repeatCount='indefinite'
        />
      </path>
      <path
        d='M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z'
        stroke='#848b98'
        strokeMiterlimit={10}
        strokeWidth={0.5}
        fill='url(#prefix__b)'
      >
        <animateTransform
          attributeName='transform'
          type='translate'
          values='-2.1 0; 2.1 0; -2.1 0'
          dur='7s'
          repeatCount='indefinite'
        />
      </path>
      <path
        d='M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z'
        stroke='#e6effc'
        strokeMiterlimit={10}
        strokeWidth={0.5}
        fill='url(#prefix__c)'
      >
        <animateTransform
          attributeName='transform'
          type='translate'
          values='-3 0; 3 0; -3 0'
          dur='7s'
          repeatCount='indefinite'
        />
      </path>
    </svg>
  )
}

export default SvgFewClouds