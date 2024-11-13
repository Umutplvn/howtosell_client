import { Box, Button, Typography,useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import underline1 from "../assets/underline1.svg";
import dotBg from "../assets/dot-pattern.svg";
import Vector from "../assets/Vector.svg";
import Header from "../components/Header";
import commentDesktop from '../assets/clientComments/desktopClient.png'
import commentMobile from '../assets/clientComments/mobileClient.jpg'

const Main = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return (
    <Box
      sx={{
        width: "100wh",
        overflow: "scroll",
        
      }}
    >
      <Box
        sx={{
          height: "100vh",
          m: "auto",
        }}
      >
        {/* HEADER */}
<Header/>
        {/* Main Text */}
        <Box
          sx={{
            mt: { xs: "2rem", sm: "3rem" },
            pr: { xs: "0.5rem", sm: "0.5rem" },
            pl: { xs: "0.5rem", sm: "0.5rem" },

            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontFamily: "Inter",
              fontOpticalSizing: "auto",
              fontStyle: "normal",
              fontSize: { xs: "1.5rem", sm: "1.8rem" },
              fontWeight: "600",
              display: "block",
              maxWidth: "600px",
            }}
          >
            We help{" "}
            <Typography
              component={"strong"}
              sx={{
                fontFamily: "Inter",
                fontOpticalSizing: "auto",
                fontStyle: "normal",
                fontSize: { xs: "1.5rem", sm: "1.8rem" },
                fontWeight: "600",
                backgroundColor: "#BAD7FB",
                textAlign: "center",
              }}
            >
              Entrepreneurs & Salespeople
            </Typography>{" "}
            Double Their Sales
            <Typography
              component={"strong"}
              sx={{
                fontFamily: "Inter",
                fontOpticalSizing: "auto",
                fontStyle: "normal",
                fontSize: { xs: "1.5rem", sm: "1.8rem" },
                fontWeight: "600",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              {" "}
              Without{" "}
            </Typography>
            Pushy Tactics
          </Typography>

          <Box
          sx={{ pr: { xs: "0.5rem", sm: "0.5rem" },
          pl: { xs: "0.5rem", sm: "0.5rem" },
}}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontOpticalSizing: "auto",
                fontStyle: "normal",
                fontSize: "1.1rem",
                cursor: "pointer",
                fontWeight: "300",
                textAlign: "center",
                mt: "2rem",
                maxWidth: "600px",
              }}
            >
              Drive sales growth with strategies that elevate your team, delight
              your clients, and make your life easier—no pressure, pure results.
            </Typography>
          </Box>
        </Box>
        {/* Colorful Geo Shapes */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mb: { xs: "3rem", sm: "4rem" },
            mt: { xs: "1.5rem", sm: "3rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              mt: "3rem",
              mb: "3rem",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "0.5rem",
                  alignItems: "center",
                  maxWidth: { xs: "5rem", sm: "8rem", md: "12rem" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "5rem", sm: "8rem", md: "9rem" },
                    height: { xs: "5rem", sm: "8rem", md: "9rem" },
                    borderRadius: "50%",
                    backgroundColor: "#DF2523",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                    fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                    height: "2.5rem",
                    textAlign: "center",
                  }}
                >
                  Sales Plateaus <br /> Holding You Back
                </Typography>
              </Box>
              {/* Straight Line ------ */}
              <Box
                sx={{
                  width: { xs: "2rem", sm: "3rem", md: "8rem" },
                  height: "2px",
                  backgroundColor: "black",
                  margin: { xs: "33% 0.5rem", md: "23% 0.5rem" },
                }}
              />
            </Box>

            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "0.5rem",
                  alignItems: "center",
                  maxWidth: { xs: "5rem", sm: "8rem", md: "12rem" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "5rem", sm: "8rem", md: "9rem" },
                    height: { xs: "5rem", sm: "8rem", md: "9rem" },
                    backgroundColor: "#24A155",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                    fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                    height: "2.5rem",
                    textAlign: "center",
                  }}
                >
                  Our Proven Sales Acceleration Method{" "}
                </Typography>
              </Box>

              {/* Horizontal Arrow */}
              <Box
                sx={{
                  display: "flex",
                  margin: { xs: "33% 0.5rem", md: "23% 0.5rem" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "2rem", sm: "3rem", md: "8rem" },
                    height: "2px",
                    backgroundColor: "black",
                  }}
                />

                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                    borderLeft: "10px solid black",
                    transform: "translateY(-3.5px)",
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "center",
                maxWidth: { xs: "5rem", sm: "8rem", md: "12rem" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "5rem", sm: "8rem", md: "9rem" },
                  height: { xs: "5rem", sm: "8rem", md: "9rem" },
                  borderRadius: "50%",
                  backgroundColor: "#3281EE",

                }}
              />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontOpticalSizing: "auto",
                  fontStyle: "normal",
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
                  height: "2.5rem",
                  textAlign: "center",
                }}
              >
                Doubling Your Revenue{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: "5rem" }}>
          {/* Apply For Free Consultation Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0171E2",
              borderRadius: "2rem",
              height: "2.5rem",
              fontWeight: "400",
              fontFamily: "Inter",
              fontOpticalSizing: "auto",
              cursor: "pointer",
              fontSize: "1.02rem",
              textTransform: "capitalize",
              boxShadow: "0 0 0 0 ",
              "&:hover": {
                backgroundColor: "#0b76e1",
                boxShadow: "0 0 0 0 ",
              },
            }}
            onClick={() => navigate("/apply")}
          >
            Apply for Free Consultation
          </Button>
        </Box>
        {/* Who is this for? */}
        <Box
          sx={{
            m:"auto",
            maxWidth: "1200px",
            pr: { xs: "1rem", sm: "1.5rem" },
            pl: { xs: "1rem", sm: "1.5rem" },
            mb: "5rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontOpticalSizing: "auto",
              fontWeight: 700,
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            Who is this for?
          </Typography>
          <Box sx={{ mt: "-0.8rem", width: { xs: "10rem", sm: "12rem" }, }}>
            <img src={underline1} style={{ width: "100%" }} />
          </Box>

          <Box sx={{ mt: "1rem" }}>
            <Typography
              sx={{
                fontFamily: "Sen",
                fontSize: "1rem",
                color: "#717171",
                fontWeight: "300",
                display: "block",
                mb: "0.5rem",
              }}
            >
              <Typography
                component="strong"
                sx={{
                  fontFamily: "Sen",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Entrepreneurs:
              </Typography>
              {' '}That want their sales team to consistently hit and exceed their
              targets.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sen",
                fontSize: "1rem",
                color: "#717171",
                fontWeight: "300",
                display: "block",
                mb: "0.5rem",
              }}
            >
              <Typography
                component="strong"
                sx={{
                  fontFamily: "Sen",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Sales Leaders:
              </Typography>
             {' '} Seeking expert support to maximize performance for their Sales
              Team.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sen",
                fontSize: "1rem",
                color: "#717171",
                fontWeight: "300",
                display: "block",
                mb: "0.5rem",
              }}
            >
              <Typography
                component="strong"
                sx={{
                  fontFamily: "Sen",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
              {' '}  Sales Professionals: 
              </Typography>
              Looking to elevate their skills and close more deals.
            </Typography>
          </Box>
        </Box>
        {/* What People Are Saying?  */}
        <Box
        
          sx={{
            
            pl: { xs: "1rem", sm: "1.5rem" },
            pr: { xs: "1rem", sm: "1.5rem", backgroundColor: "#F6F7FA" },
            pb:{xs:"4rem", l:"8rem"}
          }}
        >
          <Box sx={{ m:"auto",
            maxWidth: "1200px"}}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontOpticalSizing: "auto",
              fontWeight: 700,
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              pt: "5rem",
            }}
          >
            What People Are Saying
          </Typography>
          <Box sx={{ mt: "-0.8rem", width: { xs: "15rem", sm: "18rem" } }}>
            <img src={underline1} style={{ width: "100%" }} />
          </Box>

          <Box >
            <Box
              sx={{
                backgroundImage: `url(${dotBg})`,
                p: "0 0 1.5rem 0",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: {xs:"bottom", sm:"left"},
                transform: "translateX(-20px)",
                mt:"1rem"
                
              }}
            >
              <Box  sx={{border:"2px solid black", backgroundColor:"white", p:"2rem",  transform:"translateX(20px)",
            }}> 
                <img         src={isMobile ? commentMobile : commentDesktop}
 alt="" style={{ width: "80%", height: "auto", maxHeight: "90%" }}/>
              </Box>

            </Box>
          </Box>

          </Box>
        </Box>
        {/* How it Works? */}
        <Box
          sx={{
            m:"auto",
            maxWidth: "1200px",
            pl: { xs: "1rem", sm: "1.5rem" },
            pr: { xs: "1rem", sm: "1.5rem" },
            mb: "5rem",
            mt: "5rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontOpticalSizing: "auto",
              fontWeight: 700,
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            How it Works?
          </Typography>
          <Box sx={{ mt: "-0.8rem", width: { xs: "9rem", sm: "11rem" } }}>
            <img src={underline1} style={{ width: "100%" }} />
          </Box>

          <Typography
            sx={{
              mt: "1rem",
              fontFamily: "Sen",
              fontSize: "1rem",
              color: "#717171",
            }}
          >
            We help you to double your sales and give you everything you need to
            achieve this transformation:
          </Typography>

          <Box sx={{ mt: "1rem" }}>
            <Typography
              sx={{
                fontFamily: "Sen",
                fontSize: "1rem",
                color: "#717171",
                fontWeight: "300",
                display: "block",
                mb: "0.5rem",
              }}
            >
              <Typography
                component="strong"
                sx={{
                  fontFamily: "Sen",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Custom plan:
              </Typography>
              {' '}1-on-1 onboarding session with Babar to map out your plan for the
              year.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sen",
                fontSize: "1rem",
                color: "#717171",
                fontWeight: "300",
                display: "block",
                mb: "0.5rem",
              }}
            >
              <Typography
                component="strong"
                sx={{
                  fontFamily: "Sen",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Tools:
              </Typography>
            {' '}  Get all the tools required to build, test, maintain, and optimize
              all sales systems.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sen",
                fontSize: "1rem",
                color: "#717171",
                fontWeight: "300",
                display: "block",
                mb: "0.5rem",
              }}
            >
              <Typography
                component="strong"
                sx={{
                  fontFamily: "Sen",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Coaching:
              </Typography>
            {' '}  Weekly call on Zoom where you can ask Babar questions live.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sen",
                fontSize: "1rem",
                color: "#717171",
                fontWeight: "300",
                display: "block",
                mb: "0.5rem",
              }}
            >
              <Typography
                component="strong"
                sx={{
                  fontFamily: "Sen",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Accountability:
              </Typography>
             {' '} Quarterly check-in calls from your success coach to hold you
              accountable.{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sen",
                fontSize: "1rem",
                color: "#717171",
                fontWeight: "300",
                display: "block",
                mb: "0.5rem",
              }}
            >
              <Typography
                component="strong"
                sx={{
                  fontFamily: "Sen",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Support:
              </Typography>
             {' '} Get 24/7 support via the community or email/chat/calls with your
              success coach.{" "}
            </Typography>
          </Box>
        </Box>

        {/* How to get Started */}
        <Box
    sx={{
      pl: { xs: "1rem", sm: "1.5rem" },
      pr: { xs: "1rem", sm: "1.5rem" },
      pt: "5rem",  
      pb: "3rem",
      backgroundImage: `url(${Vector})`,
      backgroundColor: "#F6F7FA",
      backgroundRepeat: "repeat",
      backgroundSize: "auto",
      backgroundPosition:"cover",
    }}
        >
          <Box sx={{ m:"auto",
            maxWidth: "1200px"}}
            >

          <Typography
            sx={{
              fontFamily: "Inter",
              fontOpticalSizing: "auto",
              fontWeight: 700,
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            How to get started
          </Typography>
          <Box sx={{ mt: "-0.8rem", width: { xs: "12rem", sm: "15rem" }, mb:"1rem" }}>
            <img src={underline1} style={{ width: "100%" }} />
          </Box>

          <Typography
            sx={{
              fontFamily: "Sen",
              fontSize: "1rem",
              color: "#717171",
              fontWeight: "300",
              display: "block",
              mb: "0.5rem",
            }}
          >
            If you’re a{" "}
            <Typography
              component="strong"
              sx={{
                fontFamily: "Sen",
                fontSize: "1rem",
                color: "black",
                fontWeight: "600",
                minWidth: "8.5rem",
                display: "inline-block",
              }}
            >
              Business Owner or a Sales Leader
            </Typography>{" "}
            aiming to double your sales and elevate your salespeople’s skills to
            the next level, the next move is yours.{" "}
            <Typography
              component="strong"
              sx={{
                fontFamily: "Sen",
                fontSize: "1rem",
                color: "black",
                fontWeight: "600",
                minWidth: "8.5rem",
                display: "inline-block",
              }}
            >
              Click the button below
            </Typography>{" "}
            to schedule your free initial consultation with our team. We’ll show
            you exactly how our proven sales training can ignite explosive
            growth in your business! Opportunities like this don't wait—neither
            should you :)
          </Typography>

          {/* Apply For Free Consultation Button */}
        <Box sx={{ display: "flex", justifyContent: "center", m: "4rem 0 3rem 0" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0171E2",
              borderRadius: "2rem",
              height: "2.5rem",
              fontWeight: "400",
              fontFamily: "Inter",
              fontOpticalSizing: "auto",
              cursor: "pointer",
              fontSize: "1.02rem",
              textTransform: "capitalize",
              boxShadow: "0 0 0 0 ",
              "&:hover": {
                backgroundColor: "#0b76e1",
                boxShadow: "0 0 0 0 ",
              },
            }}
            onClick={() => navigate("/apply")}
          >
            Apply for Free Consultation
          </Button>
        </Box>
          </Box>


        </Box>

          
        <Footer />
      </Box>
    </Box>
  );
};

export default Main;