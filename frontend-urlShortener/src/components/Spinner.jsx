import React from 'react'

function Spinner({
  visible = true,
  height = 65,
  width = 65,
  color = 'red',
  strokeWidth = 5,
  animationDuration = '0.75',
  ariaLabel = 'loading',
  wrapperStyle = {},
  wrapperClass = '',
  children,
}) {
  if (!visible) return null

  return (
    <div
      style={wrapperStyle}
      className={wrapperClass}
      role="progressbar"
      aria-busy="true"
      aria-label={ariaLabel}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="spinner"
      >
        <style>{`
          @keyframes spinner-rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .spinner-circle {
            transform-origin: center;
            animation: spinner-rotate ${animationDuration}s linear infinite;
          }
        `}</style>
        <circle
          className="spinner-circle"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset="50"
        />
      </svg>
      {children}
    </div>
  )
}

export default Spinner