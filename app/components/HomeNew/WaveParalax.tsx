import React from 'react'

function WaveParalax() {
    return (
        <div style={{position: 'absolute', zIndex: 10}} className='bottom-0 w-full'>
            <svg
                data-aos="fade-up" data-aos-delay="50"
                className="waves "
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use
                        xlinkHref="#gentle-wave"
                        x={48}
                        y={0}
                        fill="rgba(255,255,255,0.05)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x={48}
                        y={3}
                        fill="rgba(255,255,255,0.07)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x={48}
                        y={5}
                        fill="rgba(255,255,255,0.08)"
                    />
                    <use xlinkHref="#gentle-wave" x={48} y={7} fill="rgba(255,255,255,0.09)" />
                </g>
            </svg>
        </div>
    )
}

export default WaveParalax