const ButtonPrimary=(props)=>{
    const {width, text,}=props
    return <>
    <button width={width} className="btn btn-primary">{text}</button>
    </>
}
export default ButtonPrimary