import { Session } from "@supabase/supabase-js";
import {
  supabase,
  signOut,
  getPageLoads,
  getUniquePageLoads,
  getDailyLoads,
} from "..//utils/supabase";
import { useState, useEffect } from "react";
import Auth from "../components/Auth";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
// import { body } from "../assets/styles/pageWrapper"; // sett inn styles som variabel, hvis nødndvendig
import Footer from "../components/Footer";
// import { colors } from "../assets/styles/colors"; // sett inn farger som variabler
import DailyGraph from "../components/DailyGraph";

export interface DailyLoads {
  created_at: string;
  value_count: number;
}

export default function CMS() {
  const [session, setSession] = useState<Session | null>(null);
  const [pageLoads, setPageLoads] = useState<number>();
  const [uniquePageLoads, setUniquePageLoads] = useState<number>();
  const [dailyLoads, setDailyLoads] = useState<DailyLoads[]>();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    getPageLoads(setPageLoads);
    getUniquePageLoads(setUniquePageLoads);
    getDailyLoads(setDailyLoads);
  }, []);

  const formatDate = (date: string) => {
    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "mai",
      "jun",
      "jul",
      "aug",
      "sep",
      "okt",
      "nov",
      "des",
    ];
    const dateObj = {
      day: date.slice(-2),
      month: date.slice(5, 7),
      year: date.slice(0, 4),
    };
    switch (dateObj.month) {
      case "01":
        dateObj.month = months[0];
        break;
      case "02":
        dateObj.month = months[1];
        break;
      case "03":
        dateObj.month = months[2];
        break;
      case "04":
        dateObj.month = months[3];
        break;
      case "05":
        dateObj.month = months[4];
        break;
      case "06":
        dateObj.month = months[5];
        break;
      case "07":
        dateObj.month = months[6];
        break;
      case "08":
        dateObj.month = months[7];
        break;
      case "09":
        dateObj.month = months[8];
        break;
      case "10":
        dateObj.month = months[9];
        break;
      case "11":
        dateObj.month = months[10];
        break;
      case "12":
        dateObj.month = months[11];
        break;
    }

    const dateStr = `${dateObj.day}. ${dateObj.month} - ${dateObj.year}`;
    return dateStr;
  };

  const loadsToDay = dailyLoads ? dailyLoads[0].value_count : 0;

  // const container = {
  //   display: "flex",
  //   flexDirection: { base: "column", md: "row" },
  //   alignItems: "space-between",
  //   maxWidth: "1200px",
  //   height: "auto",
  //   margin: "100px auto",
  //   padding: "0 0px",
  // };
  // const left = {
  //   display: "flex",
  //   flexDirection: "column",
  //   width: { base: "100%", md: "50%" },
  //   padding: "10px",
  //   flexShrink: 1,
  // };
  // const right = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "start",
  //   width: { base: "100%", md: "50%" },
  //   padding: "20px",
  //   margin: "10px",
  //   background: `linear-gradient(#c9bff5,  #c9bff5)`,
  //   borderRadius: "30px",
  //   gap: "20px",
  //   overflow: "auto",
  //   height: "700px",
  // };

  // const text = {
  //   fontSize: "3xl",
  //   padding: "0 0 40px 0",
  // };
  // const daily = {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   fontSize: "3xl",
  //   width: "100%",
  //   background: "black",
  //   padding: "8px",
  //   borderRadius: "10px",
  // };
  return (
    <>
      {(!session || !session.user) && <Auth />}
      {session && session.user && (
        <Box>
          <Box>
            <Box>
              <Heading>Sidelastninger</Heading>
              <Text>{pageLoads}</Text>
              <Heading>Unike Sidelastinger</Heading>
              <Text>{uniquePageLoads ?? 0}</Text>

              <Heading>Sidelastninger i dag</Heading>
              <Text>{loadsToDay}</Text>
            </Box>
            <Box>
              {dailyLoads?.map((day) => {
                return (
                  <Box key={day.created_at}>
                    <Text fontWeight={"700"} padding={"0 8px 0 8px"}>
                      {formatDate(day.created_at)}
                    </Text>
                    <Text padding={"0 8px 0 8px"}>{day.value_count}</Text>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box overflow={"auto"}>
            {dailyLoads && <DailyGraph dailyLoads={dailyLoads} />}
          </Box>
          <Box maxWidth={"1200px"} margin={"0 auto"}>
            <Button size="sm" onClick={signOut} width={"10rem"} margin="20px">
              Logg av
            </Button>
          </Box>
          <Footer />
        </Box>
      )}
    </>
  );
}
