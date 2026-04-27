"use client"

export function WaveDivider({
  from = "white",
  to = "white",
  flip = false,
}: {
  from?: string
  to?: string
  flip?: boolean
}) {
  return (
    <div
      className={`relative -mt-px w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
      style={{ background: to }}
    >
      <svg
        className="relative block w-full"
        style={{ height: "clamp(40px, 6vw, 80px)" }}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z"
          fill={from}
        />
      </svg>
    </div>
  )
}

export function AnimatedWaveDivider({
  from = "white",
  to = "white",
}: {
  from?: string
  to?: string
}) {
  return (
    <div className="relative -mt-px w-full overflow-hidden leading-[0]" style={{ background: to }}>
      <svg
        className="relative block w-[200%]"
        style={{
          height: "clamp(50px, 8vw, 100px)",
          animation: "wave-move 12s linear infinite",
        }}
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 C1680,120 1920,0 2160,60 C2400,120 2640,0 2880,60 L2880,0 L0,0 Z"
          fill={from}
          opacity="0.5"
        />
        <path
          d="M0,80 C180,30 360,110 720,50 C1080,-10 1260,100 1440,70 C1620,30 1800,110 2160,50 C2520,-10 2700,100 2880,70 L2880,0 L0,0 Z"
          fill={from}
          opacity="0.3"
        />
        <path
          d="M0,40 C360,100 720,20 1080,60 C1440,100 1800,20 2160,60 C2520,100 2880,20 2880,60 L2880,0 L0,0 Z"
          fill={from}
        />
      </svg>
    </div>
  )
}
