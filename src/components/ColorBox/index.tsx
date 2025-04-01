interface IProps {
    colorCode: string
}

const ColorBox = ({colorCode} : IProps) => {
    return(
        <span className="flex justify-center font-350 text-center my-1 rounded-sm w-20 border-1 border-zinc-950" style={{backgroundColor: colorCode}}>{colorCode}</span>
    )
}

export default ColorBox