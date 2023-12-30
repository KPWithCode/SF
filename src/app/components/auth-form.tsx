"use client";
import { Auth } from "@supabase/auth-ui-react";
import {
  ThemeSupa,
  ThemeMinimal,
  ThemeVariables,
  darkThemes,
} from "@supabase/auth-ui-shared";
import { supabaseClient } from "../auth/supabase";

// import { Database } from './database.types'

export default function AuthForm() {
  return (
    <div className="border border-gray-300 p-8 rounded-lg">
      <Auth
        supabaseClient={supabaseClient}
        view="magic_link"
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "blue",
                brandAccent: "darkBlue",
              },
            },
          },
        }}
        theme="dark"
        showLinks={false}
        providers={["google"]}
        // @ts-ignore
        // socialLayout="icons"
        // redirectTo="http://localhost:3000/auth/callback"
        redirectTo="http://localhost:3000"
      />
    </div>
  );
}
