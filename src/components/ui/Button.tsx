import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'solid' | 'outline'
type ButtonTone = 'dark' | 'light'

interface BaseButtonProps {
  children: ReactNode
  href: string
  variant?: ButtonVariant
  tone?: ButtonTone
  className?: string
}

interface InternalButtonProps extends BaseButtonProps {
  external?: false
}

interface ExternalButtonProps
  extends
    BaseButtonProps,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> {
  external: true
}

type ButtonProps = InternalButtonProps | ExternalButtonProps

const baseStyles =
  'inline-flex h-12 items-center justify-center border px-8 font-body text-base transition-colors'

const variantStyles: Record<ButtonTone, Record<ButtonVariant, string>> = {
  dark: {
    solid:
      'border-white bg-white text-zinc-950 hover:border-[#A95633] hover:bg-[#A95633] hover:text-white',
    outline:
      'border-white text-white hover:border-[#A95633] hover:text-[#A95633]',
  },
  light: {
    solid:
      'border-zinc-950 bg-zinc-950 text-white hover:border-[#A95633] hover:bg-[#A95633]',
    outline:
      'border-zinc-950 text-zinc-950 hover:border-[#A95633] hover:text-[#A95633]',
  },
}

export function Button({
  children,
  href,
  variant = 'solid',
  tone = 'light',
  className = '',
  ...props
}: ButtonProps): React.JSX.Element {
  const buttonClassName =
    `${baseStyles} ${variantStyles[tone][variant]} ${className}`.trim()

  if (props.external) {
    return (
      <a
        href={href}
        target={props.target ?? '_blank'}
        rel={props.rel ?? 'noopener noreferrer'}
        className={buttonClassName}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClassName}>
      {children}
    </Link>
  )
}
