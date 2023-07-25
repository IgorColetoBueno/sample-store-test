import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react"
import { twJoin } from "tailwind-merge"

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{

}

const Button = ({children, className, ...rest}: PropsWithChildren<ButtonProps>) => {
return <button {...rest} className={twJoin(className, 'py-button rounded-lg button text-button-text')}>{children}</button>
}

export default Button