import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './slider.css'

const pages = [
  ({ style }) => <animated.div style={{ ...style, backgroundImage: "url(" + "https://www.leguesswho.nl/media/news/Metz1.jpg" + ")" }}><span className="first">Metz</span></animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage: "url(" + "https://s23527.pcdn.co/wp-content/uploads/2018/08/omar-z-robles-jump.jpg.optimal.jpg" + ")" }}> <span className="first"> Street Ballet </span> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage: "url(" + "https://www.robertvanderree.com/wp-content/uploads/2014/12/ram-pr-anne-marie_jung-2018-foto-robert_van_der_ree-liggend-web.jpg" + ")" }}><span className="first">RAM</span></animated.div>,
]

export default function Slider() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

render(<Slider />, document.getElementById('root'))
