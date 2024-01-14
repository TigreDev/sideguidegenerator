import classNames from 'classnames';
export type ButtonProps = React.ComponentProps<'button'> & {
    variant?: 'primary' | 'warning'
}

const variants = {
    'primary': 'rounded-[3px] shadow-md bg-yellow-200 hover:bg-yellow-400 hover:shadow-lg',
    'warning': 'rounded-[3px] shadow-md bg-red-200 hover:bg-red-400 hover:shadow-lg',
}

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
    const styles = classNames(variants[variant], className);
    return <button className={styles} {...props} />
}