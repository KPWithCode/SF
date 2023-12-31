import { supabaseClient } from "./supabase";
import { createUserInDatabase, userExistsInDatabase } from "./user";

export async function signInWithEmail(email: string) {
    try {
      const { data, error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: 'https://localhost:3000',
        },
      });
  
      if (error) {
        throw new Error(`Magic link sign-in error: ${error.message}`);
      } else {
        console.log('Magic link sent successfully!');
      }
    } catch (error) {
      console.error(error);
    }
  }
  export const getSession = async () => {
    try {
      const { data } = await supabaseClient.auth.getSession();
  
      // Check if session is not null
      if (data && data.session) {
        const { access_token, refresh_token } = data.session;
        
        const userId = data.session.user.id;
        const email = data.session.user?.email;
        const display_name = data.session.user.user_metadata?.name;

        const userExists = await userExistsInDatabase(userId);
        if (!userExists) {
          // Create a user record in the database
          await createUserInDatabase(userId, email, display_name);
        }
  
        // If session exists, set it
        await setSession(access_token, refresh_token);
        // Return the session
        return data.session;
      } else {
        console.log('User is not authenticated');
        return null;
      }
    } catch (error) {
      console.log('Error getting session:', error);
      return null;
    }
    // const { data: {session}} = await supabaseClient.auth.getSession()
   
    // const { access_token, refresh_token} = session;

    // await setSession(access_token, refresh_token)
    // return session
  }

export async function refreshSession() {
    const { data: {session}} = await supabaseClient.auth.getSession()
    console.log({session})
    return session
}

export async function setSession(access_token: string, refresh_token: string) {
  const { data, error} = await supabaseClient.auth.setSession({
    access_token,
    refresh_token
  })
  return true
}

export async function signOut() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error('Sign-out error:', error);
  } else {
    window.location.href = 'http://localhost:3000';
    console.log('User signed out successfully!');
  }
}

export async function resetPasswordForEmail(email: string) {
  try {
    const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email);

    if (error) {
      throw new Error(`Password reset error: ${error.message}`);
    } else {
      console.log('Password reset email sent successfully!');
    }
  } catch (error) {
    console.error(error);
  }
}
