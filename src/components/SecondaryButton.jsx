import { Box, Button } from "@mui/material"

const SecondaryButton = ({ href, title }) => {
    return (
        <Button
            href={href}
            title={title}
            target="__blank"
            sx={{
                width: 200,
                outline: "1px solid",
                '&:hover': {
                    transition: "all 1s ease",
                    '&:span': {
                        transition: "all 1s ease",
                        transform: "translateX(20px)",
                    }
                }
            }}>
            Conocé más
            <Box ml={1} component="span" sx={{ fontWeight: 600 }}>
                &gt;
            </Box>
        </Button>
    )
}

export default SecondaryButton;