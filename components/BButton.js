


export default function BButton({children,
     padding, 
     fontSize,
     color, 
     backgroundColor,
     marginTop,
     margin,
     border,
     width
    }){

    const style = {
        padding:padding,
        fontSize:fontSize,
        color:color,
        backgroundColor:backgroundColor,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:marginTop ,
        margin: margin,
        border: border,
        width:width
     }


    return(
        <button style={style} className="rounded-[28px] text-center">{ children }</button>
    )

}