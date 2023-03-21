import { SxProps } from "@mui/material"
import colors from "../../utils/colors"



const styles : Record<any, SxProps> = {
    navbarMain:{
        display: "flex",
        pr:0,
    },
    appbar:{
        backgroundColor:colors.grayDark,
    },
    logo:{
        height: { xs: 30, sm: 80, md: 80 },
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
        color: colors.white,
        textTransform:"uppercase",
        fontSize:"1.25rem",
    },
    logoText2:{
        color: colors.white,
        fontSize:"0.75rem",
    },
    navItems:{
        display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
        width:"60%",
        mr:0,
        pr:0,
        flexDirection:"row",
        justifyContent:"end"
    },
    navItem:{
        textTransform:"capitalize",
        ml: 4,
        fontSize: "1.25rem",
        fontWeight: "200",
        color: colors.white,
        mixBlendMode: "difference",
        textAlign:"center"
    },
    navItemSelected:{
        border:'solid',
        borderColor:colors.orange,
        borderWidth:"1px",
        textTransform:"capitalize",
        ml: 4,
        fontSize: "1.25rem",
        fontWeight: "200",
        color: colors.orange,
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