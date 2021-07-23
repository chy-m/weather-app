import React from 'react'

const SvgShowerRain = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 64 64'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__b'
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
        <linearGradient
          id='prefix__a'
          x1={22.53}
          y1={42.95}
          x2={25.47}
          y2={48.05}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0} stopColor='#4286ee' />
          <stop offset={0.45} stopColor='#4286ee' />
          <stop offset={1} stopColor='#0950bc' />
        </linearGradient>
        <linearGradient
          id='prefix__c'
          x1={29.53}
          y1={42.95}
          x2={32.47}
          y2={48.05}
          xlinkHref='#prefix__a'
        />
        <linearGradient
          id='prefix__d'
          x1={36.53}
          y1={42.95}
          x2={39.47}
          y2={48.05}
          xlinkHref='#prefix__a'
        />
      </defs>
      <path
        d='M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z'
        stroke='#e6effc'
        strokeMiterlimit={10}
        strokeWidth={0.5}
        fill='url(#prefix__b)'
      />
      <path
        fill='none'
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke='url(#prefix__a)'
        d='M24.39 43.03l-.78 4.94'
      >
        <animateTransform
          attributeName='transform'
          type='translate'
          values='1 -5; -2 10'
          dur='0.7s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='opacity'
          values='0;1;1;0'
          dur='0.7s'
          repeatCount='indefinite'
        />
      </path>
      <path
        fill='none'
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke='url(#prefix__c)'
        d='M31.39 43.03l-.78 4.94'
      >
        <animateTransform
          attributeName='transform'
          begin='-0.4s'
          type='translate'
          values='1 -5; -2 10'
          dur='0.7s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='opacity'
          begin='-0.4s'
          values='0;1;1;0'
          dur='0.7s'
          repeatCount='indefinite'
        />
      </path>
      <path
        fill='none'
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke='url(#prefix__d)'
        d='M38.39 43.03l-.78 4.94'
      >
        <animateTransform
          attributeName='transform'
          begin='-0.2s'
          type='translate'
          values='1 -5; -2 10'
          dur='0.7s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='opacity'
          begin='-0.2s'
          values='0;1;1;0'
          dur='0.7s'
          repeatCount='indefinite'
        />
      </path>
    </svg>
  )
}

export default SvgShowerRain
