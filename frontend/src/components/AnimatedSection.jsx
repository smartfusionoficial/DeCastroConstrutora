import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} opacity-0 translate-y-8`
        case 'fade-down':
          return `${baseClass} opacity-0 -translate-y-8`
        case 'fade-left':
          return `${baseClass} opacity-0 translate-x-8`
        case 'fade-right':
          return `${baseClass} opacity-0 -translate-x-8`
        case 'scale':
          return `${baseClass} opacity-0 scale-95`
        case 'fade':
          return `${baseClass} opacity-0`
        default:
          return `${baseClass} opacity-0 translate-y-8`
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}

export default AnimatedSection

