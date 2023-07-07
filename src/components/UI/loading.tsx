export default function Loading() {
  const color = 'bg-gray-300'
  const generateAnimationClass = (index: any) => {
    const animationDelays = [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95,
    ]
    const delayIndex = index % animationDelays.length
    return `animate-pulse delay-${delayIndex}`
  }
  return (
    <div>
      <div>
        <div
          className={`${generateAnimationClass(
            -0.5,
          )} h-[42px] w-[196px] ${color}`}
        />
        <div
          className={`${generateAnimationClass(
            1,
          )} mt-8 h-[48px] w-[231px] rounded-md ${color}`}
        />
      </div>
      <div>
        <ul className="bg-gray mt-12 list-none space-y-2 pl-6">
          {[...Array(20).keys()].map((i) => (
            <li key={i}>
              <span
                className={`inline-block h-14 w-full animate-pulse ${color}`}
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '1s',
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
