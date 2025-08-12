import { DailyLoads } from "@/pages/CMS";
import { createClient } from "@supabase/supabase-js";
import { Dispatch } from "react";

const supabaseApiKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseUrl = "https://hagukythqzirlmubsyje.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseApiKey);

export const signIn = async (userEMail: string, userPassword: string) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: userEMail,
      password: userPassword,
    });
    if (error) {
      throw new Error(error.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      window.alert("Feil ved utlogging. Prøv igjen.");
      throw new Error(error.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getAboutContent = async (setStateFn: (data: unknown) => void) => {
  try {
    const { data, error } = await supabase.from("about").select();
    if (data) {
      setStateFn(data[0]);
    }
    if (error) {
      window.alert(error.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateAbout = async (
  heading: string | undefined,
  mainText: string | undefined
) => {
  try {
    const { data, error } = await supabase
      .from("about")
      .update({ heading: heading, main_text: mainText })
      .eq("id", "1")
      .select();
    if (data) {
      window.alert("Endringer Lagret.");
    }
    if (error) {
      console.log(error.message);
    }
  } catch (e) {
    console.log(e);
  }
};

export const insertPageLoad = async (id: string) => {
  const { data, error } = await supabase
    .from("page_loads_verk")
    .insert([{ uuid: String(id), created_at: new Date() }])
    .select();
  if (error) {
    console.log(error.message);
  }
  if (data) {
    return;
  }
};

export const getPageLoads = async (
  setStateFn: Dispatch<React.SetStateAction<number | undefined>>
) => {
  const { data, error } = await supabase.from("load_count_verk").select("*");
  if (data) {
    setStateFn(data[0].load_count);
  }
  if (error) {
    window.alert(error.message);
  }
};

export const getUniquePageLoads = async (
  setStateFn: Dispatch<React.SetStateAction<number | undefined>>
) => {
  const { data, error } = await supabase
    .from("unique_users_count_verk")
    .select("*");
  if (data) {
    setStateFn(data[0].distinct_user_count);
  }
  if (error) {
    window.alert(error.message);
  }
};

export const getDailyLoads = async (
  setStateFn: React.Dispatch<React.SetStateAction<DailyLoads[] | undefined>>
) => {
  const { data, error } = await supabase.from("daily_loads_verk").select("*");
  if (data) {
    console.log(data);
    setStateFn(data);
  }
  if (error) {
    window.alert(error.message);
  }
};

export const insertComment = async (
  id: string,
  comment: string,
  name: string,
  date: Date,
  verified: boolean,
  service: string
) => {
  const { data, error } = await supabase
    .from("comments")
    .insert([
      {
        uuid: id,
        comment: comment,
        name: name,
        date: date,
        verified: verified,
        service: service,
      },
    ])
    .select();
  if (error) {
    window.alert(error.message);
  }
  if (data) {
    return;
  }
};

export const getComments = async (setStateFn: (data: unknown) => void) => {
  const { data, error } = await supabase.from("comments").select("*");
  if (data) {
    setStateFn(data);
    console.log(data);
  }
  if (error) {
    window.alert(error.message);
  }
};

export const updateComment = async (
  id: number,
  comment: string,
  name: string,
  verified: boolean
) => {
  const { data, error } = await supabase
    .from("comments")
    .update({ comment: comment, name: name, verified: verified })
    .eq("id", id)
    .select();
  if (error) {
    window.alert(error.message);
  }
  if (data) {
    return;
  }
};

export const deleteComment = async (id: number) => {
  const { data, error } = await supabase
    .from("comments")
    .delete()
    .eq("id", id)
    .select();
  if (error) {
    window.alert(error.message);
  }
  if (data) {
    console.log(data);
    return;
  }
};
