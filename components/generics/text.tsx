type TextProps = {
    phrase: string;
}
export const Text = ({ phrase }: TextProps) => {
    return (
        <p className='w-full text-base text-gray-400'>
            {phrase}
        </p>
    )
}