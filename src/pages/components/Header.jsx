import React from "react";
export const Header = ({HeaderText, headerType}) => {
    
    const createHeader= () =>{
        switch (headerType) {
            case "h1":
                return <h1>{HeaderText}</h1>
                case "h2":
                    return <h2>{HeaderText}</h2>
                    case "h3":
                        return <h3>{HeaderText}</h3>
                        case "h4":
                            return <h4>{HeaderText}</h4>
                            case "h5":
                                return <h5>{HeaderText}</h5>
                                case "h6":
                                    return <h6>{HeaderText}</h6>
        
            default:
                return <h1>{HeaderText}</h1>
        }
    }
    return(
        createHeader()
        
    )
}