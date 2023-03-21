import { SxProps } from "@mui/material"
import colors from "../../utils/colors"



const styles : Record<any, SxProps> = {
    navbarMain:{
        display: "flex",
        pr:0,
    },
    appbar:{
        background: "none" 
    },
    logo:{
        height: { xs: 30, sm: 40, md: 40 },
        pl:5,
        my: 2,
    },
    logoTextContainer:{
        ml:0,
        pl:2,
        display:"flex",
        flexDirection:"column",
        alignItems:"start",
        color:"black",
    },
    logoText1:{
        
        textTransform:"uppercase",
        fontSize:"1.5rem",
    },
    navItems:{
        width:"60%",
        mr:0,
        pr:0,
        display:"flex",
        flexDirection:"row",
    },
    navItem:{
        mr: 4,
        fontSize: "1.25rem",
        fontWeight: "200",
        color: colors.black,
        mixBlendMode: "difference",
    },
    menuIcon:{
        mr: 2,
        display: { xs: "block", sm: "block", md: "none", lg: "none" },
        color: "black",
        mixBlendMode: "difference",
    },
    mobileDrawer:{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
        },
    }
}
export default styles