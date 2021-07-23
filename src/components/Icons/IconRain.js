import React from 'react'

const SvgRain = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 64 64'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__a'
          x1={27.5}
          y1={17.21}
          x2={36.5}
          y2={32.79}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopColor='#d4d7dd' />
          <stop offset={0.45} stopColor='#d4d7dd' />
          <stop offset={1} stopColor='#bec1c6' />
        </linearGradient>
        <linearGradient
          id='prefix__b'
          y1={24.21}
          y2={39.79}
          xlinkHref='#prefix__a'
        />
        <linearGradient
          id='prefix__c'
          y1={31.21}
          y2={46.79}
          xlinkHref='#prefix__a'
        />
      </defs>
      <path
        fill='none'
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={3}
        stroke='url(#prefix__a)'
        d='M17 25h30'
      >
        <animateTransform
          attributeName='transform'
          type='translate'
          values='-4 0; 4 0; -4 0'
          dur='5s'
          begin='0s'
          repeatCount='indefinite'
        />
      </path>
      <path
        fill='none'
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={3}
        stroke='url(#prefix__b)'
        d='M17 32h30'
      >
        <animateTransform
          attributeName='transform'
          type='translate'
          values='-3 0; 3 0; -3 0'
          dur='5s'
          begin='-2s'
          repeatCount='indefinite'
        />
      </path>
      <path
        fill='none'
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={3}
        stroke='url(#prefix__c)'
        d='M17 39h30'
      >
        <animateTransform
          attributeName='transform'
          type='translate'
          values='-4 0; 4 0; -4 0'
          dur='5s'
          begin='-4s'
          repeatCount='indefinite'
        />
      </path>
    </svg>
  )
}

export default SvgRain
