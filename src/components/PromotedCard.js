const PromotedCard=(ResCard)=>{
    return(props)=>(
        <div>
            <label className="absolute p-1 bg-black text-white rounded-md" >Promoted</label>
            <ResCard {...props} />
        </div>
    )
}
export default PromotedCard;