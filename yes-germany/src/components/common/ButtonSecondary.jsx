const ButtonSecondary=(props)=>{
    const {width, text,}=props
    return <>
    <button width={width} className="btn btn-secondary">{text}</button>
    </>
}
export default ButtonSecondary;