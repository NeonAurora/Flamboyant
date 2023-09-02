import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";

const ParentBox = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState("Design Ideas");
  const [boxBFinishedScroll, setBoxBFinishedScroll] = useState(false);
  const parentBoxRef = useRef(null);
  const boxBRef = useRef(null);

  const handleBoxBScroll = () => {
    const boxB = boxBRef.current;
    const scrollTop = boxB.scrollTop;

    if (scrollTop < 0.5 * boxB.clientHeight) {
      setActiveSection("Design Ideas");
    } else if (scrollTop < 1.5 * boxB.clientHeight) {
      setActiveSection("Testing Strategy");
    } else {
      setActiveSection("Deployment Plan");
    }

    if (boxB.scrollTop + boxB.clientHeight >= boxB.scrollHeight) {
      setBoxBFinishedScroll(true);
      document.body.style.overflow = "auto";
      boxB.style.overflowY = "hidden";
    }
  };

  const handleScroll = () => {
    const parentBox = parentBoxRef.current.getBoundingClientRect();
    const boxB = boxBRef.current;

    if (parentBox.top <= 0 && !boxBFinishedScroll) {
      setBoxBFinishedScroll(false);
      document.body.style.overflow = "hidden";
      boxB.style.overflowY = "scroll";
      boxB.addEventListener("scroll", handleBoxBScroll);
    } else {
      boxB.removeEventListener("scroll", handleBoxBScroll);
      document.body.style.overflow = "auto";
      boxB.style.overflowY = "hidden";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      boxBRef.current?.removeEventListener("scroll", handleBoxBScroll);
    };
  }, [boxBFinishedScroll]);

  return (
    <Box sx={{ height: "300vh" }}>
      <Box ref={parentBoxRef} sx={{ height: "100vh", display: "flex" }}>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Explanation Box */}
          <Box
            sx={{
              height: "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">Some explanation text here.</Typography>
          </Box>
          <Box
            sx={{
              height: "80%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* Pointer Box */}
            <Box
              sx={{
                width: "20%",
                // Keep this box empty for now
              }}
            />
            {/* Header Box */}
            <Box
              sx={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Titles aligned to the left
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "4rem",
                  color:
                    activeSection === "Design Ideas"
                      ? theme.palette.text[400]
                      : theme.palette.primary[900],
                }}
              >
                Design Ideas
              </Typography>
              <Typography
                sx={{
                  fontSize: "4rem",
                  color:
                    activeSection === "Testing Strategy"
                      ? theme.palette.text[400]
                      : theme.palette.primary[900],
                }}
              >
                Testing Strategy
              </Typography>
              <Typography
                sx={{
                  fontSize: "4rem",
                  color:
                    activeSection === "Deployment Plan"
                      ? theme.palette.text[400]
                      : theme.palette.primary[900],
                }}
              >
                Deployment Plan
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          ref={boxBRef}
          sx={{
            width: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Vertical Bar */}
          <Box
            sx={{
              width: "0.5%",
              height: "300%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "95%",
                backgroundImage:
                  "linear-gradient(to bottom, violet, indigo, blue, green, yellow, orange, red)",
                borderRadius: 1,
              }}
            />
          </Box>
          {/* Content */}
          <Box
            sx={{
              width: "99.5%",
              height: "300vh",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">
                Our design team excels in innovation and creativity. Together,
                we bring your ideas to life.
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">
                Our testing methodologies ensure quality and reliability. We
                strive for perfection.
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">
                We ensure a smooth deployment so that your application runs
                seamlessly. Excellence is what we aim for.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ParentBox;
