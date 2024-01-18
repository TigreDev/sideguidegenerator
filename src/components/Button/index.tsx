import classNames from 'classnames';

export type ButtonProps = React.ComponentProps<'button'> & {
    variant?: 'primary' | 'warning'
}

const variants = {
    'primary': 'rounded-[3px] shadow-md bg-yellow-200 hover:bg-yellow-400 hover:shadow-lg',
    'warning': 'rounded-[3px] shadow-md bg-red-600 hover:bg-red-500 hover:shadow-lg',
    'disabled': 'bg-gray-400 hover:bg-gray-400'
}

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
    const styles = classNames(className, {
        [variants.primary]: variant === 'primary',
        [variants.warning]: variant === 'warning',
        [variants.disabled]: !!props.disabled,

    });
    return <button className={styles} {...props} />
}