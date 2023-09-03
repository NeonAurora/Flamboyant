import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

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
              marginTop: "10%",
            }}
          >
            <Box sx={{ maxWidth: "40%" }}>
              <Typography variant="h4">
                Guiding you through every stage of the software development
                lifecycle, from innovative design ideas to robust testing
                strategies and seamless deployment plans.
              </Typography>
            </Box>
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
            {/* First Header Box */}
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4, // Adding space between the explanation and points
                marginTop: "15%",
              }}
            >
              {/* Wrap the explanation in another box */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center", // Horizontally center-align the text
                  maxWidth: "40%", // Limiting the width
                }}
              >
                <Typography variant="h4">
                  Our design team excels in innovation and creativity. Together,
                  we bring your ideas to life, making sure every design is
                  unique and impactful.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  gap: 2, // Adding space between points
                }}
              >
                {[
                  "Innovative approach to design",
                  "User-centered experience",
                  "Attention to detail",
                ].map((point, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1, // Adding space between icon and text
                    }}
                  >
                    <ArrowForwardIos
                      sx={{
                        width: "1.5em", // Adjust icon width
                        height: "1.5em", // Adjust icon height
                      }}
                    />{" "}
                    {/* Right-facing arrow icon */}
                    <Typography variant="body1" sx={{ fontSize: "3em" }}>
                      {point}
                    </Typography>{" "}
                    {/* Larger font size */}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Second Header Box */}
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4, // Adding space between the explanation and points
                marginTop: "15%",
              }}
            >
              {/* Wrap the explanation in another box */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center", // Horizontally center-align the text
                  maxWidth: "40%", // Limiting the width
                }}
              >
                <Typography variant="h4">
                  Our testing strategy focuses on rigor and comprehensiveness.
                  We ensure that every line of code meets the highest quality
                  standards, minimizing risks and enhancing performance.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  gap: 2, // Adding space between points
                }}
              >
                {[
                  "Comprehensive test coverage",
                  "Risk mitigation through testing",
                  "Performance optimization",
                ].map((point, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1, // Adding space between icon and text
                    }}
                  >
                    <ArrowForwardIos
                      sx={{
                        width: "1.5em", // Adjust icon width
                        height: "1.5em", // Adjust icon height
                      }}
                    />{" "}
                    {/* Right-facing arrow icon */}
                    <Typography variant="body1" sx={{ fontSize: "3em" }}>
                      {point}
                    </Typography>{" "}
                    {/* Larger font size */}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Third Header Box */}
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4, // Adding space between the explanation and points
                marginTop: "15%",
              }}
            >
              {/* Wrap the explanation in another box */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center", // Horizontally center-align the text
                  maxWidth: "40%", // Limiting the width
                }}
              >
                <Typography variant="h4">
                  Our deployment plan is meticulously designed for scalability
                  and resilience. With our approach, your application is
                  guaranteed to run seamlessly across multiple environments.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  gap: 2, // Adding space between points
                }}
              >
                {[
                  "Scalability as a priority",
                  "Multi-environment support",
                  "Zero-downtime deployments",
                ].map((point, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1, // Adding space between icon and text
                    }}
                  >
                    <ArrowForwardIos
                      sx={{
                        width: "1.5em", // Adjust icon width
                        height: "1.5em", // Adjust icon height
                      }}
                    />{" "}
                    {/* Right-facing arrow icon */}
                    <Typography variant="body1" sx={{ fontSize: "3em" }}>
                      {point}
                    </Typography>{" "}
                    {/* Larger font size */}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ParentBox;
